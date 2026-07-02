"use client";

import { motion } from "motion/react";

const heatmapRows = [
  { day: "Seg", values: [3, 0, 4, 2, 1, 3, 0, 4, 2, 1, 3, 0, 2] },
  { day: "Ter", values: [1, 4, 0, 3, 2, 1, 4, 0, 3, 2, 1, 4, 0] },
  { day: "Qua", values: [4, 2, 3, 0, 4, 2, 3, 1, 0, 4, 2, 1, 3] },
  { day: "Qui", values: [0, 3, 1, 4, 0, 3, 2, 4, 1, 0, 3, 2, 4] },
  { day: "Sex", values: [2, 1, 3, 0, 3, 1, 0, 2, 4, 3, 0, 3, 1] },
];

const cellBg = (level: number) => {
  const map = [
    "bg-neutral-100 dark:bg-neutral-800",
    "bg-blue-100 dark:bg-blue-900/40",
    "bg-blue-200 dark:bg-blue-700/50",
    "bg-blue-300/80 dark:bg-blue-500/60",
    "bg-blue-400/70 dark:bg-blue-400/80",
  ];
  return map[level] ?? map[0];
};

export function ResponsiveVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative flex w-full justify-center overflow-hidden px-3 py-3"
      style={{
        maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className="w-full max-w-[240px] rounded-2xl bg-white dark:bg-neutral-900 p-3.5 ring-1 ring-neutral-200/60 dark:ring-neutral-700/60 shadow-sm"
      >
        {/* Title */}
        <p className="mb-3 text-[11px] font-semibold text-neutral-800 dark:text-neutral-200">
          Cobertura de testes
        </p>

        {/* Stats row */}
        <div className="mb-3.5 flex gap-4">
          {/* Stat 1 */}
          <div>
            <p className="mb-0.5 text-[9px] leading-tight text-neutral-400 dark:text-neutral-500">
              Testes concluídos
            </p>
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                68%
              </span>
              <span className="rounded bg-neutral-100 dark:bg-neutral-800 px-1 py-px text-[9px] font-semibold text-neutral-600 dark:text-neutral-400">
                12%
              </span>
            </div>
          </div>
          {/* Stat 2 */}
          <div>
            <p className="mb-0.5 text-[9px] leading-tight text-neutral-400 dark:text-neutral-500">
              Conformidade
            </p>
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                42%
              </span>
              <span className="rounded bg-neutral-100 dark:bg-neutral-800 px-1 py-px text-[9px] font-semibold text-neutral-500 dark:text-neutral-400">
                15%
              </span>
            </div>
          </div>
        </div>

        {/* Heatmap grid */}
        <div className="flex flex-col gap-1">
          {heatmapRows.map((row, rowIdx) => (
            <div key={rowIdx} className="flex items-center gap-1.5">
              <span className="w-5 flex-shrink-0 text-[8px] text-neutral-400 dark:text-neutral-500">
                {row.day}
              </span>
              <div className="grid flex-1 grid-cols-[repeat(13,minmax(0,1fr))] gap-[3px]">
                {row.values.map((level, colIdx) => (
                  <motion.div
                    key={colIdx}
                    initial={{ opacity: 0, scale: 0.4 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.15 + rowIdx * 0.06 + colIdx * 0.02,
                      duration: 0.25,
                      ease: [0.23, 1, 0.32, 1],
                    }}
                    className={`aspect-square w-full rounded-[2px] ${cellBg(level)}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
