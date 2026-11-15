"use client";

import React, { useEffect } from "react";
import { AlertTriangle, X } from "lucide-react";

interface ResetProgressModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description: string;
  cancelText: string;
  confirmText: string;
}

export const ResetProgressModal: React.FC<ResetProgressModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
  cancelText,
  confirmText,
}) => {
  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-md w-full max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-8 bg-sand-50 dark:bg-night-900 border border-rose-500/30 shadow-2xl text-center space-y-5 sm:space-y-6 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={cancelText}
          className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 w-11 h-11 rounded-full flex items-center justify-center text-sand-500 hover:text-sand-900 dark:hover:text-sand-100 hover:bg-sand-200/60 dark:hover:bg-night-800/60 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-16 h-16 rounded-full bg-rose-500/10 text-rose-600 mx-auto flex items-center justify-center">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold text-sand-950 dark:text-sand-50">
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-sand-600 dark:text-sand-400 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex gap-3 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-sand-200 hover:bg-sand-300 dark:bg-night-800 dark:hover:bg-night-700 text-sand-800 dark:text-sand-200 min-h-[44px] flex items-center justify-center transition-colors active:scale-95"
          >
            {cancelText}
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold bg-rose-600 hover:bg-rose-700 text-sand-50 shadow-md min-h-[44px] flex items-center justify-center transition-colors active:scale-95"
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};
