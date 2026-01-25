/**
 * HeroSection - ファーストビュー
 * デザイン: 漆黒×ゴールド+赤のアクセント（中国をイメージ）
 * セールスレター形式: 感情に訴えかけるコピーライティング
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
            {/* メインコピー - 感情に訴えかける */}
            <p className="text-gold font-serif-jp text-lg sm:text-xl md:text-2xl leading-relaxed mb-4">
              「この石を手に取った瞬間、
            </p>
            <h1 className="font-serif-jp text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 md:mb-8">
              <span className="text-gold-gradient text-glow block">
                とてつもない強い
              </span>
              <span className="text-gold-gradient text-glow block mt-2">
                エネルギーを感じました」
              </span>
            </h1>
            
            {/* サブコピー - ストーリー性 */}
            <div className="space-y-4 text-white/90 font-serif-jp text-base sm:text-lg md:text-xl leading-loose">
              <p>
                世界中の富豪が探し求め、
                <br className="hidden sm:block" />
                <span className="text-china-red font-bold">中国の資産家が独占する</span>。
              </p>
              <p>
                一般市場には、二度と現れないはずだった
                <br className="hidden sm:block" />
                <span className="text-gold font-bold">「最後の一石」</span>。
              </p>
              <p className="text-white/80">
                数日間の交渉の末、奇跡的に手にした、
                <br />
                <span className="text-gold text-xl md:text-2xl font-bold">たった1点。</span>
              </p>
            </div>

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
                src="/images/hero-realistic.png" 
                alt="神秘的な光を放つパワーストーン" 
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

      {/* Scroll indicator */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-gold/60 text-sm font-serif-jp mb-2">Scroll</span>
        <svg
          className="w-5 h-5 text-gold/60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
