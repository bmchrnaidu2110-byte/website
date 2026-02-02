/**
 * MODERN FLAT + DEPTH ANIMATION SYSTEM
 * 
 * Philosophy:
 * - Smooth, purposeful motion (150-350ms for UI feedback)
 * - Depth-aware animations that respect elevation hierarchy
 * - GPU-accelerated transforms (translate, scale, rotate)
 * - Cubic-bezier custom easing on every animation
 * - Magnetic interactions with pointer tracking
 * - Cinematic stagger and parallax with controlled timing
 * - Micro-interactions that feel responsive, not flashy
 * 
 * Motion Principles:
 * - Fast micro-interactions: 150-200ms (hover, focus states)
 * - Standard transitions: 250-350ms (entrance, layout changes)
 * - Slow reveals: 600-900ms (hero sections, cinematic entrance)
 * - Parallax/scroll: 800-1000ms (distance-based scrolling)
 */

// ============ MODERN FLAT + DEPTH EASING CURVES ============
// Carefully chosen for smooth, natural motion without emphasis

export const easing = {
  // Smooth, elegant entrance (Apple-style, used for reveals)
  smoothIn: [0.25, 0.46, 0.45, 0.94] as const,
  // Bouncy but controlled (Framer-style, 1.56 peak)
  smoothOut: [0.34, 1.56, 0.64, 1] as const,
  // Perfect for emphasis & micro-interactions (snappy)
  emphasis: [0.22, 1, 0.36, 1] as const,
  // Ultra-smooth, barely perceptible (gentle transitions)
  gentle: [0.22, 0.82, 0.54, 0.9] as const,
  // Precise, mechanical (Stripe-style, quick exit)
  precise: [0.4, 0, 0.2, 1] as const,
  // Linear for steady motion (parallax, marquee)
  linear: [0, 0, 1, 1] as const,
};

// Backward compat aliases
export const easeInOutPremium = easing.emphasis;

// ============ SPRING PRESETS ============
// Magnetic, responsive motion without over-bouncing
// Optimized for modern flat design (less bouncy)

export const spring = {
  // Premium, subtle (logo/nav hover) - controlled damping
  premium: { type: 'spring' as const, stiffness: 550, damping: 42, mass: 0.8 },
  // Soft, gentle (scroll reveals) - high damping for smoothness
  soft: { type: 'spring' as const, stiffness: 300, damping: 30, mass: 1 },
  // Bouncy but controlled (buttons, cards) - balanced bounce
  bounce: { type: 'spring' as const, stiffness: 400, damping: 20, mass: 0.8 },
  // Ultra-responsive (magnetic follow, pointer tracking)
  snappy: { type: 'spring' as const, stiffness: 700, damping: 45, mass: 0.7 },
};

// Backward compat aliases
export const premiumSpring = spring.premium;
export const softSpring = spring.soft;

// ============ MICRO-INTERACTION DURATIONS ============
// Recommended timing ranges for different interaction types

export const timings = {
  // Quick feedback: hover, focus, state changes (150-200ms)
  microFast: 0.15,
  fast: 0.2,
  // Standard transitions: buttons, cards, dropdowns (250-300ms)
  standard: 0.25,
  normal: 0.3,
  // Slower transitions: modals, page transitions (300-350ms)
  slow: 0.35,
  // Scroll reveals: entrance animations (600-900ms)
  reveal: 0.6,
  revealSlow: 0.8,
  // Very slow: cinematic, parallax (1000-1200ms)
  cinematic: 1.0,
  parallax: 1.2,
};

// ============ GLOBAL VARIANTS ============

// Container for staggered child reveals
export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

export const staggerItemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: easing.smoothOut,
    },
  },
};

// Headline reveal (larger movement, longer duration)
export const headlineReveal = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: easing.smoothOut,
    },
  },
};

// Subheading reveal (slightly offset from headline)
export const subheadingReveal = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easing.smoothOut,
      delay: 0.1,
    },
  },
};

// Backward compat
export const fadeInUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easing.smoothOut } },
};

export const fadeInDownVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easing.smoothOut } },
};

export const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: easing.smoothOut } },
};

export const slideInLeftVariants = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easing.smoothOut } },
};

export const slideInRightVariants = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easing.smoothOut } },
};

// ============ SCROLL-LINKED ANIMATIONS ============
// Triggered on scroll into view, perfect for content sections

export const scrollFadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easing.smoothOut,
    },
  },
};

export const scrollBlurIn = {
  hidden: { opacity: 0, filter: 'blur(12px)', y: 30 },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: {
      duration: 0.8,
      ease: easing.smoothOut,
    },
  },
};

// ============ ELEVATION-AWARE HOVER EFFECTS ============
// Lift effect respecting depth hierarchy

// Level 1 → 2 elevation on hover (buttons, small elements)
export const elevationHover1to2 = {
  rest: { y: 0 },
  hover: { y: -2, transition: { duration: 0.2, ease: easing.gentle } },
  tap: { y: 0, transition: { duration: 0.1 } },
};

// Level 2 → 3 elevation on hover (cards, medium elements)
export const elevationHover2to3 = {
  rest: { y: 0 },
  hover: { y: -4, transition: { duration: 0.25, ease: easing.gentle } },
  tap: { y: 0, transition: { duration: 0.15 } },
};

