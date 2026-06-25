import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[580px] flex items-center justify-center overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay muted loop playsInline
        poster="/images/hero-poster.jpg"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Fallback bg */}
      <div className="absolute inset-0 bg-[#141210]" />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content — centered */}
      <div className="relative z-10 text-center text-white px-6 max-w-2xl mx-auto flex flex-col items-center">
        <p className="fade-up text-[11px] tracking-[5px] uppercase text-[#c9a96e] mb-5 font-medium">
          New Collection — 2026
        </p>
        <h1 className="fade-up-delay font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.08] mb-5 text-center">
          Step Into<br />Something New
        </h1>
        <p className="fade-up-delay-2 text-white/60 text-base md:text-lg mb-9 max-w-md mx-auto leading-relaxed font-light text-center">
          A collection of shoes that blend style with comfort — from casual sneakers to elegant dress shoes.
        </p>
        <div className="fade-up-delay-2 flex items-center justify-center gap-3 flex-wrap">
          <Link href="/products" className="btn-primary">Shop Collection</Link>
          <Link href="/products" className="btn-outline">Explore All</Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 scroll-bounce">
        <span className="text-white/30 text-[10px] tracking-[3px] uppercase">Scroll</span>
        <svg width="14" height="14" fill="none" stroke="white" strokeWidth="1.5" viewBox="0 0 24 24" className="opacity-30">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </div>
    </section>
  );
}
