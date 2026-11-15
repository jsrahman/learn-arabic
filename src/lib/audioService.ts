// Audio engine supporting Web Speech API (Arabic native phonemes),
// Web Audio API Synthesizer (harmonic cues & UI sound effects),
// and Recitation streams.

class AudioService {
  private ctx: AudioContext | null = null;
  private currentAudio: HTMLAudioElement | null = null;
  private isSpeaking = false;

  private getAudioContext(): AudioContext | null {
    if (typeof window === "undefined") return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  // Play natural Arabic speech using browser SpeechSynthesis
  public speakArabic(text: string, rate = 0.9): Promise<void> {
    return new Promise((resolve) => {
      if (typeof window === "undefined" || !("speechSynthesis" in window)) {
        this.playPhonemeChime(text);
        resolve();
        return;
      }

      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "ar-SA";
      utterance.rate = rate;
      utterance.pitch = 1.0;

      // Find an authentic Arabic voice if available
      const voices = window.speechSynthesis.getVoices();
      const arabicVoice = voices.find((v) => v.lang.startsWith("ar"));
      if (arabicVoice) {
        utterance.voice = arabicVoice;
      }

      utterance.onend = () => {
        this.isSpeaking = false;
        resolve();
      };

      utterance.onerror = () => {
        this.isSpeaking = false;
        // Fallback to synthesized harmonic resonance tone
        this.playPhonemeChime(text);
        resolve();
      };

      this.isSpeaking = true;
      window.speechSynthesis.speak(utterance);
    });
  }

  // Play harmonic frequency chime tuned to letter resonance
  public playPhonemeChime(letter: string): void {
    const ctx = this.getAudioContext();
    if (!ctx) return;

    // Map character code to pleasant musical frequencies in pentatonic scale
    const charCode = letter.charCodeAt(0) || 60;
    const baseFreq = 220 + ((charCode * 17) % 330);

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(baseFreq, now);
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.5, now + 0.12);
    osc.frequency.exponentialRampToValueAtTime(baseFreq, now + 0.35);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.2, now + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.45);
  }

  // UI Sound Effects
  public playSuccessSound(): void {
    const ctx = this.getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6 (Arpeggio)

    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);

      gain.gain.setValueAtTime(0.001, now + idx * 0.08);
      gain.gain.linearRampToValueAtTime(0.15, now + idx * 0.08 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.08 + 0.3);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 0.3);
    });
  }

  public playErrorSound(): void {
    const ctx = this.getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(160, now);
    osc.frequency.linearRampToValueAtTime(110, now + 0.25);

    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.25);
  }

  public playClickSound(): void {
    const ctx = this.getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(800, now);
    osc.frequency.exponentialRampToValueAtTime(400, now + 0.04);

    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.04);
  }

  // Play recitation audio stream / local clip directly without speech fallback
  public playRecitation(
    audioUrl: string,
    onEnded?: () => void,
    rate = 1.0,
    fallbackOrOnError?: string | ((error: unknown) => void)
  ): HTMLAudioElement {
    this.stopAudio();

    const audio = new Audio(audioUrl);
    audio.preload = "auto";
    audio.playbackRate = rate;
    this.currentAudio = audio;

    let hasStartedPlaying = false;

    audio.onplaying = () => {
      hasStartedPlaying = true;
    };

    audio.onended = () => {
      if (this.currentAudio === audio) {
        this.currentAudio = null;
      }
      if (onEnded) onEnded();
    };

    const isAbort = (err: unknown): boolean => {
      if (!err) return false;
      if (typeof err === "object") {
        const anyErr = err as Record<string, unknown>;
        if (anyErr.name === "AbortError" || anyErr.code === 20) return true;
        if (
          typeof anyErr.message === "string" &&
          (anyErr.message.includes("interrupted") || anyErr.message.includes("pause"))
        ) {
          return true;
        }
      }
      return false;
    };

    const handleError = (err: unknown) => {
      // Never trigger error if audio already started playing, if this audio was replaced, or if aborted
      if (hasStartedPlaying || this.currentAudio !== audio || isAbort(err)) {
        return;
      }

      if (audio.error && audio.error.code === 1) {
        // MEDIA_ERR_ABORTED
        return;
      }

      if (this.currentAudio === audio) {
        this.currentAudio = null;
      }

      if (typeof fallbackOrOnError === "function") {
        fallbackOrOnError(err);
      } else if (onEnded) {
        onEnded();
      }
    };

    audio.onerror = (e) => {
      // If audio already started or was aborted, ignore
      if (hasStartedPlaying || this.currentAudio !== audio) {
        return;
      }
      if (audio.error && audio.error.code === 1) {
        return;
      }
      handleError(e);
    };

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          hasStartedPlaying = true;
        })
        .catch((err) => {
          if (isAbort(err)) {
            return;
          }
          handleError(err);
        });
    }

    return audio;
  }

  public stopAudio(): void {
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
      this.currentAudio = null;
    }
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    this.isSpeaking = false;
  }
}

export const audioService = new AudioService();

