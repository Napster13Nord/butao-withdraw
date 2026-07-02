"use client";

import { motion } from "motion/react";
import { Plus } from "lucide-react";

const diagonalStripes = (color: string) => ({
  backgroundImage: `repeating-linear-gradient(-45deg, ${color} 0, ${color} 1px, transparent 0, transparent 8px)`,
});

export function AiDesignVisual() {
  return (
    <div className="relative w-full overflow-hidden px-4 pt-16 pb-4">
      <div
        aria-hidden="true"
        className="grid w-full max-w-[360px] grid-cols-2 gap-2 mx-auto"
        style={{
          maskImage: "linear-gradient(to bottom, black 58%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 58%, transparent 100%)",
        }}
      >
        {/* ── In Progress column ── */}
        <div className="flex flex-col gap-2 rounded-xl border border-neutral-200 dark:border-neutral-700 p-1.5">
          <p className="px-1.5 pt-0.5 text-[10px] font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
            Em curso
          </p>

          {/* Slot 1 – raised / dragging card */}
          <div className="relative h-[108px] flex-shrink-0 rounded-xl ring-1 ring-neutral-200 dark:ring-neutral-700">
            {/* Diagonal stripe background */}
            <div
              className="absolute inset-0 opacity-[0.18]"
              style={diagonalStripes("rgb(161,161,170)")}
            />
            {/* Elevated card */}
            <motion.div
              initial={{ opacity: 0, rotate: 0, x: 0, y: 0 }}
              animate={{ opacity: 1, rotate: 3.5, x: 11, y: 11 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute inset-0 z-10 flex h-[108px] flex-col justify-between rounded-xl bg-white dark:bg-neutral-900 p-3 shadow-xl shadow-black/20 ring-1 ring-neutral-200 dark:ring-neutral-700"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-neutral-500" />
                  <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-500">
                    Urgente
                  </span>
                </div>
                <p className="text-[11px] font-semibold leading-snug text-neutral-900 dark:text-neutral-100">
                  Instalar botão de livre resolução
                </p>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 text-[6px] font-bold text-white">
                  A
                </div>
                <span className="text-[10px] text-neutral-500 dark:text-neutral-400">
                  André
                </span>
              </div>
            </motion.div>
          </div>

          {/* Slot 2 – regular filled card */}
          <div className="flex h-[108px] flex-shrink-0 flex-col justify-between rounded-xl bg-white dark:bg-neutral-900 p-3 ring-1 ring-neutral-200 dark:ring-neutral-700">
            <div className="space-y-1">
              <div className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-neutral-400" />
                <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-500">
                  A validar
                </span>
              </div>
              <p className="text-[11px] font-semibold leading-snug text-neutral-900 dark:text-neutral-100">
                Configurar e-mail legal automático
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="flex h-4 w-4 items-center justify-center rounded-full bg-neutral-300 dark:bg-neutral-600 text-[6px] font-bold text-white">
                L
              </div>
              <span className="text-[10px] text-neutral-500 dark:text-neutral-400">
                Loja
              </span>
            </div>
          </div>
        </div>

        {/* ── Ready for Review column ── */}
        <div className="flex flex-col gap-2 rounded-xl border border-neutral-200 dark:border-neutral-700 p-1.5">
          <p className="px-1.5 pt-0.5 text-[10px] font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
            Concluído
          </p>

          {/* Slot 3 – regular filled card */}
          <div className="flex h-[108px] flex-shrink-0 flex-col justify-between rounded-xl bg-white dark:bg-neutral-900 p-3 ring-1 ring-neutral-200 dark:ring-neutral-700">
            <div className="space-y-1">
              <div className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-neutral-400" />
                <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-500">
                  Feito
                </span>
              </div>
              <p className="text-[11px] font-semibold leading-snug text-neutral-900 dark:text-neutral-100">
                Fluxo em 2 passos validado
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="flex h-4 w-4 items-center justify-center rounded-full bg-neutral-600 text-[6px] font-bold text-white">
                T
              </div>
              <span className="text-[10px] text-neutral-500 dark:text-neutral-400">
                Testes
              </span>
            </div>
          </div>

          {/* Slot 4 – drop zone with + icon */}
          <div className="relative flex h-[108px] flex-shrink-0 items-center justify-center overflow-hidden rounded-xl ring-1 ring-neutral-300/40 dark:ring-neutral-600/40">
            <div
              className="absolute inset-0 opacity-[0.15]"
              style={diagonalStripes("rgb(161,161,170)")}
            />
            <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-200/60 dark:bg-neutral-700/60 ring-1 ring-neutral-300/40 dark:ring-neutral-600/40">
              <Plus className="h-4 w-4 text-neutral-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
