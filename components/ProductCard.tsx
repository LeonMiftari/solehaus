import Link from 'next/link';
import type { Product } from '@/data/products';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className="product-card-dior group block" style={{ textDecoration: 'none' }}>

      {/* Image */}
      <div style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden', background: '#f8f7f5' }}>
        <img
          src="/images/Vello2.JPG"
          alt={product.name}
          className="transition-transform duration-700 group-hover:scale-[1.03]"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />

        {/* Badges */}
        {(product.isNew || product.isSale) && (
          <div style={{ position: 'absolute', top: '14px', left: '14px' }}>
            {product.isNew && (
              <span style={{ fontSize: '10px', letterSpacing: '1.5px', color: 'rgba(0,0,0,0.5)', textTransform: 'uppercase', display: 'block' }}>New</span>
            )}
            {product.isSale && (
              <span style={{ fontSize: '10px', letterSpacing: '1.5px', color: '#b8943e', textTransform: 'uppercase', display: 'block' }}>Sale</span>
            )}
          </div>
        )}
      </div>

      {/* Text below — Dior style */}
      <div style={{ padding: '14px 4px 20px' }}>
        <h3 style={{ fontSize: '13px', color: '#1a1a1a', fontWeight: 400, lineHeight: 1.4, marginBottom: '5px', letterSpacing: '0.2px' }}>
          {product.name}
        </h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '13px', color: 'rgba(0,0,0,0.55)', fontWeight: 300 }}>${product.price}</span>
          {product.originalPrice && (
            <span style={{ fontSize: '12px', color: 'rgba(0,0,0,0.28)', textDecoration: 'line-through', fontWeight: 300 }}>${product.originalPrice}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
