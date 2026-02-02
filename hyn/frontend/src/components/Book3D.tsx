import { useEffect, useRef, useState } from 'react';
import '../styles/book3d.css';

/**
 * Premium 3D Book Opening Animation
 * 
 * Features:
 * - Realistic 3D perspective with CSS transforms
 * - Smooth page-by-page opening animation
 * - Subtle glow effects on pages
 * - Mouse parallax tilt interaction
 * - Respects prefers-reduced-motion
 * - GPU-accelerated performance
 */

export default function Book3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isAnimating, setIsAnimating] = useState(true);
  const animationRef = useRef<number>();
  const pageAnglesRef = useRef<number[]>([0, 0, 0]);

  // Check for reduced motion preference
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setIsAnimating(!prefersReducedMotion);
  }, []);

  // Handle mouse movement for parallax tilt
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !isAnimating) return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const x = (e.clientX - centerX) / rect.width;
      const y = (e.clientY - centerY) / rect.height;

      setMousePosition({ x: x * 5, y: y * 5 }); // Max 5° tilt
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isAnimating]);

  // Animate pages opening
  useEffect(() => {
    if (!isAnimating) return;

    const animate = () => {
      const now = Date.now() / 1000;

      // Page 1: Opens from 0° to 80° (slower, elegant curve)
      pageAnglesRef.current[0] = Math.sin(now * 0.3) * 40 + 40;

      // Page 2: Opens from 0° to 70° with slight delay
      const delay1 = Math.sin((now - 0.5) * 0.3) * 35 + 35;
      pageAnglesRef.current[1] = Math.max(0, Math.min(70, delay1));

      // Page 3: Opens from 0° to 60° with more delay
      const delay2 = Math.sin((now - 1) * 0.3) * 30 + 30;
      pageAnglesRef.current[2] = Math.max(0, Math.min(60, delay2));

      // Update DOM with new angles
      updatePageAngles();
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isAnimating]);

  const updatePageAngles = () => {
    const pages = containerRef.current?.querySelectorAll('.book-page');
    if (!pages) return;

    pages.forEach((page, index) => {
      const angle = pageAnglesRef.current[index];
      const glow = Math.abs(Math.sin((Date.now() / 1000 - index * 0.5) * 0.3)) * 0.3 + 0.1;

      (page as HTMLElement).style.transform = `rotateY(${angle}deg)`;
      (page as HTMLElement).style.opacity = `${0.7 + glow}`;
    });
  };

  return (
    <div className="book3d-wrapper">
      <div
        ref={containerRef}
        className="book3d-container"
        style={{
          transform: `rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
        }}
      >
        {/* Book Base/Spine */}
        <div className="book-base">
          {/* Back Cover */}
          <div className="book-cover back">
            <div className="cover-pattern" />
          </div>

          {/* Pages - 3 visible layers */}
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className={`book-page page-${index}`}
              style={{
                transitionDuration: isAnimating ? '0ms' : '400ms',
              }}
            >
              <div className="page-content">
                <div className="page-line" style={{ width: '60%', marginTop: '20%' }} />
                <div className="page-line" style={{ width: '80%', marginTop: '12%' }} />
                <div className="page-line" style={{ width: '70%', marginTop: '12%' }} />
                <div className="page-line" style={{ width: '75%', marginTop: '12%' }} />
              </div>
              <div className="page-edge" />
            </div>
          ))}

          {/* Front Cover */}
          <div className="book-cover front">
            <div className="cover-accent" />
            <div className="cover-title">
              <span className="title-text">Learn</span>
            </div>
          </div>
        </div>

        {/* Soft Shadow */}
        <div className="book-shadow" />
      </div>

      {/* Gradient Background */}
      <div className="book3d-gradient-bg" />
    </div>
  );
}
