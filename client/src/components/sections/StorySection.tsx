/**
 * StorySection Component
 * Design: バロック・ミスティシズム
 * 
 * 背景：暗いトーンの和室、対峙する2人のシルエット
 * 見出し：ゴールド・明朝体・中央揃え「秘匿のストーリー」
 * サブ見出し：白・明朝体・大サイズ「10%の可能性をこじ開けた対峙」
 * 左右2カラムレイアウト
 */

import { GoldLine, GoldLineDouble } from '@/components/GoldLine';
import { GoldOrnament } from '@/components/GoldOrnament';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function StorySection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section 
      ref={ref}
      className="relative py-20 md:py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #000000 0%, #0d0d0d 50%, #000000 100%)'
      }}
    >
      {/* Top decoration */}
      <div className="mb-12 md:mb-16">
        <GoldLineDouble />
      </div>

      <div className="container relative z-10">
        {/* Section header */}
        <div 
          className={`text-center mb-12 md:mb-20 fade-in-up ${isVisible ? 'visible' : ''}`}
        >
          <span className="text-gold-gradient font-serif-jp text-sm md:text-base tracking-[0.3em] uppercase">
            秘匿のストーリー
          </span>
          <h2 className="font-serif-jp text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mt-4 leading-tight">
            10%の可能性を<br className="sm:hidden" />こじ開けた対峙
          </h2>
        </div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Image - Left side */}
          <div 
            className={`relative fade-in-up ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: '0.2s' }}
          >
            <div className="relative">
              {/* Frame decoration */}
              <div 
                className="absolute -inset-4 opacity-30"
                style={{
                  border: '1px solid #D4AF37',
                  background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.05) 0%, transparent 100%)'
                }}
              />
              
              <img 
                src="/images/story-scene.png" 
                alt="交渉シーン" 
                className="relative w-full h-auto"
                style={{
                  filter: 'contrast(1.1) brightness(0.9)'
                }}
              />

              {/* Vignette effect */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)'
                }}
              />
            </div>
          </div>

          {/* Text - Right side */}
          <div 
            className={`fade-in-up ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: '0.4s' }}
          >
            <div className="space-y-6 md:space-y-8">
              <p className="font-serif-jp text-white/90 text-base md:text-lg leading-loose">
                世界市場を舞台に回収のプロが幾世代にも渡り追い求め、
                遂には、動かざる秘密の決断を基に辿り着けた、
                貴重な稀少石。
              </p>
              
              <p className="font-serif-jp text-white/80 text-base md:text-lg leading-loose">
                嫉妬を退け、皮膜の古派によど緯移を還送した、
                そのあまりにも純粋な波動。
                10%の可能性を現実に変えた、
                あの対峙の瞬間。
              </p>

              <p className="font-serif-jp text-white/70 text-base md:text-lg leading-loose">
                真の価値を見抜く目を持つ者だけが、
                この石の真髄に触れることを許される。
              </p>

              <div className="pt-4">
                <GoldLine width="100px" className="!mx-0" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gold ornament - bottom */}
      <GoldOrnament position="bottom-left" size="md" />
      <GoldOrnament position="bottom-right" size="md" />

      {/* Bottom decoration */}
      <div className="mt-12 md:mt-16">
        <GoldLineDouble />
      </div>
    </section>
  );
}