// Level 3 → 4 elevation on hover (large floating elements)
export const elevationHover3to4 = {
  rest: { y: 0 },
  hover: { y: -6, transition: { duration: 0.3, ease: easing.gentle } },
  tap: { y: 0, transition: { duration: 0.15 } },
};

// ============ MAGNETIC HOVER EFFECTS ============
// Premium button/link hover with glow and lift (improved timing)

export const magneticButton = {
  rest: {
    scale: 1,
    filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.08))',
  },
  hover: {
    scale: 1.02,
    filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.12))',
    transition: { duration: 0.2, ease: easing.gentle },
  },
  tap: {
    scale: 0.98,
    transition: { duration: 0.1 },
  },
};

// Premium card hover (lift + glow, respects depth)
export const magneticCard = {
  rest: {
    scale: 1,
    filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.1))',
  },
  hover: {
    scale: 1.03,
    filter: 'drop-shadow(0 16px 32px rgba(0,0,0,0.14)), drop-shadow(0 0 24px rgba(255,212,0,0.1))',
    transition: { duration: 0.25, ease: easing.gentle },
  },
};

// Backward compat
export const cardHover = {
  hover: {
    scale: 1.04,
    boxShadow: '0 30px 60px rgba(0,0,0,0.12), 0 8px 30px rgba(250,204,21,0.12)',
    transition: premiumSpring,
  },
};

// ============ BUTTON INTERACTION STATES ============
// Hover, active, focus states with proper timing

export const buttonInteraction = {
  rest: {
    y: 0,
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
  },
  hover: {
    y: -2,
    boxShadow: '0 8px 20px rgba(0,0,0,0.12)',
    transition: { duration: 0.2, ease: easing.gentle },
  },
  active: {
    y: 1,
    boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
    transition: { duration: 0.1 },
  },
};

// ============ 3D CARD TILT ============
// For StudentPrograms: realistic 3D rotation on hover

export const card3DRotate = {
  rest: {
    rotateX: 0,
    rotateY: 0,
    scale: 1,
  },
  hover: {
    scale: 1.02,
  },
};

// ============ CINEMATIC ENTRANCE VARIANTS ============

// Split text (stagger per word)
export const textWordStagger = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easing.smoothOut,
      delay: i * 0.08,
    },
  }),
};

// CTA button entrance (after headline)
export const ctaEntrance = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easing.smoothOut,
      delay: 0.3,
    },
  },
};

// ============ ANIMATED UNDERLINE ============
// For nav links, buttons, and interactive text

export const underlineSlide = {
  hidden: { scaleX: 0, originX: 0 },
  hover: { scaleX: 1 },
  exit: { scaleX: 0, originX: 0 },
};

// ============ PARALLAX CONFIG ============
// Subtle depth effect on scroll

export const parallaxLight = {
  initial: { y: 0 },
  whileInView: { y: -20 },
  transition: { duration: 0.8, ease: easing.gentle },
  viewport: { once: false, amount: 0.5 },
};

export const parallaxMedium = {
  initial: { y: 0 },
  whileInView: { y: -40 },
  transition: { duration: 0.8, ease: easing.gentle },
  viewport: { once: false, amount: 0.5 },
};

export const parallaxHeavy = {
  initial: { y: 0 },
  whileInView: { y: -60 },
  transition: { duration: 0.8, ease: easing.gentle },
  viewport: { once: false, amount: 0.5 },
};

// ============ IMAGE REVEAL ============
// Zoom + fade for hero images

export const imageReveal = {
  hidden: { opacity: 0, scale: 1.1, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.9,
      ease: easing.smoothOut,
      delay: 0.2,
    },
  },
};

// ============ MARQUEE / INFINITE SCROLL ============

export const marqueeSlide = {
  animate: {
    x: [0, -1000],
    transition: {
      duration: 25,
      repeat: Infinity,
      ease: easing.linear,
      repeatType: 'loop' as const,
    },
  },
};

// ============ VIEWPORT CONFIG ============
// Reusable settings for whileInView animations

export const viewportConfig = { once: false, amount: 0.3 };
export const viewportConfigEarly = { once: false, amount: 0.6 };
export const viewportConfigLate = { once: false, amount: 0.1 };

// ============ MICRO-INTERACTIONS ============

// Subtle shake for emphasis (used on high-emotion buttons)
export const microShake = {
  animate: {
    x: [0, -2, 2, -1, 1, 0],
    transition: {
      duration: 0.4,
      ease: easing.gentle,
    },
  },
};

// Pulse for badges, notifications (gentle, not distracting)
export const pulse = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: easing.gentle,
    },
  },
};

// ============ DROPDOWN & MODAL ============

export const dropdownSlideDown = {
  hidden: { opacity: 0, y: -16, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: easing.emphasis,
    },
  },
  exit: {
    opacity: 0,
    y: -16,
    scale: 0.96,
    transition: {
      duration: 0.2,
      ease: easing.precise,
    },
  },
};

// ============ SCROLL PROGRESS ============
// For animated progress indicators

export const progressFill = {
  initial: { scaleX: 0, originX: 0 },
  animate: (progress: number) => ({
    scaleX: progress,
  }),
};


