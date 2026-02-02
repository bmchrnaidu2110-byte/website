import { motion } from "framer-motion";
import { staggerContainerVariants, staggerItemVariants, timings, easing } from "../utils/animations";

/**
 * CAREER-READY SKILLS SECTION - Premium Glassmorphism Cards
 *
 * Design Philosophy:
 * - Glass cards with backdrop blur and soft borders
 * - Yellow glow accents on hover with spring animation
 * - Black background with white text hierarchy
 * - Staggered card entrance animations
 * - Yellow accent text for skill names
 * - Premium glass surfaces with inset highlights
 * - Yellow / Black / White color system only
 */

export default function CareerReadySkills() {
  const skills = ["React", "TypeScript", "Node.js", "Tailwind"];

  return (
    <section className="w-full bg-transparent py-24 px-6 overflow-hidden">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={staggerContainerVariants}
      >
        {/* Content Surface Container */}
        <div className="content-surface text-center">
          {/* Headline with Yellow Accent */}
          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 tracking-tight"
            variants={staggerItemVariants}
          >
            <span>Master</span> <span className="text-yellow-400 drop-shadow-lg accent" style={{ textShadow: '0 0 20px rgba(255,212,0,0.3)' }}>Career-Ready</span> <span>Skills</span>
          </motion.h2>

          {/* Subheading */}
          <motion.p
            className="text-lg lg:text-xl mb-16 max-w-3xl mx-auto leading-relaxed"
            variants={staggerItemVariants}
          >
            Learn in-demand technologies and frameworks used by top global companies. Our curriculum is designed by industry experts and updated continuously to match market demand.
          </motion.p>
        </div>


        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-5"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >
          {skills.map((skill, i) => (
            <motion.div
              key={skill}
              variants={staggerItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{
                y: -6,
                boxShadow: '0 20px 60px rgba(255,212,0,0.12)',
              }}
              transition={{ duration: timings.standard, ease: easing.gentle }}
              className="py-8 px-6 border border-yellow-400/20 rounded-2xl bg-yellow-400/5 transition-all duration-300 cursor-pointer"
              style={{
                boxShadow: '0 8px 20px rgba(255,212,0,0.08)',
              }}
            >
              <p className="text-yellow-400 font-bold text-base tracking-wide">{skill}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
