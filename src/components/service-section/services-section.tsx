"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";
import { DottedMapBackground, type DottedMapPin } from "@/components/ui/dotted-map-background";

import { motion } from "motion/react";

import {
  CornerDownLeft,
  Ellipsis,
  Flag,
  MessageSquare,
  Minus,
  Paperclip,
  Plus,
} from "lucide-react";
import { AnimatePresence } from "motion/react";

type CTA = { label: string; href: string };
type SeeAlsoLink = { label: string; href: string };

type ShowcaseCopy = {
  eyebrow: string;
  title: string;
  description: string;
  cta: CTA;
  seeAlsoLabel?: string;
  seeAlso?: SeeAlsoLink[];
};

type ServersItem = {
  key: string;
  title: string;
  description?: string;
};

export type ServicesSectionData = {
  vps: ShowcaseCopy & {
    mapPins?: DottedMapPin[];
  };
  hosting: ShowcaseCopy;
  servers: {
    eyebrow: string;
    title: string;
    description: string;
    items: ServersItem[];
  };
};

export type ServicesSectionProps = {
  className?: string;
  data?: Partial<ServicesSectionData>;
};

const DEFAULT_DATA: ServicesSectionData = {
  vps: {
    eyebrow: "SMART CONTEXT",
    title: "Mention Anything, Instantly",
    description:
      "Reference files, teammates, and resources directly in conversations. Our intelligent @-mention system surfaces the right context so your team never loses track of what matters.",
    cta: { label: "Get Started", href: "#" },
    seeAlsoLabel: "See also",
    seeAlso: [
      { label: "How smart mentions connect your team's knowledge.", href: "#" },
      { label: "Explore file sharing and real-time collaboration.", href: "#" },
    ],
    mapPins: [
      { lat: 40.73061, lng: -73.935242, color: "#22c55e", radius: 0.45 },
      { lat: 48.8534, lng: 2.3488, color: "#0ea5e9", radius: 0.45 },
    ],
  },
  hosting: {
    eyebrow: "AI ASSISTANT",
    title: "AI That Understands Your Work",
    description: "Summarize long threads, extract action items, and get instant answers — all powered by AI that understands your team's context.",
    cta: { label: "Get Started", href: "#" },
    seeAlsoLabel: "See also",
    seeAlso: [
      { label: "See how AI summaries save hours every week.", href: "#" },
      { label: "Learn about our multi-model AI architecture.", href: "#" },
    ],
  },
  servers: {
    eyebrow: "AI AGENTS",
    title: "Autonomous agents that handle the heavy lifting.",
    description: "Deploy intelligent agents that route tasks, coordinate across AI providers, and deliver results — all without manual intervention.",
    items: [
      {
        key: "gemini",
        title: "Gemini",
        description: "Google's multimodal model for complex reasoning, code generation, and creative tasks.",
      },
      {
        key: "chatgpt",
        title: "ChatGPT",
        description: "OpenAI's conversational model for natural language understanding and task execution.",
      },
      {
        key: "deepseek",
        title: "DeepSeek",
        description: "High-performance open model for code, math, and deep technical analysis.",
      },
    ],
  },
};

function mergeData(override?: Partial<ServicesSectionData>): ServicesSectionData {
  if (!override) return DEFAULT_DATA;
  return {
    vps: { ...DEFAULT_DATA.vps, ...(override.vps ?? {}) },
    hosting: { ...DEFAULT_DATA.hosting, ...(override.hosting ?? {}) },
    servers: {
      ...DEFAULT_DATA.servers,
      ...(override.servers ?? {}),
      items: override.servers?.items ?? DEFAULT_DATA.servers.items,
    },
  };
}

