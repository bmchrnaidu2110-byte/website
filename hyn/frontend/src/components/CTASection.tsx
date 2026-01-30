import { motion } from "framer-motion";
import { spring, easing, headlineReveal, subheadingReveal } from '../utils/animations';

/**
 * CTA SECTION - High-Emotion Call-to-Action
 * Premium micro-interactions:
 * - Animated background pulse/glow
 * - Staggered typography reveal
 * - Magnetic CTA button with subtle micro-shake on hover
 * - Glow halo that intensifies on interaction
 */

export default function CTASection() {
  return (
    <section id="cta" className="w-full bg-yellow-400 py-20 px-6 relative overflow-hidden">
      {/* Animated background pulse (subtle glow animation) */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: easing.gentle,
        }}
        style={{
          background: 'linear-gradient(45deg, rgba(0,0,0,0.05), rgba(0,0,0,0.02), rgba(0,0,0,0.05))',
          backgroundSize: '200% 200%',
        }}
      />

      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-black mb-6"
          variants={headlineReveal}
        >
          Ready to Transform Your Future?
        </motion.h2>

        <motion.p
          className="text-xl text-black mb-8 max-w-2xl mx-auto"
          variants={subheadingReveal}
        >
          Join thousands of students already learning with Hyntrixx. Start your journey today.
        </motion.p>

        {/* Magnetic CTA with micro-shake on hover */}
        <motion.button
          className="px-10 py-4 bg-black text-yellow-400 font-bold text-lg rounded-lg shadow-premium"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ ...spring.bounce, delay: 0.4 }}
          whileHover={{
            scale: 1.08,
            y: -4,
            filter: 'drop-shadow(0 20px 40px rgba(250,204,21,0.4))',
          }}
          whileTap={{ scale: 0.96 }}
          onHoverStart={(e) => {
            // Trigger subtle micro-shake on hover
            const element = e.currentTarget as HTMLButtonElement;
            element.animate(
              [
                { transform: 'translateX(0)' },
                { transform: 'translateX(-2px)' },
                { transform: 'translateX(2px)' },
                { transform: 'translateX(-1px)' },
                { transform: 'translateX(1px)' },
                { transform: 'translateX(0)' },
              ],
              { duration: 400, easing: 'cubic-bezier(0.22, 0.82, 0.54, 0.9)' }
            );
          }}
        >
          Explore Programs
        </motion.button>
      </motion.div>
    </section>
  );
}
