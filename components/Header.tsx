'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // transparent only on homepage before scroll, solid everywhere else
  const isTransparent = isHome && !scrolled;

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: isTransparent ? 'rgba(255,255,255,0.07)' : 'rgba(8,8,8,0.96)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: isTransparent ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(255,255,255,0.08)',
      transition: 'background 0.3s ease, border-color 0.3s ease',
    }}>
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px', padding: '0 48px', maxWidth: '100%' }}>

        {/* Logo — left */}
        <Link href="/" style={{ textDecoration: 'none', flexShrink: 0 }}>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '20px', fontWeight: 600, letterSpacing: '5px', textTransform: 'uppercase', color: 'white' }}>
            Sole<span style={{ color: '#c9a96e' }}>haus</span>
          </span>
        </Link>

        {/* Nav links — absolute center */}
        <nav style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', gap: '40px' }} className="hidden-mobile">
          {[
            { label: 'Home', href: '/' },
            { label: 'Collection', href: '/products' },
            { label: 'New Arrivals', href: '/products' },
            { label: 'Sale', href: '/products' },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              style={{ color: 'rgba(255,255,255,0.85)', fontSize: '12px', letterSpacing: '1.5px', textTransform: 'uppercase', textDecoration: 'none', transition: 'color 0.2s', fontWeight: 600 }}
              onMouseEnter={e => ((e.target as HTMLElement).style.color = 'white')}
              onMouseLeave={e => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.75)')}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Icons — right */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexShrink: 0 }}>
          {/* User */}
          <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center' }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'white')}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.7)')}
          >
            <svg width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
            </svg>
          </button>
          {/* Wishlist */}
          <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center' }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'white')}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.7)')}
          >
            <svg width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>
          {/* Bag */}
          <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center' }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'white')}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.7)')}
          >
            <svg width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
          </button>
          {/* Mobile hamburger */}
          <button
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white', display: 'none' }}
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              {menuOpen ? <path d="M18 6 6 18M6 6l12 12"/> : <path d="M3 12h18M3 6h18M3 18h18"/>}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: 'rgba(10,10,10,0.85)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '16px 48px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {['Home', 'Collection', 'New Arrivals', 'Sale'].map((item) => (
            <Link key={item} href={item === 'Home' ? '/' : '/products'} style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', letterSpacing: '1px', textDecoration: 'none' }} onClick={() => setMenuOpen(false)}>
              {item}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