function SeeAlso({ label, links }: { label?: string; links?: SeeAlsoLink[] }) {
  if (!links?.length) return null;
  return (
    <div className="mt-8 space-y-2">
      {label ? <div className="text-sm font-medium text-foreground/80">{label}</div> : null}
      <ul className="space-y-1 text-sm text-muted-foreground">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="hover:text-foreground transition-colors">
              <span className="text-primary">↗</span> {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ServiceRow({
  reverse,
  copy,
  visual,
  delayBase = 0,
}: {
  reverse?: boolean;
  copy: ShowcaseCopy;
  visual: React.ReactNode;
  delayBase?: number;
}) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className={cn("min-w-0", reverse && "lg:order-2")}>
        <Reveal from="up" delayMs={delayBase} className="max-w-xl">
          <div className="text-xs font-medium tracking-[0.2em] text-muted-foreground">
            {copy.eyebrow}
          </div>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            {copy.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            {copy.description}
          </p>

          <SeeAlso label={copy.seeAlsoLabel} links={copy.seeAlso} />
        </Reveal>
      </div>

      <div className={cn("min-w-0", reverse && "lg:order-1")}>
        <Reveal from={reverse ? "left" : "right"} delayMs={delayBase + 80}>
          {visual}
        </Reveal>
      </div>
    </div>
  );
}

/* ---------- Visuals (Cards) ---------- */

function VpsPerformanceCard() {
  const agents = [
    { name: "Claude Agent", meta: "Route & summarize", Icon: AgentLogoIcon },
    { name: "Gemini 2.0 Flash", meta: "Google AI", Icon: GeminiSmallIcon },
    { name: "GPT-4o", meta: "OpenAI", Icon: OpenAISmallIcon },
    { name: "DeepSeek-V3", meta: "Code & analysis", Icon: DeepSeekSmallIcon },
  ];

  return (
    <div className="w-full max-w-xs">
      {/* Text input — text shortened so @ stays inline */}
      <div className="rounded-lg px-3 py-2.5 bg-white dark:bg-black text-xs ring-1 ring-border">
        <span className="text-muted-foreground">Summarize #standup, route to </span>
        <span className="relative inline-flex items-center">
          <span className="absolute -inset-x-0.5 inset-y-0 rounded bg-indigo-500/10" />
          <span className="relative text-foreground font-medium">@</span>
          <span className="absolute inset-y-0 -right-[3px] inline-block w-[1.5px] animate-pulse bg-foreground" />
        </span>
      </div>

      {/* Agent suggestions dropdown */}
      <div className="mt-1.5 overflow-hidden rounded-xl bg-white dark:bg-black shadow-lg shadow-black/[0.065] ring-1 ring-border">
        <div className="divide-y divide-border/60">
          {agents.map(({ name, meta, Icon }, i) => (
            <div
              key={name}
              className={cn(
                "flex cursor-pointer items-center gap-2 px-3 py-2 transition-colors",
                i === 0 ? "bg-foreground/[0.04]" : "hover:bg-foreground/[0.03]"
              )}
            >
              <div className="flex size-[18px] shrink-0 items-center justify-center text-muted-foreground">
                <Icon />
              </div>
              <span className="flex-1 text-xs">{name}</span>
              <span className="shrink-0 text-[10px] text-muted-foreground/60">{meta}</span>
              {i === 0 && (
                <div className="ml-1 flex shrink-0 items-center gap-0.5 rounded bg-background px-1 py-0.5 text-[9px] text-muted-foreground ring-1 ring-border">
                  <CornerDownLeft className="h-2 w-2" />
                  Tab
                </div>
              )}
            </div>
          ))}
          {/* Thread row */}
          <div className="flex cursor-pointer items-center gap-2 px-3 py-2 transition-colors hover:bg-foreground/[0.03]">
            <div className="flex size-[18px] shrink-0 items-center justify-center text-muted-foreground">
              <MessageSquare className="h-3.5 w-3.5" />
            </div>
            <span className="flex-1 text-xs text-muted-foreground">#standup · 42 msgs</span>
            <span className="shrink-0 text-[10px] text-muted-foreground/60">Thread</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-3 flex items-center justify-between">
        <span className="text-[10px] text-muted-foreground">4 agents available</span>
        <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
          <span className="rounded bg-background px-1 py-0.5 ring-1 ring-border">↑</span>
          <span className="rounded bg-background px-1 py-0.5 ring-1 ring-border">↓</span>
          to navigate
        </div>
      </div>
    </div>
  );
}

function KanbanCard() {
  return (
    <div
      aria-hidden="true"
      className="w-[320px] shrink-0 rounded-md bg-neutral-100/80 p-2 shadow-xl shadow-black/[0.065] ring-1 ring-neutral-200/60 dark:bg-neutral-900/60 dark:ring-neutral-700/60"
    >
      {/* Header */}
      <div className="mb-2 flex items-center justify-between px-2 pt-1">
        <div className="flex items-center gap-2">
          <div className="size-2 rounded-full bg-amber-500" />
          <span className="text-sm font-semibold">In Progress</span>
        </div>
        <Ellipsis className="size-4 text-muted-foreground" />
      </div>

      {/* Cards */}
      <div className="space-y-2 *:rounded">
        {/* Card 1: Agent Routing */}
        <div className="bg-white p-3 shadow shadow-black/[0.065] ring-1 ring-neutral-200/70 dark:bg-neutral-900 dark:ring-neutral-700/60">
          <div className="mb-2 flex items-start justify-between">
            <div className="text-sm font-medium">AI Agent Routing</div>
            <Flag className="size-3.5 fill-rose-500 text-rose-500" />
          </div>
          <p className="mb-3 text-xs text-muted-foreground">
            Route queries to the right AI model dynamically
          </p>
          <div className="flex items-center justify-between">
            <div className="flex -space-x-1.5">
              <div className="flex size-5 items-center justify-center overflow-hidden rounded-full bg-white ring-2 ring-white dark:ring-gray-800">
                <OpenAISmallIcon />
              </div>
            </div>
            <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
              <span className="flex items-center gap-0.5">
                <MessageSquare className="size-3" />6
              </span>
              <span className="flex items-center gap-0.5">
                <Paperclip className="size-3" />3
              </span>
            </div>
          </div>
        </div>

        {/* Card 2: Prompt Tuning */}
        <div className="bg-white p-3 shadow shadow-black/[0.065] ring-1 ring-neutral-200/70 dark:bg-neutral-900 dark:ring-neutral-700/60">
          <div className="mb-2 flex items-start justify-between">
            <div className="text-sm font-medium">Prompt Tuning</div>
            <Flag className="size-3.5 fill-amber-400 text-amber-400" />
          </div>
          <p className="mb-3 text-xs text-muted-foreground">
            Optimize system prompts for accuracy &amp; speed
          </p>
          <div className="flex items-center justify-between">
            <div className="flex -space-x-1.5">
              <div className="flex size-5 items-center justify-center overflow-hidden rounded-full bg-white ring-2 ring-white dark:ring-gray-800">
                <GeminiSmallIcon />
              </div>
            </div>
            <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
              <span className="flex items-center gap-0.5">
                <MessageSquare className="size-3" />3
              </span>
            </div>
          </div>
        </div>

        {/* Card 3: RAG Pipeline */}
        <div className="bg-white p-3 shadow shadow-black/[0.065] ring-1 ring-neutral-200/70 dark:bg-neutral-900 dark:ring-neutral-700/60">
          <div className="mb-2 flex items-start justify-between">
            <div className="text-sm font-medium">RAG Pipeline</div>
            <Flag className="size-3.5 text-muted-foreground" />
          </div>
          <p className="mb-3 text-xs text-muted-foreground">
            Build retrieval-augmented generation flow
          </p>
          <div className="flex items-center justify-between">
            <div className="flex -space-x-1.5">
              <div className="flex size-5 items-center justify-center overflow-hidden rounded-full bg-white ring-2 ring-white dark:ring-gray-800">
                <DeepSeekSmallIcon />
              </div>
            </div>
            <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
              <span className="flex items-center gap-0.5">
                <Paperclip className="size-3" />2
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AgentThreadCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="w-[148px] shrink-0 rounded-md bg-neutral-100/80 p-2 shadow-xl shadow-black/[0.065] ring-1 ring-neutral-200/60 dark:bg-neutral-900/60 dark:ring-neutral-700/60"
    >
      {/* Header */}
      <div className="mb-1.5 flex items-center gap-1.5 px-1 pt-0.5">
        <div className="size-1.5 rounded-full bg-neutral-400" />
        <span className="text-[10px] font-semibold">Thread Summary</span>
      </div>
      {/* AI-generated summary */}
      <div className="rounded bg-white p-2 shadow shadow-black/[0.065] ring-1 ring-neutral-200/70 dark:bg-neutral-900 dark:ring-neutral-700/60">
        <p className="text-[9px] leading-relaxed text-muted-foreground">
          Team agreed on async standups. Sprint velocity up 23%. Next milestone: v2 launch in Q3.
        </p>
      </div>
      {/* Key topics */}
      <div className="mt-1.5 rounded bg-white p-2 shadow shadow-black/[0.065] ring-1 ring-neutral-200/70 dark:bg-neutral-900 dark:ring-neutral-700/60">
        <div className="mb-1 text-[8px] font-medium text-muted-foreground">Key topics</div>
        <div className="flex flex-wrap gap-1">
          <span className="rounded-full bg-neutral-100 px-1.5 py-0.5 text-[8px] text-neutral-600 ring-1 ring-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:ring-neutral-700">#sprint</span>
          <span className="rounded-full bg-neutral-100 px-1.5 py-0.5 text-[8px] text-neutral-600 ring-1 ring-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:ring-neutral-700">#async</span>
          <span className="rounded-full bg-neutral-100 px-1.5 py-0.5 text-[8px] text-neutral-600 ring-1 ring-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:ring-neutral-700">#v2</span>
        </div>
      </div>
      {/* Analyzed from */}
      <div className="mt-1.5 rounded bg-white p-2 shadow shadow-black/[0.065] ring-1 ring-neutral-200/70 dark:bg-neutral-900 dark:ring-neutral-700/60">
        <div className="mb-1.5 text-[8px] font-medium text-muted-foreground">Analyzed from</div>
        <div className="space-y-1.5">
          <div className="flex items-center gap-1 text-[8px] text-muted-foreground">
            <MessageSquare className="size-2.5 shrink-0" />
            <span>#standup · 42 msgs</span>
          </div>
          <div className="flex items-center gap-1 text-[8px] text-muted-foreground">
            <MessageSquare className="size-2.5 shrink-0" />
            <span>#sprint-review · 28 msgs</span>
          </div>
          <div className="flex items-center gap-1 text-[8px] text-muted-foreground">
            <MessageSquare className="size-2.5 shrink-0" />
            <span>#product · 15 msgs</span>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="mt-1.5 px-1">
        <span className="text-[8px] text-muted-foreground/50">Generated by AI · just now</span>
      </div>
    </motion.div>
  );
}

function AgentActionCard() {
  const items = [
    { done: true, text: "Update sprint board" },
    { done: true, text: "Notify stakeholders" },
    { done: true, text: "Review PR #247" },
    { done: false, text: "Schedule v2 review" },
    { done: false, text: "Ship release notes" },
    { done: false, text: "Update roadmap doc" },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="w-[182px] shrink-0 rounded-md bg-neutral-100/80 p-2 shadow-xl shadow-black/[0.065] ring-1 ring-neutral-200/60 dark:bg-neutral-900/60 dark:ring-neutral-700/60"
    >
      {/* Header */}
      <div className="mb-1.5 flex items-center justify-between px-1 pt-0.5">
        <div className="flex items-center gap-1.5">
          <div className="size-1.5 rounded-full bg-neutral-400" />
          <span className="text-[10px] font-semibold">Action Items</span>
        </div>
        <span className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-[8px] text-neutral-500 dark:bg-neutral-700/60 dark:text-neutral-400">
          AI extracted
        </span>
      </div>
      {/* Progress */}
      <div className="mb-1.5 rounded bg-white px-2 py-1.5 shadow shadow-black/[0.065] ring-1 ring-neutral-200/70 dark:bg-neutral-900 dark:ring-neutral-700/60">
        <div className="mb-1 flex items-center justify-between">
          <span className="text-[8px] text-muted-foreground">3 of 6 complete</span>
          <span className="text-[8px] font-medium text-foreground/60">50%</span>
        </div>
        <div className="h-1 w-full overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-700">
          <div className="h-full w-1/2 rounded-full bg-neutral-500" />
        </div>
      </div>
      {/* Checklist */}
      <div className="space-y-1">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-1.5 rounded bg-white px-2 py-1.5 shadow shadow-black/[0.065] ring-1 ring-neutral-200/70 dark:bg-neutral-900 dark:ring-neutral-700/60"
          >
            <div
              className={cn(
                "flex size-3 shrink-0 items-center justify-center rounded-sm ring-1",
                item.done
                  ? "bg-neutral-600 ring-neutral-600 dark:bg-neutral-400 dark:ring-neutral-400"
                  : "ring-neutral-300 dark:ring-neutral-600"
              )}
            >
              {item.done && (
                <svg viewBox="0 0 12 12" fill="none" className="size-full">
                  <path
                    d="M2.5 6L5 8.5L9.5 3.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
            <span
              className={cn(
                "text-[9px] leading-tight",
                item.done
                  ? "text-muted-foreground/50 line-through"
                  : "text-foreground"
              )}
            >
              {item.text}
            </span>
          </div>
        ))}
      </div>
      {/* Footer */}
      <div className="mt-1.5 px-1">
        <span className="text-[8px] text-muted-foreground/50">Due end of sprint</span>
      </div>
    </motion.div>
  );
}

function AgentLogoIcon() {
  return (
    <svg className="h-4 w-4 drop-shadow" viewBox="0 0 180 220" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M80 100H28C12.536 100 0 87.464 0 72V28C0 12.536 12.536 0 28 0H72C87.464 0 100 12.536 100 28V80H160C171.046 80 180 88.954 180 100V167.639C180 175.215 175.72 182.14 168.944 185.528L103.416 218.292C101.17 219.415 98.692 220 96.18 220C87.244 220 80 212.756 80 203.82V100ZM28 20C23.582 20 20 23.582 20 28V72C20 76.418 23.582 80 28 80H80V28C80 23.582 76.418 20 72 20H28ZM100 100H152C156.418 100 160 103.582 160 108V165.092C160 168.103 158.309 170.859 155.625 172.224L111.625 194.591C106.303 197.296 100 193.429 100 187.459V100Z"
        fill="currentColor"
      />
    </svg>
  );
}

function GeminiSmallIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 296 298" fill="none">
      <mask id="gemini_a" width="296" height="298" x="0" y="0" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }}>
        <path fill="#3186FF" d="M141.201 4.886c2.282-6.17 11.042-6.071 13.184.148l5.985 17.37a184 184 0 0 0 111.257 113.049l19.304 6.997c6.143 2.227 6.156 10.91.02 13.155l-19.35 7.082a184 184 0 0 0-109.495 109.385l-7.573 20.629c-2.241 6.105-10.869 6.121-13.133.025l-7.908-21.296a184 184 0 0 0-109.02-108.658l-19.698-7.239c-6.102-2.243-6.118-10.867-.025-13.132l20.083-7.467A184 184 0 0 0 133.291 26.28l7.91-21.394Z" />
      </mask>
      <g mask="url(#gemini_a)">
        <ellipse cx="163" cy="149" fill="#3689FF" rx="196" ry="159" />
        <ellipse cx="33.5" cy="142.5" fill="#F6C013" rx="68.5" ry="72.5" opacity="0.6" />
        <path fill="#FA4340" d="M194 10.5C172 82.5 65.5 134.333 22.5 135L144-66l50 76.5Z" opacity="0.4" />
        <path fill="#14BB69" d="M194.5 279.5C172.5 207.5 66 155.667 23 155l121.5 201 50-76.5Z" opacity="0.4" />
      </g>
    </svg>
  );
}

