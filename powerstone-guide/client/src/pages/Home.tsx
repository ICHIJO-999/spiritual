/**
 * Power Stone Guide - Art Deco Revival Design
 * 
 * Design Philosophy: 1920s Art Deco with modern luxury aesthetics
 * Color Palette: Rich Black (#0D0D0D), Antique Gold (#C9A962), Deep Navy (#1A1A2E)
 * Typography: Playfair Display (display), Cinzel (accent), Noto Sans JP (body)
 */

import { motion } from "framer-motion";
import { Moon, Droplets, Sparkles, Music, Flame, Heart, Hand, Home as HomeIcon, Gem, ChevronDown } from "lucide-react";
import { useState } from "react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const goldLineExpand = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] as const } }
};

// Navigation Component
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { href: "#about", label: "パワーストーンとは" },
    { href: "#purification", label: "浄化方法" },
    { href: "#care", label: "お手入れ" },
    { href: "#usage", label: "使い方" },
  ];

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D0D]/90 backdrop-blur-md border-b border-[#C9A962]/20"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <Gem className="w-6 h-6 text-[#C9A962]" />
            <span className="font-accent text-lg tracking-[0.2em] text-[#C9A962]">POWER STONE</span>
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-body text-[#F7E7CE]/80 hover:text-[#C9A962] transition-colors duration-300 tracking-wide"
              >
                {item.label}
              </a>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#C9A962]"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 bg-current transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 bg-current transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-current transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden mt-4 pb-4 border-t border-[#C9A962]/20 pt-4"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-[#F7E7CE]/80 hover:text-[#C9A962] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/hero-crystals.png)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/70 via-[#0D0D0D]/50 to-[#0D0D0D]" />
      </div>
      
      {/* Art Deco Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{ 
          backgroundImage: 'url(/images/art-deco-pattern.png)',
          backgroundSize: '300px',
          backgroundRepeat: 'repeat'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="space-y-8"
        >
          {/* Decorative Line Top */}
          <motion.div variants={goldLineExpand} className="flex justify-center">
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#C9A962] to-transparent" />
          </motion.div>
          
          {/* Main Title */}
          <motion.h1 
            variants={fadeInUp}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold tracking-wide"
          >
            <span className="text-gold-gradient">Power Stone</span>
            <br />
            <span className="text-[#F7E7CE] text-3xl md:text-4xl lg:text-5xl font-normal mt-4 block">Guide</span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            variants={fadeInUp}
            className="font-body text-lg md:text-xl text-[#F7E7CE]/80 tracking-widest"
          >
            パワーストーンガイドブック
          </motion.p>
          
          {/* Tagline */}
          <motion.p 
            variants={fadeInUp}
            className="font-elegant text-xl md:text-2xl text-[#C9A962] italic"
          >
            あなたの石との出会いを、より特別なものに
          </motion.p>
          
          {/* Decorative Line Bottom */}
          <motion.div variants={goldLineExpand} className="flex justify-center">
            <div className="w-48 h-px bg-gradient-to-r from-transparent via-[#C9A962] to-transparent" />
          </motion.div>
          
          {/* Scroll Indicator */}
          <motion.div 
            variants={fadeInUp}
            className="pt-12"
          >
            <a href="#about" className="inline-block animate-bounce">
              <ChevronDown className="w-8 h-8 text-[#C9A962]/60" />
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Side Decorations */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="w-px h-32 bg-gradient-to-b from-transparent via-[#C9A962]/50 to-transparent" />
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="w-px h-32 bg-gradient-to-b from-transparent via-[#C9A962]/50 to-transparent" />
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="font-accent text-sm tracking-[0.3em] text-[#C9A962]/80">ABOUT</span>
            <h2 className="font-display text-4xl md:text-5xl text-[#F7E7CE] mt-4">Power Stone</h2>
            <p className="font-elegant text-xl text-[#C9A962] italic mt-2">内なる輝きとの対話</p>
            <motion.div variants={goldLineExpand} className="flex justify-center mt-6">
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#C9A962] to-transparent" />
            </motion.div>
          </motion.div>
          
          {/* Content */}
          <motion.div variants={fadeInUp} className="space-y-6 text-[#F7E7CE]/85 font-body leading-relaxed text-lg">
            <p className="first-letter:text-5xl first-letter:font-display first-letter:text-[#C9A962] first-letter:float-left first-letter:mr-3 first-letter:mt-1">
              太古の昔から、人々は地球が育んだ美しい結晶、すなわちパワーストーンに特別な力を感じ、魅了されてきました。それは単なる装飾品ではなく、持ち主に寄り添い、内なるエネルギーと共鳴する、神聖なパートナーです。
            </p>
            <p>
              それぞれの石は、何億年もの時間をかけて地球の奥深くで形成され、その過程で独自の振動（エネルギー）を宿すようになります。このエネルギーが、私たちの心、身体、そして魂に穏やかに働きかけ、バランスを整え、潜在能力を引き出す手助けをしてくれると信じられています。
            </p>
            <p>
              このガイドブックは、あなたとパワーストーンとの出会いを、より深く、意味のあるものにするためのものです。石の声に耳を傾け、そのエネルギーを感じ、日々の生活に取り入れることで、あなたの毎日はさらに輝きを増すでしょう。さあ、あなたの石との素晴らしい旅を始めましょう。
            </p>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Decorative Corner */}
      <div className="absolute top-12 left-8 w-16 h-16 border-l-2 border-t-2 border-[#C9A962]/20 hidden lg:block" />
      <div className="absolute bottom-12 right-8 w-16 h-16 border-r-2 border-b-2 border-[#C9A962]/20 hidden lg:block" />
    </section>
  );
}

