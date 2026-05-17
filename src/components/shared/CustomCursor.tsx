import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });
  const outlinePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Check for touch device
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const dot = dotRef.current;
    const outline = outlineRef.current;
    if (!dot || !outline) return;

    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseEnterInteractive = () => {
      document.body.classList.add('cursor-hover');
    };

    const onMouseLeaveInteractive = () => {
      document.body.classList.remove('cursor-hover');
    };

    const animate = () => {
      // Dot follows immediately
      dotPos.current.x += (mousePos.current.x - dotPos.current.x) * 0.5;
      dotPos.current.y += (mousePos.current.y - dotPos.current.y) * 0.5;

      // Outline follows with delay
      outlinePos.current.x += (mousePos.current.x - outlinePos.current.x) * 0.15;
      outlinePos.current.y += (mousePos.current.y - outlinePos.current.y) * 0.15;

      dot.style.left = `${dotPos.current.x}px`;
      dot.style.top = `${dotPos.current.y}px`;
      outline.style.left = `${outlinePos.current.x}px`;
      outline.style.top = `${outlinePos.current.y}px`;

      rafId = requestAnimationFrame(animate);
    };

    // Attach listeners
    document.addEventListener('mousemove', onMouseMove, { passive: true });

    // Interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select, label');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnterInteractive);
      el.addEventListener('mouseleave', onMouseLeaveInteractive);
    });

    rafId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnterInteractive);
        el.removeEventListener('mouseleave', onMouseLeaveInteractive);
      });
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={outlineRef} className="cursor-outline" />
    </>
  );
}
