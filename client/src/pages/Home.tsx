/**
 * Home Page - 超高級パワーストーンLP
 * Design: バロック・ミスティシズム
 * 
 * 漆黒×ゴールドの高級感を演出した、
 * スピリチュアルパワーストーンの販売ランディングページ
 */

import { EssenceSection } from '@/components/sections/EssenceSection';
import { FooterSection } from '@/components/sections/FooterSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { OfferSection } from '@/components/sections/OfferSection';
import { StorySection } from '@/components/sections/StorySection';
import { WarningSection } from '@/components/sections/WarningSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* 1️⃣ ファーストビュー（Hero Section） */}
      <HeroSection />
      
      {/* 2️⃣ ストーリーセクション */}
      <StorySection />
      
      {/* 3️⃣ 本質セクション */}
      <EssenceSection />
      
      {/* 4️⃣ 警告セクション */}
      <WarningSection />
      
      {/* 5️⃣ オファーセクション */}
      <OfferSection />
      
      {/* 6️⃣ フッター */}
      <FooterSection />
    </div>
  );
}
