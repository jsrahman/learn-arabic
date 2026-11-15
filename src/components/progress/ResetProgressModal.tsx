import React from "react";
import { AlertTriangle } from "lucide-react";

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
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="max-w-md w-full rounded-3xl p-8 bg-sand-50 dark:bg-night-900 border border-rose-500/30 shadow-2xl text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-rose-500/10 text-rose-600 mx-auto flex items-center justify-center">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-sand-950 dark:text-sand-50">
            {title}
          </h2>
          <p className="text-xs text-sand-600 dark:text-sand-400 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold bg-sand-200 dark:bg-night-800 text-sand-800 dark:text-sand-200 min-h-[44px]"
          >
            {cancelText}
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="flex-1 py-2.5 px-4 rounded-xl text-xs font-bold bg-rose-600 hover:bg-rose-700 text-sand-50 shadow-md min-h-[44px]"
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};
