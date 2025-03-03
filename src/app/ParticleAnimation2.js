'use client';

import { useEffect, useRef } from 'react';
import styles from './page.module.css';

export default function ParticleAnimation2() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !containerRef.current) return;

    // Crear un script para cargar el código original de ParticleAnimation.js
    const script = document.createElement('script');
    script.textContent = `
      // Código del archivo ParticleAnimation.js original
      var NUM_PARTICLES = ( ( ROWS = 100 ) * ( COLS = 300 ) ),
          THICKNESS = Math.pow( 80, 2 ),
          SPACING = 3,
          MARGIN = 100,
          COLOR = 100,
          DRAG = 0.95,
          EASE = 0.25,
          
          container,
          particle,
          canvas,
          mouse,
          stats,
          list,
          ctx,
          tog,
          man,
          dx, dy,
          mx, my,
          d, t, f,
          a, b,
          i, n,
          w, h,
          p, s,
          r, c
          ;

      particle = {
        vx: 0,
        vy: 0,
        x: 0,
        y: 0
      };

      function init() {
        container = document.getElementById('particle-container');
        canvas = document.createElement('canvas');
        
        ctx = canvas.getContext('2d');
        man = false;
        tog = true;
        
        list = [];
        
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
        
        for (i = 0; i < NUM_PARTICLES; i++) {
          p = Object.create(particle);
          p.x = p.ox = MARGIN + SPACING * (i % COLS);
          p.y = p.oy = MARGIN + SPACING * Math.floor(i / COLS);
          
          list[i] = p;
        }

        window.addEventListener('mousemove', function(e) {
          bounds = container.getBoundingClientRect();
          mx = e.clientX - bounds.left;
          my = e.clientY - bounds.top;
          man = true;
        });
        
        if (typeof Stats === 'function') {
          document.body.appendChild((stats = new Stats()).domElement);
        }
        
        container.appendChild(canvas);
      }

      function step() {
        if (stats) stats.begin();

        if (tog = !tog) {
          if (!man) {
            t = +new Date() * 0.001;
            mx = w * 0.5 + (Math.cos(t * 2.1) * Math.cos(t * 0.9) * w * 0.45);
            my = h * 0.5 + (Math.sin(t * 3.2) * Math.sin(t * 0.8) * h * 0.45);
          }
            
          for (i = 0; i < NUM_PARTICLES; i++) {
            p = list[i];
            
            d = (dx = mx - p.x) * dx + (dy = my - p.y) * dy;
            f = -THICKNESS / d;

            if (d < THICKNESS) {
              t = Math.atan2(dy, dx);
              p.vx += f * Math.cos(t);
              p.vy += f * Math.sin(t);
            }

            p.x += (p.vx *= DRAG) + (p.ox - p.x) * EASE;
            p.y += (p.vy *= DRAG) + (p.oy - p.y) * EASE;
          }
        } else {
          b = (a = ctx.createImageData(w, h)).data;

          for (i = 0; i < NUM_PARTICLES; i++) {
            p = list[i];
            b[n = (~~p.x + (~~p.y * w)) * 4] = b[n+1] = b[n+2] = COLOR, b[n+3] = 255;
          }

          ctx.putImageData(a, 0, 0);
        }

        if (stats) stats.end();

        requestAnimationFrame(step);
      }

      // Iniciar la animación cuando el DOM esté listo
      setTimeout(function() {
        init();
        step();
      }, 100);
    `;

    // Añadir el script al body
    document.body.appendChild(script);

    // Cleanup al desmontar
    return () => {
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
      
      // Intentar limpiar el canvas si existe
      const container = document.getElementById('particle-container');
      if (container) {
        const canvas = container.querySelector('canvas');
        if (canvas) {
          container.removeChild(canvas);
        }
      }
    };
  }, []);

  return (
    <div id="particle-container" ref={containerRef} className={styles.particleContainer}></div>
  );
}
