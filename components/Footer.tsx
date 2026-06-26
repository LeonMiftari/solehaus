'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ background: '#0a0a0a', color: 'white', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: 'clamp(40px, 6vw, 72px) clamp(16px, 4vw, 48px) 0' }}>

        {/* Top row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12" style={{ marginBottom: '56px' }}>

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '20px', fontWeight: 600, letterSpacing: '5px', textTransform: 'uppercase', marginBottom: '16px' }}>
              Sole<span style={{ color: '#c9a96e' }}>haus</span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '13px', lineHeight: '1.8', marginBottom: '24px' }}>
              Premium footwear crafted for those who move with purpose.
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              {['IG', 'TW', 'FB'].map((s) => (
                <a key={s} href="#" style={{
                  width: '34px', height: '34px', border: '1px solid rgba(255,255,255,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(255,255,255,0.4)', fontSize: '10px', letterSpacing: '0.5px',
                  textDecoration: 'none', transition: 'all 0.2s', fontWeight: 500,
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.5)'; (e.currentTarget as HTMLElement).style.color = 'white'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.15)'; (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.4)'; }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '20px', fontWeight: 500 }}>Shop</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['New Arrivals', 'Sneakers', 'Boots', 'Formal', 'Sale'].map((item) => (
                <li key={item}>
                  <Link href="/products" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '13px', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => ((e.target as HTMLElement).style.color = 'white')}
                    onMouseLeave={e => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.45)')}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '20px', fontWeight: 500 }}>Help</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Size Guide', 'Shipping Info', 'Returns', 'FAQ', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '13px', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => ((e.target as HTMLElement).style.color = 'white')}
                    onMouseLeave={e => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.45)')}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '20px', fontWeight: 500 }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['hello@solehaus.com', '+1 (800) 000-0000', 'Mon–Fri, 9am–6pm'].map((item) => (
                <span key={item} style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>{item}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '24px 0' }}>
          <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '12px' }}>© 2026 Solehaus. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '24px' }}>
            {['Privacy Policy', 'Terms of Service'].map((item) => (
              <a key={item} href="#" style={{ color: 'rgba(255,255,255,0.2)', fontSize: '12px', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.5)')}
                onMouseLeave={e => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.2)')}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
