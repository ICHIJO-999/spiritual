/**
 * StorySection - 緊迫のストーリー
 * デザイン: 漆黒×ゴールド+赤のアクセント（中国をイメージ）
 * 「なぜ、この石は"存在してはいけない"のか」
 */

import { GoldLine, GoldLineDouble } from '@/components/GoldLine';
import { GoldOrnament } from '@/components/GoldOrnament';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function StorySection() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { ref: quoteRef, isVisible: quoteVisible } = useScrollAnimation(0.1);

  return (
    <section 
      ref={ref}
      className="relative py-20 md:py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #000000 0%, #0d0d0d 50%, #000000 100%)'
      }}
    >
      {/* Subtle red accent glow */}
      <div 
        className="absolute top-0 right-0 w-1/2 h-1/2 opacity-10"
        style={{
          background: 'radial-gradient(circle at top right, rgba(139, 0, 0, 0.5) 0%, transparent 70%)'
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
            秘匿のストーリー
          </span>
          <h2 className="font-serif-jp text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mt-4 leading-tight">
            なぜ、この石は
            <br />
            <span className="text-china-red">「存在してはいけない」</span>のか
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
                src="/images/negotiation-scene.png" 
                alt="緊迫の交渉シーン" 
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
              <p className="font-serif-jp text-gold font-bold text-xl md:text-2xl">
                正直に申し上げます。
              </p>
              
              <p className="font-serif-jp text-white/90 text-base md:text-lg leading-loose">
                このレベルの石は、採掘された瞬間に、
                <span className="text-gold font-bold">すべて予約が埋まります</span>。
              </p>
              
              <p className="font-serif-jp text-white/90 text-base md:text-lg leading-loose">
                <span className="text-china-red font-bold">中国の富裕層たち</span>が、
                資産運用とエネルギーの両面から、
                莫大な資金を投じて独占してしまうからです。
              </p>

              <p className="font-serif-jp text-white/80 text-base md:text-lg leading-loose">
                彼らは知っています。
                <br />
                この石が持つ<span className="text-gold">「波動」</span>が、
                どれほど人生を変える力を持つかを。
              </p>

              <div className="pt-4 border-t border-gold/20">
                <p className="font-serif-jp text-white/70 text-base md:text-lg leading-loose italic">
                  今回、私がVIP顧客のために動いていた中で、
                  偶然にも<span className="text-gold">「1点だけ」</span>リストに現れた石がありました。
                </p>
              </div>

              <div className="pt-4">
                <GoldLine width="100px" className="!mx-0" />
              </div>
            </div>
          </div>
        </div>

        {/* Negotiation story - Quote section */}
        <div 
          ref={quoteRef}
          className={`mt-16 md:mt-24 max-w-3xl mx-auto fade-in-up ${quoteVisible ? 'visible' : ''}`}
        >
          <GoldLine width="40%" className="mb-8" />
          
          <div className="space-y-6 md:space-y-8 font-serif-jp text-base md:text-lg leading-loose">
            <p className="text-white/90 text-center">
              現地のコレクターに連絡を取った瞬間、
              <br />
              彼の声は冷たく、こう言い放たれました。
            </p>
            
            <blockquote className="text-xl md:text-2xl text-china-red font-bold py-6 border-l-4 border-china-red pl-6 text-left bg-china-red/5 rounded-r">
              「次のオークションに出せば、3倍で売れる。
              <br />
              なぜ日本人に譲る必要がある？」
            </blockquote>
            
            <p className="text-white/80 text-center">
              何度も、何度も交渉を重ね、
              <br />
              「人生の転換期にいる、たった一人のために、どうしても必要なんだ」
              <br />
              と訴え続けました。
            </p>
            
            <p className="text-white/90 text-center">
              数日間の緊張の末、
              <br />
              彼が重いため息と共に言った言葉が、忘れられません。
            </p>
            
            <blockquote className="text-xl md:text-2xl text-gold font-bold py-6 border-l-4 border-gold pl-6 text-left bg-gold/5 rounded-r">
              「...分かった。だが、これは最初で最後だ」
            </blockquote>
            
            <p className="text-gold text-xl md:text-2xl font-bold text-center pt-4">
              こうして、私の手元に届いた「奇跡の1点」。
              <br />
              それが、今あなたの目の前にあります。
            </p>
          </div>
          
          <GoldLine width="40%" className="mt-8" />
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
