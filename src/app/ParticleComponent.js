'use client';

import { useEffect, useRef } from 'react';
import styles from './page.module.css';

export default function ParticleComponent() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !containerRef.current) return;

    // Variables originales del script de ParticleAnimation.js
    var ROWS = 1000, 
        COLS = 1000,
        NUM_PARTICLES = ROWS * COLS,
        THICKNESS = Math.pow(150, 2), // Aumentado para mayor sensibilidad
        SPACING = 3,
        MARGIN = 100,
        COLOR = 220,
        DRAG = 0.98, // Aumentado para que el movimiento sea más fluido
        EASE = 0.15, // Disminuido para que las partículas se muevan más rápido hacia el cursor
        
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
        r, c;

    // Crear objeto mouse para seguimiento
    mouse = {
      x: 0,
      y: 0,
      active: false
    };

    // Definición original de partícula
    particle = {
      vx: 0,
      vy: 0,
      x: 0,
      y: 0
    };

    // Función init original, adaptada para usar la referencia al contenedor
    function init() {
      container = containerRef.current;
      canvas = document.createElement('canvas');
      
      ctx = canvas.getContext('2d');
      man = false;
      tog = true;
      
      list = [];
      
      // Usar las dimensiones originales pero adaptadas a pantalla completa
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      
      // No aplicamos los estilos de marginLeft y marginTop ya que usamos position:fixed
      
      for (i = 0; i < NUM_PARTICLES; i++) {
        p = Object.create(particle);
        p.x = p.ox = MARGIN + SPACING * (i % COLS);
        p.y = p.oy = MARGIN + SPACING * Math.floor(i / COLS);
        
        list[i] = p;
      }

      // Mejorar el seguimiento del ratón
      window.addEventListener('mousemove', function(e) {
        const bounds = container.getBoundingClientRect();
        mouse.x = e.clientX - bounds.left;
        mouse.y = e.clientY - bounds.top;
        mouse.active = true;
        
        // Actualizar también mx y my para la función step
        mx = mouse.x;
        my = mouse.y;
        man = true;
      });
      
      // No usamos Stats ya que no lo tenemos disponible
      
      container.appendChild(canvas);
    }

    // Función step modificada para mejorar el seguimiento del ratón
    function step() {
      if (stats) stats.begin();

      if (tog = !tog) {
        if (!mouse.active) {
          // Animación automática si no hay interacción con el ratón
          t = +new Date() * 0.001;
          mx = w * 0.5 + (Math.cos(t * 2.1) * Math.cos(t * 0.9) * w * 0.45);
          my = h * 0.5 + (Math.sin(t * 3.2) * Math.tan(Math.sin(t * 0.8)) * h * 0.45);
        } else {
          // Usar la posición actual del ratón
          mx = mouse.x;
          my = mouse.y;
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

    // Adaptación para redimensionamiento de la ventana
    window.addEventListener('resize', function() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    });

    // Inicializar simulación
    init();
    const animId = requestAnimationFrame(step);

    // Configurar un evento de clic para atraer partículas
    window.addEventListener('click', function(e) {
      if (container) {
        const bounds = container.getBoundingClientRect();
        mouse.x = e.clientX - bounds.left;
        mouse.y = e.clientY - bounds.top;
        mouse.active = true;
        
        // Actualizar mx y my para efecto inmediato
        mx = mouse.x;
        my = mouse.y;
        man = true;
      }
    });

    // Limpieza al desmontar (necesario para React)
    return () => {
      cancelAnimationFrame(animId);
      
      if (container) {
        const canvasElement = container.querySelector('canvas');
        if (canvasElement) {
          container.removeChild(canvasElement);
        }
        
        container.removeEventListener('mousemove', null);
      }
      
      window.removeEventListener('resize', null);
      window.removeEventListener('click', null);
      window.removeEventListener('mousemove', null);
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.particleContainer}></div>
  );
}