function OpenAISmallIcon() {
  return (
    <svg className="h-5 w-5 fill-foreground" viewBox="0 0 256 260">
      <path d="M239.184 106.203a64.716 64.716 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.716 64.716 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.665 64.665 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.767 64.767 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483Zm-97.56 136.338a48.397 48.397 0 0 1-31.105-11.255l1.535-.87 51.67-29.825a8.595 8.595 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601Zm-104.466-44.61a48.345 48.345 0 0 1-5.781-32.589l1.534.921 51.722 29.826a8.339 8.339 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803ZM23.549 85.38a48.499 48.499 0 0 1 25.58-21.333v61.39a8.288 8.288 0 0 0 4.195 7.316l62.874 36.272-21.845 12.636a.819.819 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405v.256Zm179.466 41.695-63.08-36.63L161.73 77.86a.819.819 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.544 8.544 0 0 0-4.4-7.213Zm21.742-32.69-1.535-.922-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.716.716 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391v.205ZM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87-51.67 29.825a8.595 8.595 0 0 0-4.246 7.367l-.051 72.697Zm11.868-25.58 28.138-16.217 28.188 16.218v32.434l-28.086 16.218-28.188-16.218-.052-32.434Z" />
    </svg>
  );
}

function DeepSeekSmallIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Z" fill="#4D6BFE" />
      <path d="M16.5 8.5c-1.5-1-3.5-1-5 0s-2 3-1 4.5 3 2 4.5 1.5 2.5-2 2.5-3.5-.5-2-1-2.5Z" fill="#fff" fillOpacity="0.9" />
      <path d="M8 13c-.5 1-.5 2.5.5 3.5s2.5 1 3.5.5" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <circle cx="14" cy="10.5" r="0.8" fill="#4D6BFE" />
    </svg>
  );
}

