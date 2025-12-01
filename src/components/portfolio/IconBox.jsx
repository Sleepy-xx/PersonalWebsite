import React from 'react';
import { cn } from '@/lib/utils';

const IconBox = ({ icon: Icon, className }) => {
  
  const borderGradient = 'linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50%)';
  const bgGradient = 'linear-gradient(to bottom right, hsla(240, 1%, 18%, 0.251), hsla(240, 2%, 11%, 0)), hsl(240, 2%, 13%)';
  const shadow = '-4px 8px 24px hsla(0, 0%, 0%, 0.25)';

  return (
    <div 
      className={cn(
        "relative rounded-xl p-[1px] flex items-center justify-center shrink-0", 
        "w-10 h-10 md:w-12 md:h-12",
        className
      )}
      style={{ 
        background: borderGradient,
        boxShadow: shadow
      }}
    >
      <div 
        // ⚠️ 修改这里：text-amber-400 改为 text-blue-400
        className="w-full h-full rounded-xl flex items-center justify-center text-blue-400"
        style={{ background: bgGradient }}
      >
        {Icon && <Icon className="w-5 h-5 md:w-6 md:h-6" />}
      </div>
    </div>
  );
};

export default IconBox;