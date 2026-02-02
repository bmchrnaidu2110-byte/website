import { motion } from "framer-motion";
import { staggerContainerVariants, staggerItemVariants, timings } from "../utils/animations";
import { ImagePlaceholder } from "../utils/imagePlaceholder";

/**
 * KIDS PROGRAMS - Premium Glassmorphism Card Grid
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

export default function KidsPrograms() {
  const courses = [
    { title: "Introduction to Coding", rating: "4.9", duration: "6 weeks", description: "Learn coding basics with fun, interactive games." },
    { title: "Creative Game Design", rating: "4.8", duration: "8 weeks", description: "Design and build your own 2D games." },
    { title: "Web Design for Kids", rating: "4.7", duration: "6 weeks", description: "Create colorful websites with HTML and CSS." },
    { title: "AI & Machine Learning 101", rating: "4.9", duration: "8 weeks", description: "Explore AI concepts through hands-on projects." },
  ];

  return (
    <section className="w-full bg-transparent py-20 px-6">
      <motion.div className="max-w-6xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={staggerContainerVariants}>
        <div className="content-surface text-center">
          <motion.div variants={staggerItemVariants}>
            <h2 className="text-5xl md:text-6xl font-serif font-black mb-4">Kids Learning Programs</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto leading-relaxed">Age-appropriate tech education for young learners.</p>
            <motion.a href="#" className="inline-block text-yellow-400 font-semibold hover:text-white transition-colors" whileHover={{ x: 6 }}>
              Browse all kids courses →
            </motion.a>
          </motion.div>
        </div>

        <motion.div className="mb-12 mx-auto max-w-3xl rounded-2xl overflow-hidden bg-white border border-gray-200 elevation-2 h-48 sm:h-56" variants={staggerItemVariants} style={{ boxShadow: '0 12px 36px rgba(0,0,0,0.08)' }}>
          <iframe className="w-full h-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=placeholder" title="Kids Programs Overview" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8" variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
          {courses.map((course, idx) => (
            <motion.div key={idx} variants={staggerItemVariants} className="relative">
              <motion.article className="course-card relative rounded-2xl overflow-hidden cursor-pointer bg-white border border-gray-200 group card card-glow-playful elevation-2" whileHover={{ y: -8, scale: 1.03 }} transition={{ type: 'spring', stiffness: 380, damping: 34 }} style={{ boxShadow: '0 8px 20px rgba(0,0,0,0.06)' }}>
                {/* Ambient playful glow (revealed on hover/focus) */}
                <div aria-hidden className="card-glow card-glow-playful" />
                <div className="w-full overflow-hidden relative">
                  <motion.div whileHover={{ scale: 1.08 }} transition={{ duration: timings.standard }}>
                    <ImagePlaceholder alt={course.title} aspectRatio="4:3" containerClassName="rounded-none w-full h-full object-cover" />
                  </motion.div>
                  <motion.div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/10" whileHover={{ opacity: 0 }} transition={{ duration: 0.25 }} style={{ pointerEvents: 'none' }} />
                </div>

                <div className="p-6 lg:p-8">
                  <h3 className="text-xl font-bold text-black mb-2">{course.title}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-yellow-400 font-bold">{course.rating}</span>
                    <div className="flex gap-0.5">{[...Array(5)].map((_, i) => (<span key={i} className="text-yellow-400">★</span>))}</div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{course.duration}</p>
                  <p className="text-gray-600 mb-6">{course.description}</p>

                  <motion.button whileHover={{ y: -2, boxShadow: '0 12px 40px rgba(255,212,0,0.25)' }} whileTap={{ scale: 0.98 }} transition={{ type: 'spring', stiffness: 480, damping: 36 }} className="w-full py-3 bg-black hover:bg-yellow-400 hover:text-black text-white font-bold rounded-xl transition-all duration-200" style={{ boxShadow: '0 4px 12px rgba(255,212,0,0.12)', willChange: 'transform, box-shadow' }}>
                    Explore Course
                  </motion.button>
                </div>
              </motion.article>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
