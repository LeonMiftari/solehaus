'use client';

import { useState } from 'react';
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const categories = ['All', 'Sneakers', 'Boots', 'Formal', 'Running', 'Casual'];

export default function ProductsPage() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? products : products.filter(p => p.category === active);

  return (
    <div style={{ paddingTop: '64px' }}>

      {/* Page header */}
      <div style={{ background: '#0a0a0a', padding: 'clamp(40px, 6vw, 64px) clamp(20px, 5vw, 48px)', textAlign: 'center' }}>
        <p style={{ fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', color: '#c9a96e', marginBottom: '12px', fontWeight: 500 }}>Browse</p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '52px', color: 'white', fontWeight: 600, marginBottom: '8px' }}>
          All Products
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '13px' }}>{filtered.length} styles available</p>
      </div>

      {/* Filter bar */}
      <div style={{ position: 'sticky', top: '64px', zIndex: 40, background: 'white', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 48px', display: 'flex', alignItems: 'center', gap: '8px', overflowX: 'auto', height: '56px' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                flexShrink: 0,
                padding: '7px 18px',
                fontSize: '11px',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                fontWeight: 500,
                border: '1px solid',
                cursor: 'pointer',
                transition: 'all 0.15s',
                background: active === cat ? '#0a0a0a' : 'transparent',
                color: active === cat ? 'white' : 'rgba(0,0,0,0.5)',
                borderColor: active === cat ? '#0a0a0a' : 'rgba(0,0,0,0.15)',
              }}
            >
              {cat}
            </button>
          ))}

          <div style={{ marginLeft: 'auto', flexShrink: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '11px', color: 'rgba(0,0,0,0.35)', letterSpacing: '0.5px' }}>Sort:</span>
            <select style={{ fontSize: '12px', color: '#0a0a0a', border: '1px solid rgba(0,0,0,0.15)', padding: '6px 10px', background: 'white', outline: 'none', cursor: 'pointer' }}>
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>
        </div>
      </div>

      {/* Product grid */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: 'clamp(32px, 4vw, 48px) clamp(20px, 5vw, 48px) 80px' }}>
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 0', color: 'rgba(0,0,0,0.35)' }}>
            <p style={{ fontSize: '16px' }}>No products found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
