"use client";

import { motion } from "motion/react";
import { ArrowUp, X } from "lucide-react";

export function TemplatesVisual() {
  return (
    <div className="relative flex w-full items-center justify-center overflow-hidden py-4 px-4">
      <div className="relative flex w-full max-w-[380px] items-start justify-end gap-1">
        {/* Background faded page mockup — hidden on small cards */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 0.6, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-6 hidden w-[100px] shrink-0 rounded-xl sm:block"
        >
          {/* Placeholder image block */}
          <div className="mb-3 h-14 w-full rounded-lg bg-neutral-200/50 dark:bg-neutral-700/50" />
          {/* Placeholder text lines */}
          <div className="space-y-1.5">
            <div className="h-1.5 w-full rounded bg-neutral-200/60 dark:bg-neutral-700/60" />
            <div className="h-1.5 w-4/5 rounded bg-neutral-200/60 dark:bg-neutral-700/60" />
            <div className="h-1.5 w-3/5 rounded bg-neutral-200/50 dark:bg-neutral-700/50" />
            <div className="h-1.5 w-full rounded bg-neutral-200/40 dark:bg-neutral-700/40" />
            <div className="h-1.5 w-2/3 rounded bg-neutral-200/40 dark:bg-neutral-700/40" />
          </div>
        </motion.div>

        {/* Avatar bubble — hidden on small cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-1.5 hidden shrink-0 cursor-pointer rounded-r-full rounded-t-full p-1.5 shadow-md sm:block"
        >
          <div className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-blue-400 text-[8px] font-bold text-white ring-1 ring-white/20">
            A
          </div>
        </motion.div>

        {/* Chat notification card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="relative w-full max-w-[250px] mt-6 origin-top-left rounded-2xl bg-white dark:bg-neutral-900 shadow-lg ring-1 ring-neutral-200/60 dark:ring-neutral-700/60"
        >
          {/* Close button */}
          <button className="absolute right-1.5 top-1.5 flex h-6 w-6 items-center justify-center rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800">
            <X className="h-3 w-3 text-neutral-400 dark:text-neutral-500" />
          </button>

          {/* Message content */}
          <div className="grid grid-cols-[auto_1fr] gap-2.5 px-4 pt-4 pb-3.5">
            {/* Avatar with online dot */}
            <div className="relative mt-px">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500 text-[9px] font-semibold text-white">
                A
              </div>
              <span className="absolute -bottom-px -right-px h-2 w-2 rounded-full bg-emerald-400 ring-[1.5px] ring-white dark:ring-neutral-900" />
            </div>

            {/* Content */}
            <div>
              <div className="flex items-baseline justify-between">
                <span className="text-[13px] font-medium text-neutral-900 dark:text-neutral-100">
                  André
                </span>
                <span className="text-[10px] tabular-nums text-neutral-400 dark:text-neutral-500">
                  14:32
                </span>
              </div>
              <p className="mt-0.5 text-[13px] leading-[1.45] text-neutral-500 dark:text-neutral-400">
                A sua loja já está adequada. Botão de livre resolução instalado e e-mail legal a funcionar.
              </p>
            </div>
          </div>

          {/* Reply bar */}
          <div className="flex items-center gap-2 border-t border-neutral-100 dark:border-neutral-800 px-3 py-2.5">
            <span className="flex-1 text-[12px] text-neutral-300 dark:text-neutral-600">
              Responder...
            </span>
            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-900 dark:bg-white">
              <ArrowUp className="h-3 w-3 text-white dark:text-neutral-900" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
