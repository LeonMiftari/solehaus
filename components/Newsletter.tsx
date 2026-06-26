'use client';

export default function Newsletter() {
  return (
    <section style={{ background: '#0f0f0f', padding: 'clamp(48px, 7vw, 80px) clamp(16px, 4vw, 48px)' }}>
      <div style={{ maxWidth: '560px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', color: '#c9a96e', marginBottom: '16px', fontWeight: 500 }}>
          Stay updated
        </p>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(32px, 5vw, 44px)', color: 'white', fontWeight: 600, marginBottom: '14px', lineHeight: 1.1 }}>
          Join the Club
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px', lineHeight: '1.7', marginBottom: '36px' }}>
          Get early access to new drops, exclusive member offers, and style inspiration.
        </p>
        <div className="flex flex-col sm:flex-row" style={{ maxWidth: '420px', margin: '0 auto', gap: '0' }}>
          <input
            type="email"
            placeholder="Your email address"
            style={{
              flex: 1,
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.15)',
              color: 'white',
              fontSize: '13px',
              padding: '14px 18px',
              outline: 'none',
              width: '100%',
            }}
          />
          <button style={{
            background: '#c9a96e',
            color: '#000',
            border: 'none',
            padding: '14px 24px',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            transition: 'background 0.2s',
          }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = '#b8955a')}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = '#c9a96e')}
          >
            Subscribe
          </button>
        </div>
        <p style={{ color: 'rgba(255,255,255,0.18)', fontSize: '11px', marginTop: '14px' }}>No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
