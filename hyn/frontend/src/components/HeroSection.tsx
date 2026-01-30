import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { easing, spring } from '../utils/animations';

/**
 * HERO SECTION - Cinema Masterpiece with Premium Motion
 *
 * Premium micro-interactions:
 * - Cinematic staggered entrance with blur reveal
 * - Split-text animation (word-by-word blur-in)
 * - Magnetic CTA buttons with glow halo
 * - Scroll-linked hourglass rotation
 * - Parallax depth with 3D tilt hover
 * - Background gradient drift
 */

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const hourglassRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Hourglass rotation driven by scroll (0-360°)
  const hourglassRotation = useTransform(scrollYProgress, [0, 1], [0, 360]);

  // Decorative circle parallax
  const circleScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.15]);
  const circleOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [0.4, 0.3, 0]);
  
  // Handle mouse move for 3D tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!hourglassRef.current) return;
    
    const rect = hourglassRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const angleX = ((e.clientY - centerY) / (rect.height / 2)) * 12;
    const angleY = ((e.clientX - centerX) / (rect.width / 2)) * 12;
    
    setMousePosition({ x: angleY, y: angleX });
  };
  
  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen bg-white pt-24 overflow-hidden" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      {/* ANIMATED MESH GRID BACKGROUND */}
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(0,0,0,.05) 25%, rgba(0,0,0,.05) 26%, transparent 27%, transparent 74%, rgba(0,0,0,.05) 75%, rgba(0,0,0,.05) 76%, transparent 77%, transparent), 
                            linear-gradient(90deg, transparent 24%, rgba(0,0,0,.05) 25%, rgba(0,0,0,.05) 26%, transparent 27%, transparent 74%, rgba(0,0,0,.05) 75%, rgba(0,0,0,.05) 76%, transparent 77%, transparent)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="max-w-7xl mx-auto h-full px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between h-full gap-16 lg:gap-20 py-12 lg:py-0">
          {/* LEFT SECTION: Premium Content with BLUR-IN Text */}
          <motion.div
            className="flex-1 flex flex-col justify-center z-10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: easing.smoothOut, delay: 0 }}
          >
            {/* HEADLINE: BLUR-IN Word-by-Word Animation */}
            <motion.h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight text-black mb-8 tracking-tight">
              {['LEARN', 'THE', 'FUTURE', 'WAY'].map((word, i) => (
                <motion.span
                  key={i}
                  className={word === 'FUTURE' ? 'text-yellow-400 inline-block' : 'inline-block'}
                  initial={{ opacity: 0, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, filter: 'blur(0px)' }}
                  transition={{ duration: 0.8, ease: easing.smoothOut, delay: i * 0.12 }}
                >
                  {word}&nbsp;
                </motion.span>
              ))}
              <br />
            </motion.h1>

            {/* SUPPORTING TEXT - Premium hierarchy with stagger */}
            <motion.p
              className="text-lg lg:text-xl text-black/70 mb-12 max-w-xl leading-relaxed font-light"
              initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, ease: easing.smoothOut, delay: 0.45 }}
            >
              Learn, grow, and explore opportunities with guided support from industry experts. Build real skills for the jobs that matter.
            </motion.p>

            {/* CTA BUTTONS - Magnetic + Glow on hover */}
            <motion.div
              className="flex gap-5 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easing.smoothOut, delay: 0.6 }}
            >
              {/* Primary Button: Explore Programs - Magnetic + Golden Glow */}
              <motion.button
                whileHover={{
                  scale: 1.06,
                  y: -4,
                  filter: 'drop-shadow(0 20px 40px rgba(250,204,21,0.4))',
                }}
                whileTap={{ scale: 0.96 }}
                transition={spring.bounce}
                className="px-9 py-4 bg-yellow-400 text-black font-bold text-base rounded-xl shadow-lg transition-all duration-200 hover:bg-yellow-300 tracking-wide"
              >
                Explore Programs
              </motion.button>

              {/* Secondary Button: Career Support - Premium elevation */}
              <motion.button
                whileHover={{
                  scale: 1.06,
                  y: -4,
                  backgroundColor: '#000000',
                  color: '#FFFFFF',
                  filter: 'drop-shadow(0 16px 32px rgba(0,0,0,0.2))',
                }}
                whileTap={{ scale: 0.96 }}
                transition={spring.bounce}
                className="px-9 py-4 border-2 border-black text-black font-bold text-base rounded-xl transition-all duration-200 tracking-wide"
              >
                Career Support
              </motion.button>
            </motion.div>
          </motion.div>

          {/* RIGHT SECTION: Premium Decorative Visuals with 3D TILT + PARALLAX */}
          <motion.div
            className="flex-1 relative h-96 lg:h-full min-h-80 flex items-center justify-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: easing.smoothOut, delay: 0.15 }}
          >
            {/* Large Golden Gradient Circle - Parallax Effect */}
            <motion.div
              style={{ scale: circleScale, opacity: circleOpacity }}
              className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 blur-3xl"
            />

            {/* 3D TILT Hourglass - Responds to mouse position with premium spring */}
            <motion.div
              ref={hourglassRef}
              className="relative z-10 w-64 h-80 perspective"
              style={{
                rotate: hourglassRotation,
                rotateX: mousePosition.y,
                rotateY: mousePosition.x,
              }}
              transition={spring.soft}
            >
              <svg
                viewBox="0 0 200 280"
                className="w-full h-full drop-shadow-xl"
              >
                {/* Outer Frame - Rose/Pink */}
                <defs>
                  <linearGradient id="frameGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#E8B4A8', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#D4816E', stopOpacity: 1 }} />
                  </linearGradient>

                  <linearGradient id="sandGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#1E40AF', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>

                {/* Top Frame */}
                <rect x="50" y="20" width="100" height="15" rx="4" fill="url(#frameGradient)" />

                {/* Top Chamber - Curved */}
                <path
                  d="M 60 35 L 140 35 Q 145 35 145 40 L 145 90 Q 145 100 135 105 L 65 105 Q 55 100 55 90 L 55 40 Q 55 35 60 35 Z"
                  fill="none"
                  stroke="url(#frameGradient)"
                  strokeWidth="3"
                />

                {/* Sand flowing down - Blue */}
                <ellipse cx="100" cy="100" rx="8" ry="12" fill="url(#sandGradient)" opacity="0.8" />

                {/* Middle Connector */}
                <line x1="100" y1="105" x2="100" y2="130" stroke="url(#frameGradient)" strokeWidth="3" />

                {/* Bottom Chamber - Curved */}
                <path
                  d="M 60 140 L 140 140 Q 145 140 145 145 L 145 220 Q 145 235 130 240 L 70 240 Q 55 235 55 220 L 55 145 Q 55 140 60 140 Z"
                  fill="none"
                  stroke="url(#frameGradient)"
                  strokeWidth="3"
                />

                {/* Collected Sand at bottom - Blue */}
                <ellipse cx="100" cy="215" rx="35" ry="18" fill="url(#sandGradient)" opacity="0.9" />

                {/* Bottom Frame */}
                <rect x="50" y="245" width="100" height="15" rx="4" fill="url(#frameGradient)" />

                {/* Decorative shine effect */}
                <ellipse cx="70" cy="50" rx="12" ry="20" fill="white" opacity="0.2" />
              </svg>
            </motion.div>

            {/* Decorative Black Circle Accent (Parallax) */}
            <motion.div
              className="absolute bottom-20 -left-20 w-56 h-56 rounded-full bg-black opacity-5 blur-3xl"
              animate={{
                scale: [0.85, 1.05, 0.85],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
