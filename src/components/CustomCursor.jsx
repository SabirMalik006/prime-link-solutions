import { useState, useEffect, useRef, useCallback } from 'react';

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);

  // Smooth animation with requestAnimationFrame
  const animate = useCallback(() => {
    if (!cursorRef.current || !cursorDotRef.current) return;
    
    // Different easing for main cursor and dot
    cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * 0.3;
    cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * 0.3;
    dotPos.current.x += (mousePos.current.x - dotPos.current.x) * 0.6;
    dotPos.current.y += (mousePos.current.y - dotPos.current.y) * 0.6;
    
    cursorRef.current.style.transform = `translate3d(${cursorPos.current.x - 16}px, ${cursorPos.current.y - 16}px, 0)`;
    cursorDotRef.current.style.transform = `translate3d(${dotPos.current.x - 3}px, ${dotPos.current.y - 3}px, 0)`;
    
    rafId.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    // Start animation loop
    rafId.current = requestAnimationFrame(animate);
    
    // Mouse move handler
    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };
    
    // Mouse leave/enter handlers
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);
    
    // Click handlers
    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    
    // Hover handlers for interactive elements
    const handleElementHover = () => setIsHovering(true);
    const handleElementLeave = () => setIsHovering(false);
    
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    
    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, input, textarea, select, [role="button"], [role="link"], .interactive, .cursor-hover'
    );
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleElementHover);
      el.addEventListener('mouseleave', handleElementLeave);
    });
    
    // Observe for dynamically added interactive elements
    const observer = new MutationObserver(() => {
      const newElements = document.querySelectorAll(
        'a, button, input, textarea, select, [role="button"], [role="link"], .interactive, .cursor-hover'
      );
      newElements.forEach(el => {
        el.removeEventListener('mouseenter', handleElementHover);
        el.removeEventListener('mouseleave', handleElementLeave);
        el.addEventListener('mouseenter', handleElementHover);
        el.addEventListener('mouseleave', handleElementLeave);
      });
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
    
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleElementHover);
        el.removeEventListener('mouseleave', handleElementLeave);
      });
      observer.disconnect();
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [animate, isVisible]);

  // Hide default cursor and show custom one
  useEffect(() => {
    document.body.style.cursor = 'none';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  // Determine cursor styles based on state
  const getCursorStyles = () => {
    let size = 32;
    let dotSize = 6;
    let bgSize = 32;
    let bgOpacity = 0.1;
    let blur = 0;
    
    if (isClicking) {
      size = 28;
      dotSize = 8;
      bgSize = 40;
      bgOpacity = 0.15;
    } else if (isHovering) {
      size = 48;
      dotSize = 0;
      bgSize = 48;
      bgOpacity = 0.2;
      blur = 4;
    }
    
    return { size, dotSize, bgSize, bgOpacity, blur };
  };
  
  const styles = getCursorStyles();

  return (
    <>
      {/* Main cursor ring */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform custom-cursor"
        style={{
          width: `${styles.size}px`,
          height: `${styles.size}px`,
          opacity: isVisible ? 1 : 0,
          transition: 'width 0.2s ease-out, height 0.2s ease-out, opacity 0.2s ease',
        }}
      >
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: `radial-gradient(circle at center, rgba(14, 165, 233, ${styles.bgOpacity}) 0%, rgba(34, 197, 94, ${styles.bgOpacity * 0.5}) 100%)`,
            backdropFilter: `blur(${styles.blur}px)`,
            border: `2px solid rgba(14, 165, 233, ${isHovering ? 0.6 : 0.4})`,
            boxShadow: `0 0 ${styles.bgSize / 2}px rgba(14, 165, 233, 0.3)`,
            transition: 'border-color 0.2s ease, box-shadow 0.2s ease, backdrop-filter 0.2s ease',
          }}
        />
      </div>
      
      {/* Inner dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 pointer-events-none z-[10000] will-change-transform custom-cursor"
        style={{
          width: `${styles.dotSize}px`,
          height: `${styles.dotSize}px`,
          opacity: isVisible ? (isHovering ? 0 : 1) : 0,
          transition: 'width 0.15s ease-out, height 0.15s ease-out, opacity 0.2s ease',
        }}
      >
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'linear-gradient(135deg, rgb(14, 165, 233), rgb(34, 197, 94))',
            boxShadow: '0 0 8px rgba(14, 165, 233, 0.6)',
          }}
        />
      </div>
      
      {/* Click ripple effect */}
      {isClicking && (
        <div
          className="fixed top-0 left-0 pointer-events-none z-[9998] will-change-transform custom-cursor"
          style={{
            transform: `translate3d(${mousePos.current.x - 20}px, ${mousePos.current.y - 20}px, 0)`,
            width: '40px',
            height: '40px',
          }}
        >
          <div
            className="absolute inset-0 rounded-full animate-ping"
            style={{
              background: 'radial-gradient(circle, rgba(14, 165, 233, 0.4), transparent)',
              animation: 'ripple 0.4s ease-out',
            }}
          />
        </div>
      )}
      
      <style>{`
        @keyframes ripple {
          0% {
            transform: scale(0.5);
            opacity: 0.8;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;