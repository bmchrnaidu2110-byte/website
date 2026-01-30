import { useState } from "react";
import { motion } from "framer-motion";
import {
  staggerContainerVariants,
  staggerItemVariants,
  spring,
  easing,
} from "../utils/animations";
import { ImagePlaceholder } from "../utils/imagePlaceholder";

/**
 * STUDENT PROGRAMS - 3D Card Tilt + Light-Follow Effect
 * Premium micro-interactions:
 * - 3D hover tilt with mouse tracking
 * - Light-follow reflection effect
 * - Image zoom with mask reveal on hover
 * - Sequential stagger for ratings
 * - Magnetic card lift with glow
 */

export default function StudentPrograms() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [tiltPos, setTiltPos] = useState({ x: 0, y: 0 });

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

  const handleCardMouseMove = (idx: number) => (e: React.MouseEvent<HTMLDivElement>) => {
    if (hoveredIndex !== idx) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // 3D Tilt
    const tiltX = ((e.clientY - centerY) / (rect.height / 2)) * 8;
    const tiltY = ((e.clientX - centerX) / (rect.width / 2)) * 8;
    setTiltPos({ x: tiltY, y: tiltX });

    // Light-follow reflection
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleCardLeave = () => {
    setHoveredIndex(null);
    setTiltPos({ x: 0, y: 0 });
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section id="programs" className="w-full bg-white py-20 px-6">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={staggerContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-12" variants={staggerItemVariants}>
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-4">
            Student Learning Programs
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Comprehensive courses designed to launch your tech career.
          </p>
          <a href="#" className="text-yellow-400 font-semibold hover:underline">
            Browse all student courses →
          </a>
        </motion.div>

        {/* YouTube Video Embed */}
        <motion.div
          className="mb-12 aspect-video rounded-lg overflow-hidden shadow-lg"
          variants={staggerItemVariants}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=placeholder"
            title="Student Programs Overview"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </motion.div>

        {/* Course Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainerVariants}
        >
          {courses.map((course, idx) => (
            <motion.div
              key={idx}
              className="bg-white border border-black/10 rounded-2xl overflow-hidden transition-all duration-300 group perspective"
              variants={staggerItemVariants}
              onMouseMove={handleCardMouseMove(idx)}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={handleCardLeave}
              style={{
                rotateX: hoveredIndex === idx ? tiltPos.y : 0,
                rotateY: hoveredIndex === idx ? tiltPos.x : 0,
                perspective: '1200px',
              }}
              whileHover={{
                scale: 1.04,
                filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.12), 0 0 40px rgba(250,204,21,0.12))',
              }}
              transition={spring.bounce}
            >
              {/* Light-Follow Reflection Overlay */}
              {hoveredIndex === idx && (
                <motion.div
                  className="absolute inset-0 pointer-events-none z-10"
                  style={{
                    background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.4), transparent 80%)`,
                  }}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}

              {/* Image Container - ZOOM on hover with mask reveal */}
              <div className="w-full overflow-hidden relative h-40">
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5, ease: easing.smoothOut }}
                >
                  <ImagePlaceholder
                    alt={course.title}
                    aspectRatio="16:9"
                    containerClassName="rounded-none"
                  />
                </motion.div>
              </div>

              {/* Card Content - SLIDE UP on hover */}
              <motion.div
                className="p-6"
                initial={{ y: 0 }}
                animate={hoveredIndex === idx ? { y: -6 } : { y: 0 }}
                transition={{ ...spring.soft, duration: 0.28, ease: easing.smoothOut as any }}
              >
                {/* Course Header */}
                <h3 className="text-xl font-bold text-black mb-2">{course.title}</h3>

                {/* Rating - Sequential stagger on hover */}
                <motion.div className="flex items-center gap-2 mb-4">
                  <motion.span
                    className="text-yellow-400 font-bold"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={hoveredIndex === idx ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
                    transition={{ ...spring.bounce, delay: 0.05 }}
                  >
                    {course.rating}
                  </motion.span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <motion.span
                        key={i}
                        className="text-yellow-400"
                        initial={{ opacity: 0, y: -4 }}
                        animate={hoveredIndex === idx ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                        transition={{ ...spring.bounce, delay: i * 0.04 }}
                      >
                        ★
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Duration */}
                <p className="text-sm text-gray-600 mb-3">{course.duration}</p>

                {/* Description */}
                <p className="text-gray-700 mb-6">{course.description}</p>

                {/* Button - Magnetic with glow */}
                <motion.button
                  whileHover={{ scale: 1.06, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={spring.bounce}
                  className="w-full py-2 bg-black text-white font-semibold hover:bg-gray-900 transition-all duration-200 rounded-lg shadow-premium hover:shadow-premium-md"
                >
                  View Program
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
