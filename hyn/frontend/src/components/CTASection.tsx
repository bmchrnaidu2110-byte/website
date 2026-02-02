import { motion } from "framer-motion";
import { spring, easing, timings, magneticButton, headlineReveal, subheadingReveal } from '../utils/animations';

/**
 * CTA SECTION - Premium Glassmorphism Call-to-Action
 * 
 * Premium design:
 * - Full-screen black background with glass panels
 * - Frosted glass content container with yellow glow
 * - Staggered typography reveal with blur-in effect
 * - Yellow button with glow shadow on hover
 * - Smooth spring-based animations
 * - Yellow / Black / White color system only
 */

export default function CTASection() {
  return (
    <section id="cta" className="w-full bg-black py-20 px-6 relative overflow-hidden">
      {/* Animated gradient glow background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: easing.gentle,
        }}
        style={{
          background: 'radial-gradient(circle at center, rgba(255,212,0,0.06), transparent 70%)',
          backgroundSize: '200% 200%',
        }}
      />

      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl px-8 py-16 md:px-12 md:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        style={{
          boxShadow: '0 8px 32px rgba(255,212,0,0.08), inset 0 1px 1px rgba(255,255,255,0.2)',
        }}
      >
        <motion.h2
          className="text-5xl md:text-6xl font-serif font-bold text-white mb-6"
          variants={headlineReveal}
        >
          Ready to Transform Your Future?
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed"
          variants={subheadingReveal}
        >
          Join thousands of students already learning with Hyntrixx. Start your journey today.
        </motion.p>

        {/* CTA Button - Yellow with glow on hover */}
        <motion.button
          className="px-10 py-4 bg-yellow-400 text-black font-bold text-lg rounded-xl transition-all duration-200"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: timings.reveal, ease: easing.smoothOut, delay: 0.4 }}
          variants={magneticButton}
          whileHover="hover"
          whileTap="tap"
          style={{
            boxShadow: '0 6px 20px rgba(255,212,0,0.2)',
          }}
          onHoverStart={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(255,212,0,0.35)';
          }}
          onHoverEnd={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 20px rgba(255,212,0,0.2)';
          }}
        >
          Explore Programs
        </motion.button>
      </motion.div>
    </section>
  );
}
