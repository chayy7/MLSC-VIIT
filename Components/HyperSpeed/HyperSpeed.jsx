import React, { useRef, useEffect } from "react";
import "./HyperSpeed.css";

/**
 * Enhanced Canvas-based interactive particle background for a hero section.
 *
 * This version has the background made fully black (and keeps the lively blue/white particles).
 *
 * Props:
 * - particleCount (number) - base number of primary particles (density adapts to area)
 * - colors (string[]) - array of hex/rgb colors used for particles
 * - maxLinkDistance (number) - maximum distance (in px) to draw links between particles
 * - interactive (boolean) - enable pointer interactions (repel, click burst, orbiters)
 * - className (string) - additional class for the container
 * - trails (boolean) - enable motion trails (default: true)
 */
export default function HeroParticles({
  particleCount = 120,
  colors = ["#4D96FF", "#A9D6FF", "#EAF6FF", "#FFFFFF"],
  maxLinkDistance = 110,
  interactive = true,
  className = "",
  trails = true,
}) {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);
  const bokehRef = useRef([]); // slow large glow particles
  const ripplesRef = useRef([]); // expanding ripple rings on click
  const pointerRef = useRef({ x: null, y: null, isDown: false });
  const hueRef = useRef(210); // start bluish hue
  const rotateRef = useRef(0);

  // small utility
  const rand = (min, max) => Math.random() * (max - min) + min;
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });

    let DPR = Math.max(1, window.devicePixelRatio || 1);

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = Math.round(rect.width * DPR);
      canvas.height = Math.round(rect.height * DPR);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);

      // adaptive counts
      const area = rect.width * rect.height;
      const density = Math.min(2.2, Math.max(0.45, Math.sqrt(area) / 70));
      const targetCount = Math.round(particleCount * density);

      const particles = particlesRef.current;
      while (particles.length < targetCount) {
        particles.push(makeParticle(rect.width, rect.height, "main"));
      }
      while (particles.length > targetCount) {
        particles.pop();
      }

      // bokeh layer: fewer, bigger, slower
      const targetBokeh = Math.round(Math.max(12, Math.min(40, (rect.width * rect.height) / 90000)));
      const bokeh = bokehRef.current;
      while (bokeh.length < targetBokeh) bokeh.push(makeParticle(rect.width, rect.height, "bokeh"));
      while (bokeh.length > targetBokeh) bokeh.pop();
    }

    function makeParticle(w, h, type = "main") {
      if (type === "bokeh") {
        const size = rand(18, 60);
        const speed = rand(0.02, 0.12);
        const color = colors[Math.floor(Math.random() * colors.length)];
        return {
          x: rand(0, w),
          y: rand(0, h),
          vx: rand(-0.02, 0.02),
          vy: rand(-0.02, 0.02),
          size,
          baseSize: size,
          color,
          opacity: rand(0.06, 0.18),
          slowDrift: rand(0.0004, 0.002),
        };
      }

      // main particle
      const size = rand(0.9, 3.8);
      const speed = rand(0.25, 1.35);
      const angle = rand(0, Math.PI * 2);
      const color = colors[Math.floor(Math.random() * colors.length)];
      return {
        x: rand(0, w),
        y: rand(0, h),
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size,
        baseSize: size,
        color,
        drift: rand(-0.02, 0.02),
        spin: rand(-0.003, 0.003),
        life: rand(4000, 20000),
      };
    }

    // pointer events
    function handlePointerMove(e) {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.clientX ?? (e.touches && e.touches[0]?.clientX);
      const clientY = e.clientY ?? (e.touches && e.touches[0]?.clientY);
      if (clientX == null || clientY == null) return;
      pointerRef.current.x = clientX - rect.left;
      pointerRef.current.y = clientY - rect.top;
    }
    function handlePointerLeave() {
      pointerRef.current.x = null;
      pointerRef.current.y = null;
    }
    function handlePointerDown(e) {
      pointerRef.current.isDown = true;
      spawnBurst(e);
      spawnRipple(e);
    }
    function handlePointerUp() {
      pointerRef.current.isDown = false;
    }

    function spawnBurst(e) {
      // small fast burst on click/tap
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX ?? (e.touches && e.touches[0]?.clientX)) - rect.left;
      const y = (e.clientY ?? (e.touches && e.touches[0]?.clientY)) - rect.top;
      const burstCount = 18;
      const w = rect.width;
      const h = rect.height;
      for (let i = 0; i < burstCount; i++) {
        const p = makeParticle(w, h);
        const angle = rand(0, Math.PI * 2);
        const speed = rand(1.8, 4.6);
        p.x = x;
        p.y = y;
        p.vx = Math.cos(angle) * speed;
        p.vy = Math.sin(angle) * speed;
        p.size = rand(1.4, 4.8);
        particlesRef.current.push(p);
      }
    }

    function spawnRipple(e) {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX ?? (e.touches && e.touches[0]?.clientX)) - rect.left;
      const y = (e.clientY ?? (e.touches && e.touches[0]?.clientY)) - rect.top;
      ripplesRef.current.push({ x, y, r: 0, maxR: Math.max(rect.width, rect.height) * 0.6, alpha: 0.9 });
      // keep ripple list bounded
      if (ripplesRef.current.length > 8) ripplesRef.current.shift();
    }

    // orbiters: small temporary particles that orbit the pointer when pressed
    function spawnOrbiters(x, y) {
      const count = 10;
      for (let i = 0; i < count; i++) {
        const p = {
          x: x + rand(-6, 6),
          y: y + rand(-6, 6),
          vx: 0,
          vy: 0,
          size: rand(1, 2.2),
          baseSize: rand(1, 2.2),
          color: colors[Math.floor(Math.random() * colors.length)],
          orbit: { cx: x, cy: y, angle: rand(0, Math.PI * 2), radius: rand(10, 38), speed: rand(0.02, 0.09) },
          transient: true,
          life: 1200 + Math.random() * 700,
        };
        particlesRef.current.push(p);
      }
    }

    // events registration
    if (interactive) {
      canvas.addEventListener("mousemove", handlePointerMove);
      canvas.addEventListener("touchmove", handlePointerMove, { passive: true });
      canvas.addEventListener("mouseleave", handlePointerLeave);
      canvas.addEventListener("touchend", handlePointerLeave);
      canvas.addEventListener("mousedown", handlePointerDown);
      canvas.addEventListener("touchstart", handlePointerDown, { passive: true });
      window.addEventListener("mouseup", handlePointerUp);
      window.addEventListener("resize", resize);
    } else {
      window.addEventListener("resize", resize);
    }

    // initial populate
    resize();

    // animation loop
    let last = performance.now();
    function step(now) {
      const dtMs = now - last;
      const dt = Math.min(48, dtMs) / 16.6667; // normalize to ~60fps scale
      last = now;
      update(dt, now);
      draw(now);
      animationRef.current = requestAnimationFrame(step);
    }

    function update(dt, now) {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      const particles = particlesRef.current;
      const bokeh = bokehRef.current;
      const mouse = pointerRef.current;

      hueRef.current = (hueRef.current + 0.01 * dt) % 360;
      rotateRef.current += 0.0006 * dt;

      // spawn orbiters while pointer is down (short bursts)
      if (interactive && mouse.isDown && mouse.x != null) {
        if (Math.random() < 0.14) spawnOrbiters(mouse.x, mouse.y);
      }

      // update main particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        // orbiting transient particles
        if (p.orbit) {
          p.orbit.angle += p.orbit.speed * dt;
          p.x = p.orbit.cx + Math.cos(p.orbit.angle) * p.orbit.radius;
          p.y = p.orbit.cy + Math.sin(p.orbit.angle) * p.orbit.radius;
          p.life -= dt * 16.6667;
          if (p.life <= 0) particles.splice(i, 1);
          continue;
        }

        // flow-field / wave motion for natural movement
        const t = now * 0.001;
        const flowScale = 0.0016;
        const flowX = Math.sin((p.x + t * 80) * flowScale + p.drift * 8 + rotateRef.current) * 0.28;
        const flowY = Math.cos((p.y + t * 60) * flowScale + p.drift * 10 - rotateRef.current) * 0.28;
        p.vx += flowX * dt * 0.4;
        p.vy += flowY * dt * 0.4;

        // slight rotational torque to whole field
        const cx = w / 2;
        const cy = h / 2;
        const dx = p.x - cx;
        const dy = p.y - cy;
        p.vx += (-dy * 0.00004 + (cx - p.x) / w * 0.0007) * dt;
        p.vy += (dx * 0.00004 + (cy - p.y) / h * 0.0007) * dt;

        // move
        p.x += p.vx * dt;
        p.y += p.vy * dt;

        // size breathing
        p.size = p.baseSize + Math.sin((now + i * 57) / 1200 + p.drift) * 0.56;

        // pointer interactions
        if (interactive && mouse.x != null) {
          const mx = mouse.x;
          const my = mouse.y;
          const dxm = p.x - mx;
          const dym = p.y - my;
          const dist = Math.sqrt(dxm * dxm + dym * dym);
          if (dist < 150) {
            // repel stronger when close
            const influence = (150 - dist) / 150;
            p.vx += (dxm / (dist + 0.001)) * (0.9 * influence) * dt;
            p.vy += (dym / (dist + 0.001)) * (0.9 * influence) * dt;
          } else if (dist < 280 && mouse.isDown) {
            // gentle suction when holding to create wake
            const pull = (dist - 280) / -280;
            p.vx += (mx - p.x) / (dist + 0.001) * 0.12 * dt * pull;
            p.vy += (my - p.y) / (dist + 0.001) * 0.12 * dt * pull;
          }
        }

        // wrapping edges to keep density
        if (p.x < -20) p.x = w + 20;
        else if (p.x > w + 20) p.x = -20;
        if (p.y < -20) p.y = h + 20;
        else if (p.y > h + 20) p.y = -20;

        // damping
        p.vx *= 0.992;
        p.vy *= 0.992;

        // trim if runaway
        if (Math.abs(p.vx) > 35 || Math.abs(p.vy) > 35) {
          p.vx *= 0.6;
          p.vy *= 0.6;
        }
      }

      // update bokeh (large soft glows)
      for (let i = 0; i < bokeh.length; i++) {
        const b = bokeh[i];
        b.x += Math.cos(i * 12 + now * 0.0004) * b.slowDrift * 24 * dt;
        b.y += Math.sin(i * 7 + now * 0.0006) * b.slowDrift * 24 * dt;
        // gentle pulsing
        b.size = b.baseSize + Math.sin((now + i * 400) / 2400) * (b.baseSize * 0.12);
        if (b.x < -100) b.x = w + 100;
        if (b.y < -100) b.y = h + 100;
        if (b.x > w + 100) b.x = -100;
        if (b.y > h + 100) b.y = -100;
      }

      // ripples expansion
      for (let i = ripplesRef.current.length - 1; i >= 0; i--) {
        const r = ripplesRef.current[i];
        r.r += 16 * dt;
        r.alpha -= 0.01 * dt;
        if (r.alpha <= 0) ripplesRef.current.splice(i, 1);
      }

      // safety cap
      if (particlesRef.current.length > Math.max(900, particleCount * 12)) {
        particlesRef.current = particlesRef.current.slice(0, Math.max(700, particleCount * 6));
      }
    }

    function draw(now) {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      const particles = particlesRef.current;
      const bokeh = bokehRef.current;
      const ripples = ripplesRef.current;

      // base solid black background so the entire hero is black behind particles
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, w, h);

      // trails effect: draw translucent black to fade previous frames (if enabled)
      if (trails) {
        ctx.fillStyle = "rgba(0,0,0,0.12)";
        ctx.fillRect(0, 0, w, h);
      }

      // subtle dynamic overlay (very faint bluish gradient on top of black) to keep color depth
      const bgG = ctx.createLinearGradient(0, 0, w, h);
      const hue = Math.floor(hueRef.current);
      bgG.addColorStop(0, `hsla(${hue + 18}, 90%, 6%, 0.04)`);
      bgG.addColorStop(0.5, `hsla(${hue + 40}, 95%, 8%, 0.03)`);
      bgG.addColorStop(1, `hsla(${hue + 60}, 95%, 10%, 0.03)`);
      ctx.fillStyle = bgG;
      ctx.fillRect(0, 0, w, h);

      // draw slow moving bokeh layer behind particles
      for (let i = 0; i < bokeh.length; i++) {
        const b = bokeh[i];
        // radial gradient for soft glow
        const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.size * 1.8);
        g.addColorStop(0, hexToRgba(b.color, b.opacity));
        g.addColorStop(0.4, hexToRgba(b.color, b.opacity * 0.22));
        g.addColorStop(1, hexToRgba(b.color, 0));
        ctx.globalCompositeOperation = "lighter";
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.size * 1.8, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalCompositeOperation = "source-over";
      }

      // connecting lines between nearby main particles
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxLinkDistance) {
            const alpha = (1 - dist / maxLinkDistance) * 0.28;
            ctx.lineWidth = 0.8;
            ctx.strokeStyle = mixColor(a.color, b.color, 0.5, alpha);
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // draw ripples (expanding rings)
      for (let i = 0; i < ripples.length; i++) {
        const r = ripples[i];
        ctx.strokeStyle = `rgba(220, 235, 255, ${clamp(r.alpha, 0, 0.6)})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.r, 0, Math.PI * 2);
        ctx.stroke();
      }

      // draw main particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // color with slight hue shift for liveliness
        const tint = hueShift(p.color, (i % 7) * 0.6 + (hueRef.current - 210) * 0.15);

        // core dot
        ctx.fillStyle = tint;
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.6, p.size), 0, Math.PI * 2);
        ctx.fill();

        // small glow for bigger ones
        if (p.size > 2.4) {
          const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3.2);
          g.addColorStop(0, hexToRgba(tint, 0.12));
          g.addColorStop(1, hexToRgba(tint, 0));
          ctx.globalCompositeOperation = "lighter";
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 3.2, 0, Math.PI * 2);
          ctx.fill();
          ctx.globalCompositeOperation = "source-over";
        }
      }

      // subtle foreground vignette to help center content pop (keeps dark edges)
      const vg = ctx.createRadialGradient(w / 2, h / 2, Math.min(w, h) / 6, w / 2, h / 2, Math.max(w, h) / 1.1);
      vg.addColorStop(0, "rgba(0,0,0,0)");
      vg.addColorStop(1, "rgba(0,0,0,0.6)");
      ctx.fillStyle = vg;
      ctx.fillRect(0, 0, w, h);
    }

    // color helpers
    function hexToRgba(hex, a = 1) {
      if (!hex) return `rgba(255,255,255,${a})`;
      if (hex.startsWith("rgba")) {
        return hex.replace(/rgba\(([^)]+)\)/, (m, g) => {
          const parts = g.split(",").map((s) => s.trim());
          parts[3] = `${a}`;
          return `rgba(${parts.join(",")})`;
        });
      }
      if (hex.startsWith("rgb")) {
        return hex.replace("rgb", "rgba").replace(")", `, ${a})`);
      }
      const h = hex.replace("#", "");
      const bigint = parseInt(h, 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      return `rgba(${r}, ${g}, ${b}, ${a})`;
    }

    function parseColor(col) {
      if (col.startsWith("rgb")) {
        const vals = col.match(/[\d.]+/g).map(Number);
        return { r: vals[0], g: vals[1], b: vals[2] };
      }
      const h = col.replace("#", "");
      const bigint = parseInt(h, 16);
      return {
        r: (bigint >> 16) & 255,
        g: (bigint >> 8) & 255,
        b: bigint & 255,
      };
    }

    function mixColor(c1, c2, t = 0.5, alpha = 1) {
      const rgb1 = parseColor(c1);
      const rgb2 = parseColor(c2);
      const r = Math.round(rgb1.r + (rgb2.r - rgb1.r) * t);
      const g = Math.round(rgb1.g + (rgb2.g - rgb1.g) * t);
      const b = Math.round(rgb1.b + (rgb2.b - rgb1.b) * t);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    function rgbToHsl(r, g, b) {
      r /= 255;
      g /= 255;
      b /= 255;
      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      let h = 0,
        s = 0;
      const l = (max + min) / 2;
      if (max !== min) {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
          case g:
            h = (b - r) / d + 2;
            break;
          case b:
            h = (r - g) / d + 4;
            break;
        }
        h /= 6;
      }
      return { h, s, l };
    }

    function hslToRgb(h, s, l) {
      let r, g, b;
      if (s === 0) {
        r = g = b = l;
      } else {
        const hue2rgb = (p, q, t) => {
          if (t < 0) t += 1;
          if (t > 1) t -= 1;
          if (t < 1 / 6) return p + (q - p) * 6 * t;
          if (t < 1 / 2) return q;
          if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
          return p;
        };
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
      }
      return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) };
    }

    function hueShift(hex, deg) {
      const { r, g, b } = parseColor(hex);
      let { h, s, l } = rgbToHsl(r, g, b);
      h = (h * 360 + deg) % 360;
      if (h < 0) h += 360;
      const rgb = hslToRgb(h / 360, s, l);
      return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)`;
    }

    // start
    animationRef.current = requestAnimationFrame(step);

    // cleanup
    return () => {
      cancelAnimationFrame(animationRef.current);
      if (interactive) {
        canvas.removeEventListener("mousemove", handlePointerMove);
        canvas.removeEventListener("touchmove", handlePointerMove);
        canvas.removeEventListener("mouseleave", handlePointerLeave);
        canvas.removeEventListener("touchend", handlePointerLeave);
        canvas.removeEventListener("mousedown", handlePointerDown);
        canvas.removeEventListener("touchstart", handlePointerDown);
        window.removeEventListener("mouseup", handlePointerUp);
      }
      window.removeEventListener("resize", resize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [particleCount, JSON.stringify(colors), maxLinkDistance, interactive, trails]);

  return (
    <div
      className={`hero-particles-container ${className} ${interactive ? "interactive" : ""}`}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="hero-particles-canvas" />
    </div>
  );
}