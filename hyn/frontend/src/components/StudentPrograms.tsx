import { motion } from "framer-motion";
import {
  staggerContainerVariants,
  staggerItemVariants,
  spring,
  easing,
  timings,
  magneticCard,
} from "../utils/animations";
import { ImagePlaceholder } from "../utils/imagePlaceholder";

/**
 * STUDENT PROGRAMS - Premium Glassmorphism Card Grid
 * 
 * Premium design:
 * - Glass card surfaces with backdrop blur and soft borders
 * - Yellow glow accents on hover with spring animation
 * - Card lift + subtle scale + perspective transform on hover
 * - Image zoom and overlay fade on hover
 * - Responsive grid: 1 col mobile, 2 cols tablet, 4 cols desktop
 * - Staggered reveal animation with spring physics
 * - Yellow accent system (no other colors except black/white)
 */

export default function StudentPrograms() {
  const courses = [
    {
      title: "Full-Stack Web Development",
      rating: "4.9",
      duration: "12 weeks",
      description: "Master React, TypeScript, Node.js, and databases."
    },
    {
      title: "UI/UX Design Essentials",
      rating: "4.8",
      duration: "8 weeks",
      description: "Learn design thinking, Figma, and user research."
    },
    {
      title: "Mobile App Development",
      rating: "4.7",
      duration: "10 weeks",
      description: "Build iOS and Android apps with React Native."
    },
    {
      title: "Data Science Fundamentals",
      rating: "4.9",
      duration: "10 weeks",
      description: "Python, ML, and real-world data analysis."
    }
  ];

  return (
    <section id="programs" className="w-full bg-transparent py-20 px-6">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={staggerContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* Section Header - Content Surface */}
        <div className="content-surface text-center">
          <motion.div variants={staggerItemVariants}>
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4">
              Student Learning Programs
            </h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
              Comprehensive courses designed to launch your tech career.
            </p>
            <motion.a 
              href="#" 
              className="inline-block text-yellow-400 font-semibold hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Browse all student courses →
            </motion.a>
          </motion.div>
        </div>

        {/* YouTube Video Embed - centered, supportive, elevated */}
        <motion.div
          className="mb-16 mx-auto max-w-3xl rounded-2xl overflow-hidden bg-white border border-gray-200 elevation-2 h-56 sm:h-64 md:h-80"
          variants={staggerItemVariants}
          style={{
            boxShadow: '0 12px 36px rgba(0,0,0,0.08)',
          }}
        >
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=placeholder"
            title="Student Programs Overview"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </motion.div>

        {/* Course Cards - Modern flat + depth grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          variants={staggerContainerVariants}
        >
          {courses.map((course, idx) => (
            <motion.div key={idx} variants={staggerItemVariants} className="relative">
              <motion.div
                className="course-card relative rounded-2xl overflow-hidden group card card-glow-subtle transition-all duration-250 bg-white border border-gray-200 elevation-2"
                whileHover={{ y: -6, scale: 1.01, boxShadow: '0 22px 56px rgba(255,212,0,0.12)' }}
                transition={{ type: 'spring', stiffness: 420, damping: 38 }}
                style={{ boxShadow: '0 8px 20px rgba(0,0,0,0.06)' }}
              >
                {/* Ambient glow element (revealed via CSS on group:hover / focus) */}
                <div aria-hidden className="card-glow card-glow-subtle" />
              {/* Image Container - smooth zoom on hover */}
              <div className="w-full overflow-hidden relative h-48 bg-gray-100">
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: timings.standard, ease: easing.smoothOut }}
                  className="absolute inset-0"
                >
                  <ImagePlaceholder
                    alt={course.title}
                    aspectRatio="16:9"
                    containerClassName="rounded-none w-full h-full object-cover"
                  />
                </motion.div>
                {/* Gradient overlay - fade on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40 opacity-60"
                  whileHover={{ opacity: 0.3 }}
                  transition={{ duration: timings.fast }}
                  style={{ pointerEvents: 'none' }}
                />
              </div>

              {/* Card Content */}
              <div className="p-6">
                {/* Course Title */}
                <h3 className="text-xl font-serif font-bold text-white mb-3">
                  {course.title}
                </h3>

                {/* Rating with yellow stars */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-yellow-400 font-bold text-sm">
                    {course.rating}
                  </span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xs">
                        ★
                      </span>
                    ))}
                  </div>
                </div>

                {/* Duration - secondary text */}
                <p className="text-sm text-white/60 mb-3 font-medium">{course.duration}</p>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{course.description}</p>

                {/* CTA Button - Yellow glow on hover */}
                <motion.button
                  whileHover={{ y: -2, boxShadow: '0 12px 40px rgba(255,212,0,0.25)' }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 480, damping: 36 }}
                  className="w-full py-3 bg-black hover:bg-yellow-400 hover:text-black text-white font-bold rounded-xl transition-all duration-200"
                  style={{
                    boxShadow: '0 4px 12px rgba(255,212,0,0.12)',
                    willChange: 'transform, box-shadow',
                  }}
                >
                  View Program
                </motion.button>
              </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
