import { motion } from 'framer-motion';
import { easing, staggerContainerVariants, staggerItemVariants, timings } from '../utils/animations';

/**
 * MAIN FOOTER - Premium Glassmorphism Footer
 *
 * Design Philosophy:
 * - Black background with subtle glass accent panels
 * - Yellow accent on interactive elements
 * - Staggered entrance animations for sections
 * - Smooth hover effects with spring physics
 * - Yellow / Black / White color system only
 * - Enterprise-grade premium feel with soft glass accents
 */

export default function Footer() {
  // Container with staggered fade-up entrance
  const containerVariants = staggerContainerVariants;

  // Fade-up reveal for section headings and content
  const itemVariants = staggerItemVariants;

  // Link underline animation on hover
  const linkVariants = {
    hidden: { opacity: 0, x: -12 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.06,
        duration: timings.fast,
        ease: easing.smoothOut,
      },
    }),
  };

  // Social icons entrance
  const socialVariants = {
    hidden: { opacity: 0, scale: 0.6 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.6 + i * 0.1,
        duration: timings.standard,
        ease: easing.gentle,
      },
    }),
  };

  // Social media icons
  const socialLinks = [
    { icon: '𝕏', label: 'Twitter', href: '#' },
    { icon: 'f', label: 'Facebook', href: '#' },
    { icon: 'in', label: 'LinkedIn', href: '#' },
    { icon: '▶', label: 'YouTube', href: '#' },
    { icon: '📷', label: 'Instagram', href: '#' },
  ];

  // Footer column data
  const trendingPrograms = [
    'AI Driven Business Intelligence',
    'Artificial Intelligence',
    'Cloud Computing & DevOps',
    'Data Science & Machine Learning',
    'Robotics and Automation',
    'Product Management',
  ];

  const browseCourses = [
    'Artificial Intelligence',
    'Product Design',
    'Cyber Security',
    'Blockchain',
    'Digital Marketing',
    'Management',
  ];

  const quickLinks = [
    'MBA Courses',
    'About Us',
    'Contact Us',
    'Terms & Conditions',
    'Privacy Policy',
    'Company Policy',
  ];

  return (
    <>
      {/* MAIN FOOTER */}
      <footer className="w-full bg-black text-white py-16 md:py-24 px-6">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* 4-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* COLUMN 1: Trending Programs */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-bold text-white mb-6 tracking-tight">Trending Programs</h3>
              <ul className="space-y-3">
                {trendingPrograms.map((link, i) => (
                  <motion.li
                    key={i}
                    custom={i}
                    variants={linkVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <motion.a
                      href="#"
                      className="text-white/60 text-sm hover:text-yellow-400 transition-colors duration-200 inline-block"
                      whileHover={{ x: 4 }}
                      transition={{ duration: timings.standard, ease: easing.gentle }}
                    >
                      {link}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* COLUMN 2: Browse Courses */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-bold text-white mb-6 tracking-tight">Browse Courses</h3>
              <ul className="space-y-3">
                {browseCourses.map((link, i) => (
                  <motion.li
                    key={i}
                    custom={i}
                    variants={linkVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <motion.a
                      href="#"
                      className="text-white/60 text-sm hover:text-yellow-400 transition-colors duration-200 inline-block"
                      whileHover={{ x: 4 }}
                      transition={{ duration: timings.standard, ease: easing.gentle }}
                    >
                      {link}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* COLUMN 3: Quick Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-bold text-white mb-6 tracking-tight">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, i) => (
                  <motion.li
                    key={i}
                    custom={i}
                    variants={linkVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <motion.a
                      href="#"
                      className="text-white/60 text-sm hover:text-yellow-400 transition-colors duration-200 inline-block"
                      whileHover={{ x: 4 }}
                      transition={{ duration: timings.standard, ease: easing.gentle }}
                    >
                      {link}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* COLUMN 4: Brand & Contact Info */}
            <motion.div variants={itemVariants}>
              {/* Brand Logo */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <motion.div 
                    className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 elevation-2 hover:elevation-3"
                    whileHover={{
                      y: -2,
                    }}
                    transition={{ duration: timings.standard, ease: easing.gentle }}
                  >
                    <span className="text-black font-black text-sm">HN</span>
                  </motion.div>
                  <span className="text-white font-semibold text-lg">Hyntrixx</span>
                </div>
                <p className="text-white/60 text-xs">Premium Education Platform</p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div>
                  <p className="text-white/50 text-xs mb-1 tracking-widest">INDIA</p>
                  <motion.a 
                    href="tel:+918012344567" 
                    className="text-white/60 hover:text-yellow-400 text-sm transition-colors duration-200"
                    whileHover={{ x: 4 }}
                  >
                    080 1234 4567
                  </motion.a>
                </div>

                <div>
                  <p className="text-white/50 text-xs mb-1 tracking-widest">US & OTHER COUNTRIES</p>
                  <motion.a 
                    href="tel:+18755422308" 
                    className="text-white/60 hover:text-yellow-400 text-sm transition-colors duration-200"
                    whileHover={{ x: 4 }}
                  >
                    +1 875 542 2308
                  </motion.a>
                </div>

                <div>
                  <p className="text-white/50 text-xs mb-1 tracking-widest">ENTERPRISE</p>
                  <motion.a 
                    href="mailto:business@hyntrixx.com" 
                    className="text-white/60 hover:text-yellow-400 text-sm transition-colors duration-200"
                    whileHover={{ x: 4 }}
                  >
                    business@hyntrixx.com
                  </motion.a>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex gap-3">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    custom={i}
                    variants={socialVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{
                      y: -2,
                      backgroundColor: 'rgba(250, 204, 21, 0.1)',
                      color: '#FACC15',
                    }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ duration: timings.standard, ease: easing.gentle }}
                    className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm hover:bg-yellow-400/20 flex items-center justify-center text-white/70 hover:text-yellow-400 transition-all duration-200 border border-white/20 hover:border-yellow-400/50"
                    title={social.label}
                  >
                    <span className="text-lg font-semibold">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div 
            className="h-px bg-white/10 mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: timings.slow, ease: easing.smoothOut, delay: 0.3 }}
            viewport={{ once: true }}
            style={{ originX: 0 }}
          />

          {/* Footer Bottom Bar */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: timings.standard, ease: easing.smoothOut, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-white/50 text-sm">
              © 2026 Hyntrixx. All Rights Reserved.
            </p>
          </motion.div>
        </motion.div>
      </footer>
    </>
  );
}