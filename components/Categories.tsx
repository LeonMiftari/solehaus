'use client';

import Link from 'next/link';

const cats = [
  { num: '01', name: 'Sneakers', label: 'Street & Sport', count: '24 styles', bg: '#1a1a2e' },
  { num: '02', name: 'Boots',    label: 'Fall & Winter',  count: '18 styles', bg: '#2c1810' },
  { num: '03', name: 'Formal',   label: 'Business & Events', count: '12 styles', bg: '#1c2b1c' },
];

export default function Categories() {
  return (
    <div style={{ padding: 'clamp(48px, 7vw, 80px) 0', background: '#fff' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 clamp(16px, 4vw, 48px)' }}>

        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p style={{ fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', color: '#c9a96e', marginBottom: '12px', fontWeight: 500 }}>
            Browse by
          </p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 600, color: '#0a0a0a' }}>
            Categories
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {cats.map((cat) => (
            <Link
              key={cat.name}
              href="/products"
              className="category-tile group"
              style={{
                position: 'relative',
                height: '280px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '20px 24px',
                overflow: 'hidden',
                background: cat.bg,
                textDecoration: 'none',
              }}
            >
              {/* Subtle hover overlay */}
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0)', transition: 'background 0.3s' }} className="category-hover-overlay" />

              {/* Gold border on hover */}
              <div className="category-tile-border" style={{
                position: 'absolute', inset: 0,
                border: '1px solid transparent',
                transition: 'border-color 0.4s ease',
                pointerEvents: 'none',
              }} />

              {/* Top row: number + count */}
              <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#c9a96e', fontSize: '11px', letterSpacing: '3px', fontWeight: 600 }}>{cat.num}</span>
                <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase' }}>{cat.count}</span>
              </div>

              {/* Bottom: info */}
              <div style={{ position: 'relative', zIndex: 1 }}>
                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '6px' }}>{cat.label}</p>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", color: 'white', fontSize: '34px', fontWeight: 600, lineHeight: 1, marginBottom: '14px' }}>
                  {cat.name}
                </h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.35)' }}>
                  <span style={{ fontSize: '9px', letterSpacing: '3px', textTransform: 'uppercase' }}>Explore</span>
                  <div style={{ width: '20px', height: '1px', background: 'rgba(255,255,255,0.25)' }} />
                  <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .category-tile:hover .category-tile-border {
          border-color: rgba(201,169,110,0.4);
        }
      `}</style>
    </div>
  );
}
