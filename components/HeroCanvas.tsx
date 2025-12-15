import React, { useRef, useEffect } from 'react';

const HeroCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let isDark = document.documentElement.classList.contains('dark');
    
    // Set size
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    
    // Watch for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          isDark = document.documentElement.classList.contains('dark');
        }
      });
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    handleResize();
    window.addEventListener('resize', handleResize);

    // Particles
    const particles: { x: number; y: number; vx: number; vy: number; size: number }[] = [];
    const particleCount = 60;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      });
    }

    const mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Determine colors based on theme
      const strokeColor = isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)';
      const particleColor = isDark ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.2)';
      const connectionColorBase = isDark ? '255, 255, 255' : '0, 0, 0';

      // Draw Grid
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 1;
      const gridSize = 100;
      
      const time = Date.now() * 0.0005;
      const offsetX = (time * 20) % gridSize;
      
      for (let x = offsetX; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw Particles & Connections
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
        
        // Mouse interaction - Repulsion
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        const interactionRadius = 150;

        if (dist < interactionRadius) {
            // Normalized direction vector
            const nx = dx / dist;
            const ny = dy / dist;
            
            // Calculate force: stronger when closer
            const force = (interactionRadius - dist) / interactionRadius;
            
            // Repulsion strength
            const strength = 4;
            
            // Move particle away from mouse
            p.x -= nx * force * strength;
            p.y -= ny * force * strength;
        }

        ctx.fillStyle = particleColor;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Connect
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distance = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);
          if (distance < 150) {
            ctx.strokeStyle = `rgba(${connectionColorBase}, ${0.1 * (1 - distance / 150)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(animate);
    };

    const animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
};

export default HeroCanvas;