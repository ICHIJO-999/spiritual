/**
 * OfferSection Component
 * Design: バロック・ミスティシズム
 * 
 * 背景：黒
 * 画像：桐箱、石、手紙、すべてが美しく配置されたプロダクト写真
 * 見出し：ゴールド・明朝体・中央「オファー」
 * サブ見出し：白・明朝体・中央「【限定1名】プレミアム・エネルギー・オーダー」
 * 価格表示：ゴールド・大きく・中央
 * CTAボタン：ゴールドで目立たせつつ、装飾的に
 */

import { GoldLine, GoldLineDouble } from '@/components/GoldLine';
import { GoldOrnament } from '@/components/GoldOrnament';
import { Particles } from '@/components/Particles';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function OfferSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section 
      ref={ref}
      className="relative py-20 md:py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #000000 100%)'
      }}
    >
      {/* Particles for magical effect */}
      <Particles count={15} />

      {/* Top decoration */}
      <div className="mb-12 md:mb-16">
        <GoldLineDouble />
      </div>

      <div className="container relative z-10">
        {/* Section header */}
        <div 
          className={`text-center mb-12 md:mb-16 fade-in-up ${isVisible ? 'visible' : ''}`}
        >
          <span className="text-gold-gradient font-serif-jp text-sm md:text-base tracking-[0.3em] uppercase">
            オファー
          </span>
          <h2 className="font-serif-jp text-xl sm:text-2xl md:text-3xl font-semibold text-white mt-4">
            【限定1名】プレミアム・エネルギー・オーダー
          </h2>
        </div>

        {/* Product image */}
        <div 
          className={`max-w-3xl mx-auto mb-12 md:mb-16 fade-in-up ${isVisible ? 'visible' : ''}`}
          style={{ transitionDelay: '0.2s' }}
        >
          <div className="relative">
            {/* Glow effect */}
            <div 
              className="absolute inset-0 blur-3xl opacity-40"
              style={{
                background: 'radial-gradient(circle at 60% 40%, rgba(212, 175, 55, 0.3) 0%, transparent 60%)'
              }}
            />
            
            {/* Decorative frame */}
            <div className="relative p-4 md:p-8">
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-12 h-12 md:w-16 md:h-16 border-t border-l border-[#D4AF37]/50" />
              <div className="absolute top-0 right-0 w-12 h-12 md:w-16 md:h-16 border-t border-r border-[#D4AF37]/50" />
              <div className="absolute bottom-0 left-0 w-12 h-12 md:w-16 md:h-16 border-b border-l border-[#D4AF37]/50" />
              <div className="absolute bottom-0 right-0 w-12 h-12 md:w-16 md:h-16 border-b border-r border-[#D4AF37]/50" />
              
              <img 
                src="/images/product-set.png" 
                alt="プレミアムパワーストーンセット" 
                className="w-full h-auto glow-pulse"
              />
            </div>
          </div>
        </div>

        {/* Price */}
        <div 
          className={`text-center mb-12 md:mb-16 fade-in-up ${isVisible ? 'visible' : ''}`}
          style={{ transitionDelay: '0.4s' }}
        >
          <GoldLine width="100px" className="mb-8" />
          
          <div className="font-cinzel text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gold-gradient text-glow tracking-wider">
            ¥3,980,000
          </div>
          
          <p className="font-serif-jp text-white/60 text-sm md:text-base mt-4">
            （税込・送料無料）
          </p>

          <GoldLine width="100px" className="mt-8" />
        </div>

        {/* CTA Button */}
        <div 
          className={`text-center fade-in-up ${isVisible ? 'visible' : ''}`}
          style={{ transitionDelay: '0.6s' }}
        >
          <button className="btn-luxury text-base md:text-lg tracking-wider">
            この奇跡の1点を手に入れ、運命を動かす
          </button>
          
          <p className="font-serif-jp text-white/50 text-xs md:text-sm mt-6">
            ※ 完全予約制・事前審査あり
          </p>
        </div>

        {/* Star decorations */}
        <div 
          className={`flex justify-center gap-4 mt-12 md:mt-16 fade-in-up ${isVisible ? 'visible' : ''}`}
          style={{ transitionDelay: '0.8s' }}
        >
          {[...Array(5)].map((_, i) => (
            <div 
              key={i}
              className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full"
              style={{
                background: '#D4AF37',
                boxShadow: '0 0 6px #D4AF37, 0 0 12px #D4AF37',
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Gold ornaments */}
      <GoldOrnament position="top-left" size="md" className="opacity-20" />
      <GoldOrnament position="top-right" size="md" className="opacity-20" />

      {/* Bottom decoration */}
      <div className="mt-12 md:mt-16">
        <GoldLineDouble />
      </div>
    </section>
  );
}
