import { motion } from 'framer-motion';
import { easing, timings } from '../utils/animations';

/**
 * HERO SECTION - 2-Column Layout
 * 
 * Left (35-40%): Glassmorphic text content
 * Right (60-65%): Interactive Spline 3D scene
 * 
 * Features:
 * - Spline background fully visible and interactive on right
 * - Text content on left with subtle glass overlay
 * - Mouse hover triggers Spline animations
 * - Premium, modern layout
 */

export default function HeroSection() {
  return (
    <section className="hero relative w-full min-h-screen overflow-visible pt-24">
      {/* Spline is rendered behind this section by MainLayout (z-index: 0). */}

      {/* Content Container - 2 Column Layout (Left: text, Right: free for Spline) */}
      <div className="relative z-10 w-full h-full flex items-center">
        {/* LEFT COLUMN: Text Content (35-40% width) */}
        <div className="w-full lg:w-2/5 px-6 lg:px-12 py-12">
          {/* Glass Panel - ONLY the text container uses glassmorphism via .hero-content CSS */}
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: easing.smoothOut, delay: 0 }}
          >
            {/* HEADLINE: BLUR-IN Word-by-Word Animation */}
            <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black leading-tight text-white mb-6 tracking-tight">
              {['LEARN', 'THE', 'FUTURE', 'WAY'].map((word, i) => (
                <motion.span
                  key={i}
                  className={word === 'FUTURE' ? 'text-yellow-400 drop-shadow-lg inline-block' : 'drop-shadow-lg inline-block'}
                  initial={{ opacity: 0, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, filter: 'blur(0px)' }}
                  transition={{ duration: timings.reveal, ease: easing.smoothOut, delay: i * 0.12 }}
                  style={word === 'FUTURE' ? { textShadow: '0 0 20px rgba(255,212,0,0.4)' } : {}}
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.h1>

            {/* SUPPORTING TEXT */}
            <motion.p
              className="text-base lg:text-lg text-white/90 mb-10 leading-relaxed font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: timings.standard, ease: easing.smoothOut, delay: 0.4 }}
            >
              Master in-demand tech skills from industry experts. Learn at your pace, build your future.
            </motion.p>

            {/* CTA BUTTONS */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: timings.standard, ease: easing.smoothOut, delay: 0.5 }}
            >
              {/* Primary Button */}
              <motion.button
                whileHover={{ y: -2, boxShadow: '0 12px 40px rgba(255,212,0,0.35)' }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                className="flex-1 px-8 py-3 bg-yellow-400 text-black font-bold rounded-xl transition-all duration-200 hover:bg-yellow-300"
                style={{
                  boxShadow: '0 6px 20px rgba(255,212,0,0.2)',
                }}
              >
                Explore Courses
              </motion.button>

              {/* Secondary Button */}
              <motion.button
                whileHover={{ y: -2, boxShadow: '0 8px 20px rgba(255,255,255,0.1)' }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                className="flex-1 px-8 py-3 bg-white/20 text-white font-bold rounded-xl border border-white/30 transition-all duration-200 hover:bg-white/30"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: intentionally left free so Spline behind is visible and interactive */}
        <div className="hidden lg:block lg:w-3/5" />
      </div>
    </section>
  );
}
 
