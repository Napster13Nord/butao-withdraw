---
name: Adequação Digital
description: Visual system for high-trust legal compliance WooCommerce sales landing pages.
colors:
  primary: "#3b82f6"
  accent: "#f59e0b"
  danger: "#ef4444"
  success: "#10b981"
  neutral-bg: "#0a0e1a"
  neutral-bg-elevated: "#111827"
  neutral-bg-card: "#1a2035"
  neutral-text: "#f1f5f9"
  neutral-text-muted: "#94a3b8"
typography:
  display:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(2rem, 5vw, 3.2rem)"
    fontWeight: 800
    lineHeight: 1.15
  body:
    fontFamily: "Work Sans, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  mono:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.85rem"
    fontWeight: 500
    lineHeight: 1.0
rounded:
  sm: "12px"
  md: "20px"
  lg: "20px"
spacing:
  sm: "16px"
  md: "24px"
  lg: "32px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral-text}"
    rounded: "{rounded.sm}"
    padding: "16px 32px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "10px 20px"
---

# Design System: Adequação Digital

## 1. Overview

**Creative North Star: "The Compliance Shell"**

"The Compliance Shell" visual language evokes immediate security, legal authority, and technological peace of mind. Designed for WooCommerce store owners facing audits, the system pairs a cyber-security dark-indigo backdrop with vibrant primary indicators (tech-blue/purple gradients) and high-visibility warning indicators (amber and hazard-red). The visual theme represents protective, robust infrastructure: interfaces feel precise, compliant, and rock-solid.

This system rejects low-contrast "aesthetic grays" that hinder readability, pastel or soft-neutral backgrounds (SaaS cream monoculture), overly soft radii, and sketchy SVG illustrations. Density is kept medium-to-compact to feel like a dashboard, establishing immediate competence.

**Key Characteristics:**
- Deep Indigo background (#0a0e1a) with crisp borders.
- Cyber-security grade blue-violet gradients indicating modern technology.
- Warning accents in amber (#f59e0b) to flag urgency and compliance failures.
- Sharp contrast (>= 4.5:1) for all typography.

## 2. Colors

The color palette is built on deep dark indigo, with primary-glow active accents, warning alerts, and high-readability text elements.

### Primary
- **Compliance Blue** (#3b82f6): Employs trust, security, and digital authority. Used for main call-to-actions, highlight lines, and active buttons.

### Secondary
- **Directive Violet** (#8b5cf6): Paired with Compliance Blue in gradients to indicate modern automation.

### Neutral
- **Deep Void** (#0a0e1a): The canvas background. Induces dark-mode focus and premium quality.
- **Void Elevated** (#111827): Background for section transitions.
- **Secure Container** (#1a2035): Card and component backgrounds.
- **Crisp Ink** (#f1f5f9): High-readability white for all body copy.
- **Muted Steel** (#94a3b8): Used for descriptive subtitles and labels.

### Named Rules
**The Hazard Contrast Rule.** Warning colors (Amber or Danger Red) are reserved for risk panels and urgency tags. Never use them as general branding or backgrounds.
**The No-Faint-Text Rule.** Body copy must maintain a contrast ratio of >= 4.5:1. Faint-gray body text on dark surfaces is strictly prohibited.

## 3. Typography

**Display Font:** Manrope, sans-serif
**Body Font:** Work Sans, sans-serif
**Label/Mono Font:** JetBrains Mono, monospace

Typography is modern, authoritative, and clean. Heading weights are heavy (800) to convey authority, while body weights are regular (400) with generous line heights.

### Hierarchy
- **Display** (800, clamp(2rem, 5vw, 3.2rem), 1.15): Used for Hero headings. Max letter-spacing floor is -0.04em.
- **Headline** (800, 2.4rem, 1.2): Used for section titles.
- **Title** (700, 1.3rem, 1.3): Card headings.
- **Body** (400, 1rem, 1.7): Normal prose. Max line length is restricted to 70ch for readability.
- **Label** (500, 0.85rem, 1.0): Form labels, badges, and code numbers.

### Named Rules
**The Distinctive Pairing Rule.** Pair Manrope (for geometric display titles) with Work Sans (for clean, highly readable body copy). Do not mix other sans-serif families.

## 4. Elevation

The system uses flat containers with subtle glowing borders and precise shadow overlays. Tonal layering is the primary method of separating hierarchy.

### Shadow Vocabulary
- **Primary Glow** (`0 4px 20px rgba(59,130,246,0.25)`): Under primary call-to-actions to indicate interactivity.
- **Card Border** (`border: 1px solid rgba(255,255,255,0.08)`): Used to separate cards from the dark backdrop.

### Named Rules
**The Active Response Rule.** Shadows and glow effects are interactive. They must transition or translate on hover, not remain static.

## 5. Components

Components represent technical precision, clean form layouts, and high accessibility.

### Buttons
- **Shape:** Standard rounded corners (12px radius).
- **Primary:** Gradient-fill (#3b82f6 to #8b5cf6), white text, padding (16px 32px).
- **Outline:** Transparent fill, blue border (1.5px solid rgba(59,130,246,0.4)), padding (10px 20px).
- **Hover:** Translate -2px with box-shadow scale.

### Cards / Containers
- **Corner Style:** Medium rounded corners (20px radius).
- **Background:** Void Container (#1a2035).
- **Border:** Subtle border (1px solid rgba(255,255,255,0.08)).
- **Internal Padding:** Spacing Medium (24px) or Large (32px).

### Inputs / Fields
- **Style:** Dark background (rgba(255, 255, 255, 0.04)), thin border (1.5px solid rgba(255,255,255,0.08)), radius (12px).
- **Focus:** Border changes to Compliance Blue (#3b82f6) with blue-glow ring.
- **Error:** Border changes to Danger Red (#ef4444) with red-glow ring.

## 6. Do's and Don'ts

### Do:
- **Do** maintain a strict 12px border radius for buttons and inputs, and 20px for cards.
- **Do** use OKLCH tints for gradients to keep them bright and prevent muddy mid-points.
- **Do** test forms with screen readers and keyboard navigation (tabbing order).

### Don't:
- **Don't** use border-left / border-right greater than 1px as a colored accent stripe.
- **Don't** use SaaS cream templates (#faf7f2 bg) for a cyber-security compliance product.
- **Don't** let letter-spacing on display headers fall below -0.04em.
- **Don't** pair a soft drop-shadow with a 1px border on the same resting element (use border only).
