import Link from 'next/link';
import type { Product } from '@/data/products';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group relative block overflow-hidden"
      style={{ aspectRatio: '3/4', display: 'block' }}
    >
      {/* Image */}
      <img
        src="/images/Vello2.JPG"
        alt={product.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        style={{ display: 'block' }}
      />

      {/* Bottom gradient */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 40%, transparent 65%)',
      }} />

      {/* Badges */}
      <div style={{ position: 'absolute', top: '12px', left: '12px', display: 'flex', flexDirection: 'column', gap: '5px', zIndex: 2 }}>
        {product.isNew && (
          <span style={{ background: 'white', color: '#0a0a0a', fontSize: '8px', letterSpacing: '2px', textTransform: 'uppercase', padding: '4px 10px', fontWeight: 700 }}>New</span>
        )}
        {product.isSale && (
          <span style={{ background: '#c9a96e', color: '#000', fontSize: '8px', letterSpacing: '2px', textTransform: 'uppercase', padding: '4px 10px', fontWeight: 700 }}>Sale</span>
        )}
      </div>

      {/* Text overlay — fades out on hover */}
      <div
        className="group-hover:opacity-0"
        style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 18px', zIndex: 2, transition: 'opacity 0.3s ease' }}
      >
        <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '9px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '5px' }}>
          {product.category}
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '8px' }}>
          <h3 style={{ fontFamily: "'Cormorant Garamond', serif", color: 'white', fontSize: 'clamp(17px, 2vw, 21px)', fontWeight: 600, lineHeight: 1.1 }}>
            {product.name}
          </h3>
          <div style={{ textAlign: 'right', flexShrink: 0 }}>
            <div style={{ color: 'white', fontSize: '14px', fontWeight: 600 }}>${product.price}</div>
            {product.originalPrice && (
              <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '11px', textDecoration: 'line-through' }}>${product.originalPrice}</div>
            )}
          </div>
        </div>
      </div>

      {/* Quick view — fades in on hover */}
      <div
        className="group-hover:opacity-100"
        style={{
          position: 'absolute', inset: 0,
          background: 'rgba(0,0,0,0.5)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          opacity: 0, transition: 'opacity 0.35s ease', zIndex: 3, gap: '12px',
        }}
      >
        <span style={{
          color: 'white', fontSize: '10px', letterSpacing: '5px',
          textTransform: 'uppercase', fontWeight: 500,
          borderBottom: '1px solid rgba(255,255,255,0.45)', paddingBottom: '6px',
        }}>
          Quick View
        </span>
        <div style={{ width: '32px', height: '1px', background: '#c9a96e', opacity: 0.7 }} />
      </div>
    </Link>
  );
}
