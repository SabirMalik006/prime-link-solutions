export default function AnimatedBackground({ 
  children, 
  className = '',
  dark = false,
  density = 'normal' 
}) {
  // Generate particles based on density
  const particleCount = density === 'high' ? 40 : density === 'low' ? 15 : 25;
  
  const particles = Array.from({ length: particleCount }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 6 + 2,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 10,
    color: i % 2 === 0 ? 'rgba(14, 165, 233, 0.3)' : 'rgba(34, 197, 94, 0.3)',
  }));

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Background layer */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full blur-3xl" style={{
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, transparent 70%)',
          animation: 'pulseOrb 12s ease-in-out infinite'
        }}></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 rounded-full blur-3xl" style={{
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.12) 0%, transparent 70%)',
          animation: 'pulseOrb 15s ease-in-out infinite 3s'
        }}></div>
        <div className="absolute -bottom-32 left-1/4 w-72 h-72 rounded-full blur-3xl" style={{
          background: 'radial-gradient(circle, rgba(217, 70, 239, 0.08) 0%, transparent 70%)',
          animation: 'pulseOrb 18s ease-in-out infinite 6s'
        }}></div>

        {/* Grid pattern */}
        {dark && (
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(148, 163, 184, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.03) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}></div>
        )}

        {/* Floating particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
              background: particle.color,
              opacity: 0.1,
              animation: `floatParticle ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`,
            }}
          ></div>
        ))}

        {/* Animated lines */}
        {dark && (
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent"
                style={{
                  top: `${15 + i * 30}%`,
                  left: 0,
                  right: 0,
                  animation: `lineMove ${12 + i * 3}s ease-in-out infinite`,
                  animationDelay: `${i * 0.8}s`,
                }}
              ></div>
            ))}
          </div>
        )}
      </div>

      {/* Content layer */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Global animations */}
      <style jsx>{`
        @keyframes lineMove {
          0%, 100% { transform: translateX(-100%); opacity: 0; }
          50% { transform: translateX(100%); opacity: 1; }
        }
        
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.1; }
          50% { transform: translateY(-25px) rotate(180deg); opacity: 0.3; }
        }
        
        @keyframes pulseOrb {
          0%, 100% { transform: scale(1) rotate(0deg); }
          33% { transform: scale(1.15) rotate(120deg); }
          66% { transform: scale(0.9) rotate(240deg); }
        }
      `}</style>
    </div>
  );
}
