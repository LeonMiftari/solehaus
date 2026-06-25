'use client';

export default function AddToBag({ price, originalPrice }: { price: number; originalPrice?: number }) {
  return (
    <div>
      {/* Size picker */}
      <div style={{ marginBottom: '28px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <span style={{ fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600, color: '#0a0a0a' }}>Select Size</span>
          <button style={{ background: 'none', border: 'none', fontSize: '12px', color: 'rgba(0,0,0,0.4)', textDecoration: 'underline', cursor: 'pointer' }}>Size Guide</button>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {['38', '39', '40', '41', '42', '43', '44', '45'].map((size) => (
            <button key={size} style={{
              width: '46px', height: '46px',
              border: '1px solid rgba(0,0,0,0.18)',
              background: 'transparent', fontSize: '13px',
              cursor: 'pointer', transition: 'all 0.15s',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#0a0a0a'; (e.currentTarget as HTMLElement).style.color = 'white'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = '#0a0a0a'; }}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* CTA buttons */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '32px' }}>
        <button style={{
          flex: 1, background: '#0a0a0a', color: 'white', border: 'none',
          padding: '16px', fontSize: '11px', fontWeight: 700,
          letterSpacing: '2.5px', textTransform: 'uppercase', cursor: 'pointer',
        }}
          onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = '#333')}
          onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = '#0a0a0a')}
        >
          Add to Bag
        </button>
        <button style={{
          width: '52px', height: '52px', border: '1px solid rgba(0,0,0,0.18)',
          background: 'transparent', cursor: 'pointer', display: 'flex',
          alignItems: 'center', justifyContent: 'center',
        }}
          onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = '#0a0a0a')}
          onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,0,0,0.18)')}
        >
          <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>

      {/* Trust badges */}
      <div style={{ borderTop: '1px solid rgba(0,0,0,0.08)', paddingTop: '24px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', textAlign: 'center', gap: '8px' }}>
        {[
          { label: 'Free shipping', sub: 'Orders over $150' },
          { label: '30-day returns', sub: 'Easy & free' },
          { label: 'Secure checkout', sub: '256-bit SSL' },
        ].map((item) => (
          <div key={item.label}>
            <p style={{ fontSize: '12px', fontWeight: 500, color: '#0a0a0a', marginBottom: '2px' }}>{item.label}</p>
            <p style={{ fontSize: '11px', color: 'rgba(0,0,0,0.35)' }}>{item.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
