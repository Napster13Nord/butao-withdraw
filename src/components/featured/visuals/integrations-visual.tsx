"use client";

import * as React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";

// Service badge component
function ServiceBadge({
  label,
  className,
  delay = 0,
}: {
  label: string;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      className={cn(
        "rounded-full border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-1.5 text-[11px] text-neutral-600 dark:text-neutral-400 shadow-sm",
        className
      )}
    >
      {label}
    </motion.div>
  );
}

// Central Hub - The main logo at top
const CentralHub = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative z-10 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 shadow-lg"
    >
      {/* Custom W logo similar to image */}
      <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="currentColor">
        <path d="M3 5h2l3 10h.1L11 9h2l2.9 6h.1L19 5h2l-4 14h-2l-3-6-3 6H7L3 5z" />
      </svg>
    </motion.div>
  );
});
CentralHub.displayName = "CentralHub";

// Company Logo Icons - Black and white style
const CompanyIcon = React.forwardRef<
  HTMLDivElement,
  { children: React.ReactNode; className?: string; delay?: number }
>(({ children, className, delay = 0 }, ref) => {
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay }}
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 shadow-sm",
        className
      )}
    >
      {children}
    </motion.div>
  );
});
CompanyIcon.displayName = "CompanyIcon";

// Individual company logos as SVGs (black/grayscale)
function PipedriveIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm0-8h-2V7h2v2zm4 8h-2v-4h2v4zm0-6h-2V9h2v2z" />
    </svg>
  );
}

function ClearbitIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.5L19 8l-7 3.5L5 8l7-3.5zM4 9.5l7 3.5v7l-7-3.5v-7zm16 0v7l-7 3.5v-7l7-3.5z" />
    </svg>
  );
}

function TestRailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h6v2H7v-2z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <rect x="6" y="4" width="4" height="16" rx="1" />
      <rect x="14" y="4" width="4" height="16" rx="1" />
    </svg>
  );
}

function SlackIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
    </svg>
  );
}

function MailchimpIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
  );
}

function EvernoteIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M8 3a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2V5a2 2 0 0 0-2-2H8zm0 2h8v2H8V5zm-4 4h16v10H4V9zm3 2v2h2v-2H7zm4 0v2h6v-2h-6zm-4 4v2h2v-2H7zm4 0v2h6v-2h-6z" />
    </svg>
  );
}

function DropboxIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M6 2l6 3.75L6 9.5 0 5.75 6 2zm12 0l6 3.75-6 3.75-6-3.75L18 2zM0 13.25L6 9.5l6 3.75-6 3.75-6-3.75zm18-3.75l6 3.75-6 3.75-6-3.75 6-3.75zM6 18.25l6-3.75 6 3.75-6 3.75-6-3.75z" />
    </svg>
  );
}

function AirtableIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  );
}

