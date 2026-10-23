import { useEffect, useRef, useState } from "react";

const CanvasViewport = ({ children, className = "", label }) => {
  const viewportRef = useRef(null);
  const [shouldRenderCanvas, setShouldRenderCanvas] = useState(false);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const isNarrow = window.matchMedia("(max-width: 360px)").matches;
    const hasLowMemory = (navigator.deviceMemory ?? 8) <= 2;
    const hasLowCoreCount = (navigator.hardwareConcurrency ?? 8) <= 2;
    if (isNarrow || hasLowMemory || hasLowCoreCount) return;

    if (!("IntersectionObserver" in window)) {
      setShouldRenderCanvas(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRenderCanvas(true);
          observer.disconnect();
        }
      },
      { rootMargin: "240px" }
    );

    observer.observe(viewport);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={viewportRef} className={`relative h-full w-full ${className}`}>
      {shouldRenderCanvas ? (
        children
      ) : (
        <div
          role="img"
          aria-label={`${label} 3D visualization`}
          className="grid h-full w-full place-items-center overflow-hidden rounded-2xl bg-[radial-gradient(ellipse_at_55%_45%,rgba(34,211,238,0.16),transparent_48%),linear-gradient(145deg,#0b1020,#111522_55%,#101c2e)]"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 180 120"
            className="h-28 w-40 text-cyan-200/80"
            fill="none"
          >
            <circle cx="90" cy="60" r="38" stroke="currentColor" opacity=".3" />
            <circle
              cx="90"
              cy="60"
              r="25"
              stroke="currentColor"
              strokeDasharray="3 5"
            />
            <path
              d="M35 89 90 28l55 61M49 75h82M65 57h50"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <circle cx="90" cy="28" r="4" fill="currentColor" />
            <circle cx="35" cy="89" r="4" fill="currentColor" />
            <circle cx="145" cy="89" r="4" fill="currentColor" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default CanvasViewport;
