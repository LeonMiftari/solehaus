'use client';

import Link from 'next/link';

const cats = [
  { name: 'Sneakers', label: 'Street & Sport', count: '24 styles', bg: '#1a1a2e' },
  { name: 'Boots', label: 'Fall & Winter', count: '18 styles', bg: '#2c1810' },
  { name: 'Formal', label: 'Business & Events', count: '12 styles', bg: '#1c2b1c' },
];

export default function Categories() {
  return (
    <div style={{ padding: '80px 0', background: '#fff' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 48px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p style={{ fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', color: '#c9a96e', marginBottom: '12px', fontWeight: 500 }}>
            Browse by
          </p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '40px', fontWeight: 600, color: '#0a0a0a' }}>
            Categories
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          {cats.map((cat) => (
            <Link
              key={cat.name}
              href="/products"
              style={{
                position: 'relative',
                height: '260px',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '28px',
                overflow: 'hidden',
                background: cat.bg,
                textDecoration: 'none',
              }}
            >
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.2)', transition: 'background 0.3s' }} />

              {/* Arrow */}
              <div style={{
                position: 'absolute', top: '20px', right: '20px',
                width: '34px', height: '34px',
                border: '1px solid rgba(255,255,255,0.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'rgba(255,255,255,0.5)',
              }}>
                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M7 17 17 7M7 7h10v10"/>
                </svg>
              </div>

              <div style={{ position: 'relative', zIndex: 1 }}>
                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '4px' }}>{cat.count}</p>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '12px', marginBottom: '4px' }}>{cat.label}</p>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", color: 'white', fontSize: '28px', fontWeight: 600 }}>{cat.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
