"use client";

import * as React from "react";
import { motion } from "motion/react";
import { Calendar, Clock, MapPin, Video, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function ScheduleVisual() {
  const currentDate = new Date();
  const month = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();

  // Generate calendar days
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();

    const days: { day: number; isCurrentMonth: boolean; isToday: boolean; isSelected: boolean; hasEvent: boolean }[] = [];

    // Previous month days
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({
        day: daysInPrevMonth - i,
        isCurrentMonth: false,
        isToday: false,
        isSelected: false,
        hasEvent: false,
      });
    }

    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        day: i,
        isCurrentMonth: true,
        isToday: i === currentDate.getDate(),
        isSelected: i === 21,
        hasEvent: [14, 15, 21, 29, 30].includes(i),
      });
    }

    return days;
  };

  const days = getDaysInMonth(currentDate);
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="relative flex min-h-[320px] items-start justify-center gap-4 px-4 py-6">
      {/* Calendar Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-[280px] rounded-xl border bg-background shadow-lg"
      >
        {/* Calendar Header */}
        <div className="flex items-center justify-between border-b px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-beam" />
            <span className="text-sm font-medium">{month} {year}</span>
          </div>
        </div>

        {/* Week days header */}
        <div className="grid grid-cols-7 gap-1 px-2 py-2">
          {weekDays.map((day) => (
            <div key={day} className="text-center text-[10px] font-medium text-muted-foreground">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-1 px-2 pb-3">
          {days.slice(0, 35).map((day, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: index * 0.01 }}
              className={cn(
                "relative flex h-7 w-7 items-center justify-center rounded-md text-xs transition-colors",
                !day.isCurrentMonth && "text-muted-foreground/40",
                day.isToday && "bg-beam text-foreground font-semibold",
                day.isSelected && !day.isToday && "bg-foreground text-background",
                day.hasEvent && !day.isToday && !day.isSelected && "font-medium"
              )}
            >
              {day.day}
              {day.hasEvent && !day.isToday && !day.isSelected && (
                <div className="absolute bottom-0.5 h-1 w-1 rounded-full bg-beam" />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Event Card */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-[220px] space-y-3"
      >
        {/* Event Scheduled Badge */}
        <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1">
          <Check className="h-3 w-3 text-emerald-600" />
          <span className="text-xs font-medium text-emerald-700">Event is scheduled</span>
        </div>

        {/* Event Details Card */}
        <div className="rounded-xl border bg-background p-4 shadow-sm">
          {/* Date & Time */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Calendar className="h-3.5 w-3.5" />
            <span>Saturday, 21 May 2025</span>
          </div>
          <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
            <Clock className="h-3.5 w-3.5" />
            <span>09.00am - 11.00am</span>
          </div>

          {/* Event Title */}
          <div className="mt-3 flex items-start gap-3">
            {/* Avatars */}
            <div className="flex -space-x-2">
              <Avatar className="h-8 w-8 border-2 border-background">
                <AvatarImage src="/avatars/1.jpg" />
                <AvatarFallback>U1</AvatarFallback>
              </Avatar>
              <Avatar className="h-8 w-8 border-2 border-background">
                <AvatarImage src="/avatars/2.jpg" />
                <AvatarFallback>U2</AvatarFallback>
              </Avatar>
              <Avatar className="h-8 w-8 border-2 border-background">
                <AvatarImage src="/avatars/3.jpg" />
                <AvatarFallback>U3</AvatarFallback>
              </Avatar>
            </div>
            <div>
              <h4 className="text-sm font-semibold">Product Demo</h4>
              <p className="text-xs text-muted-foreground">A discovery call with sales teams</p>
            </div>
          </div>

          {/* Meta info */}
          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Clock className="h-3.5 w-3.5" />
              <span>2 hours</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Video className="h-3.5 w-3.5" />
              <span>Google Meets</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-lg bg-beam/10 px-2 py-1">
              <Video className="h-3.5 w-3.5 text-beam" />
              <span className="text-xs font-medium">meet/sdk-###-###</span>
              <button className="ml-1 rounded p-0.5 hover:bg-beam/20">
                <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
              </button>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" />
              <span>Europe/Dublin</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
