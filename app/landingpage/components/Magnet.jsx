"use client";

import { useRef, useState, useCallback } from "react";

export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className = "",
  style = {},
}) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      setPos({
        x: (e.clientX - centerX) / strength,
        y: (e.clientY - centerY) / strength,
      });
    },
    [strength]
  );

  const handleMouseEnter = useCallback(
    (e) => {
      setIsHovered(true);
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const pad = typeof padding === "number" ? padding : 150;
      if (
        e.clientX < rect.left - pad ||
        e.clientX > rect.right + pad ||
        e.clientY < rect.top - pad ||
        e.clientY > rect.bottom + pad
      ) {
        setIsHovered(false);
        setPos({ x: 0, y: 0 });
      }
    },
    [padding]
  );

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setPos({ x: 0, y: 0 });
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        transition: isHovered ? activeTransition : inactiveTransition,
        willChange: "transform",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
