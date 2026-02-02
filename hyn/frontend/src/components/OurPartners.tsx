import { useState } from 'react';
import { motion } from 'framer-motion';
import { marqueeSlide, timings, easing } from '../utils/animations';

/**
 * OUR PARTNERS SECTION - Premium Glassmorphism Marquee
 *
 * Design Philosophy:
 * - Infinite marquee scroll with pause-on-hover
 * - Glass partner cards with soft borders
 * - Smooth scale animations with spring physics
 * - Yellow accent on hover
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
    <section className="w-full bg-transparent py-12 overflow-hidden">
      <div className="max-w-full">
        {/* Section Heading - Content Surface */}
        <div className="content-surface text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easing.smoothOut }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Our Partners
            </h2>
            <p className="text-sm mt-2">Trusted by leading companies worldwide</p>
          </motion.div>
        </div>

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
                className="flex-shrink-0 h-16 w-24 md:h-20 md:w-32 rounded-2xl flex items-center justify-center bg-white border border-gray-200 cursor-pointer"
                whileHover={{
                  y: -2,
                  boxShadow: '0 12px 40px rgba(255,212,0,0.15)',
                }}
                transition={{ duration: timings.standard, ease: easing.gentle }}
                style={{
                  boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                }}
              >
                {/* Partner Logo Placeholder */}
                <div className="flex flex-col items-center justify-center">
                  <motion.div
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white font-bold text-xs md:text-sm"
                    style={{ backgroundColor: partner.color, opacity: 0.8 }}
                  >
                    {partner.initials}
                  </motion.div>
                  <motion.p 
                    className="text-xs text-gray-700 mt-1 text-center font-medium"
                  >
                    {partner.name}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Fade gradient overlay (left & right) - Updated for grey bg */}
          <div className="absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
