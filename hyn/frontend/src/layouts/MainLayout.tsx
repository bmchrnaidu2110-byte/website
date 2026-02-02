import React from "react";
import Navbar from "../components/Navbar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full">
      <Navbar />
      {children}
    </div>
  );
}
