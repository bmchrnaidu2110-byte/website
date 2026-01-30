import { motion } from "framer-motion";
import { headlineReveal, subheadingReveal, spring } from "../utils/animations";

/**
 * VALUE PROPOSITION SECTION - Premium White Authority with Apple Keynote Polish
 *
 * Design Philosophy:
 * - Clean white background (#FFFFFF) with premium serif typography
 * - Staggered headline reveals (word-by-word blur-in effect)
 * - Magnetic CTA buttons with golden glow fade on hover
 * - Delayed entrance for each element (Apple keynote style)
 * - Gen-Z positioning: flexible, adaptable, empowering
 * - Motion: Smooth ease-out curves, spring bounce on interaction
 */

export default function ValueProposition() {
  // Magnetic button with glow fade animation
  const magneticButtonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: spring.premium,
    },
    whileHover: {
      scale: 1.08,
      y: -4,
      filter: 'drop-shadow(0 16px 32px rgba(250, 204, 21, 0.3))',
    },
  };

  return (
    <section className="w-full bg-white py-24 px-6 overflow-hidden">
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
        {/* Premium Headline - Word-by-word blur-in reveal */}
        <motion.h2
          className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-black mb-8 tracking-tight"
          variants={headlineReveal}
        >
          Learn Without Limits
        </motion.h2>

        {/* Subheading - Delayed entrance with blur-in */}
        <motion.p
          className="text-lg lg:text-xl text-black/70 mb-16 max-w-3xl mx-auto leading-relaxed font-light"
          variants={subheadingReveal}
        >
          Whether you're a student exploring tech or a parent looking for quality education for your kids, our flexible programs adapt to your pace and schedule. Start anytime. Learn anywhere.
        </motion.p>

        {/* Premium CTA Buttons */}
        <motion.div
          className="flex gap-6 justify-center flex-wrap"
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
            variants={magneticButtonVariants}
            whileHover={{ scale: 1.08, y: -4 }}
            whileTap={{ scale: 0.96 }}
            transition={spring.bounce}
            className="px-9 py-4 bg-black text-white font-bold text-base rounded-xl transition-all duration-200 hover:bg-black/90 tracking-wide"
          >
            Student Programs
          </motion.button>

          {/* Primary Button: Kids Programs - Magnetic with golden glow */}
          <motion.button
            variants={magneticButtonVariants}
            whileHover={{
              scale: 1.08,
              y: -4,
              filter: 'drop-shadow(0 20px 40px rgba(250, 204, 21, 0.4))',
            }}
            whileTap={{ scale: 0.96 }}
            transition={spring.bounce}
            className="px-9 py-4 bg-yellow-400 text-black font-bold text-base rounded-xl transition-all duration-200 hover:bg-yellow-300 tracking-wide"
          >
            Kids Programs
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
