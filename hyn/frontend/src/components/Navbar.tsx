import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue } from 'framer-motion';
import { spring, easing, dropdownSlideDown } from '../utils/animations';

/**
 * GLOBAL NAVBAR - Elite Magnetic & Spotlight Design
 * 
 * Premium micro-interactions:
 * - Magnetic logo and login button with pointer tracking
 * - Spotlight effect on nav links (radial gradient follows cursor)
 * - Animated underline that slides underneath on hover
 * - Scroll-based blur/opacity transition
 * - Glassmorphism with backdrop-blur and soft shadows
 * - Premium dropdown with spring entrance
 */

export default function Navbar() {
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [navBlur, setNavBlur] = useState(false);
  
  const logoRef = useRef<HTMLDivElement>(null);
  const loginRef = useRef<HTMLButtonElement>(null);
  
  const [isLogoHovering, setIsLogoHovering] = useState(false);
  const [isLoginHovering, setIsLoginHovering] = useState(false);
  
  // Magnetic values for logo
  const logoX = useMotionValue(0);
  const logoY = useMotionValue(0);
  
  // Magnetic values for login button
  const loginX = useMotionValue(0);
  const loginY = useMotionValue(0);

  // Scroll listener for navbar blur effect
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setNavBlur(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Handle mouse movement for magnetic effect
  const handleMouseMove = (e: React.MouseEvent, element: 'logo' | 'login') => {
    
    if (element === 'logo' && logoRef.current && isLogoHovering) {
      const rect = logoRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const distX = (e.clientX - centerX) * 0.2;
      const distY = (e.clientY - centerY) * 0.2;
      
      logoX.set(distX);
      logoY.set(distY);
    }
    
    if (element === 'login' && loginRef.current && isLoginHovering) {
      const rect = loginRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const distX = (e.clientX - centerX) * 0.15;
      const distY = (e.clientY - centerY) * 0.15;
      
      loginX.set(distX);
      loginY.set(distY);
    }
  };
  
  const handleMagnetLeave = (element: 'logo' | 'login') => {
    if (element === 'logo') {
      setIsLogoHovering(false);
      logoX.set(0);
      logoY.set(0);
    } else {
      setIsLoginHovering(false);
      loginX.set(0);
      loginY.set(0);
    }
  };

  // Premium dropdown animation with staggered child reveals
  const dropdownVariants = dropdownSlideDown;

  // Staggered reveal for dropdown items
  const itemVariants = {
    hidden: { opacity: 0, x: -8 },
    visible: (i: number) => (({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
        ease: 'easeOut',
      },
    })),
  };

  return (
    <nav 
      className="fixed top-0 left-0 w-full z-50 border-b border-white/20"
      onMouseMove={(e) => {
        handleMouseMove(e, 'logo');
        handleMouseMove(e, 'login');
      }}
    >
      {/* Animated backdrop with scroll-based blur */}
      <motion.div
        className="absolute inset-0 bg-white/80 backdrop-blur-xl"
        animate={{
          backgroundColor: navBlur ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.7)',
          backdropFilter: navBlur ? 'blur(20px)' : 'blur(10px)',
        }}
        transition={{ duration: 0.3, ease: easing.gentle }}
      />
      
      <div className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LEFT SECTION: Logo & Brand - MAGNETIC EFFECT */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: easing.smoothOut }}
          className="flex items-center gap-2.5"
        >
          {/* MAGNETIC Logo - Moves with cursor */}
          <motion.div
            ref={logoRef}
            onMouseEnter={() => setIsLogoHovering(true)}
            onMouseLeave={() => handleMagnetLeave('logo')}
            style={{ x: logoX, y: logoY }}
            whileHover={{ scale: 1.14, filter: 'drop-shadow(0 20px 48px rgba(250,204,21,0.35))' }}
            whileTap={{ scale: 0.96 }}
            transition={spring.snappy}
            className="w-11 h-11 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-premium cursor-pointer"
          >
            <span className="text-black font-black text-sm tracking-wider">HN</span>
          </motion.div>

          {/* Brand Name */}
          <span className="text-black font-semibold text-lg hidden sm:inline tracking-tight">
            Hyntrixx
          </span>
        </motion.div>

        {/* CENTER SECTION: Navigation with SPOTLIGHT Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: easing.smoothOut }}
          className="hidden lg:flex items-center gap-10"
        >
          {/* Explore Program with Premium Dropdown */}
          <div className="relative group">
            <motion.button
              onClick={() => setIsExploreOpen(!isExploreOpen)}
              whileHover={{ color: '#FFD400' }}
              className="text-black font-medium text-sm flex items-center gap-2 transition-colors duration-200 tracking-tight"
            >
              Explore Program
              <motion.svg
                animate={{ rotate: isExploreOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </motion.svg>
            </motion.button>

            {/* Premium Dropdown Menu */}
            <AnimatePresence>
              {isExploreOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute top-full left-0 mt-3 w-52 bg-white rounded-xl shadow-xl border border-black/5 py-3 overflow-hidden"
                >
                  {['Artificial Intelligence', 'Machine Learning', 'Data Science', 'Web Development', 'Mobile Development', 'Cloud Computing'].map((item, i) => (
                    <motion.a
                      key={item}
                      href="#"
                      custom={i}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      className="block px-5 py-3 text-black text-sm font-medium hover:bg-yellow-50/80 transition-colors duration-150 tracking-tight"
                    >
                      {item}
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Premium Navigation Links - SPOTLIGHT + Animated Underline */}
          {['Career Support', 'Jobs', 'Internships'].map((link) => {
            const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
            const [isHovered, setIsHovered] = useState(false);
            
            return (
              <motion.div
                key={link}
                className="relative group"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setMousePos({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                  });
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* SPOTLIGHT Radial Gradient */}
                <motion.div
                  className="absolute inset-0 rounded-lg pointer-events-none"
                  animate={isHovered ? { opacity: 0.1 } : { opacity: 0 }}
                  style={{
                    background: isHovered 
                      ? `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(250, 204, 21, 0.4), transparent 80%)`
                      : 'transparent',
                  }}
                  transition={{ duration: 0.2 }}
                />

                {/* Nav Link with Animated Underline */}
                <motion.a
                  href="#"
                  whileHover={{ color: '#FACC15' }}
                  className="text-black font-medium text-sm transition-colors duration-200 tracking-tight relative z-10 block px-3 py-2 rounded-lg"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                  {link}
                  {/* Animated underline bar */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-400 rounded-full origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isHovered ? 1 : 0 }}
                    transition={{ ...spring.snappy, duration: 0.3 }}
                  />
                </motion.a>
              </motion.div>
            );
          })}

          {/* More Dropdown */}
          <div className="relative group">
            <motion.button
              onClick={() => setIsMoreOpen(!isMoreOpen)}
              whileHover={{ color: '#FFD400' }}
              className="text-black font-medium text-sm flex items-center gap-2 transition-colors duration-200 tracking-tight"
            >
              More
              <motion.svg
                animate={{ rotate: isMoreOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </motion.svg>
            </motion.button>

            {/* Premium Dropdown Menu */}
            <AnimatePresence>
              {isMoreOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute top-full right-0 mt-3 w-52 bg-white rounded-xl shadow-xl border border-black/5 py-3 overflow-hidden"
                >
                  {['About Us', 'Blog', 'Resources', 'Contact', 'Partnerships'].map((item, i) => (
                    <motion.a
                      key={item}
                      href="#"
                      custom={i}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      className="block px-5 py-3 text-black text-sm font-medium hover:bg-yellow-50/80 transition-colors duration-150 tracking-tight"
                    >
                      {item}
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* RIGHT SECTION: Premium Controls - MAGNETIC Login */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: easing.smoothOut }}
          className="flex items-center gap-5"
        >
          {/* Kids Toggle Switch - Premium Spring Physics */}
          <div className="hidden sm:flex items-center gap-3">
            <span className="text-black font-semibold text-xs tracking-widest opacity-80">KIDS</span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="relative w-13 h-7 bg-black/10 rounded-full p-1 transition-colors hover:bg-black/15 cursor-pointer"
            >
              <motion.div
                className="w-6 h-6 bg-white rounded-full shadow-md"
                layout
                transition={{ type: 'spring', stiffness: 600, damping: 35 }}
              />
            </motion.button>
          </div>

          {/* MAGNETIC Login Button - Premium hover with glow */}
          <motion.button
            ref={loginRef}
            onMouseEnter={() => setIsLoginHovering(true)}
            onMouseLeave={() => handleMagnetLeave('login')}
            style={{ x: loginX, y: loginY }}
            whileHover={{ scale: 1.1, filter: 'drop-shadow(0 16px 40px rgba(0,0,0,0.16))' }}
            whileTap={{ scale: 0.96 }}
            transition={spring.snappy}
            className="px-5 py-2.5 border-2 border-black text-black font-semibold text-xs rounded-lg transition-all duration-200 hidden sm:block hover:bg-black/5 shadow-premium cursor-pointer"
          >
            Login
          </motion.button>
        </motion.div>
      </div>
    </nav>
  );
}
