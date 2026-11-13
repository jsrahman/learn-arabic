# ECC (Everything Claude Code) — Project Usage Guide

This project (**QuranPath / learn-arabic**) has ECC installed **locally** under:
- **Antigravity (IDE / Agent):** [`.agents/`](.agents/)
- **Claude Code (CLI):** [`.claude/`](.claude/)

Neither installation touches global machine settings.

---

## 1. How ECC Works in Antigravity

Antigravity automatically discovers customizations inside the local [`.agents/`](.agents/) directory.

```text
learn-arabic/
├── .agents/
│   ├── rules/       # Auto-applied coding and architectural standards
│   ├── skills/      # On-demand multi-step workflows and procedures
│   ├── agents/      # Specialized subagents for review, architecture, and debugging
│   └── workflows/   # Guided slash-command workflows
└── .claude/         # Equivalent project configuration for Claude Code CLI
```

---

## 2. Automatic Rules (Zero-Effort Background Guidance)

Rules in [`.agents/rules/`](.agents/rules/) are loaded automatically based on file type and context. You don't need to manually invoke them.

### Active Rule Sets for this Project
- **TypeScript & JavaScript** ([`typescript-coding-style.md`](.agents/rules/typescript-coding-style.md), [`typescript-patterns.md`](.agents/rules/typescript-patterns.md), [`typescript-testing.md`](.agents/rules/typescript-testing.md)): Enforces explicit API return types, proper interfaces for lesson data, avoiding `any`, and clean component typing.
- **Common Standards** ([`common-coding-style.md`](.agents/rules/common-coding-style.md), [`common-security.md`](.agents/rules/common-security.md), [`common-testing.md`](.agents/rules/common-testing.md)): Enforces KISS/YAGNI principles, input sanitization, test isolation, and clean error handling.

---

## 3. Specialized Subagents

Antigravity can delegate tasks to pre-configured specialist agents in [`.agents/agents/`](.agents/agents/).

### Recommended Subagents for QuranPath

| Subagent | Role | How to Trigger |
| :--- | :--- | :--- |
| **`react-reviewer`** | Verifies React hooks, render cycles, Next.js App Router boundaries, and UI performance | *"Use `react-reviewer` to audit our Arabic audio quiz component."* |
| **`typescript-reviewer`** | Checks type safety, schema validation (Zod), and prop types | *"Have `typescript-reviewer` inspect our lesson data types."* |
| **`a11y-architect`** | Audits WCAG 2.2 accessibility, keyboard navigation, and screen reader labels | *"Run `a11y-architect` on the letter selection grid."* |
| **`architect`** | Designs data models, state stores (Zustand), and offline caching strategies | *"Ask `architect` to design the local lesson progress storage."* |
| **`tdd-guide`** | Enforces test-first development for quizzes and letter matching logic | *"Work with `tdd-guide` to implement Harakat matching logic."* |
| **`build-error-resolver`** | Surgically diagnoses and fixes Next.js / TypeScript build errors | *"Invoke `build-error-resolver` to fix current compile errors."* |

---

## 4. Key Skills (On-Demand Workflows)

Skills in [`.agents/skills/`](.agents/skills/) give the agent specific checklists and runbooks.

### High-Value Skills for this Project

1. **`tdd-workflow`** ([`.agents/skills/tdd-workflow/SKILL.md`](.agents/skills/tdd-workflow/SKILL.md))
   - Write failing unit tests first, watch them fail, implement minimal code to pass, and refactor.
   - *Example prompt:* `"Follow tdd-workflow to create the Arabic letter transliteration helper."`

2. **`verification-loop`** ([`.agents/skills/verification-loop/SKILL.md`](.agents/skills/verification-loop/SKILL.md))
   - Runs a 6-phase quality gate: build, typecheck, lint, unit tests, security audit, and diff check.
   - *Example prompt:* `"Run verification-loop on our latest changes before we commit."`

3. **`product-lens`** ([`.agents/skills/product-lens/SKILL.md`](.agents/skills/product-lens/SKILL.md))
   - Validates feature priority, time-to-value, and user journeys against the project goals.
   - *Example prompt:* `"Use product-lens to evaluate our Level 1 quiz interaction flow."`

4. **`click-path-audit`** ([`.agents/skills/click-path-audit/SKILL.md`](.agents/skills/click-path-audit/SKILL.md))
   - Traces UI button and audio click sequences to ensure state transitions don't conflict or leave inconsistent states.
   - *Example prompt:* `"Perform a click-path-audit on the audio playback and replay controls."`

5. **`unified-memory`** ([`.agents/skills/unified-memory/SKILL.md`](.agents/skills/unified-memory/SKILL.md))
   - Maintains persistent project context, architecture decisions, and task handoffs.
   - *Example prompt:* `"Save our architectural decision about local JSON lesson storage into unified-memory."`

---

## 5. Workflows & Slash Commands

Workflows in [`.agents/workflows/`](.agents/workflows/) define structured multi-step tasks. You can run them by naming them in chat:

- **Feature Development:** `"Run feature-dev for the Level 2 letter forms lesson"`
- **Code Review:** `"Run code-review on the recent components"`
- **Plan:** `"Run plan to outline Level 3 Harakat lessons"`

---

## 6. How to Use with Claude Code CLI

If you open this directory in a terminal using Claude Code (`claude`), it automatically reads project configuration from [`.claude/`](.claude/):

- Custom rules are picked up under `.claude/rules/ecc/`
- Slash commands are available directly: `/ecc:ecc-guide`, `/ecc:configure-ecc`

---

## 7. Verifying and Managing the Setup

To verify the installation or run diagnostic health checks at any time:

```bash
# Verify health of project installs
npx --cache /tmp/.npm-cache ecc-universal@2.2.3 doctor

# View installed targets and active modules
npx --cache /tmp/.npm-cache ecc-universal@2.2.3 list-installed
```

