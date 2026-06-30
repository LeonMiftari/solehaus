'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Collection', href: '/products' },
  { label: 'New Arrivals', href: '/products' },
  { label: 'Sale', href: '/products' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => {
      const curr = window.scrollY;
      if (curr > 120) {
        setHidden(curr > lastScrollY.current);
      } else {
        setHidden(false);
      }
      setScrolled(curr > 80);
      lastScrollY.current = curr;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isTransparent = isHome && !scrolled;
  const textColor = isTransparent ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.85)';

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        background: isTransparent ? 'transparent' : 'rgba(8,8,8,0.96)',
        backdropFilter: isTransparent ? 'none' : 'blur(20px)',
        WebkitBackdropFilter: isTransparent ? 'none' : 'blur(20px)',
        borderBottom: isTransparent ? 'none' : '1px solid rgba(255,255,255,0.08)',
        transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
        transition: 'background 0.3s ease, transform 0.4s ease',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '74px', padding: '0 clamp(16px, 4vw, 40px)' }}>

          {/* Left — 2-line hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: textColor, display: 'flex', flexDirection: 'column', gap: '7px', padding: '4px', flexShrink: 0 }}
          >
            <span style={{ display: 'block', width: '24px', height: '1.5px', background: 'currentColor' }} />
            <span style={{ display: 'block', width: '24px', height: '1.5px', background: 'currentColor' }} />
          </button>

          {/* Center — logo */}
          <Link href="/" style={{ textDecoration: 'none', position: 'absolute', left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center' }}>
            <img
              src="/logo.png"
              alt="Eri Ajeti — Fashion Designer"
              style={{
                height: 'clamp(50px, 8vw, 66px)',
                width: 'auto',
                display: 'block',
                filter: 'drop-shadow(0.4px 0 0 #fff) drop-shadow(-0.4px 0 0 #fff) drop-shadow(0 0.4px 0 #fff) drop-shadow(0 -0.4px 0 #fff)',
              }}
            />
          </Link>

          {/* Right — icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px', flexShrink: 0 }}>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: textColor, display: 'flex' }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = '1')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = '0.7')}
            >
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </button>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: textColor, display: 'flex' }}>
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
              </svg>
            </button>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: textColor, display: 'flex' }}>
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Menu overlay + panel */}
      {menuOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex' }}>

          {/* Panel */}
          <div style={{
            width: 'clamp(280px, 45vw, 520px)',
            height: '100%',
            background: '#f4f3f1',
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'auto',
            animation: 'slideInLeft 0.32s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}>
            {/* Close */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '20px 32px', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
              <button onClick={() => setMenuOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', color: '#0a0a0a' }}>
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M18 6 6 18M6 6l12 12"/>
                </svg>
                <span style={{ fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: 400 }}>Close</span>
              </button>
            </div>

            {/* Nav items */}
            <nav style={{ flex: 1, padding: '8px 0' }}>
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '18px 32px',
                    borderBottom: '1px solid rgba(0,0,0,0.07)',
                    textDecoration: 'none',
                    color: '#0a0a0a',
                    fontSize: '15px',
                    fontWeight: 400,
                    letterSpacing: '0.3px',
                    transition: 'background 0.15s',
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = 'rgba(0,0,0,0.03)')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = 'transparent')}
                >
                  {item.label}
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </Link>
              ))}
            </nav>

            {/* Bottom links */}
            <div style={{ padding: '24px 32px', borderTop: '1px solid rgba(0,0,0,0.08)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {['Log in', 'Wishlist', 'Contact'].map((item) => (
                <a key={item} href="#" style={{ fontSize: '13px', color: 'rgba(0,0,0,0.45)', textDecoration: 'none', letterSpacing: '0.3px' }}
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Dim overlay */}
          <div
            onClick={() => setMenuOpen(false)}
            style={{ flex: 1, background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(3px)', WebkitBackdropFilter: 'blur(3px)', animation: 'fadeIn 0.32s ease' }}
          />
        </div>
      )}

      <style>{`
        @keyframes slideInLeft {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </>
  );
}
