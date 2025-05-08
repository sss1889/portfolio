"use client";

import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface LanguageWithTooltipProps {
  icon: StaticImageData;
  languages: string;
  tooltipContent: string;
}

export default function LanguageWithTooltip({ icon, languages, tooltipContent }: LanguageWithTooltipProps) {
  // 箇条書き形式での表示に変換
  const formattedContent = tooltipContent
    .split('•')
    .filter(item => item.trim())
    .map(item => `• ${item.trim()}`)
    .join('\n');

  return (
    <div className="flex items-center gap-2 relative group">
      <Image src={icon} alt='language' width={16} height={16} />
      <span>{languages}</span>
      
      {/* ツールチップ（下方向に表示） */}
      <div className="absolute top-full left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
        <div className="bg-[#227BB7] text-white p-3 rounded-lg shadow-lg text-sm whitespace-pre-line">
          {formattedContent}
          {/* 小さな三角形の矢印（上向き） */}
          <div className="absolute bottom-full left-4 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-[#227BB7]"></div>
        </div>
      </div>
    </div>
  );
}