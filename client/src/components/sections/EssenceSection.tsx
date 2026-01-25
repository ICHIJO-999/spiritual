/**
 * EssenceSection - 本質セクション
 * デザイン: 漆黒×ゴールド+赤のアクセント
 * 「石は、あなたを幸せにしません」
 */

import { GoldLine, GoldLineDouble } from '@/components/GoldLine';
import { GoldOrnament } from '@/components/GoldOrnament';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function EssenceSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { ref: listRef, isVisible: listVisible } = useScrollAnimation(0.1);

  return (
    <section 
      ref={ref}
      className="relative py-20 md:py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #000000 0%, #080808 50%, #000000 100%)'
      }}
    >
      {/* Subtle gold glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5"
        style={{
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.3) 0%, transparent 50%)'
        }}
      />

      {/* Top decoration */}
      <div className="mb-12 md:mb-16">
        <GoldLineDouble />
      </div>

      <div className="container relative z-10">
        {/* Section header */}
        <div 
          className={`text-center mb-12 md:mb-20 fade-in-up ${isVisible ? 'visible' : ''}`}
        >
          <span className="text-gold-gradient font-serif-jp text-sm md:text-base tracking-[0.3em]">
            
          </span>
          <h2 className="font-serif-jp text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mt-4 leading-tight">
            石は、あなたを
            <br />
            <span className="text-china-red">幸せにしません</span>
          </h2>
        </div>

        {/* Two column layout - reversed */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Text - Left side */}
          <div 
            className={`order-2 lg:order-1 fade-in-up ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: '0.2s' }}
          >
            <div className="space-y-6 md:space-y-8">
              <p className="font-serif-jp text-gold font-bold text-xl md:text-2xl">
                多くの人が誤解しています。
              </p>
              
              <div className="space-y-2 text-white/70 font-serif-jp text-base md:text-lg pl-4 border-l-2 border-white/20">
                <p>「石を持てば、運が良くなる」</p>
                <p>「幸せが向こうからやってくる」</p>
              </div>
              
              <p className="font-serif-jp text-china-red font-bold text-xl md:text-2xl">
                違います。
              </p>
              
              <p className="font-serif-jp text-white/90 text-base md:text-lg leading-loose">
                この石の本質は、
              </p>
              
              <div className="bg-gold/10 border border-gold/30 p-4 md:p-6 rounded">
                <p className="font-serif-jp text-gold font-bold text-xl md:text-2xl text-center">
                  【あなたの想いを、現実に変換する装置】
                </p>
              </div>
              
              <p className="font-serif-jp text-white/90 text-base md:text-lg leading-loose">
                です。
              </p>

              <div className="pt-4 border-t border-gold/20">
                <p className="font-serif-jp text-white/80 text-base md:text-lg leading-loose">
                  この石は、極めて純粋な波動を持っています。
                  <br />
                  だからこそ、持ち主の：
                </p>
              </div>

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
                src="/images/crystal-hands.png" 
                alt="石を持つ手" 
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

        {/* Feature list */}
        <div 
          ref={listRef}
          className={`mt-12 md:mt-16 max-w-2xl mx-auto fade-in-up ${listVisible ? 'visible' : ''}`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {['願い', '感情', '意志', '情報'].map((item, index) => (
              <div 
                key={item}
                className="text-center p-4 md:p-6 border border-gold/30 bg-gold/5 rounded"
                style={{ transitionDelay: `${0.1 * index}s` }}
              >
                <span className="font-serif-jp text-gold text-lg md:text-xl font-bold">
                  {item}
                </span>
              </div>
            ))}
          </div>
          
          <p className="font-serif-jp text-white/80 text-base md:text-lg leading-loose text-center mt-8">
            これらすべてを深く読み取り、記憶し、
            <br />
            <span className="text-gold font-bold">24時間365日、休むことなく現実へと引き寄せ続けます。</span>
          </p>
        </div>

        {/* Conclusion */}
        <div 
          className={`mt-12 md:mt-16 text-center fade-in-up ${listVisible ? 'visible' : ''}`}
          style={{ transitionDelay: '0.4s' }}
        >
          <GoldLine width="40%" className="mb-8" />
          
          <div className="space-y-4 font-serif-jp text-base md:text-lg leading-loose">
            <p className="text-white/90">
              石に「幸せにしてもらう」のではありません。
            </p>
            <p className="text-gold font-bold text-xl md:text-2xl">
              あなたの強い想いを、石に「預ける」のです。
            </p>
            <p className="text-white/80">
              石は、あなたの最強の相棒として、
              <br />
              その想いを現実に定着させるために働き続けます。
            </p>
          </div>
          
          <GoldLine width="40%" className="mt-8" />
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
