/**
 * OfferSection - クロージングセクション
 * デザイン: 漆黒×ゴールド+赤のアクセント
 * 「石が、あなたを呼んでいます」
 */

import { GoldLine, GoldLineDouble } from '@/components/GoldLine';
import { GoldOrnament } from '@/components/GoldOrnament';
import { Particles } from '@/components/Particles';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function OfferSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation(0.1);

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

      {/* Subtle gold glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.4) 0%, transparent 50%)'
        }}
      />

      {/* Gold ornaments */}
      <GoldOrnament position="top-left" size="lg" />
      <GoldOrnament position="top-right" size="lg" />
      <GoldOrnament position="bottom-left" size="lg" />
      <GoldOrnament position="bottom-right" size="lg" />

      {/* Top decoration */}
      <div className="mb-12 md:mb-16">
        <GoldLineDouble />
      </div>

      <div className="container relative z-10">
        {/* Section header */}
        <div 
          className={`text-center mb-12 md:mb-16 fade-in-up ${isVisible ? 'visible' : ''}`}
        >
          <GoldLine width="60px" className="mb-6" />
          <p className="text-gold/80 font-serif-jp text-sm tracking-[0.3em] mb-4">
            
          </p>
          <h2 className="font-serif-jp text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            石が、あなたを
            <br />
            <span className="text-gold">呼んでいます</span>
          </h2>
          <GoldLine width="60px" className="mt-6" />
        </div>

        {/* Opening message */}
        <div 
          className={`max-w-3xl mx-auto text-center mb-12 md:mb-16 fade-in-up ${isVisible ? 'visible' : ''}`}
          style={{ transitionDelay: '0.2s' }}
        >
          <div className="space-y-6 font-serif-jp text-base md:text-lg leading-loose">
            <p className="text-white/90">
              このページに辿り着き、
              <br />
              ここまで読んだあなたは、<span className="text-gold font-bold">偶然ではありません</span>。
            </p>
            <p className="text-gold font-bold text-xl md:text-2xl">
              石が、あなたを選んだのです。
            </p>
            <p className="text-white/80">
              世界中の誰かが手にするはずだったこの石が、
              <br />
              なぜか今、あなたの目の前にある。
            </p>
            <p className="text-white/70">
              それは、あなたの人生が今、
              <br />
              <span className="text-china-red font-bold">大きな転換点を迎えている</span>からかもしれません。
            </p>
          </div>
        </div>

        {/* Product image */}
        <div 
          className={`max-w-3xl mx-auto mb-12 md:mb-16 fade-in-up ${isVisible ? 'visible' : ''}`}
          style={{ transitionDelay: '0.3s' }}
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
              <div className="absolute top-0 left-0 w-12 h-12 md:w-16 md:h-16 border-t-2 border-l-2 border-gold" />
              <div className="absolute top-0 right-0 w-12 h-12 md:w-16 md:h-16 border-t-2 border-r-2 border-gold" />
              <div className="absolute bottom-0 left-0 w-12 h-12 md:w-16 md:h-16 border-b-2 border-l-2 border-gold" />
              <div className="absolute bottom-0 right-0 w-12 h-12 md:w-16 md:h-16 border-b-2 border-r-2 border-gold" />
              
              <img 
                src="/images/final-stone-box.png" 
                alt="奇跡の一石 - 証明書付き" 
                className="w-full h-auto glow-pulse"
              />
            </div>
          </div>
        </div>

        {/* Urgency message and CTA */}
        <div 
          ref={ctaRef}
          className={`max-w-3xl mx-auto text-center fade-in-up ${ctaVisible ? 'visible' : ''}`}
        >
          <GoldLine width="40%" className="mb-8" />
          
          <div className="space-y-6 font-serif-jp text-base md:text-lg leading-loose mb-8">
            <p className="text-china-red font-bold text-xl md:text-2xl">
              
            </p>
            <p className="text-white/80">
              二度と、この石に出会うことはないでしょう。
            </p>
            <p className="text-white/90">
              あなたの中に、もし少しでも
              <br />
              <span className="text-gold font-bold text-xl">「これは、私のための石だ」</span>
              <br />
              という感覚があるなら、
            </p>
            <p className="text-gold font-bold text-xl md:text-2xl">
              それを信じて、一歩を踏み出してください。
            </p>
          </div>

          {/* CTA Button */}
          <div className="mb-8">
            <button className="btn-luxury text-base md:text-lg tracking-wider px-8 md:px-12 py-4 md:py-5">
              この奇跡の1点を手に入れる
            </button>
          </div>

          <p className="text-white/60 font-serif-jp text-sm">
            ※ 完全予約制・事前審査あり
          </p>

          {/* Final message */}
          <div className="mt-12 pt-8 border-t border-gold/20">
            <p className="text-white/70 font-serif-jp text-base md:text-lg leading-loose">
              この石が、あなたの人生の新たな扉を開く瞬間に、
              <br />
              私も立ち会えることを、心から願っています。
            </p>
          </div>
          
          <GoldLine width="40%" className="mt-8" />
        </div>

        {/* Trust indicators */}
        <div 
          className={`mt-12 md:mt-16 flex flex-wrap justify-center gap-4 md:gap-8 fade-in-up ${ctaVisible ? 'visible' : ''}`}
          style={{ transitionDelay: '0.3s' }}
        >
          {['証明書付き', '完全保証', '限定1点', '送料無料'].map((item) => (
            <div 
              key={item}
              className="flex items-center gap-2 text-gold/80"
            >
              <span className="w-2 h-2 bg-gold rounded-full" />
              <span className="font-serif-jp text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="mt-12 md:mt-16">
        <GoldLineDouble />
      </div>
    </section>
  );
}
