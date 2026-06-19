/* AnimatedBackground is now a simple transparent passthrough wrapper.
   Sections that still import it won't break, but no decorative elements
   are rendered — the section itself controls its own background. */
export default function AnimatedBackground({ children, className = '' }) {
  return (
    <div className={`relative ${className}`}>
      {children}
    </div>
  );
}
