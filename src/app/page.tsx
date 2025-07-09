"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
//public/jaim-hero.jpeg

export default function Home() {
  const bgRef = useRef<HTMLDivElement>(null);
  // TikTok video IDs (replace with your own)
  const tiktokIds = [
    "7520431498852355383",
    "7520424939103505719",
    "7496326072816995627",
    "7412340778862726446",
    "7374619103904156974"
  ];
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c === 0 ? tiktokIds.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === tiktokIds.length - 1 ? 0 : c + 1));

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

  return (
    <main>
      {/* Hero Section */}
      <section
        id="hero"
        className="hero-section"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "1rem 1rem 2rem 1rem",
          position: "relative",
          background: "transparent",
        }}
      >
        <div style={{ position: "relative", zIndex: 1 }}>
          <h1 style={{ fontSize: "3rem", marginTop: "1rem", marginBottom: "1rem", textAlign: "center" }}>Jaime Carson</h1>
          <Image
            src="/jaim-hero.jpeg"
            alt="Jaime Carson"
            width={450}
            height={450}
            style={{
              display: "block",
              margin: "0 auto 1.5rem auto",
              borderRadius: "50%",
              width: "100%",
              maxWidth: "450px",
              height: "auto",
              aspectRatio: "1 / 1",
              objectFit: "cover",
              boxShadow: "0 4px 24px rgba(0,0,0,0.08)"
            }}
            priority
          />
          <p style={{ fontSize: "1.5rem", color: "var(--color-secondary)", marginBottom: "2rem", textAlign: "center" }}>
            Singer • Songwriter • Performer
          </p>
        </div>
      </section>

      {/* Performances Section */}
      <section id="performances" style={{ minHeight: "100vh", background: "transparent", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <h2 style={{ textAlign: "center", marginTop: "1rem", marginBottom: "1rem" }}>Performances</h2>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
          <button 
            onClick={prev} 
            aria-label="Previous video"
            style={{ 
              padding: "12px 16px", 
              border: "none", 
              background: "var(--color-accent)", 
              color: "white", 
              borderRadius: 8,
              cursor: "pointer",
              fontSize: "1.5rem",
              fontWeight: "bold"
            }}
          >
            &lt;
          </button>
          <div style={{ 
            width: "min(90vw, 400px)", 
            aspectRatio: "9 / 14", 
            position: "relative",
            flex: "0 0 auto"
          }}>
            <iframe
              src={`https://www.tiktok.com/embed/${tiktokIds[current]}`}
              style={{ 
                width: "100%", 
                height: "100%", 
                border: 0, 
                borderRadius: 12, 
                background: "#000" 
              }}
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="TikTok Video"
            />
          </div>
          <button 
            onClick={next} 
            aria-label="Next video"
            style={{ 
              padding: "12px 16px", 
              border: "none", 
              background: "var(--color-accent)", 
              color: "white", 
              borderRadius: 8,
              cursor: "pointer",
              fontSize: "1.5rem",
              fontWeight: "bold"
            }}
          >
            &gt;
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ minHeight: "100vh", maxWidth: 700, margin: "0 auto", padding: "3rem 1rem", background: "transparent", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h2 style={{ textAlign: "center" }}>About Me</h2>
          <p style={{ fontSize: "2rem", textAlign: "left", margin: 0 }}>
            Hey, I&apos;m a musician, composer, and performer. I&apos;m a student at the University of Pittsburgh, where I study music composition and performance. I&apos;m also a member of the University of Michigan Symphony Orchestra, where I play the violin.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ minHeight: "100vh", maxWidth: 700, margin: "0 auto", padding: "3rem 1rem", background: "transparent", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <h2 style={{ textAlign: "center" }}>Contact</h2>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", marginTop: "1rem" }}>
          <a 
            href="https://www.tiktok.com/@jaim.is.here" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "0.5rem", 
              textDecoration: "none", 
              color: "var(--color-text)",
              fontSize: "1.2rem"
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
            @jaim.is.here
          </a>
          <a 
            href="https://www.instagram.com/jaimcarson/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "0.5rem", 
              textDecoration: "none", 
              color: "var(--color-text)",
              fontSize: "1.2rem"
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @jaimcarson
          </a>
        </div>
        {/* Or add a contact form here */}
      </section>
    </main>
  );
}
