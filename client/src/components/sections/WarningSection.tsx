/**
 * WarningSection Component
 * Design: バロック・ミスティシズム
 * 
 * 背景：より暗い黒、重厚感
 * 中央に三角形の警告マーク（ゴールド）
 * 見出し：ゴールド・明朝体・中央「⚠️ 厳告」
 * サブ見出し：白・明朝体・中央・大「劇薬にもなり得る、あまりに純粋な波動。」
 * テキストは中央揃えで威厳を出す
 */

import { GoldLine } from '@/components/GoldLine';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { AlertTriangle } from 'lucide-react';

export function WarningSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section 
      ref={ref}
      className="relative py-20 md:py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #000000 0%, #050505 50%, #000000 100%)'
      }}
    >
      {/* Dark overlay for more serious atmosphere */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.5) 100%)'
        }}
      />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Warning icon */}
          <div 
            className={`mb-8 md:mb-12 fade-in-up ${isVisible ? 'visible' : ''}`}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20">
              <AlertTriangle 
                className="w-full h-full"
                style={{ 
                  color: '#D4AF37',
                  filter: 'drop-shadow(0 0 10px rgba(212, 175, 55, 0.5))'
                }}
                strokeWidth={1.5}
              />
            </div>
          </div>

          {/* Title */}
          <div 
            className={`mb-6 md:mb-8 fade-in-up ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: '0.1s' }}
          >
            <span className="text-gold-gradient font-serif-jp text-lg md:text-xl tracking-[0.3em]">
              厳 告
            </span>
          </div>

          {/* Subtitle */}
          <h2 
            className={`font-serif-jp text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-8 md:mb-12 leading-relaxed fade-in-up ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: '0.2s' }}
          >
            劇薬にもなり得る、<br />
            あまりに純粋な波動。
          </h2>

          {/* Gold line */}
          <div 
            className={`mb-8 md:mb-12 fade-in-up ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: '0.3s' }}
          >
            <GoldLine width="150px" />
          </div>

          {/* Warning text */}
          <div 
            className={`space-y-6 md:space-y-8 fade-in-up ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: '0.4s' }}
          >
            <p className="font-serif-jp text-white/85 text-base md:text-lg leading-loose">
              あまりに純粋なるものは、<br className="hidden sm:block" />
              時に人の心を圧倒する力を持ちます。
            </p>
            
            <p className="font-serif-jp text-white/75 text-base md:text-lg leading-loose">
              物質にもかかわらず、<br className="hidden sm:block" />
              これほどまでに強い波動を持つ石は稀です。<br className="hidden sm:block" />
              必ずしも全ての方に適するとは限りません。
            </p>

            <p className="font-serif-jp text-white/65 text-sm md:text-base leading-loose">
              ご購入の前に、ご自身の心身の状態を<br className="hidden sm:block" />
              十分にご確認ください。
            </p>
          </div>

          {/* Bottom gold line */}
          <div 
            className={`mt-12 md:mt-16 fade-in-up ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: '0.5s' }}
          >
            <GoldLine width="100px" />
          </div>
        </div>
      </div>
    </section>
  );
}
