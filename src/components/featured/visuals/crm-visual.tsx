"use client";

import * as React from "react";
import { motion } from "motion/react";
import { MoreVertical, ThumbsUp, MessageCircle, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

// Animated curved beam path
function CurvedBeam({ className }: { className?: string }) {
  return (
    <svg
      className={cn("absolute pointer-events-none", className)}
      viewBox="0 0 200 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--beam)" stopOpacity="0" />
          <stop offset="50%" stopColor="var(--beam)" stopOpacity="1" />
          <stop offset="100%" stopColor="var(--beam)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        d="M 0 50 Q 100 0 200 50"
        stroke="url(#beamGradient)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          pathLength: { duration: 2, ease: "easeInOut", repeat: Infinity },
          opacity: { duration: 0.5 },
        }}
      />
    </svg>
  );
}

interface KanbanCardProps {
  company: string;
  companyType: string;
  logo?: React.ReactNode;
  isPro?: boolean;
  dealName: string;
  dealValue: string;
  assignee: string;
  avatarUrl?: string;
  strength?: "Very Strong" | "Strong" | "Medium";
  likes: number;
  comments: number;
  daysAgo: string;
  className?: string;
  delay?: number;
}

function KanbanCard({
  company,
  companyType,
  logo,
  isPro,
  dealName,
  dealValue,
  assignee,
  avatarUrl,
  strength,
  likes,
  comments,
  daysAgo,
  className,
  delay = 0,
}: KanbanCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "w-[200px] rounded-xl border bg-background p-3 shadow-sm",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted">
            {logo || <span className="text-xs font-bold">N</span>}
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-medium">{company}</span>
              {isPro && (
                <Badge className="h-4 bg-violet-500 px-1.5 text-[9px] text-white hover:bg-violet-500">
                  PRO
                </Badge>
              )}
            </div>
            <span className="text-[10px] text-muted-foreground">{companyType}</span>
          </div>
        </div>
        <button className="rounded p-0.5 hover:bg-muted">
          <MoreVertical className="h-4 w-4 text-muted-foreground" />
        </button>
      </div>

      {/* Deal info */}
      <div className="mt-3 rounded-lg border bg-muted/30 px-2.5 py-2">
        <div className="text-xs font-medium">{dealName}</div>
        <div className="text-[10px] text-muted-foreground">{dealValue}</div>
      </div>

      {/* AI Assistant Badge */}
      {strength && (
        <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-beam/10 px-2 py-0.5">
          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          <span className="text-[10px] font-medium text-beam">{strength}</span>
        </div>
      )}

      {/* Footer */}
      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar className="h-5 w-5">
            <AvatarImage src={avatarUrl} />
            <AvatarFallback className="text-[8px]">{assignee[0]}</AvatarFallback>
          </Avatar>
          <span className="text-[10px] text-muted-foreground">{assignee}</span>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-2 flex items-center gap-3 text-[10px] text-muted-foreground">
        <div className="flex items-center gap-1">
          <ThumbsUp className="h-3 w-3" />
          <span>{likes}</span>
        </div>
        <div className="flex items-center gap-1">
          <MessageCircle className="h-3 w-3" />
          <span>{comments}</span>
        </div>
        <div className="ml-auto flex items-center gap-1">
          <Clock className="h-3 w-3" />
          <span>{daysAgo}</span>
        </div>
      </div>
    </motion.div>
  );
}

function KanbanColumn({
  title,
  count,
  value,
  color,
  children,
  className,
}: {
  title: string;
  count: number;
  value: string;
  color: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col", className)}>
      {/* Column header */}
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className={cn("h-2 w-2 rounded-full", color)} />
          <span className="text-xs font-medium">{title}</span>
          <span className="text-xs text-muted-foreground">{count}</span>
        </div>
        <span className="text-xs font-medium">{value}</span>
        <button className="rounded p-0.5 hover:bg-muted">
          <MoreVertical className="h-3.5 w-3.5 text-muted-foreground" />
        </button>
      </div>
      {children}
    </div>
  );
}

export function CrmVisual() {
  const containerRef = React.useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative flex min-h-[320px] items-center justify-center overflow-hidden px-4 py-6">
      {/* Decorative beam curve at top */}
      <div className="absolute -left-10 top-0 h-40 w-[300px]">
        <CurvedBeam className="h-full w-full" />
      </div>

      {/* Kanban Board */}
      <div className="flex gap-4">
        {/* Contacted Column */}
        <KanbanColumn title="Contacted" count={4} value="$15,200" color="bg-emerald-500">
          <KanbanCard
            company="Everafter.io"
            companyType="B2B SaaS"
            isPro
            logo={
              <svg viewBox="0 0 24 24" className="h-4 w-4">
                <path fill="currentColor" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            }
            dealName="Need Expansion x1.5"
            dealValue="$8,900.00"
            assignee="Lucas"
            avatarUrl="/avatars/2.jpg"
            strength="Very Strong"
            likes={4}
            comments={0}
            daysAgo="1d"
            delay={0.1}
          />
        </KanbanColumn>

        {/* AI Assistant floating badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="absolute left-[55%] top-[45%] z-10"
        >
          <Badge className="bg-beam px-3 py-1 text-xs font-medium text-neutral-900 shadow-lg hover:bg-beam">
            AI Assistant
          </Badge>
        </motion.div>

        {/* Evaluation Column */}
        <KanbanColumn title="Evaluation" count={7} value="$15.2" color="bg-orange-500" className="opacity-60">
          <div className="h-[200px] w-[200px]" />
        </KanbanColumn>
      </div>

      {/* Partial column on left side */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 0.4, x: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute -left-[140px] top-1/2 -translate-y-1/2"
      >
        <KanbanColumn title="Evaluation" count={7} value="$18,500" color="bg-orange-500">
          <div className="h-[200px] w-[200px] rounded-xl border bg-background/50" />
        </KanbanColumn>
      </motion.div>
    </div>
  );
}