function GamePanelCard({ activeKey }: { activeKey: string }) {
  const providerMap: Record<string, { index: number; color: string; light: string; label: string; topLabel: string }> = {
    gemini: { index: 0, color: "#4285F4", light: "#93bbff", label: "Gemini 2.0 Flash", topLabel: "Summarizing thread" },
    chatgpt: { index: 1, color: "#10a37f", light: "#6ee7b7", label: "GPT-4o", topLabel: "Routing to GPT-4o" },
    deepseek: { index: 2, color: "#4D6BFE", light: "#a5b4fc", label: "DeepSeek-V3", topLabel: "Analyzing code" },
  };
  const active = providerMap[activeKey] ?? providerMap.gemini;

  // Path definitions for the traveling light
  const topPath = "M65.5 0V106";
  const centerToMiddle = "M65.5 106V155";
  const branchLeft = "M64 106C63.858 109.843 61.98 115.764 59.531 121.301C54.521 132.623 38.5 133 26.119 133H23C10.574 133 0.5 143.074 0.5 155.5";
  const branchRight = "M67 106C67.142 109.843 69.02 115.764 71.47 121.301C76.479 132.623 92.5 133 104.881 133H108C120.426 133 130.5 143.074 130.5 155.5";
  // Which branch path lights up based on active provider
  const activePaths = React.useMemo(() => {
    if (active.index === 0) return { branch: branchLeft };
    if (active.index === 2) return { branch: branchRight };
    return { branch: centerToMiddle };
  }, [active.index]);

  return (
    <div className="relative z-10 flex flex-col items-center">
      {/* Branching connection SVG */}
      <svg
        viewBox="0 0 131 245"
        fill="none"
        className="absolute inset-x-0 top-8 mx-auto w-2/3 text-foreground/10"
      >
        {/* Static base paths */}
        <path d={topPath} stroke="currentColor" />
        <path d={centerToMiddle} stroke="currentColor" strokeLinecap="round" />
        <path d="M0.5 155.5C0.5 143.074 10.574 133 23 133H26.119C38.5 133 54.521 132.623 59.531 121.301C61.98 115.764 63.858 109.843 64 106" stroke="currentColor" strokeLinecap="round" />
        <path d="M130.5 155.5C130.5 143.074 120.426 133 108 133H104.881C92.5 133 76.479 132.623 71.47 121.301C69.02 115.764 67.142 109.843 67 106" stroke="currentColor" strokeLinecap="round" />
        {/* Gradient definition for traveling light */}
        <defs>
          <linearGradient id={`light-grad-${activeKey}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={active.light} stopOpacity={0.2} />
            <stop offset="50%" stopColor={active.light} stopOpacity={0.8} />
            <stop offset="100%" stopColor={active.color} stopOpacity={0.4} />
          </linearGradient>
        </defs>

        {/* Traveling light: top path (always active) */}
        <motion.path
          key={`top-${activeKey}`}
          d={topPath}
          stroke={active.light}
          strokeWidth={1}
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 0.7, 0.9, 0.5] }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />

        {/* Traveling light: branch to active provider */}
        <motion.path
          key={`branch-${activeKey}`}
          d={activePaths.branch}
          stroke={active.light}
          strokeWidth={1}
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 0.7, 0.9, 0.5] }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
        />

        {/* Continuous pulse dot traveling along the top path */}
        <motion.circle
          key={`dot-${activeKey}`}
          r="1.5"
          fill={active.light}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.8, 0.8, 0] }}
          transition={{ duration: 2, delay: 0.3, repeat: Infinity, repeatDelay: 1 }}
        >
          <animateMotion
            dur="2s"
            repeatCount="indefinite"
            begin="0.3s"
            path={topPath}
          />
        </motion.circle>
      </svg>

      {/* Top pill — dynamic label per active provider */}
      <div className="h-8 overflow-hidden rounded-full bg-card px-4 ring-1 ring-border" style={{ width: 170 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeKey}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="flex h-8 items-center gap-1.5"
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: active.light }} />
            <span className="whitespace-nowrap text-sm font-medium">{active.topLabel}</span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Central agent node */}
      <div className="relative mb-[54px] mt-14 flex h-[68px] w-[68px] -translate-y-px">
        {/* Glow */}
        <div className="absolute inset-3 opacity-50">
          <motion.div
            className="absolute inset-0 rounded-xl blur-md"
            animate={{ backgroundColor: active.light }}
            transition={{ duration: 0.4 }}
            style={{ opacity: 0.6 }}
          />
        </div>
        {/* Icon circle */}
        <div className="relative m-auto flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-card to-card/50 shadow-xl shadow-black/[0.065] ring-1 ring-border backdrop-blur">
          <Image src="/logos/logo-small-light.png" alt="Logo" width={22} height={22} className="dark:hidden" />
          <Image src="/logos/logo-small-dark.png" alt="Logo" width={22} height={22} className="hidden dark:block" />
        </div>
      </div>

      {/* Three provider icons */}
      <div className="relative mb-6 flex items-center gap-8">
        {(["gemini", "chatgpt", "deepseek"] as const).map((key) => {
          const isActive = key === activeKey;
          const provider = providerMap[key];
          const Icon = key === "gemini" ? GeminiSmallIcon : key === "chatgpt" ? OpenAISmallIcon : DeepSeekSmallIcon;
          return (
            <div key={key} className="relative flex h-14 w-14 items-center justify-center">
              {/* Glow behind active icon */}
              {isActive && (
                <motion.div
                  layoutId="provider-glow"
                  className="absolute -inset-1.5 rounded-full blur-md"
                  style={{ backgroundColor: provider.light, opacity: 0.5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <div
                className={cn(
                  "relative flex h-11 w-11 items-center justify-center rounded-full bg-card shadow-md shadow-black/[0.065] ring-1 transition-all duration-300",
                  isActive ? "ring-2 scale-110" : "ring-border"
                )}
                style={isActive ? { borderColor: provider.light, boxShadow: `0 0 24px ${provider.light}60, inset 0 0 0 1px ${provider.light}` } : {}}
              >
                <Icon />
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}

/* ---------- Section ---------- */

export function ServicesSection({ className, data }: ServicesSectionProps) {
  const content = React.useMemo(() => mergeData(data), [data]);

  const [activeKey, setActiveKey] = React.useState(content.servers.items[0]?.key ?? "gemini");

  return (
    <section className={cn("relative py-16 md:py-24", className)}>
      {/* White background with fade at top and bottom edges */}
      <div
        className="pointer-events-none absolute inset-0 bg-white dark:bg-white/[0.03]"
        style={{
          maskImage: "linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)",
        }}
      />
      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="space-y-20 md:space-y-28">
          {/* Row 1: DottedMap background + card */}
          <ServiceRow
            copy={content.vps}
            delayBase={0}
            visual={
              <div className="relative h-[360px] w-full overflow-hidden rounded-3xl bg-muted/10">
                <DottedMapBackground
                  className={cn(
                    "absolute inset-0 opacity-60",
                    "[mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
                  )}
                  height={55}
                  grid="diagonal"
                  dotRadius={0.15}
                  dotColor="currentColor"
                  pins={content.vps.mapPins}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/15 via-background/0 to-background/60" />
                <div className="relative flex h-full items-center justify-center p-6">
                  <VpsPerformanceCard />
                </div>
              </div>
            }
          />

          {/* Row 2: reversed */}
          <ServiceRow
            reverse
            copy={content.hosting}
            delayBase={80}
            visual={
              <div className="relative h-[360px] w-full overflow-hidden rounded-3xl bg-muted/10">
                {/* Mobile (< md): single KanbanCard centered */}
                <div className="flex h-full items-center justify-center md:hidden px-3">
                  <KanbanCard />
                </div>

                {/* md+: three cards — ladder staircase left→right */}
                <div
                  className="hidden h-full w-full md:block"
                  style={{
                    maskImage: "linear-gradient(to right, black 62%, transparent 97%)",
                    WebkitMaskImage: "linear-gradient(to right, black 62%, transparent 97%)",
                  }}
                >
                  <div className="flex h-full items-start pl-3 pt-2">
                    {/* Step 3 — lowest, leftmost, smallest visual weight */}
                    <div className="relative z-10 mt-24">
                      <AgentThreadCard />
                    </div>
                    {/* Step 2 — 48px higher */}
                    <div className="relative z-20 -ml-3 mt-12">
                      <AgentActionCard />
                    </div>
                    {/* Step 1 — at the top, dominant, rightmost */}
                    <div className="relative z-30 -ml-3">
                      <KanbanCard />
                    </div>
                  </div>
                </div>

                {/* Bottom fade — left 62% only (Thread + Action cards) */}
                <div
                  className="pointer-events-none absolute bottom-0 left-0 z-40 hidden h-36 w-[62%] bg-gradient-to-t from-background via-background/40 to-transparent md:block"
                />
              </div>
            }
          />

          {/* Row 3: servers (left list + right panel) */}
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <Reveal from="up" delayMs={120} className="max-w-xl">
                <div className="text-xs font-medium tracking-[0.2em] text-muted-foreground">
                  {content.servers.eyebrow}
                </div>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                  {content.servers.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {content.servers.description}
                </p>

                <div className="mt-8 overflow-hidden rounded-2xl">
                  {content.servers.items.map((item) => {
                    const selected = item.key === activeKey;

                    return (
                      <button
                        key={item.key}
                        type="button"
                        onClick={() => setActiveKey(item.key)}
                        className={cn(
                          "w-full text-left py-4",
                          "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        )}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{item.title}</span>
                          <span className="flex h-5 w-5 items-center justify-center text-muted-foreground transition-transform duration-200">
                            {selected ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                          </span>
                        </div>
                        <AnimatePresence initial={false}>
                          {selected && item.description && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                {item.description}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </button>
                    );
                  })}
                </div>

              </Reveal>
            </div>

            <div>
              <Reveal from="right" delayMs={170}>
                <div className="relative h-[500px] w-full overflow-hidden rounded-3xl bg-muted/10">
                  <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/0 to-background/40" />
                  <div className="relative flex h-full items-center justify-center p-6">
                    <GamePanelCard activeKey={activeKey} />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
