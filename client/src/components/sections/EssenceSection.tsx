/**
 * EssenceSection Component
 * Design: バロック・ミスティシズム
 * 
 * 背景：黒のグラデーション
 * 画像：手の中で光る石、古い手紙や羽ペンが映り込む
 * 見出し：ゴールド・明朝体・中央「スピリチュアルの本質」
 * サブ見出し：白・明朝体・左寄せ・大「石は『意志』を受け取る器である」
 * 画像は右側に大きく配置
 */

import { GoldLine, GoldLineDouble } from '@/components/GoldLine';
import { GoldOrnament } from '@/components/GoldOrnament';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function EssenceSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section 
      ref={ref}
      className="relative py-20 md:py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #000000 0%, #080808 50%, #000000 100%)'
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
            スピリチュアルの本質
          </span>
        </div>

        {/* Two column layout - reversed */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Text - Left side */}
          <div 
            className={`order-2 lg:order-1 fade-in-up ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: '0.2s' }}
          >
            <h3 className="font-serif-jp text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-8 md:mb-12 leading-tight">
              石は『意志』を<br />受け取る器である
            </h3>

            <div className="space-y-6 md:space-y-8">
              <p className="font-serif-jp text-white/90 text-base md:text-lg leading-loose">
                スピリチュアルとは、芳醇なる誰の祝福にも似た願いを
                「何かに託す」という行為に他ならない。
              </p>
              
              <p className="font-serif-jp text-white/80 text-base md:text-lg leading-loose">
                それは意志を可視化するとか、
                意念を生み出すとか、
                石は『意志』を受け取る器であるか、
                石は至純なる意念を盤石に振り向けないとも限らない。
              </p>

              <p className="font-serif-jp text-white/70 text-base md:text-lg leading-loose">
                あなたの意志が、この石に宿る時、
                運命は静かに動き始める。
              </p>

              <div className="pt-4">
                <GoldLine width="100px" className="!mx-0" />
              </div>
            </div>
          </div>

          {/* Image - Right side */}
          <div 
            className={`order-1 lg:order-2 relative fade-in-up ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: '0.4s' }}
          >
            <div className="relative">
              {/* Glow effect */}
              <div 
                className="absolute inset-0 blur-3xl opacity-30"
                style={{
                  background: 'radial-gradient(circle at 60% 40%, rgba(212, 175, 55, 0.4) 0%, transparent 60%)'
                }}
              />
              
              {/* Frame decoration */}
              <div 
                className="absolute -inset-4 opacity-20"
                style={{
                  border: '1px solid #D4AF37',
                }}
              />
              
              <img 
                src="/images/essence-stone.png" 
                alt="手の中で光る石" 
                className="relative w-full h-auto"
              />

              {/* Light rays overlay */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-30"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.2) 0%, transparent 50%)'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Gold ornament */}
      <GoldOrnament position="top-right" size="sm" className="opacity-20" />

      {/* Bottom decoration */}
      <div className="mt-12 md:mt-16">
        <GoldLineDouble />
      </div>
    </section>
  );
}
