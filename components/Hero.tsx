import Link from 'next/link';

export default function Hero() {
  return (
    <section style={{ position: 'relative', width: '100%', height: '80vh', minHeight: '500px', overflow: 'hidden' }}>

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
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.1) 35%, rgba(0,0,0,0.65) 100%)',
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

      {/* Top-left chapter marker */}
      <div style={{ position: 'absolute', top: '24px', left: 'clamp(16px, 4vw, 40px)', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{ color: '#c9a96e', fontSize: '10px', letterSpacing: '3px', fontWeight: 600 }}>01</span>
        <div style={{ width: '28px', height: '1px', background: 'rgba(255,255,255,0.25)' }} />
      </div>

      {/* Top-right season marker */}
      <div style={{ position: 'absolute', top: '26px', right: 'clamp(16px, 4vw, 40px)' }}>
        <span style={{ color: 'rgba(255,255,255,0.28)', fontSize: '10px', letterSpacing: '5px', textTransform: 'uppercase' }}>SS 2026</span>
      </div>

      {/* Main content */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', color: 'white',
        padding: '0 clamp(16px, 5vw, 48px)',
        paddingBottom: '60px',
      }}>

        {/* Eyebrow with lines */}
        <div className="fade-up" style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
          <div style={{ width: '36px', height: '1px', background: '#c9a96e', opacity: 0.8 }} />
          <span style={{ fontSize: '9px', letterSpacing: '7px', textTransform: 'uppercase', color: '#c9a96e', fontWeight: 500 }}>
            New Collection
          </span>
          <div style={{ width: '36px', height: '1px', background: '#c9a96e', opacity: 0.8 }} />
        </div>

        {/* Headline — light + bold weight contrast */}
        <div className="fade-up-delay" style={{ marginBottom: '14px', lineHeight: 0.95 }}>
          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(36px, 6vw, 72px)',
            fontWeight: 300,
            letterSpacing: '-0.5px',
            color: 'rgba(255,255,255,0.9)',
          }}>
            Step Into
          </div>
          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(36px, 6vw, 72px)',
            fontWeight: 700,
            letterSpacing: '-0.5px',
            color: 'white',
          }}>
            Something New
          </div>
        </div>

        {/* Subtitle */}
        <p className="fade-up-delay-2" style={{
          color: 'rgba(255,255,255,0.45)',
          fontSize: 'clamp(13px, 1.3vw, 15px)',
          lineHeight: 1.9,
          marginBottom: '32px',
          maxWidth: '360px',
          fontWeight: 300,
          letterSpacing: '0.4px',
        }}>
          A curated collection blending elegance with everyday comfort.
        </p>

        {/* CTAs */}
        <div className="fade-up-delay-2" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link href="/products" className="btn-primary">Shop Collection</Link>
          <Link href="/products" className="btn-outline">Explore All</Link>
        </div>
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
