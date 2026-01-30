import { useState } from 'react';
import { motion } from 'framer-motion';
import { marqueeSlide, spring, easing } from '../utils/animations';

/**
 * OUR PARTNERS SECTION - Marquee Perfection with Magnetic Hover
 *
 * Design Philosophy:
 * - Infinite marquee scroll using premium motion utilities
 * - Pause-on-hover interaction (press to stop)
 * - Individual partner logo glow + scale on hover
 * - Golden glow effect with drop-shadow filter
 * - Magnetic feel with spring.bounce transitions
 * - Enterprise-grade premium look
 */

export default function OurPartners() {
  const [isHovered, setIsHovered] = useState(false);

  // Partner logos with SVG icons (text-based for flexibility)
  const partners = [
    { name: 'Google', initials: 'G', color: '#4285F4' },
    { name: 'Microsoft', initials: 'MS', color: '#00A4EF' },
    { name: 'Coursera', initials: 'C', color: '#0056D2' },
    { name: 'Udemy', initials: 'U', color: '#A435F0' },
    { name: 'Google', initials: 'G', color: '#4285F4' },
    { name: 'Microsoft', initials: 'MS', color: '#00A4EF' },
    { name: 'Coursera', initials: 'C', color: '#0056D2' },
    { name: 'Udemy', initials: 'U', color: '#A435F0' },
  ];

  return (
    <section className="w-full bg-white py-12 overflow-hidden">
      <div className="max-w-full">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-8 px-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easing.smoothOut }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-black tracking-tight">
            Our Partners
          </h2>
          <p className="text-gray-600 text-sm mt-2">Trusted by leading companies worldwide</p>
        </motion.div>

        {/* Marquee Container - Pause on hover */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            className="flex gap-12 md:gap-16 px-6 w-fit"
            variants={marqueeSlide}
            animate={isHovered ? 'paused' : 'animate'}
          >
            {partners.map((partner, idx) => (
              <motion.div
                key={idx}
                className="flex-shrink-0 h-16 w-24 md:h-20 md:w-32 rounded-lg flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 cursor-pointer"
                whileHover={{
                  scale: 1.12,
                  filter: 'drop-shadow(0 16px 32px rgba(250, 204, 21, 0.3))',
                }}
                transition={spring.bounce}
              >
                {/* Partner Logo Placeholder */}
                <div className="flex flex-col items-center justify-center">
                  <motion.div
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white font-bold text-xs md:text-sm"
                    style={{ backgroundColor: partner.color }}
                    whileHover={{
                      scale: 1.15,
                      filter: 'drop-shadow(0 12px 24px rgba(0, 0, 0, 0.2))',
                    }}
                  >
                    {partner.initials}
                  </motion.div>
                  <motion.p 
                    className="text-xs text-gray-600 mt-1 text-center font-medium"
                    whileHover={{ color: '#000' }}
                  >
                    {partner.name}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Fade gradient overlay (left & right) */}
          <div className="absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
