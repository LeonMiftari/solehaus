import Link from 'next/link';

export default function Hero() {
  return (
    <section style={{ position: 'relative', width: '100%', height: '85vh', minHeight: '500px', overflow: 'hidden' }}>

      {/* Fallback bg */}
      <div style={{ position: 'absolute', inset: 0, background: '#0e0c0a' }} />

      {/* Video */}
      <video
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
        autoPlay muted loop playsInline
      >
        <source src="/Model6.mp4" type="video/mp4" />
      </video>

      {/* Cinematic gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.65) 100%)',
      }} />

      {/* Giant background watermark text */}
      <div style={{
        position: 'absolute',
        bottom: '30px',
        left: '-10px',
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 'clamp(100px, 20vw, 220px)',
        fontWeight: 700,
        color: 'transparent',
        WebkitTextStroke: '1px rgba(255,255,255,0.055)',
        lineHeight: 1,
        userSelect: 'none',
        pointerEvents: 'none',
        letterSpacing: '-4px',
        whiteSpace: 'nowrap',
      }}>
        SOLE
      </div>


      {/* Main content — pinned to bottom */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'flex-end',
        textAlign: 'center', color: 'white',
        padding: '0 clamp(16px, 5vw, 48px)',
        paddingBottom: '90px',
      }}>

        {/* Eyebrow — New Collection */}
        <div className="fade-up" style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '28px' }}>
          <div style={{ width: '36px', height: '1px', background: '#f0d080', opacity: 0.9 }} />
          <span style={{ fontSize: '13px', letterSpacing: '7px', textTransform: 'uppercase', color: '#f0d080', fontWeight: 800 }}>
            New Collection
          </span>
          <div style={{ width: '36px', height: '1px', background: '#f0d080', opacity: 0.9 }} />
        </div>

        {/* Dior-style Discover button */}
        <Link href="/products" className="hero-discover">
          Discover
        </Link>
      </div>

      {/* Marquee ticker at bottom */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: '38px',
        background: 'rgba(201,169,110,0.12)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderTop: '1px solid rgba(201,169,110,0.18)',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}>
        <div style={{ display: 'flex', animation: 'marquee 22s linear infinite', whiteSpace: 'nowrap' }}>
          {[...Array(6)].map((_, i) => (
            <span key={i} style={{ color: 'rgba(255,255,255,0.4)', fontSize: '9px', letterSpacing: '4px', textTransform: 'uppercase', paddingRight: '0' }}>
              &nbsp;&nbsp;Premium Footwear&nbsp;&nbsp;·&nbsp;&nbsp;New Collection 2026&nbsp;&nbsp;·&nbsp;&nbsp;Crafted for Excellence&nbsp;&nbsp;·&nbsp;&nbsp;Step Into Style&nbsp;&nbsp;·&nbsp;&nbsp;Free Shipping Over $150&nbsp;&nbsp;·
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
