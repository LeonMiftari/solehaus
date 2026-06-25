import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Categories from "@/components/Categories";
import Newsletter from "@/components/Newsletter";
import Link from "next/link";
import { products } from "@/data/products";

const section = { maxWidth: '1100px', margin: '0 auto', padding: '0 48px' } as const;

export default function Home() {
  const featured = products.slice(0, 4);
  const newArrivals = products.filter((p) => p.isNew);

  return (
    <>
      <Hero />

      {/* Featured Products */}
      <div style={{ padding: '80px 0', background: '#fff' }}>
        <div style={section}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', color: '#c9a96e', marginBottom: '12px', fontWeight: 500 }}>
              Handpicked for you
            </p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '40px', fontWeight: 600, color: '#0a0a0a' }}>
              Featured Collection
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/products" style={{ fontSize: '12px', color: 'rgba(0,0,0,0.45)', textDecoration: 'none', letterSpacing: '1px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              View all products →
            </Link>
          </div>
        </div>
      </div>

      {/* Banner strip */}
      <div style={{ background: '#c9a96e', padding: '14px 48px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0 48px' }}>
          {['Free Shipping Over $150', 'Easy 30-Day Returns', 'Authenticity Guaranteed', 'Secure Checkout'].map((item) => (
            <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '3px', height: '3px', borderRadius: '50%', background: 'rgba(0,0,0,0.3)' }} />
              <span style={{ color: '#000', fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <Categories />

      {/* New Arrivals */}
      <div style={{ padding: '80px 0', background: '#f9f8f6' }}>
        <div style={section}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', color: '#c9a96e', marginBottom: '12px', fontWeight: 500 }}>
              Fresh in store
            </p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '40px', fontWeight: 600, color: '#0a0a0a' }}>
              New Arrivals
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/products" style={{ fontSize: '12px', color: 'rgba(0,0,0,0.45)', textDecoration: 'none', letterSpacing: '1px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              See all new arrivals →
            </Link>
          </div>
        </div>
      </div>

      {/* Editorial banner */}
      <div style={{ background: '#1a1410', padding: '100px 48px', textAlign: 'center', position: 'relative' }}>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', color: '#c9a96e', marginBottom: '16px', fontWeight: 500 }}>Limited edition</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '52px', color: 'white', fontWeight: 600, marginBottom: '32px' }}>The Sale Edit</h2>
          <Link href="/products" className="btn-primary">Shop Sale</Link>
        </div>
      </div>

      <Newsletter />
    </>
  );
}
