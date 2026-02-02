import { motion } from 'framer-motion';

/**
 * BRAND STATEMENT SECTION - Premium Glassmorphism + Cinematic
 *
 * Design Philosophy:
 * - Full black background with cinematic presence
 * - Serif headline with yellow glow accents
 * - Staggered word-by-word entrance animation with blur-in effect
 * - Glass panel with soft borders and backdrop blur
 * - Yellow glow effects on key words
 * - Premium, sophisticated atmosphere
 * - Animated gradient overlays for depth
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
        staggerChildren: 0.12,
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
      {/* Premium Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-gray-950 opacity-100" />
      
      {/* Main Content Container - Glass Panel */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto text-center px-6 py-20 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        style={{
          boxShadow: '0 8px 32px rgba(255,212,0,0.06), inset 0 1px 1px rgba(255,255,255,0.2)',
        }}
      >
        {/* Headline - Staggered Word Animation */}
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
              className={`text-4xl md:text-5xl lg:text-7xl font-serif font-black leading-tight ${word.color} tracking-tight ${
                word.glow ? 'drop-shadow-[0_0_30px_rgba(255,212,0,0.5)]' : ''
              }`}
              style={word.glow ? {
                textShadow: '0 0 25px rgba(255,212,0,0.6), 0 0 50px rgba(255,212,0,0.4), 0 0 80px rgba(255,212,0,0.2)',
              } : {}}
            >
              {word.text}
            </motion.span>
          ))}
        </motion.div>

        {/* Supporting Subtext */}
        <motion.p
          className="text-lg lg:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: customBezier }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Hands-on learning with guided mentorship from industry experts. Real skills for real jobs. No fluff. Just results.
        </motion.p>

        {/* Scroll Hint */}
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

      {/* Decorative Blur Elements */}
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