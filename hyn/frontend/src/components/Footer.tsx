import { motion } from 'framer-motion';
import { easing, spring } from '../utils/animations';

/**
 * MAIN FOOTER - Premium Enterprise Footer with Elegant Reveals
 *
 * Design Philosophy:
 * - Fade-up reveal on scroll for main sections (staggered)
 * - Animated link underlines on hover
 * - Social icon glow effect using drop-shadow filters
 * - Golden accent colors on interaction
 * - Smooth premium transitions throughout
 * - Premium enterprise-grade feel with polish
 *
 * Columns:
 * 1. Trending Programs
 * 2. Browse Courses
 * 3. Quick Links
 * 4. Brand & Contact Info
 */

export default function Footer() {
  // Container with staggered fade-up entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  // Fade-up reveal for section headings and content
  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.7, ease: easing.smoothOut },
    },
  };

  // Link underline animation on hover
  const linkVariants = {
    hidden: { opacity: 0, x: -12 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.06,
        duration: 0.5,
        ease: easing.smoothOut,
      },
    }),
  };

  // Social icons with glow effect
  const socialVariants = {
    hidden: { opacity: 0, scale: 0.6 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.6 + i * 0.1,
        ...spring.soft,
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
                      className="text-gray-400 text-sm hover:text-yellow-400 transition-colors duration-200 inline-block relative group"
                      whileHover={{ x: 6 }}
                      transition={spring.snappy}
                    >
                      {link}
                      {/* Animated underline on hover */}
                      <motion.span
                        className="absolute bottom-0 left-0 h-0.5 bg-yellow-400"
                        initial={{ width: 0 }}
                        whileHover={{ width: '100%' }}
                        transition={{ duration: 0.3, ease: easing.smoothOut }}
                      />
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
                      className="text-gray-400 text-sm hover:text-yellow-400 transition-colors duration-200 inline-block relative group"
                      whileHover={{ x: 6 }}
                      transition={spring.snappy}
                    >
                      {link}
                      {/* Animated underline on hover */}
                      <motion.span
                        className="absolute bottom-0 left-0 h-0.5 bg-yellow-400"
                        initial={{ width: 0 }}
                        whileHover={{ width: '100%' }}
                        transition={{ duration: 0.3, ease: easing.smoothOut }}
                      />
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
                      className="text-gray-400 text-sm hover:text-yellow-400 transition-colors duration-200 inline-block relative group"
                      whileHover={{ x: 6 }}
                      transition={spring.snappy}
                    >
                      {link}
                      {/* Animated underline on hover */}
                      <motion.span
                        className="absolute bottom-0 left-0 h-0.5 bg-yellow-400"
                        initial={{ width: 0 }}
                        whileHover={{ width: '100%' }}
                        transition={{ duration: 0.3, ease: easing.smoothOut }}
                      />
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
                    className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0"
                    whileHover={{
                      scale: 1.1,
                      filter: 'drop-shadow(0 8px 16px rgba(250, 204, 21, 0.4))',
                    }}
                  >
                    <span className="text-black font-black text-sm">HN</span>
                  </motion.div>
                  <span className="text-white font-semibold text-lg">Hyntrixx</span>
                </div>
                <p className="text-gray-500 text-xs">Premium Education Platform</p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div>
                  <p className="text-gray-500 text-xs mb-1 tracking-widest">INDIA</p>
                  <motion.a 
                    href="tel:+918012344567" 
                    className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-200"
                    whileHover={{ x: 4 }}
                  >
                    080 1234 4567
                  </motion.a>
                </div>

                <div>
                  <p className="text-gray-500 text-xs mb-1 tracking-widest">US & OTHER COUNTRIES</p>
                  <motion.a 
                    href="tel:+18755422308" 
                    className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-200"
                    whileHover={{ x: 4 }}
                  >
                    +1 875 542 2308
                  </motion.a>
                </div>

                <div>
                  <p className="text-gray-500 text-xs mb-1 tracking-widest">ENTERPRISE</p>
                  <motion.a 
                    href="mailto:business@hyntrixx.com" 
                    className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-200"
                    whileHover={{ x: 4 }}
                  >
                    business@hyntrixx.com
                  </motion.a>
                </div>
              </div>

              {/* Social Media Icons - With golden glow effect */}
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
                      scale: 1.2,
                      filter: 'drop-shadow(0 12px 24px rgba(250, 204, 21, 0.4))',
                      backgroundColor: 'rgba(250, 204, 21, 0.1)',
                      color: '#FACC15',
                    }}
                    whileTap={{ scale: 0.92 }}
                    transition={spring.bounce}
                    className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-400 transition-all duration-200"
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
            className="h-px bg-gray-800 mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: easing.smoothOut, delay: 0.3 }}
            viewport={{ once: true }}
            style={{ originX: 0 }}
          />

          {/* Footer Bottom Bar */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easing.smoothOut, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-500 text-sm">
              © 2026 Hyntrixx. All Rights Reserved.
            </p>
          </motion.div>
        </motion.div>
      </footer>
    </>
  );
}