// Purification Section
function PurificationSection() {
  const methods = [
    {
      icon: Moon,
      title: "月光浴",
      description: "満月の夜、月の光が当たる窓辺に石を一晩置きます。",
      detail: "特に満月の光は浄化力が高く、すべての石に適しています。優しく穏やかなエネルギーをチャージできます。"
    },
    {
      icon: Sparkles,
      title: "水晶クラスター",
      description: "水晶クラスターやさざれ石の上に、パワーストーンを数時間から一晩置きます。",
      detail: "水晶の持つ浄化作用で、石のエネルギーをクリアにします。置くだけで手軽に行えるため、日常的な浄化におすすめです。"
    },
    {
      icon: Droplets,
      title: "流水",
      description: "清らかな天然水やミネラルウォーターで、数分間石を洗い流します。",
      detail: "水に弱い性質の石（セレナイト、ラピスラズリなど）には適していません。水道水でも可能ですが、より自然な水が理想です。"
    },
    {
      icon: Flame,
      title: "セージ",
      description: "乾燥させたセージの葉に火をつけ、その煙にパワーストーンを数回くぐらせます。",
      detail: "古くから伝わる神聖な浄化方法です。煙が隅々まで行き渡り、強力にネガティブなエネルギーを祓います。"
    },
    {
      icon: Music,
      title: "音叉",
      description: "クリスタルチューナー（4096Hz）などの音叉を鳴らし、その振動を石に聞かせます。",
      detail: "音の振動が、石のエネルギーをクリアで純粋な状態に戻します。空間全体の浄化にも効果的です。"
    }
  ];

  return (
    <section id="purification" className="py-24 md:py-32 relative bg-[#1A1A2E]/50">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: 'url(/images/purification-moonlight.png)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D] via-transparent to-[#0D0D0D]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="font-accent text-sm tracking-[0.3em] text-[#C9A962]/80">PURIFICATION</span>
            <h2 className="font-display text-4xl md:text-5xl text-[#F7E7CE] mt-4">浄化方法</h2>
            <p className="font-elegant text-xl text-[#C9A962] italic mt-2">エネルギーの浄化</p>
            <motion.div variants={goldLineExpand} className="flex justify-center mt-6">
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#C9A962] to-transparent" />
            </motion.div>
          </motion.div>
          
          {/* Intro Text */}
          <motion.p variants={fadeInUp} className="text-center text-[#F7E7CE]/80 font-body max-w-3xl mx-auto mb-16">
            パワーストーンは、あなたの代わりにネガティブなエネルギーを吸収し、あなたを守ってくれる存在です。その石が持つ本来の輝きとパワーを保つためには、定期的な浄化（リフレッシュ）が欠かせません。
          </motion.p>
          
          {/* Methods Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {methods.map((method, index) => (
              <motion.div
                key={method.title}
                variants={fadeInUp}
                className="group relative bg-[#0D0D0D]/80 backdrop-blur-sm p-8 border border-[#C9A962]/20 hover:border-[#C9A962]/50 transition-all duration-500"
              >
                {/* Corner Decorations */}
                <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#C9A962] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#C9A962] opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Icon */}
                <div className="w-14 h-14 rounded-full bg-[#C9A962]/10 flex items-center justify-center mb-6 group-hover:bg-[#C9A962]/20 transition-colors">
                  <method.icon className="w-7 h-7 text-[#C9A962]" />
                </div>
                
                {/* Content */}
                <h3 className="font-display text-xl text-[#F7E7CE] mb-3">{method.title}</h3>
                <p className="font-body text-[#F7E7CE]/70 text-sm mb-4">{method.description}</p>
                <p className="font-body text-[#C9A962]/80 text-xs leading-relaxed">{method.detail}</p>
              </motion.div>
            ))}
          </div>
          
          {/* Hint Box */}
          <motion.div 
            variants={fadeInUp}
            className="max-w-2xl mx-auto mt-12 p-6 bg-[#C9A962]/10 border border-[#C9A962]/30"
          >
            <p className="font-body text-[#F7E7CE]/90 text-center">
              <span className="text-[#C9A962] font-semibold">浄化のヒント：</span>
              石が疲れているように感じたり、輝きが鈍くなったと感じた時が浄化のサインです。あなたの石に合った方法で、感謝の気持ちを込めて浄化してあげましょう。
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Care Section
function CareSection() {
  const careItems = [
    {
      title: "日常のケア",
      content: "使用後は、柔らかく乾いた布で優しく拭いてください。皮脂や汗、ほこりなどを取り除くことで、石本来の輝きを保ちます。特に、化粧品や香水などが付着しないよう注意が必要です。"
    },
    {
      title: "保管方法",
      content: "パワーストーンは、他の宝石や硬いものとぶつかると傷がついてしまうことがあります。使用しない時は、個別の袋やジュエリーボックスに入れて、直射日光や急激な温度変化を避けた場所で保管してください。"
    }
  ];

  const warnings = [
    { label: "衝撃", text: "硬いものにぶつけたり、落としたりしないように注意しましょう。" },
    { label: "化学薬品", text: "香水、ヘアスプレー、洗剤などが直接かからないようにしてください。" },
    { label: "水や紫外線", text: "石によっては水や太陽光に弱い性質を持つものがあります。長時間水に浸したり、直射日光に当て続けたりすることは避けましょう。" }
  ];

  return (
    <section id="care" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="font-accent text-sm tracking-[0.3em] text-[#C9A962]/80">DAILY CARE</span>
            <h2 className="font-display text-4xl md:text-5xl text-[#F7E7CE] mt-4">お手入れ方法</h2>
            <p className="font-elegant text-xl text-[#C9A962] italic mt-2">日常のお手入れ</p>
            <motion.div variants={goldLineExpand} className="flex justify-center mt-6">
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#C9A962] to-transparent" />
            </motion.div>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left: Image */}
            <motion.div variants={fadeInUp} className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/images/crystal-care.png" 
                  alt="Crystal Care"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Frame Decoration */}
              <div className="absolute -top-3 -left-3 w-full h-full border-2 border-[#C9A962]/30 -z-10" />
            </motion.div>
            
            {/* Right: Content */}
            <motion.div variants={fadeInUp} className="space-y-8">
              <p className="font-body text-[#F7E7CE]/80 leading-relaxed">
                パワーストーンとの絆を深め、その美しさを永く保つためには、愛情のこもった日々のお手入れが大切です。浄化とは別に、物理的なケアも忘れずに行いましょう。
              </p>
              
              {careItems.map((item, index) => (
                <div key={item.title} className="space-y-3">
                  <h3 className="font-display text-xl text-[#C9A962]">{item.title}</h3>
                  <p className="font-body text-[#F7E7CE]/75 text-sm leading-relaxed">{item.content}</p>
                </div>
              ))}
              
              {/* Warnings */}
              <div className="mt-8 p-6 bg-[#1A1A2E]/50 border border-[#C9A962]/20">
                <h3 className="font-display text-lg text-[#C9A962] mb-4">避けるべきこと</h3>
                <ul className="space-y-3">
                  {warnings.map((warning) => (
                    <li key={warning.label} className="flex gap-3 text-sm">
                      <span className="text-[#C9A962] font-semibold shrink-0">{warning.label}:</span>
                      <span className="text-[#F7E7CE]/70">{warning.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
          
          {/* Bottom Quote */}
          <motion.p 
            variants={fadeInUp}
            className="text-center font-elegant text-lg text-[#C9A962] italic max-w-2xl mx-auto mt-16"
          >
            あなたのパワーストーンを、大切なパートナーとして丁寧に扱うことで、そのエネルギーはより一層あなたに応えてくれるでしょう。
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

// Usage Section
function UsageSection() {
  const usages = [
    {
      icon: Hand,
      title: "身につける",
      description: "左手はエネルギーを受け取り、右手はエネルギーを放出すると言われています。願いを叶えたい時は左手に、自分のエネルギーを高めたい時は右手に身につけるのがおすすめです。",
      effect: "常に石のエネルギーを感じ、お守りとして持ち主をサポートします。"
    },
    {
      icon: Sparkles,
      title: "瞑想",
      description: "瞑想時にパワーストーンを手に持ったり、体の近くに置いたりします。石のエネルギーに意識を集中させ、深くリラックスした状態に入ります。",
      effect: "瞑想の質を高め、心の静けさや気づきを促進します。"
    },
    {
      icon: HomeIcon,
      title: "空間に置く",
      description: "寝室やリビング、ワークスペースなど、多くの時間を過ごす場所に石を置きます。空間全体のエネルギーを浄化し、ポジティブな雰囲気をもたらします。",
      effect: "快適で調和のとれた空間を作り出し、日々の生活の質を向上させます。"
    },
    {
      icon: Heart,
      title: "アファメーション",
      description: "石を手に持ち、自分の願いや目標を心の中で唱えます。石がその願いを増幅させ、実現をサポートしてくれると信じられています。",
      effect: "ポジティブな自己暗示を強化し、目標達成への意識を高めます。"
    }
  ];

  return (
    <section id="usage" className="py-24 md:py-32 relative bg-[#1A1A2E]/30">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: 'url(/images/meditation-stones.png)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D] via-transparent to-[#0D0D0D]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="font-accent text-sm tracking-[0.3em] text-[#C9A962]/80">HOW TO USE</span>
            <h2 className="font-display text-4xl md:text-5xl text-[#F7E7CE] mt-4">効果を高める使い方</h2>
            <p className="font-elegant text-xl text-[#C9A962] italic mt-2">石との共鳴</p>
            <motion.div variants={goldLineExpand} className="flex justify-center mt-6">
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#C9A962] to-transparent" />
            </motion.div>
          </motion.div>
          
          {/* Intro */}
          <motion.p variants={fadeInUp} className="text-center text-[#F7E7CE]/80 font-body max-w-3xl mx-auto mb-16">
            パワーストーンのエネルギーを最大限に引き出すためには、意識的に石と関わることが重要です。日常生活の中に自然に取り入れ、その存在を感じてみましょう。
          </motion.p>
          
          {/* Usage Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {usages.map((usage, index) => (
              <motion.div
                key={usage.title}
                variants={fadeInUp}
                className="group relative p-8 bg-[#0D0D0D]/60 backdrop-blur-sm border border-[#C9A962]/20 hover:border-[#C9A962]/40 transition-all duration-500"
              >
                {/* Number */}
                <span className="absolute top-4 right-4 font-accent text-4xl text-[#C9A962]/10 group-hover:text-[#C9A962]/20 transition-colors">
                  0{index + 1}
                </span>
                
                {/* Icon */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C9A962]/20 to-[#C9A962]/5 flex items-center justify-center mb-6">
                  <usage.icon className="w-6 h-6 text-[#C9A962]" />
                </div>
                
                {/* Content */}
                <h3 className="font-display text-2xl text-[#F7E7CE] mb-4">{usage.title}</h3>
                <p className="font-body text-[#F7E7CE]/70 text-sm mb-4 leading-relaxed">{usage.description}</p>
                <p className="font-body text-[#C9A962]/80 text-xs italic">{usage.effect}</p>
              </motion.div>
            ))}
          </div>
          
          {/* Closing Quote */}
          <motion.div 
            variants={fadeInUp}
            className="text-center mt-16 max-w-2xl mx-auto"
          >
            <div className="w-16 h-px bg-[#C9A962]/50 mx-auto mb-8" />
            <p className="font-elegant text-xl text-[#F7E7CE]/90 italic leading-relaxed">
              パワーストーンは、あなたの意図や意識に強く反応します。感謝の気持ちを持ち、信頼することで、石はあなたにとって最高のパートナーとなるでしょう。
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Footer Section
function Footer() {
  return (
    <footer className="py-20 relative bg-[#0D0D0D]">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center"
        >
          {/* Thank You */}
          <motion.h2 
            variants={fadeInUp}
            className="font-display text-4xl md:text-5xl text-gold-gradient mb-8"
          >
            Thank You
          </motion.h2>
          
          {/* Message */}
          <motion.div variants={fadeInUp} className="space-y-4 text-[#F7E7CE]/80 font-body max-w-xl mx-auto mb-12">
            <p>この度はお買い上げいただき、誠にありがとうございます。</p>
            <p>あなたとパワーストーンとの出会いが、<br />素晴らしいものとなりますように。</p>
            <p className="text-[#C9A962]">あなたの毎日に、輝きと癒しが訪れることを<br />心よりお祈り申し上げます。</p>
          </motion.div>
          
          {/* Decorative Line */}
          <motion.div variants={goldLineExpand} className="flex justify-center mb-12">
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#C9A962] to-transparent" />
          </motion.div>
          
          {/* Logo */}
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3 mb-8">
            <Gem className="w-5 h-5 text-[#C9A962]" />
            <span className="font-accent text-sm tracking-[0.3em] text-[#C9A962]">POWER STONE GUIDE</span>
          </motion.div>
          
          {/* Copyright */}
          <motion.p variants={fadeInUp} className="text-[#F7E7CE]/40 text-xs font-body">
            © 2025 Power Stone Guide. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
      
      {/* Art Deco Corner Decorations */}
      <div className="absolute bottom-0 left-0 w-24 h-24 border-l border-b border-[#C9A962]/20" />
      <div className="absolute bottom-0 right-0 w-24 h-24 border-r border-b border-[#C9A962]/20" />
    </footer>
  );
}

// Main Home Component
export default function Home() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F7E7CE]">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <PurificationSection />
        <CareSection />
        <UsageSection />
      </main>
      <Footer />
    </div>
  );
}
