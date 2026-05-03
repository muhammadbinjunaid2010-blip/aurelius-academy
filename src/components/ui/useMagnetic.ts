import { useState, useRef, useEffect } from "react";

export function useMagnetic() {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    
    // Check if mouse is near enough (e.g., within 100px)
    const distance = Math.sqrt(x * x + y * y);
    if (distance < 150) {
      setPosition({ x: x * 0.4, y: y * 0.4 });
    } else {
      setPosition({ x: 0, y: 0 });
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const { x, y } = position;

  return { ref, x, y };
}
