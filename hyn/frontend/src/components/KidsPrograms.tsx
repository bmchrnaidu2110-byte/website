import { useState } from "react";
import { motion } from "framer-motion";
import { headlineReveal, subheadingReveal, spring, easing } from "../utils/animations";
import { ImagePlaceholder } from "../utils/imagePlaceholder";

/**
 * KIDS PROGRAMS SECTION - Playful Premium Motion with Softer Easing
 *
 * Design Philosophy:
 * - Softer easing curves (easing.gentle) for warm, inviting feel
 * - Longer duration animations for playful but not cartoonish motion
 * - 3D tilt and light-follow like StudentPrograms but with lighter colors
 * - Sequential rating star animation with stagger
 * - Magnetic buttons with spring.bounce for fun interaction
 * - Premium polish without childishness
 */

export default function KidsPrograms() {
  const courses = [
    {
      title: "Introduction to Coding",
      rating: "4.9",
      duration: "6 weeks",
      description: "Learn coding basics with fun, interactive games."
    },
    {
      title: "Creative Game Design",
      rating: "4.8",
      duration: "8 weeks",
      description: "Design and build your own 2D games."
    },
    {
      title: "Web Design for Kids",
      rating: "4.7",
      duration: "6 weeks",
      description: "Create colorful websites with HTML and CSS."
    },
    {
      title: "AI & Machine Learning 101",
      rating: "4.9",
      duration: "8 weeks",
      description: "Explore AI concepts through hands-on projects."
    }
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Handle 3D tilt on mouse move (lighter than StudentPrograms)
  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    if (hoveredIndex !== index) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const angleX = ((e.clientY - centerY) / (rect.height / 2)) * 10;
    const angleY = ((e.clientX - centerX) / (rect.width / 2)) * 10;

    setMousePos({ x: angleY, y: angleX });
  };

  return (
    <section className="w-full bg-white py-20 px-6">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-12" variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: easing.gentle },
          },
        }}>
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-black mb-4"
            variants={headlineReveal}
          >
            Kids Learning Programs
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-700 mb-4"
            variants={subheadingReveal}
          >
            Age-appropriate tech education for young learners.
          </motion.p>
          <motion.a 
            href="#" 
            className="text-yellow-400 font-semibold hover:underline"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: easing.gentle, delay: 0.2 },
              },
            }}
            whileHover={{ x: 6 }}
          >
            Browse all kids courses →
          </motion.a>
        </motion.div>

        {/* YouTube Video Embed */}
        <motion.div
          className="mb-12 aspect-video rounded-lg overflow-hidden shadow-lg"
          variants={{
            hidden: { opacity: 0, scale: 0.95, filter: 'blur(10px)' },
            visible: {
              opacity: 1,
              scale: 1,
              filter: 'blur(0px)',
              transition: { duration: 0.8, ease: easing.smoothOut },
            },
          }}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=placeholder"
            title="Kids Programs Overview"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </motion.div>

        {/* Course Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {courses.map((course, idx) => (
            <motion.div
              key={idx}
              className="bg-white border border-black rounded-lg overflow-hidden cursor-pointer"
              variants={{
                hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: 'blur(0px)',
                  transition: { duration: 0.7, ease: easing.gentle },
                },
              }}
              onMouseMove={(e) => handleCardMouseMove(e, idx)}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => {
                setHoveredIndex(null);
                setMousePos({ x: 0, y: 0 });
              }}
              style={{
                rotateX: hoveredIndex === idx ? mousePos.y : 0,
                rotateY: hoveredIndex === idx ? mousePos.x : 0,
              }}
              whileHover={{
                scale: 1.06,
                y: -8,
                filter: 'drop-shadow(0 24px 48px rgba(0, 0, 0, 0.12))',
              }}
              transition={spring.soft}
            >
              {/* Placeholder Image Container */}
              <div className="w-full">
                <ImagePlaceholder
                  alt={course.title}
                  aspectRatio="4:3"
                  containerClassName="rounded-none"
                />
              </div>

              {/* Card Content */}
              <div className="p-6">
                {/* Course Header */}
                <h3 className="text-xl font-bold text-black mb-2">{course.title}</h3>

                {/* Rating - Sequential star animation */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-yellow-400 font-bold">{course.rating}</span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <motion.span 
                        key={i} 
                        className="text-yellow-400"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.4, 
                          ease: easing.gentle,
                          delay: i * 0.06,
                        }}
                        viewport={{ once: false }}
                      >
                        ★
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Duration */}
                <p className="text-sm text-gray-600 mb-3">{course.duration}</p>

                {/* Description */}
                <p className="text-gray-700 mb-6">{course.description}</p>

                {/* Button - Magnetic with golden glow */}
                <motion.button
                  whileHover={{
                    scale: 1.08,
                    y: -3,
                    filter: 'drop-shadow(0 16px 32px rgba(250, 204, 21, 0.3))',
                  }}
                  whileTap={{ scale: 0.96 }}
                  transition={spring.bounce}
                  className="w-full py-2 bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition-all duration-200 rounded"
                >
                  Explore Course
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
