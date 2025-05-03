"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export default function AnimatedSection({ 
  children, 
  className = "", 
  delay = 0,
  direction = 'up'
}: AnimatedSectionProps) {
  const [isClient, setIsClient] = useState(false);
  
  // クライアントサイドでのみ実行されるようにする
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // 方向に基づいて初期位置を設定
  const getInitialPosition = () => {
    switch(direction) {
      case 'up': return { y: 100, opacity: 0 };
      case 'down': return { y: -100, opacity: 0 };
      case 'left': return { x: 100, opacity: 0 };
      case 'right': return { x: -100, opacity: 0 };
      default: return { y: 100, opacity: 0 };
    }
  };
  
  // サーバーサイドレンダリング時はアニメーションなしで表示
  if (!isClient) {
    return <div className={className}>{children}</div>;
  }
  
  return (
    <motion.div
      initial={getInitialPosition()}
      animate={{ x: 0, y: 0, opacity: 1 }}
      transition={{ 
        duration: 0.8, 
        delay: delay,
        ease: [0.17, 0.67, 0.83, 0.67] // イーズイン・イーズアウト
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}