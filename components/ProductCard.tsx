import Link from 'next/link';
import type { Product } from '@/data/products';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className="product-card block group">
      {/* Image placeholder */}
      <div className="product-image-wrap relative aspect-[4/5] bg-[#f5f5f4] mb-4">
        <div
          className="placeholder-img w-full h-full flex items-center justify-center"
          style={{ background: `linear-gradient(135deg, ${product.color}22 0%, ${product.color}55 100%)` }}
        >
          {/* Replace this div with <img> when you have product photos */}
          <div className="text-center">
            <div
              className="w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-3 opacity-60"
              style={{ background: product.color }}
            >
              <svg width="40" height="40" fill="none" stroke="white" strokeWidth="1" viewBox="0 0 24 24">
                <path d="M2 12C2 12 5 5 12 5s10 7 10 7-3 7-10 7S2 12 2 12z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            </div>
            <span className="text-xs tracking-widest uppercase opacity-40 font-medium">{product.category}</span>
          </div>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.isNew && (
            <span className="bg-black text-white text-[10px] tracking-widest uppercase px-2.5 py-1 font-medium">
              New
            </span>
          )}
          {product.isSale && (
            <span className="bg-[#c9a96e] text-black text-[10px] tracking-widest uppercase px-2.5 py-1 font-medium">
              Sale
            </span>
          )}
        </div>
      </div>

      {/* Info */}
      <div>
        <p className="text-[11px] tracking-widest uppercase text-gray-400 mb-1">{product.category}</p>
        <h3 className="text-sm font-medium text-black mb-2 group-hover:text-[#c9a96e] transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-black">${product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
