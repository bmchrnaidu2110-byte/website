import { useEffect } from 'react';

/**
 * SPLINE BACKGROUND - Premium 3D Animated Scene
 * 
 * Uses official Spline Web Component for reliable rendering
 * Works with React, Vite, and any framework
 * 
 * Features:
 * - Full-screen fixed background layer with Spline 3D scene
 * - Positioned behind all content with z-index layering
 * - Responsive viewport coverage on all screen sizes
 * - Interactive mouse tracking enabled
 */

export default function SplineBackground() {
  useEffect(() => {
    // Ensure Spline web component script is loaded
    const scriptId = 'spline-viewer-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'module';
      script.src = 'https://unpkg.com/@splinetool/viewer/build/spline-viewer.js';
      script.async = true;
      document.head.appendChild(script);
    }

    // Create top-level container attached to <body> so it's not inside flex/grid parents
    const container = document.createElement('div');
    container.className = 'spline-bg';
    Object.assign(container.style, {
      position: 'fixed',
      inset: '0px',
      width: '100vw',
      height: '100vh',
      // keep spline interactive and positioned correctly
      zIndex: '0',
      overflow: 'hidden',
      pointerEvents: 'auto'
    });

    // Create the spline-viewer element and append
    const viewer = document.createElement('spline-viewer') as HTMLElement & { url?: string };
    viewer.setAttribute('url', 'https://prod.spline.design/DSn1h6TRJbzKhJbn/scene.splinecode');
    Object.assign(viewer.style, {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: '0',
      left: '0',
      pointerEvents: 'auto',
      filter: 'none',
      backdropFilter: 'none'
    });

    // Append to body
    container.appendChild(viewer);
    document.body.appendChild(container);

    return () => {
      // Cleanup
      if (container.parentNode) container.parentNode.removeChild(container);
    };
  }, []);

  return null;
}
