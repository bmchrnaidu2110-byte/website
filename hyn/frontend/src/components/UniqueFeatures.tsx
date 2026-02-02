import { motion } from "framer-motion";
import { headlineReveal, subheadingReveal, spring, easing, timings, staggerContainerVariants, staggerItemVariants } from "../utils/animations";
import { ImagePlaceholder } from "../utils/imagePlaceholder";

/**
 * UNIQUE FEATURES SECTION - Premium Glassmorphism Cards
 *
 * Design:
 * - Glass card surfaces with backdrop blur and soft borders
 * - Yellow glow accents on hover with spring animation
 * - Card lift + subtle scale on hover
 * - Image icon with rotate entrance animation
 * - Responsive grid: 1 col mobile, 2 cols tablet, 4 cols desktop
 * - Yellow / Black / White color system only
 */

export default function UniqueFeatures() {
  const features = [
    {
      title: "Expert Instructors",
      description: "Learn from industry veterans with real-world experience."
    },
    {
      title: "Hands-On Projects",
      description: "Build portfolio-ready projects from day one."
    },
    {
      title: "Career Support",
      description: "Get job placement assistance and resume reviews."
    },
    {
      title: "Lifetime Access",
      description: "Enjoy course materials and updates forever."
    }
  ];

  return (
    <section id="features" className="w-full bg-transparent py-20 px-6">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={staggerContainerVariants}
      >
        {/* Section Header - Content Surface */}
        <div className="content-surface text-center mb-16">
          <motion.div variants={staggerItemVariants}>
            <motion.h2 
              className="text-5xl md:text-6xl font-serif font-bold mb-4"
              variants={headlineReveal}
            >
              What Makes Us <span className="accent text-yellow-400 drop-shadow-lg" style={{ textShadow: '0 0 20px rgba(255,212,0,0.3)' }}>UNIQUE</span>
            </motion.h2>
            <motion.p 
              className="text-lg max-w-2xl mx-auto leading-relaxed"
              variants={subheadingReveal}
            >
              Premium education that stands out from the rest.
            </motion.p>
          </motion.div>
        </div>

        {/* Feature Cards - Glassmorphism Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          variants={staggerContainerVariants}
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="relative rounded-2xl overflow-hidden transition-all duration-300 bg-white border border-gray-100"
              variants={staggerItemVariants}
              whileHover={{ y: -6, scale: 1.02, boxShadow: '0 20px 60px rgba(255,212,0,0.12)' }}
              transition={{ duration: timings.standard, ease: easing.gentle }}
              style={{
                boxShadow: '0 8px 24px rgba(255,212,0,0.08)',
              }}
            >
              {/* Icon/Image Container - rotate reveal */}
              <motion.div 
                className="w-full bg-gray-100 border-b border-gray-200"
                initial={{ rotateZ: -12, opacity: 0 }}
                whileInView={{ rotateZ: 0, opacity: 1 }}
                transition={{ duration: timings.reveal, ease: easing.smoothOut, delay: idx * 0.08 }}
                viewport={{ once: false }}
              >
                <ImagePlaceholder
                  alt={`${feature.title} icon`}
                  aspectRatio="square"
                  containerClassName="rounded-none"
                  showBorder={false}
                />
              </motion.div>

              {/* Card Content */}
              <div className="p-6 lg:p-8">
                {/* Title */}
                <h3 className="text-xl font-serif font-bold text-black mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
