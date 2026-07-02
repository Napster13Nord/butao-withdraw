"use client";

import { motion } from "motion/react";
import { ArrowUp, ChevronDown, Infinity as InfinityIcon, Sparkles } from "lucide-react";

export function SeoVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative w-full overflow-hidden px-10 py-3"
    >
      <div className="relative w-full">
        <div
          className="flex flex-col gap-4"
          style={{ perspective: "100px" }}
        >
          <div style={{ transform: "rotateX(4deg)" }}>
            {/* Response card */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="relative z-10 -mb-10 ml-auto mr-4 flex max-w-[calc(100%-4rem)] flex-col gap-2.5 rounded-xl bg-white dark:bg-neutral-900 px-4 py-3 shadow-xl shadow-black/[0.1] ring-1 ring-neutral-200/60 dark:ring-neutral-700/60"
            >
              {/* Header */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.3 }}
                className="flex items-center gap-1.5"
              >
                <Sparkles className="h-3 w-3 text-blue-400" />
                <span className="text-[11px] font-medium text-neutral-900 dark:text-neutral-100">
                  Confirmação legal
                </span>
                <span className="ml-auto text-[10px] text-neutral-400 dark:text-neutral-500">
                  1.2s
                </span>
              </motion.div>

              {/* Simulated text lines */}
              <div className="flex flex-col gap-1.5">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.2, duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                  className="h-1.5 w-full origin-left rounded-full bg-neutral-200/80 dark:bg-neutral-700/80"
                />
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.3, duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                  className="h-1.5 w-[85%] origin-left rounded-full bg-neutral-200/80 dark:bg-neutral-700/80"
                />
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.4, duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                  className="h-1.5 w-[60%] origin-left rounded-full bg-neutral-200/80 dark:bg-neutral-700/80"
                />
              </div>

              {/* Confidence bar */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.3 }}
                className="flex items-center gap-2"
              >
                <div className="h-1 flex-1 overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.6, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                    className="h-full w-[96%] origin-left rounded-full bg-blue-400/60"
                  />
                </div>
                <span className="text-[10px] tabular-nums text-blue-500/80">
                  96%
                </span>
              </motion.div>
            </motion.div>

            {/* Chat input bar */}
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="overflow-hidden rounded-2xl bg-white dark:bg-neutral-900 shadow-md ring-1 ring-neutral-200/70 dark:ring-neutral-700/60"
            >
              {/* Text area */}
              <div className="flex items-center gap-1 px-4 py-3">
                <span className="text-[11px] text-neutral-400 dark:text-neutral-500">
                  Dados do cliente...
                </span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="ml-px text-[11px] leading-none text-neutral-500 dark:text-neutral-400"
                >
                  ▌
                </motion.span>
              </div>

              {/* Divider */}
              <div className="mx-3 border-t border-neutral-100 dark:border-neutral-800" />

              {/* Controls row */}
              <div className="flex items-center justify-between px-2.5 py-2">
                <div className="flex items-center gap-1">
                  <div className="flex items-center gap-1 rounded-lg bg-neutral-100 dark:bg-neutral-800 px-2 py-1 text-[10px] font-medium text-neutral-500 dark:text-neutral-400">
                    <InfinityIcon className="h-2.5 w-2.5 shrink-0" />
                    <span>Registado</span>
                  </div>
                  <div className="flex items-center gap-0.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 px-2 py-1 text-[10px] font-medium text-neutral-600 dark:text-neutral-300">
                    <span>Convidado</span>
                    <ChevronDown className="h-2.5 w-2.5 opacity-50" />
                  </div>
                </div>
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-neutral-900 dark:bg-white shadow-sm">
                  <ArrowUp className="h-3 w-3 text-white dark:text-neutral-900" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
