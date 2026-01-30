import { motion } from "framer-motion";
import { spring, easing } from "../utils/animations";

/**
 * CAREER-READY SKILLS SECTION - Scroll-Linked Premium Glass-Morphic Cards
 *
 * Design Philosophy:
 * - Glass-morphic cards (bg-white/5, border-white/10) with scroll-triggered blur-in
 * - Hover lift + shadow bloom effect using spring.bounce for magnetic feel
 * - Parallax offset between headline and skill cards (depth effect)
 * - Black background with white text and yellow accents
 * - Scroll-based entrance animations with stagger
 * - Premium depth perception with soft shadows and glow
 */

// using shared premium spring and easing from animations utilities

export default function CareerReadySkills() {
  const skills = ["React", "TypeScript", "Node.js", "Tailwind"];

  // Scroll-triggered blur-in animation
  const skillVariants = {
    hidden: { opacity: 0, filter: 'blur(10px)', y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        duration: 0.7,
        ease: easing.smoothOut,
        delay: i * 0.1,
      },
    }),
  };

  return (
    <section className="w-full bg-black text-white py-24 px-6 overflow-hidden">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {/* Headline with Yellow Accent - Parallax offset */}
        <motion.h2
          className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 tracking-tight"
          variants={{
            hidden: { opacity: 0, y: 40, filter: 'blur(12px)' },
            visible: {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              transition: { duration: 0.8, ease: easing.smoothOut },
            },
          }}
        >
          <span className="text-white">Master</span> <span className="text-yellow-400">Career-Ready</span> <span className="text-white">Skills</span>
        </motion.h2>

        {/* Subheading - Greater parallax offset */}
        <motion.p
          className="text-lg lg:text-xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed font-light"
          variants={{
            hidden: { opacity: 0, y: 50, filter: 'blur(10px)' },
            visible: {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              transition: { duration: 0.8, ease: easing.smoothOut, delay: 0.1 },
            },
          }}
        >
          Learn in-demand technologies and frameworks used by top global companies. Our curriculum is designed by industry experts and updated continuously to match market demand.
        </motion.p>

        {/* Skills Grid - Scroll-triggered with stagger */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-5"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
        >
          {skills.map((skill, i) => (
            <motion.div
              key={skill}
              custom={i}
              variants={skillVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{
                scale: 1.08,
                y: -6,
                filter: 'drop-shadow(0 20px 40px rgba(250, 204, 21, 0.3))',
              }}
              transition={spring.bounce}
              className="py-8 px-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm transition-all duration-300 cursor-pointer"
            >
              <p className="text-yellow-400 font-bold text-base tracking-wide drop-shadow-[0_0_15px_rgba(250,204,21,0.3)]">{skill}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
