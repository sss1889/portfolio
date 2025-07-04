import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function createRippleEffect(event: React.MouseEvent, element: HTMLElement) {
  const rect = element.getBoundingClientRect()
  const size = Math.max(rect.width, rect.height)
  const x = event.clientX - rect.left - size / 2
  const y = event.clientY - rect.top - size / 2
  
  const ripple = document.createElement('span')
  ripple.style.cssText = `
    position: absolute;
    width: ${size}px;
    height: ${size}px;
    left: ${x}px;
    top: ${y}px;
    background: currentColor;
    border-radius: 50%;
    transform: scale(0);
    animation: ripple-animation 600ms ease-out;
    pointer-events: none;
  `
  
  element.appendChild(ripple)
  
  setTimeout(() => {
    ripple.remove()
  }, 600)
}