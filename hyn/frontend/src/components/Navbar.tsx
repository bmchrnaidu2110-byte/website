import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { timings, easing, dropdownSlideDown, magneticButton, underlineSlide, premiumSpring } from '../utils/animations';

/**
 * GLOBAL NAVBAR - Premium Glassmorphism Navigation
 * 
 * Design Philosophy:
 * - Frosted glass background with backdrop blur
 * - Scroll-responsive depth and shadow
 * - Yellow (#FFD400) glow accents on hover
 * - Smooth spring-based transitions
 * - Mobile-optimized dropdowns
 * - Premium, calm, elegant feel
 */

export default function Navbar() {
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [navBlur, setNavBlur] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);
  
  const logoRef = useRef<HTMLDivElement>(null);
  const loginRef = useRef<HTMLButtonElement>(null);
  const exploreRef = useRef<HTMLDivElement>(null);
  const moreRef = useRef<HTMLDivElement>(null);

  // Scroll listener for navbar blur + shrink effect
  useEffect(() => {
    let lastY = window.scrollY;
    const handleScroll = () => {
      const y = window.scrollY;
      setNavBlur(y > 20);
      // Shrink when scrolling down, expand when scrolling up
      if (y > lastY && y > 40) setIsShrunk(true);
      if (y < lastY || y < 40) setIsShrunk(false);
      lastY = y;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle dropdown close on mouse leave
  const handleExploreLeave = () => {
    setTimeout(() => setIsExploreOpen(false), 50);
  };

  const handleMoreLeave = () => {
    setTimeout(() => setIsMoreOpen(false), 50);
  };

  // Navigation helper
  const goToComingSoon = () => {
    (window as any).navigateTo?.('coming-soon');
  };
  
  // Staggered dropdown items
  const itemVariants = {
    hidden: { opacity: 0, x: -8 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: timings.fast,
        ease: easing.smoothOut,
      },
    }),
  };

  // Navbar sizing variants for smooth spring transitions
  const navVariants = {
    large: { paddingTop: 16, paddingBottom: 16, transition: premiumSpring },
    small: { paddingTop: 8, paddingBottom: 8, transition: premiumSpring },
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50"
      initial={false}
      animate={isShrunk ? 'small' : 'large'}
      variants={navVariants}
      style={{ pointerEvents: 'auto' }}
    >
      {/* Transparent background with minimal contrast */}
      <motion.div
        className="absolute inset-0 border-b border-yellow-400/20"
        animate={{
          backgroundColor: navBlur ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.1)',
          backdropFilter: 'none',
          boxShadow: navBlur ? '0 12px 40px rgba(0,0,0,0.2)' : '0 6px 20px rgba(0,0,0,0.1)'
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 40 }}
      />

      <div className="relative max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* LEFT SECTION: Logo & Brand */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: timings.standard, ease: easing.smoothOut }}
          className="flex items-center gap-2.5"
        >
          {/* Brand Container */}
          <div className="brand flex items-center gap-2.5">
            {/* Logo Placeholder */}
            <img
              src=""
              alt="Hyntrixx Logo"
              className="brand-logo w-11 h-11 rounded-full bg-yellow-400 flex items-center justify-center"
            />

            {/* Logo Fallback (Circle) */}
            {!true && (
              <motion.div
                ref={logoRef}
                whileHover={{ scale: 1.1, rotate: -4, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={premiumSpring}
                className="w-11 h-11 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 cursor-pointer shadow-md hover:shadow-lg transition-all duration-200"
                style={{
                  boxShadow: '0 4px 15px rgba(255,212,0,0.15)'
                }}
                aria-label="Hyntrixx logo"
              >
                <span className="text-black font-black text-sm tracking-wider">HN</span>
              </motion.div>
            )}
          </div>

          {/* Brand Name */}
          <span className="text-black font-semibold text-lg hidden sm:inline tracking-tight">
            Hyntrixx
          </span>
        </motion.div>

        {/* CENTER SECTION: Navigation Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: timings.standard, delay: 0.1, ease: easing.smoothOut }}
          className="hidden lg:flex items-center gap-10"
        >
          {/* Explore Program with Dropdown */}
          <div 
            className="relative group"
            ref={exploreRef}
            onMouseEnter={() => setIsExploreOpen(true)}
            onMouseLeave={handleExploreLeave}
          >
              <motion.button
                onClick={() => setIsExploreOpen(!isExploreOpen)}
                whileHover={{ scale: 1.03, color: '#FFFFFF' }}
                className="text-yellow-400 font-medium text-sm flex items-center gap-2 tracking-tight cursor-pointer"
                transition={premiumSpring}
              >
                <span className="relative overflow-hidden">
                  <motion.span
                    className="inline-block"
                    whileHover={{ x: 0 }}
                    style={{ display: 'inline-block' }}
                  >
                    Explore Program
                  </motion.span>
                  {/* Animated underline with glow */}
                  <motion.span
                    className="absolute left-0 right-0 bottom-0 h-1 bg-yellow-400 origin-center rounded-full"
                    variants={underlineSlide}
                    initial="hidden"
                    whileHover="hover"
                    transition={{ duration: 0.28, ease: easing.gentle }}
                    style={{ transformOrigin: 'center' }}
                    onHoverStart={() => {}}
                  />
                </span>

                <motion.svg
                  animate={{ rotate: isExploreOpen ? 180 : 0 }}
                  transition={{ duration: timings.standard }}
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </motion.svg>
              </motion.button>

            {/* Dropdown Menu - Explore Programs */}
            <AnimatePresence>
              {isExploreOpen && (
                <motion.div
                  variants={dropdownSlideDown}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="dropdown-menu dropdown-programs absolute top-full left-0 mt-3 w-56 rounded-xl border border-yellow-400/30 py-3 overflow-hidden bg-black/90 backdrop-blur-none"
                  style={{ boxShadow: '0 16px 50px rgba(0,0,0,0.3)' }}
                >
                  {['Artificial Intelligence', 'Machine Learning', 'Data Science', 'Web Development', 'Mobile Development', 'Cloud Computing'].map((item, i) => (
                    <motion.button
                      key={item}
                      onClick={goToComingSoon}
                      custom={i}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover={{ backgroundColor: 'rgba(255,212,0,0.15)', color: '#FFFFFF', paddingLeft: 24 }}
                      transition={{ duration: 0.2 }}
                      className="block w-full text-left px-5 py-3 text-yellow-400 text-sm font-medium transition-all duration-150 tracking-tight border-none bg-transparent cursor-pointer"
                    >
                      <span className="inline-block mr-2 text-yellow-400">•</span>
                      {item}
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Navigation Links */}
          {['Career Support', 'Jobs', 'Internships'].map((link) => (
            <motion.button
              key={link}
              onClick={goToComingSoon}
              whileHover={{ scale: 1.05, y: -2 }}
              className="text-yellow-400 font-medium text-sm transition-all duration-300 tracking-tight px-3 py-2 rounded-full hover:bg-yellow-400/10 border-none bg-transparent cursor-pointer"
              transition={premiumSpring}
            >
              <span className="relative inline-block">
                {link}
                <motion.span
                  className="absolute left-0 right-0 bottom-0 h-1 bg-yellow-400 origin-center rounded-full"
                  variants={underlineSlide}
                  initial="hidden"
                  whileHover="hover"
                  transition={{ duration: 0.28, ease: easing.gentle }}
                  style={{ transformOrigin: 'center' }}
                />
              </span>
            </motion.button>
          ))}

          {/* More Dropdown */}
          <div 
            className="relative group"
            ref={moreRef}
            onMouseEnter={() => setIsMoreOpen(true)}
            onMouseLeave={handleMoreLeave}
          >
              <motion.button
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                whileHover={{ scale: 1.03, color: '#FFFFFF' }}
                className="text-yellow-400 font-medium text-sm flex items-center gap-2 tracking-tight cursor-pointer border-none bg-transparent"
                transition={premiumSpring}
              >
                <span className="relative overflow-hidden">
                  More
                  <motion.span
                    className="absolute left-0 right-0 bottom-0 h-1 bg-yellow-400 origin-center rounded-full"
                    variants={underlineSlide}
                    initial="hidden"
                    whileHover="hover"
                    transition={{ duration: 0.28, ease: easing.gentle }}
                    style={{ transformOrigin: 'center' }}
                  />
                </span>

                <motion.svg
                  animate={{ rotate: isMoreOpen ? 180 : 0 }}
                  transition={{ duration: timings.standard }}
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </motion.svg>
              </motion.button>

            {/* Dropdown Menu - More */}
            <AnimatePresence>
              {isMoreOpen && (
                <motion.div
                  variants={dropdownSlideDown}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="dropdown-menu dropdown-more absolute top-full right-0 mt-3 w-56 rounded-xl border border-yellow-400/30 py-3 overflow-hidden bg-black/90 backdrop-blur-none"
                  style={{ boxShadow: '0 16px 50px rgba(0,0,0,0.3)' }}
                >
                  {['About Us', 'Blog', 'Resources', 'Contact', 'Partnerships'].map((item, i) => (
                    <motion.button
                      key={item}
                      onClick={goToComingSoon}
                      custom={i}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover={{ backgroundColor: 'rgba(255,212,0,0.15)', color: '#FFFFFF', paddingLeft: 24 }}
                      transition={{ duration: 0.2 }}
                      className="block w-full text-left px-5 py-3 text-yellow-400 text-sm font-medium transition-all duration-150 tracking-tight border-none bg-transparent cursor-pointer"
                    >
                      <span className="inline-block mr-2 text-yellow-400">•</span>
                      {item}
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* RIGHT SECTION: Controls */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: timings.standard, delay: 0.2, ease: easing.smoothOut }}
          className="flex items-center gap-5"
        >
          {/* Kids Toggle */}
          <div className="hidden sm:flex items-center gap-3">
            <span className="text-yellow-400 font-semibold text-xs tracking-widest opacity-90">KIDS</span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="relative w-13 h-7 bg-yellow-400/20 rounded-full p-1 transition-colors hover:bg-yellow-400/30 cursor-pointer"
            >
              <motion.div
                className="w-6 h-6 bg-yellow-400 rounded-full shadow-md"
                layout
                transition={{ type: 'spring', stiffness: 600, damping: 35 }}
              />
            </motion.button>
          </div>

          {/* Login Button */}
          <motion.button
            ref={loginRef}
            whileHover={{ y: -2, boxShadow: '0 8px 25px rgba(255,212,0,0.3)' }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: timings.standard, ease: easing.gentle }}
            className="px-5 py-2.5 border-2 border-yellow-400 text-yellow-400 font-semibold text-xs rounded-lg transition-all duration-200 hidden sm:block hover:bg-yellow-400 hover:text-black cursor-pointer bg-transparent"
            style={{
              boxShadow: '0 4px 15px rgba(255,212,0,0.15)'
            }}
          >
            Login
          </motion.button>
        </motion.div>
      </div>
    </motion.nav>
  );}