import { motion } from 'framer-motion';

/**
 * BRAND STATEMENT SECTION - Elite Cinematic Design
 *
 * Design Philosophy:
 * - FILM GRAIN OVERLAY: Subtle noise texture for cinematic feel
 * - GLOW EFFECTS: Yellow words have subtle text-shadow glow
 * - Custom bezier [0.22, 1, 0.36, 1] for Apple-like premium motion
 * - Staggered word reveals with whileInView triggers
 * - Full black background = power and premium positioning
 * - White text = maximum contrast and readability
 * - Production-quality animation and atmosphere
 *
 * Purpose:
 * - Acts as emotional visual separator with cinematic impact
 * - Reinforces brand authority with premium aesthetics
 * - Glow effects on yellow highlights create visual hierarchy
 * - Film grain adds texture and sophistication
 *
 * Features:
 * - Full viewport height with centered content
 * - Deep black background with gradient depth
 * - Serif headline with glowing yellow accent words
 * - Supporting subtext in refined gray
 * - Film grain overlay for texture
 * - Smooth scroll-triggered entrance animations
 * - Fully responsive design
 */

const customBezier = [0.22, 1, 0.36, 1] as const;

export default function BrandStatement() {
  // Staggered word animation with yellow highlights and glow
  const headlineWords = [
    { text: 'BUILD', color: 'text-white' },
    { text: 'CAREER-READY', color: 'text-yellow-400', glow: true },
    { text: 'SKILLS', color: 'text-white' },
    { text: 'THE', color: 'text-white' },
    { text: 'PRACTICAL', color: 'text-yellow-400', glow: true },
    { text: 'WAY', color: 'text-white' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, filter: 'blur(8px)', y: 30 },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        duration: 0.7,
        ease: customBezier,
      },
    },
  };

  return (
    <section className="relative w-full min-h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Premium Background Gradient (subtle depth) */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-gray-950 opacity-100" />
      
      {/* FILM GRAIN OVERLAY - Cinematic texture */}
      <motion.div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' fill='white' filter='url(%23noise)' /%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px',
        }}
      />

      {/* Main Content Container */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto text-center px-6 py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Headline - Staggered Word Animation with GLOW Effects */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {headlineWords.map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              className={`text-4xl md:text-5xl lg:text-7xl font-serif font-bold leading-tight ${word.color} tracking-tight ${
                word.glow ? 'drop-shadow-[0_0_20px_rgba(250,204,21,0.4)]' : ''
              }`}
              style={word.glow ? {
                textShadow: '0 0 20px rgba(250, 204, 21, 0.5), 0 0 40px rgba(250, 204, 21, 0.3)',
              } : {}}
            >
              {word.text}
            </motion.span>
          ))}
        </motion.div>

        {/* Supporting Subtext - Premium Typography */}
        <motion.p
          className="text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Hands-on learning with guided mentorship from industry experts. Real skills for real jobs. No fluff. Just results.
        </motion.p>

        {/* Hidden CTA hint - subtle interactive element */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="text-yellow-400 text-sm font-semibold tracking-widest"
          >
            SCROLL TO EXPLORE
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Decorative Elements - Subtle Premium Blur */}
      <motion.div
        className="absolute top-20 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"
        animate={{
          scale: [0.8, 1.1, 0.8],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-0 left-10 w-80 h-80 bg-white/3 rounded-full blur-3xl"
        animate={{
          scale: [1, 0.9, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </section>
  );
}