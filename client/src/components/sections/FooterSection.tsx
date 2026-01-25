/**
 * FooterSection Component
 * Design: バロック・ミスティシズム
 * 
 * 背景：最も暗い黒
 * 細いゴールドのライン
 * テキスト：白・小さめ・中央
 * 最下部に控えめなロゴマーク
 */

import { GoldLine } from '@/components/GoldLine';

export function FooterSection() {
  return (
    <footer 
      className="relative py-12 md:py-16"
      style={{
        background: '#000000'
      }}
    >
      {/* Top gold line */}
      <GoldLine width="60%" className="mb-12" />

      <div className="container">
        {/* Navigation links */}
        <nav className="flex flex-wrap justify-center gap-6 md:gap-12 mb-8 md:mb-12">
          <a 
            href="#" 
            className="font-serif-jp text-white/60 text-xs md:text-sm hover:text-[#D4AF37] transition-colors duration-300"
          >
            詳細
          </a>
          <a 
            href="#" 
            className="font-serif-jp text-white/60 text-xs md:text-sm hover:text-[#D4AF37] transition-colors duration-300"
          >
            特定商取引法
          </a>
          <a 
            href="#" 
            className="font-serif-jp text-white/60 text-xs md:text-sm hover:text-[#D4AF37] transition-colors duration-300"
          >
            プライバシーポリシー
          </a>
          <a 
            href="#" 
            className="font-serif-jp text-white/60 text-xs md:text-sm hover:text-[#D4AF37] transition-colors duration-300"
          >
            お問い合わせ
          </a>
        </nav>

        {/* Logo / Brand mark */}
        <div className="text-center mb-8">
          <div className="inline-block">
            {/* Decorative diamond shape */}
            <div 
              className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-4 rotate-45"
              style={{
                border: '1px solid #D4AF37',
                background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, transparent 100%)'
              }}
            />
            <span className="font-cinzel text-[#D4AF37]/60 text-xs md:text-sm tracking-[0.5em]">
              POWERSTONE
            </span>
          </div>
        </div>

        {/* Copyright */}
        <p className="font-serif-jp text-white/40 text-[10px] md:text-xs text-center">
          © 2026 Premium Powerstone Collection. All rights reserved.
        </p>
      </div>

      {/* Bottom subtle line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
    </footer>
  );
}
