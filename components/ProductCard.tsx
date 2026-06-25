import Link from 'next/link';
import type { Product } from '@/data/products';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className="product-card block group">
      {/* Product image */}
      <div className="product-image-wrap relative aspect-[4/5] bg-[#f5f5f4] mb-4 overflow-hidden">
        <div className="placeholder-img w-full h-full">
          <img
            src="/images/Vello2.JPG"
            alt={product.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
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