export function IntegrationsVisual() {
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Central hub ref
  const hubRef = React.useRef<HTMLDivElement>(null);

  // First row icon refs (6 icons)
  const icon1Ref = React.useRef<HTMLDivElement>(null);
  const icon2Ref = React.useRef<HTMLDivElement>(null);
  const icon3Ref = React.useRef<HTMLDivElement>(null);
  const icon4Ref = React.useRef<HTMLDivElement>(null);
  const icon5Ref = React.useRef<HTMLDivElement>(null);
  const icon6Ref = React.useRef<HTMLDivElement>(null);

  // Second row icon refs (3 icons)
  const icon7Ref = React.useRef<HTMLDivElement>(null);
  const icon8Ref = React.useRef<HTMLDivElement>(null);
  const icon9Ref = React.useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative flex min-h-[320px] w-full flex-col items-center justify-start overflow-hidden px-4 py-4"
    >
      {/* Service badges - Top row only, centered */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        <ServiceBadge label="Customer Support" delay={0.1} />
        <ServiceBadge label="Communications" delay={0.15} />
        <ServiceBadge label="Storage" delay={0.2} />
        <ServiceBadge label="Automations" delay={0.25} />
        <ServiceBadge label="Billing" delay={0.3} />
        <ServiceBadge label="Form Survey" delay={0.35} />
        <ServiceBadge label="Data Enrichment" delay={0.4} />
        <ServiceBadge label="Calling" delay={0.45} />
      </div>

      {/* Central Hub - moved down */}
      <div className="mt-4">
        <CentralHub ref={hubRef} />
      </div>

      {/* First row of icons - 6 icons - moved down */}
      <div className="mt-16 flex items-center justify-center gap-4">
        <CompanyIcon ref={icon1Ref} delay={0.2}>
          <PipedriveIcon />
        </CompanyIcon>
        <CompanyIcon ref={icon2Ref} delay={0.25}>
          <ClearbitIcon />
        </CompanyIcon>
        <CompanyIcon ref={icon3Ref} delay={0.3}>
          <TestRailIcon />
        </CompanyIcon>
        <CompanyIcon ref={icon4Ref} delay={0.35}>
          <PauseIcon />
        </CompanyIcon>
        <CompanyIcon ref={icon5Ref} delay={0.4}>
          <SlackIcon />
        </CompanyIcon>
        <CompanyIcon ref={icon6Ref} delay={0.45}>
          <DropboxIcon />
        </CompanyIcon>
      </div>

      {/* Second row of icons - 3 icons - moved down */}
      <div className="mt-4 flex items-center justify-center gap-4">
        <CompanyIcon ref={icon7Ref} delay={0.5}>
          <MailchimpIcon />
        </CompanyIcon>
        <CompanyIcon ref={icon8Ref} delay={0.55}>
          <EvernoteIcon />
        </CompanyIcon>
        <CompanyIcon ref={icon9Ref} delay={0.6}>
          <AirtableIcon />
        </CompanyIcon>
      </div>

      {/*
        SYMMETRIC ORDER: center → left → right → left → right...
        Beams go straight down then curve at end to avoid overlapping other icons
      */}
      {/* 1. Icon 3 (left-center) - first, slight curve */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={hubRef}
        toRef={icon3Ref}
        curvature={30}
        duration={6}
        delay={0}
        gradientStartColor="rgba(140, 140, 140, 0.5)"
        gradientStopColor="rgba(140, 140, 140, 0.5)"
        pathColor="rgba(128, 128, 128, 0.2)"
        pathWidth={3}
        startYOffset={28}
        endYOffset={-20}
      />
      {/* 2. Icon 4 (right-center) - symmetric to icon 3 */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={hubRef}
        toRef={icon4Ref}
        curvature={30}
        duration={6}
        delay={5}
        gradientStartColor="rgba(140, 140, 140, 0.5)"
        gradientStopColor="rgba(140, 140, 140, 0.5)"
        pathColor="rgba(128, 128, 128, 0.2)"
        pathWidth={3}
        startYOffset={28}
        endYOffset={-20}
      />
      {/* 3. Icon 2 (left) - curves left */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={hubRef}
        toRef={icon2Ref}
        curvature={50}
        duration={6}
        delay={10}
        gradientStartColor="rgba(140, 140, 140, 0.5)"
        gradientStopColor="rgba(140, 140, 140, 0.5)"
        pathColor="rgba(128, 128, 128, 0.2)"
        pathWidth={3}
        startYOffset={28}
        endYOffset={-20}
      />
      {/* 4. Icon 5 (right) - symmetric to icon 2 */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={hubRef}
        toRef={icon5Ref}
        curvature={50}
        duration={6}
        delay={15}
        gradientStartColor="rgba(140, 140, 140, 0.5)"
        gradientStopColor="rgba(140, 140, 140, 0.5)"
        pathColor="rgba(128, 128, 128, 0.2)"
        pathWidth={3}
        startYOffset={28}
        endYOffset={-20}
      />
      {/* 5. Icon 1 (far left) - curves far left */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={hubRef}
        toRef={icon1Ref}
        curvature={70}
        duration={6}
        delay={20}
        gradientStartColor="rgba(140, 140, 140, 0.5)"
        gradientStopColor="rgba(140, 140, 140, 0.5)"
        pathColor="rgba(128, 128, 128, 0.2)"
        pathWidth={3}
        startYOffset={28}
        endYOffset={-20}
      />
      {/* 6. Icon 6 (far right) - symmetric to icon 1 */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={hubRef}
        toRef={icon6Ref}
        curvature={70}
        duration={6}
        delay={25}
        gradientStartColor="rgba(140, 140, 140, 0.5)"
        gradientStopColor="rgba(140, 140, 140, 0.5)"
        pathColor="rgba(128, 128, 128, 0.2)"
        pathWidth={3}
        startYOffset={28}
        endYOffset={-20}
      />
      {/* 7. Icon 8 (bottom center) - straight down */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={hubRef}
        toRef={icon8Ref}
        curvature={40}
        duration={6}
        delay={30}
        gradientStartColor="rgba(140, 140, 140, 0.5)"
        gradientStopColor="rgba(140, 140, 140, 0.5)"
        pathColor="rgba(128, 128, 128, 0.2)"
        pathWidth={3}
        startYOffset={28}
        endYOffset={-20}
      />
      {/* 8. Icon 7 (bottom left) */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={hubRef}
        toRef={icon7Ref}
        curvature={60}
        duration={6}
        delay={35}
        gradientStartColor="rgba(140, 140, 140, 0.5)"
        gradientStopColor="rgba(140, 140, 140, 0.5)"
        pathColor="rgba(128, 128, 128, 0.2)"
        pathWidth={3}
        startYOffset={28}
        endYOffset={-20}
      />
      {/* 9. Icon 9 (bottom right) - symmetric to icon 7 */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={hubRef}
        toRef={icon9Ref}
        curvature={60}
        duration={6}
        delay={40}
        gradientStartColor="rgba(140, 140, 140, 0.5)"
        gradientStopColor="rgba(140, 140, 140, 0.5)"
        pathColor="rgba(128, 128, 128, 0.2)"
        pathWidth={3}
        startYOffset={28}
        endYOffset={-20}
      />
    </div>
  );
}
