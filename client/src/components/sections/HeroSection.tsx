/**
 * HeroSection Component
 * Design: バロック・ミスティシズム
 * 
 * 背景：深い黒のグラデーション
 * 画像：開かれた桐箱の中で、光を放つ透明な石
 * メインコピー：ゴールド・明朝体・大サイズ
 * サブコピー：白・明朝体・中サイズ
 * 右下に金色の装飾的な植物モチーフ
 */

import { GoldLine } from '@/components/GoldLine';
import { GoldOrnament } from '@/components/GoldOrnament';
import { Particles } from '@/components/Particles';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function HeroSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #000000 100%)'
      }}
    >
      {/* Particles */}
      <Particles count={30} />

      {/* Top gold line */}
      <div className="absolute top-8 left-0 right-0">
        <GoldLine width="80%" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Text content - Left side */}
          <div 
            className={`order-2 lg:order-1 text-left fade-in-up ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: '0.2s' }}
          >
            <h1 className="font-serif-jp text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 md:mb-8">
              <span className="text-gold-gradient text-glow block">
                世界中の富豪が
              </span>
              <span className="text-gold-gradient text-glow block mt-2">
                探し求めた、
              </span>
              <span className="text-gold-gradient text-glow block mt-2">
                最後の一石。
              </span>
            </h1>
            
            <p className="text-white/90 font-serif-jp text-base sm:text-lg md:text-xl leading-relaxed max-w-lg">
              世界中の富豪が探し求めた、
              <br className="hidden sm:block" />
              最後の一石と言われた、
              <br className="hidden sm:block" />
              稀有な逸品を楽しむ…
            </p>

            <div className="mt-8 md:mt-12">
              <GoldLine width="150px" className="!mx-0" />
            </div>
          </div>

          {/* Image - Right side */}
          <div 
            className={`order-1 lg:order-2 relative fade-in-up ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: '0.4s' }}
          >
            <div className="relative mx-auto lg:ml-auto lg:mr-0 max-w-md lg:max-w-lg">
              {/* Glow effect behind image */}
              <div 
                className="absolute inset-0 blur-3xl opacity-40"
                style={{
                  background: 'radial-gradient(circle, rgba(212, 175, 55, 0.4) 0%, transparent 70%)'
                }}
              />
              
              <img 
                src="/images/hero-stone.png" 
                alt="光を放つパワーストーン" 
                className="relative w-full h-auto glow-pulse"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Gold ornament - bottom right */}
      <GoldOrnament position="bottom-right" size="lg" />

      {/* Bottom gold line */}
      <div className="absolute bottom-8 left-0 right-0">
        <GoldLine width="80%" />
      </div>
    </section>
  );
}
