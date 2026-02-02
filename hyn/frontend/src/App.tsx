import { useEffect, useState } from "react";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import ComingSoon from "./pages/ComingSoon";
import "./styles/tailwind.css";
// import SplineBackground from "./components/SplineBackground";

// Simple routing without React Router
type PageType = 'home' | 'coming-soon';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  // Handle navigation via URL hash or global navigation function
  useEffect(() => {
    // Listen for hash changes
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home';
      if (hash === 'coming-soon') {
        setCurrentPage('coming-soon');
      } else {
        setCurrentPage('home');
      }
    };

    // Set initial page based on hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    // Global navigation function for navbar
    (window as any).navigateTo = (page: PageType) => {
      window.location.hash = page === 'home' ? '' : page;
      setCurrentPage(page);
      window.scrollTo(0, 0);
    };

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    // Cursor follower effect
    const handleMouseMove = (e: MouseEvent) => {
      let cursor = document.getElementById("cursor-follower");
      if (!cursor) {
        cursor = document.createElement("div");
        cursor.id = "cursor-follower";
        cursor.textContent = "✨";
        document.body.appendChild(cursor);
      }
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* <SplineBackground /> */}
      {currentPage === 'coming-soon' ? (
        <ComingSoon />
      ) : (
        <MainLayout>
          <Home />
        </MainLayout>
      )}
    </>
  );
}
