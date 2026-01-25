/**
 * GoldOrnament Component
 * Design: バロック・ミスティシズム
 * 金色の植物モチーフ装飾
 */

interface GoldOrnamentProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function GoldOrnament({ position = 'bottom-right', size = 'md', className = '' }: GoldOrnamentProps) {
  const sizeClasses = {
    sm: 'w-24 h-24 md:w-32 md:h-32',
    md: 'w-32 h-32 md:w-48 md:h-48',
    lg: 'w-48 h-48 md:w-64 md:h-64',
  };

  const positionClasses = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0 -scale-x-100',
    'bottom-left': 'bottom-0 left-0 -scale-y-100',
    'bottom-right': 'bottom-0 right-0 -scale-x-100 -scale-y-100',
  };

  return (
    <div 
      className={`absolute ${positionClasses[position]} ${sizeClasses[size]} opacity-30 pointer-events-none ${className}`}
    >
      <img 
        src="/images/gold-ornament.png" 
        alt="" 
        className="w-full h-full object-contain"
        loading="lazy"
      />
    </div>
  );
}
