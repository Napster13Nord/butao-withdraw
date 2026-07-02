import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { FeaturedTestimonialItem } from "./types";

export function TestimonialCard({
  item,
}: {
  item: FeaturedTestimonialItem;
  index: number;
}) {
  const rating = item.rating ?? 5;

  return (
    <article
      className={cn(
        "group relative h-full min-h-[400px] overflow-hidden rounded-2xl",
        "transition-shadow duration-300 hover:shadow-lg hover:shadow-black/20",
        item.className
      )}
    >
      {/* Background gradient - simulating nature photo with green field */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-500 to-cyan-400">
        {/* Overlay for depth and texture */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative flex h-full flex-col p-6">
        {/* Quote icon and label */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-serif text-white/90">&ldquo;</span>
          <span className="text-xs text-white/80">{item.label ?? "Testimonial"}</span>
        </div>

        {/* Spacer to push content down */}
        <div className="flex-1 min-h-[100px]" />

        {/* Stars */}
        <div className="mb-4 flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "h-4 w-4",
                i < rating ? "fill-amber-400 text-amber-400" : "fill-zinc-600 text-zinc-600"
              )}
            />
          ))}
        </div>

        {/* Quote text */}
        <p className="text-lg font-medium leading-relaxed text-white">
          {item.quote}
        </p>

        {/* Author */}
        <div className="mt-6 flex items-center gap-3">
          <Avatar className="h-10 w-10 border-2 border-white/30 shadow-md">
            {item.author.avatarUrl && (
              <AvatarImage src={item.author.avatarUrl} alt={item.author.name} />
            )}
            <AvatarFallback className="text-sm bg-zinc-700 text-zinc-300">
              {item.author.name
                .split(" ")
                .slice(0, 2)
                .map((p) => p[0]?.toUpperCase())
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="text-sm font-semibold text-white">{item.author.name}</div>
            {item.author.role && (
              <div className="text-xs text-emerald-300">{item.author.role}</div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
