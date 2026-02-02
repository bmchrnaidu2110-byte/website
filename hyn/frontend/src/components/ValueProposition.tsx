import { motion } from "framer-motion";
import { headlineReveal, subheadingReveal, staggerItemVariants, timings, easing } from "../utils/animations";

/**
 * VALUE PROPOSITION SECTION - Premium Glassmorphism Typography
 *
 * Design Philosophy:
 * - Black background with glass panel container
 * - Serif headline with yellow glow accents
 * - Staggered entrance animations with blur-in effect
 * - Yellow button with glow shadow on hover
 * - Black button with glass styling
 * - Premium spring-based physics
 * - Yellow / Black / White color system only
 */

export default function ValueProposition() {
  return (
    <section className="w-full bg-transparent py-24 px-6 overflow-hidden">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.1,
            },
          },
        }}
      >
        {/* Content Surface Container */}
        <div className="content-surface text-center">
          {/* Premium Headline - Serif with word-by-word reveal */}
          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 tracking-tight"
            variants={headlineReveal}
          >
            Learn Without <span className="text-yellow-400 drop-shadow-lg accent" style={{ textShadow: '0 0 20px rgba(255,212,0,0.3)' }}>Limits</span>
          </motion.h2>

          {/* Subheading - Delayed entrance */}
          <motion.p
            className="text-lg lg:text-xl mb-16 max-w-3xl mx-auto leading-relaxed"
            variants={subheadingReveal}
          >
            Whether you're a student exploring tech or a parent looking for quality education for your kids, our flexible programs adapt to your pace and schedule. Start anytime. Learn anywhere.
          </motion.p>
        </div>

        {/* Premium CTA Buttons */}
        <motion.div
          className="flex gap-6 justify-center flex-wrap mt-12"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >
          {/* Secondary Button: Student Programs */}
          <motion.button
            variants={staggerItemVariants}
            whileHover={{
              y: -2,
              scale: 1.03,
              boxShadow: '0 12px 30px rgba(0,0,0,0.25)',
            }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: timings.standard, ease: easing.gentle }}
            className="px-9 py-4 bg-white/10 text-white font-bold text-base rounded-full transition-all duration-300 hover:bg-white/20 tracking-wide border border-white/20"
            style={{
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            }}
          >
            Student Programs
          </motion.button>

          {/* Primary Button: Kids Programs - Yellow with Glow */}
          <motion.button
            variants={staggerItemVariants}
            whileHover={{
              y: -2,
              scale: 1.03,
              boxShadow: '0 12px 40px rgba(255,212,0,0.5)',
            }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: timings.standard, ease: easing.gentle }}
            className="px-9 py-4 primary-btn"
          >
            Kids Programs
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
