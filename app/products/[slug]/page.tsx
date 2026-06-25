import Link from 'next/link';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import AddToBag from './AddToBag';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const related = products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 3);

  return (
    <div style={{ paddingTop: '64px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '48px 48px 80px' }}>

        {/* Breadcrumb */}
        <nav style={{ display: 'flex', gap: '8px', fontSize: '12px', color: 'rgba(0,0,0,0.35)', marginBottom: '48px' }}>
          <Link href="/" style={{ color: 'rgba(0,0,0,0.35)', textDecoration: 'none' }}>Home</Link>
          <span>/</span>
          <Link href="/products" style={{ color: 'rgba(0,0,0,0.35)', textDecoration: 'none' }}>Products</Link>
          <span>/</span>
          <span style={{ color: '#0a0a0a' }}>{product.name}</span>
        </nav>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }}>

          {/* Image */}
          <div style={{
            aspectRatio: '4/5',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: `linear-gradient(135deg, ${product.color}18 0%, ${product.color}40 100%)`,
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '120px', height: '120px', borderRadius: '50%',
                background: product.color, opacity: 0.4,
                display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px',
              }}>
                <svg width="48" height="48" fill="none" stroke="white" strokeWidth="0.8" viewBox="0 0 24 24">
                  <path d="M2 12C2 12 5 5 12 5s10 7 10 7-3 7-10 7S2 12 2 12z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <p style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', opacity: 0.3 }}>Drop your image here</p>
            </div>
          </div>

          {/* Info */}
          <div style={{ paddingTop: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <span style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: '#c9a96e', fontWeight: 500 }}>{product.category}</span>
              {product.isNew && <span style={{ background: '#0a0a0a', color: 'white', fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', padding: '4px 10px', fontWeight: 600 }}>New</span>}
              {product.isSale && <span style={{ background: '#c9a96e', color: '#000', fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', padding: '4px 10px', fontWeight: 600 }}>Sale</span>}
            </div>

            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '42px', fontWeight: 600, color: '#0a0a0a', marginBottom: '12px', lineHeight: 1.1 }}>
              {product.name}
            </h1>
            <p style={{ color: 'rgba(0,0,0,0.5)', fontSize: '14px', lineHeight: '1.7', marginBottom: '24px' }}>{product.description}</p>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '28px' }}>
              <span style={{ fontSize: '28px', fontWeight: 600 }}>${product.price}</span>
              {product.originalPrice && (
                <span style={{ fontSize: '18px', color: 'rgba(0,0,0,0.35)', textDecoration: 'line-through' }}>${product.originalPrice}</span>
              )}
            </div>

            <AddToBag price={product.price} originalPrice={product.originalPrice} />
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div style={{ marginTop: '80px', borderTop: '1px solid rgba(0,0,0,0.08)', paddingTop: '64px' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <p style={{ fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', color: '#c9a96e', marginBottom: '12px', fontWeight: 500 }}>You may also like</p>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '36px', fontWeight: 600 }}>Related Products</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
              {related.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
