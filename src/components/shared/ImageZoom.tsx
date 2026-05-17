import { useState, useRef, useCallback } from 'react';

interface ImageZoomProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ImageZoom({ src, alt, className = '' }: ImageZoomProps) {
  const [showZoom, setShowZoom] = useState(false);
  const [lensPos, setLensPos] = useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const imgRef = useRef<HTMLDivElement>(null);

  const ZOOM_LEVEL = 2.5;

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!imgRef.current) return;
    const rect = imgRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setLensPos({ x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(100, y)) });
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  return (
    <div
      className={`relative group ${className}`}
      onMouseEnter={() => setShowZoom(true)}
      onMouseLeave={() => setShowZoom(false)}
      onMouseMove={handleMouseMove}
      ref={imgRef}
    >
      {/* Main image */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover cursor-crosshair"
        loading="lazy"
      />

      {/* Magnifier lens overlay on image */}
      {showZoom && (
        <div
          className="absolute pointer-events-none border-2 border-accent-primary/60 rounded-full"
          style={{
            width: '100px',
            height: '100px',
            left: `${mousePos.x - 50}px`,
            top: `${mousePos.y - 50}px`,
            backgroundColor: 'rgba(196, 91, 28, 0.08)',
            boxShadow: '0 0 20px rgba(196, 91, 28, 0.2), inset 0 0 20px rgba(196, 91, 28, 0.1)',
          }}
        />
      )}

      {/* Zoom preview panel */}
      {showZoom && (
        <div
          className="fixed top-[80px] right-8 w-[450px] h-[450px] z-50 rounded-lg border-2 border-accent-primary/40 overflow-hidden shadow-2xl shadow-black/60 bg-bg-primary hidden lg:block"
          style={{ maxHeight: 'calc(100vh - 100px)' }}
        >
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url(${src})`,
              backgroundSize: `${ZOOM_LEVEL * 100}%`,
              backgroundPosition: `${lensPos.x}% ${lensPos.y}%`,
              backgroundRepeat: 'no-repeat',
            }}
          />
          {/* Zoom indicator */}
          <div className="absolute bottom-3 right-3 bg-bg-secondary/90 backdrop-blur-sm border border-surface-border rounded px-2 py-1 text-[10px] font-mono-tech text-text-muted">
            {ZOOM_LEVEL}x ZOOM
          </div>
        </div>
      )}

      {/* Mobile zoom indicator */}
      <div className="absolute top-3 right-3 bg-bg-secondary/80 backdrop-blur-sm border border-surface-border rounded px-2 py-1 text-[10px] font-mono-tech text-text-muted opacity-0 group-hover:opacity-100 transition-opacity lg:hidden">
        Dokunarak yakınlaştır
      </div>
    </div>
  );
}
