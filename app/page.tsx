import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Categories from "@/components/Categories";
import Link from "next/link";
import { products } from "@/data/products";

export default function Home() {
  const featured = products.slice(0, 4);
  const newArrivals = products.filter((p) => p.isNew);

  return (
    <>
      <Hero />

      {/* Featured Collection */}
      <div style={{ padding: '72px 0 clamp(36px, 5vw, 56px)', background: '#fff', position: 'relative' }}>

        {/* Scroll indicator — absolute at top */}
        <div style={{ display: 'flex', justifyContent: 'center', position: 'absolute', top: '16px', left: 0, right: 0 }}>
          <div className="scroll-bounce" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
            <svg width="28" height="28" fill="none" stroke="#FFD700" strokeWidth="2.2" viewBox="0 0 24 24">
              <path d="M6 9l6 6 6-6"/>
            </svg>
            <svg width="28" height="28" fill="none" stroke="#FFD700" strokeWidth="2.2" viewBox="0 0 24 24" style={{ opacity: 0.4 }}>
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </div>
        </div>

        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(16px, 4vw, 48px)' }}>

          {/* Centered label */}
          <p style={{ fontSize: '13px', letterSpacing: '4px', textTransform: 'uppercase', color: '#e8c255', fontWeight: 600, textAlign: 'center', marginBottom: '12px' }}>
            Handpicked for you
          </p>

          {/* Title + View All row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '20px' }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 400, color: '#0a0a0a', letterSpacing: '-0.3px' }}>
              Featured Collection
            </h2>
            <Link href="/products" style={{ fontSize: '11px', color: '#0a0a0a', textDecoration: 'none', letterSpacing: '2px', textTransform: 'uppercase', borderBottom: '1px solid #0a0a0a', paddingBottom: '3px', whiteSpace: 'nowrap', fontWeight: 400 }}>
              View All
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4" style={{ gap: '2px' }}>
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

      {/* Banner strip */}
      <div style={{ background: '#0a0a0a', padding: '13px clamp(16px, 4vw, 48px)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px 40px' }}>
          {['Free Shipping Over $150', 'Easy 30-Day Returns', 'Authenticity Guaranteed', 'Secure Checkout'].map((item) => (
            <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#c9a96e' }} />
              <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase' }}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <Categories />

      {/* New Arrivals */}
      <div style={{ padding: 'clamp(48px, 6vw, 72px) 0', background: '#fff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(16px, 4vw, 48px)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px' }}>
            <div>
              <p style={{ fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase', color: '#e8c255', marginBottom: '8px', fontWeight: 600 }}>
                Fresh in store
              </p>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 400, color: '#0a0a0a', letterSpacing: '-0.3px' }}>
                New Arrivals
              </h2>
            </div>
            <Link href="/products" style={{ fontSize: '11px', color: '#0a0a0a', textDecoration: 'none', letterSpacing: '2px', textTransform: 'uppercase', borderBottom: '1px solid #0a0a0a', paddingBottom: '3px', whiteSpace: 'nowrap', fontWeight: 400 }}>
              View All
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3" style={{ gap: '2px' }}>
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
