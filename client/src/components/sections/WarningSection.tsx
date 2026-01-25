/**
 * WarningSection - 警告セクション
 * デザイン: 漆黒×ゴールド+赤のアクセント
 * 「覚悟のない方は、絶対に手にしないでください」
 */

import { GoldLine } from '@/components/GoldLine';
import { GoldOrnament } from '@/components/GoldOrnament';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { AlertTriangle } from 'lucide-react';

export function WarningSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { ref: listRef, isVisible: listVisible } = useScrollAnimation(0.1);

  return (
    <section 
      ref={ref}
      className="relative py-20 md:py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #000000 0%, #0a0505 50%, #000000 100%)'
      }}
    >
      {/* Warning background effect */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('/images/warning-energy.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-black/70" />

      {/* Gold ornaments */}
      <GoldOrnament position="top-left" size="lg" />
      <GoldOrnament position="bottom-right" size="lg" />

      <div className="container relative z-10">
        {/* Section header */}
        <div 
          className={`text-center mb-12 md:mb-16 fade-in-up ${isVisible ? 'visible' : ''}`}
        >
          {/* Warning icon */}
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20">
              <AlertTriangle 
                className="w-full h-full text-china-red"
                style={{ 
                  filter: 'drop-shadow(0 0 10px rgba(139, 0, 0, 0.5))'
                }}
                strokeWidth={1.5}
              />
            </div>
          </div>
          
          <GoldLine width="60px" className="mb-6" />
          <p className="text-china-red font-serif-jp text-sm tracking-[0.3em] mb-4">
            警　告
          </p>
          <h2 className="font-serif-jp text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            覚悟のない方は、
            <br />
            <span className="text-china-red">絶対に手にしないでください</span>
          </h2>
          <GoldLine width="60px" className="mt-6" />
        </div>

        {/* Warning text */}
        <div 
          className={`max-w-3xl mx-auto text-center mb-12 md:mb-16 fade-in-up ${isVisible ? 'visible' : ''}`}
          style={{ transitionDelay: '0.2s' }}
        >
          <p className="font-serif-jp text-gold font-bold text-xl md:text-2xl mb-6">
            あなたに、正直にお伝えします。
          </p>
          <p className="font-serif-jp text-white/90 text-base md:text-lg leading-loose">
            この石は、誰にでも渡せるものではありません。
            <br />
            なぜなら、あまりにも純粋で、
            <span className="text-china-red font-bold">強大なエネルギー</span>を持っているからです。
          </p>
        </div>

        {/* Warning lists */}
        <div 
          ref={listRef}
          className={`max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 fade-in-up ${listVisible ? 'visible' : ''}`}
        >
          {/* NG list */}
          <div className="bg-china-red/10 border border-china-red/30 p-6 md:p-8 rounded-lg">
            <p className="font-serif-jp text-white/90 text-base md:text-lg mb-6 text-center">
              もし、あなたが：
            </p>
            <ul className="space-y-4">
              {[
                '「誰かに幸せにしてほしい」と依存している',
                '「とりあえず試してみよう」という軽い気持ち',
                '自分の人生を、本気で変える覚悟がない'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-china-red text-2xl font-bold shrink-0">✕</span>
                  <span className="font-serif-jp text-white/80 text-base md:text-lg leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-china-red/30">
              <p className="font-serif-jp text-china-red text-base md:text-lg text-center">
                こうした状態であれば、
                <br />
                この石は<span className="font-bold">あなたを振り回します</span>。
              </p>
            </div>
          </div>

          {/* OK list */}
          <div className="bg-gold/10 border border-gold/30 p-6 md:p-8 rounded-lg">
            <p className="font-serif-jp text-white/90 text-base md:text-lg mb-6 text-center">
              逆に、もしあなたが：
            </p>
            <ul className="space-y-4">
              {[
                '自分の人生を、自分の手で切り拓く覚悟がある',
                '本気で現実を変えたいと願っている',
                'この石を「相棒」として、共に歩む準備ができている'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-gold text-2xl font-bold shrink-0">✓</span>
                  <span className="font-serif-jp text-white/80 text-base md:text-lg leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-gold/30">
              <p className="font-serif-jp text-gold text-base md:text-lg text-center">
                そうであれば、この石は、
                <br />
                <span className="font-bold">あなたの人生に奇跡を起こす最強のパートナー</span>となります。
              </p>
            </div>
          </div>
        </div>

        {/* Final message */}
        <div 
          className={`mt-12 md:mt-16 text-center fade-in-up ${listVisible ? 'visible' : ''}`}
          style={{ transitionDelay: '0.4s' }}
        >
          <GoldLine width="40%" className="mb-8" />
          
          <div className="space-y-4 font-serif-jp text-base md:text-lg leading-loose max-w-2xl mx-auto">
            <p className="text-white/90">
              どうか、このページを閉じる前に、
              <br />
              自分の心に、正直に問いかけてください。
            </p>
            <p className="text-gold font-bold text-xl md:text-2xl py-4">
              「私は、本気で人生を変える覚悟があるか？」
            </p>
            <p className="text-white/80">
              その答えが<span className="text-gold font-bold">「YES」</span>なら、
              <br />
              先に進んでください。
            </p>
          </div>
          
          <GoldLine width="40%" className="mt-8" />
        </div>
      </div>
    </section>
  );
}
