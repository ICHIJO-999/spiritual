/**
 * GoldLine Component
 * Design: バロック・ミスティシズム
 * 金色の装飾ラインで各セクションを上品に区切る
 */

interface GoldLineProps {
  className?: string;
  width?: string;
}

export function GoldLine({ className = '', width = '200px' }: GoldLineProps) {
  return (
    <div 
      className={`h-px mx-auto ${className}`}
      style={{
        width,
        background: 'linear-gradient(90deg, transparent 0%, #D4AF37 20%, #F5E6A3 50%, #D4AF37 80%, transparent 100%)'
      }}
    />
  );
}

export function GoldLineDouble({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      <GoldLine width="180px" />
      <GoldLine width="120px" />
    </div>
  );
}
