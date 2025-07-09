"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { Merriweather, Inter } from "next/font/google";
import "./globals.css";
import React, { useState, useEffect, useRef, createContext } from "react";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});
const merriweather = Merriweather({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-heading" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });

const NavbarHeightContext = createContext(64); // default fallback

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const bgRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const [navbarHeight, setNavbarHeight] = useState(64);

  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef.current) return;
      const scrollY = window.scrollY;
      const speed = 0.3;
      bgRef.current.style.backgroundPositionY = `${scrollY * speed}px, 0`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (navRef.current) {
      const height = navRef.current.offsetHeight;
      setNavbarHeight(height);
      // Set CSS variable for use in CSS media queries
      document.documentElement.style.setProperty('--navbar-height', `${height}px`);
    }
    const handleResize = () => {
      if (navRef.current) {
        const height = navRef.current.offsetHeight;
        setNavbarHeight(height);
        document.documentElement.style.setProperty('--navbar-height', `${height}px`);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handler to close menu after scroll
  function handleNavLinkClick() {
    setTimeout(() => setMenuOpen(false), 300); // 300ms delay for smooth scroll
  }

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${merriweather.variable} ${inter.variable}`} style={{ position: "relative", minHeight: "100vh", overflowX: "hidden", background: "#f5f3ee" }}>
        {/* Parallax Wood Grain Background */}
        <div
          ref={bgRef}
          aria-hidden="true"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 0,
            background: "url('https://www.transparenttextures.com/patterns/wood-pattern.png') repeat, linear-gradient(120deg, #f5f3ee 0%, #ddb892 100%)",
            backgroundRepeat: "repeat, no-repeat",
            backgroundSize: "auto, cover",
            backgroundPosition: "0 0, center",
            pointerEvents: "none",
            willChange: "background-position",
            transition: "background-position 0.1s linear",
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          <NavbarHeightContext.Provider value={navbarHeight}>
            <nav className="main-nav" ref={navRef}>
              <button
                className="hamburger"
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((open) => !open)}
              >
                <span className="bar" />
                <span className="bar" />
                <span className="bar" />
              </button>
              <div className={`nav-links${menuOpen ? " open" : ""}`}>
                <a href="#hero" onClick={handleNavLinkClick}>Home</a>
                <a href="#performances" onClick={handleNavLinkClick}>Performances</a>
                <a href="#about" onClick={handleNavLinkClick}>About</a>
                <a href="#contact" onClick={handleNavLinkClick}>Contact</a>
              </div>
            </nav>
            {children}
          </NavbarHeightContext.Provider>
        </div>
      </body>
    </html>
  );
}
