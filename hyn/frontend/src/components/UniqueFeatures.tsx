import { motion } from "framer-motion";
import { headlineReveal, subheadingReveal, spring, easing } from "../utils/animations";
import { ImagePlaceholder } from "../utils/imagePlaceholder";

/**
 * UNIQUE FEATURES SECTION - Icon Reveal with Scroll-Stagger Polish
 *
 * Design Philosophy:
 * - Scroll-triggered card entrance with stagger and scale-in
 * - Icon reveal animation with rotate effect
 * - Card lift + glow on hover using spring.bounce
 * - Parallax offset for depth perception
 * - Premium drop-shadow effects with golden glow
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
    <section id="features" className="w-full bg-white py-20 px-6">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-12" variants={{
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: easing.smoothOut },
          },
        }}>
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-black mb-4"
            variants={headlineReveal}
          >
            What Makes Us <span className="text-yellow-400">UNIQUE</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-700"
            variants={subheadingReveal}
          >
            Premium education that stands out from the rest.
          </motion.p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="bg-white border-2 border-black rounded-lg overflow-hidden cursor-pointer"
              variants={{
                hidden: { opacity: 0, scale: 0.8, filter: 'blur(8px)', y: 40 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  filter: 'blur(0px)',
                  y: 0,
                  transition: { duration: 0.6, ease: easing.smoothOut },
                },
              }}
              whileHover={{
                y: -12,
                filter: 'drop-shadow(0 24px 48px rgba(250, 204, 21, 0.2))',
              }}
              transition={spring.bounce}
            >
              {/* Placeholder Image - Icon with rotate reveal */}
              <motion.div 
                className="w-full"
                variants={{
                  hidden: { rotateZ: -180, opacity: 0 },
                  visible: {
                    rotateZ: 0,
                    opacity: 1,
                    transition: { duration: 0.7, ease: easing.smoothOut, delay: idx * 0.15 + 0.3 },
                  },
                }}
              >
                <ImagePlaceholder
                  alt={`${feature.title} icon`}
                  aspectRatio="square"
                  containerClassName="rounded-none border-b-2 border-black"
                  showBorder={false}
                />
              </motion.div>

              {/* Card Content */}
              <div className="p-8">
                {/* Title */}
                <motion.h3 
                  className="text-2xl font-bold text-black mb-3"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { duration: 0.5, ease: easing.smoothOut, delay: idx * 0.15 + 0.4 },
                    },
                  }}
                >
                  {feature.title}
                </motion.h3>

                {/* Description */}
                <motion.p 
                  className="text-gray-700"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { duration: 0.5, ease: easing.smoothOut, delay: idx * 0.15 + 0.5 },
                    },
                  }}
                >
                  {feature.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
