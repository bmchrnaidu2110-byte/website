import { motion } from 'framer-motion';

/**
 * IMAGE PLACEHOLDER SYSTEM
 *
 * Centralized image handling for all card components.
 * Provides:
 * - Consistent placeholder across all cards
 * - Hover animations (scale + lift)
 * - Easy image swap capability
 * - Respects design theme (black/white/yellow only)
 *
 * To replace images later:
 * 1. Update this file's imageSrc constant
 * 2. Or pass custom src to ImagePlaceholder component
 * 3. No layout changes needed - animation code remains identical
 */

// Default placeholder - reuse across ALL cards
const DEFAULT_PLACEHOLDER = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Cdefs%3E%3ClinearGradient id="grad" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%23000000;stop-opacity:0.1" /%3E%3Cstop offset="100%25" style="stop-color:%23FFD400;stop-opacity:0.1" /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="400" height="300" fill="url(%23grad)" /%3E%3Ctext x="50%25" y="50%25" font-size="18" text-anchor="middle" dominant-baseline="middle" font-family="Georgia, serif" font-weight="bold" fill="%23000000" opacity="0.3"%3EPlaceholder Image%3C/text%3E%3Ctext x="50%25" y="60%25" font-size="14" text-anchor="middle" dominant-baseline="middle" font-family="Arial" fill="%23000000" opacity="0.2"%3EReplace with real image%3C/text%3E%3C/svg%3E';

interface ImagePlaceholderProps {
  src?: string;
  alt: string;
  aspectRatio?: 'square' | '16:9' | '4:3';
  className?: string;
  containerClassName?: string;
  showBorder?: boolean;
}

/**
 * ImagePlaceholder Component
 *
 * Usage:
 * <ImagePlaceholder
 *   alt="Course thumbnail"
 *   aspectRatio="16:9"
 *   showBorder={true}
 * />
 *
 * To replace image later:
 * <ImagePlaceholder
 *   src="/images/real-course.jpg"
 *   alt="Course thumbnail"
 *   aspectRatio="16:9"
 * />
 */
export function ImagePlaceholder({
  src = DEFAULT_PLACEHOLDER,
  alt,
  aspectRatio = '16:9',
  className = '',
  containerClassName = '',
  showBorder = true,
}: ImagePlaceholderProps) {
  // Aspect ratio styles
  const aspectStyles: Record<string, string> = {
    square: 'aspect-square',
    '16:9': 'aspect-video',
    '4:3': 'aspect-[4/3]',
  };

  return (
    <motion.div
      className={`relative overflow-hidden rounded-lg bg-gradient-to-br from-black/5 to-yellow-400/5 ${aspectStyles[aspectRatio]} ${showBorder ? 'border-2 border-black/10' : ''} ${containerClassName}`}
      whileHover={{ scale: 1.05, y: -4 }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 30,
        duration: 0.3,
      }}
    >
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${className}`}
      />

      {/* Subtle overlay on hover - comment out if not needed */}
      <motion.div
        className="absolute inset-0 bg-yellow-400/0 pointer-events-none"
        whileHover={{ backgroundColor: 'rgba(255, 212, 0, 0.05)' }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

/**
 * USAGE GUIDE
 *
 * 1. COURSE CARDS:
 *    <ImagePlaceholder alt="Full-Stack Web Development" aspectRatio="16:9" />
 *
 * 2. FEATURE CARDS:
 *    <ImagePlaceholder alt="Feature icon" aspectRatio="square" />
 *
 * 3. PROGRAM CARDS (Kids):
 *    <ImagePlaceholder alt="Kids program" aspectRatio="4:3" />
 *
 * 4. TO REPLACE IMAGES LATER:
 *    <ImagePlaceholder
 *      src="/images/actual-image.jpg"
 *      alt="Course thumbnail"
 *      aspectRatio="16:9"
 *    />
 *
 * No refactoring needed - just change the src prop!
 */

export default ImagePlaceholder;
