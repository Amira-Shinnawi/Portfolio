import { useEffect, useMemo, useRef, type ReactNode } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

/* ──────────────────────────────────────────────────────────
   Lightweight, code-only 3D scene: a floating phone whose
   screen is a Canvas2D-drawn "Flutter app" UI, orbited by
   glowing tech nodes. No model files or HDRs are downloaded.
   ────────────────────────────────────────────────────────── */

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.roundRect(x, y, w, h, r);
}

function makeScreenTexture() {
  const W = 540;
  const H = 1140;
  const c = document.createElement('canvas');
  c.width = W;
  c.height = H;
  const ctx = c.getContext('2d')!;

  const bg = ctx.createLinearGradient(0, 0, 0, H);
  bg.addColorStop(0, '#0b1224');
  bg.addColorStop(1, '#060a14');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  // status bar
  ctx.fillStyle = '#cbd5e1';
  ctx.font = '600 26px Inter, sans-serif';
  ctx.fillText('9:41', 40, 62);
  ctx.fillRect(W - 110, 44, 60, 22);
  // dynamic island
  ctx.fillStyle = '#000';
  roundRect(ctx, W / 2 - 80, 30, 160, 44, 22);
  ctx.fill();

  // header
  ctx.fillStyle = '#94a3b8';
  ctx.font = '500 26px Inter, sans-serif';
  ctx.fillText('Good morning,', 40, 150);
  ctx.fillStyle = '#ffffff';
  ctx.font = '700 38px "Space Grotesk", Inter, sans-serif';
  ctx.fillText('Today’s orders', 40, 205);

  // live badge
  ctx.fillStyle = 'rgba(94,234,212,.14)';
  roundRect(ctx, W - 170, 168, 130, 44, 22);
  ctx.fill();
  ctx.fillStyle = '#5eead4';
  ctx.beginPath();
  ctx.arc(W - 145, 190, 7, 0, Math.PI * 2);
  ctx.fill();
  ctx.font = '600 22px Inter, sans-serif';
  ctx.fillText('LIVE', W - 128, 198);

  // hero card
  const g = ctx.createLinearGradient(40, 250, W - 40, 470);
  g.addColorStop(0, '#3fb6ff');
  g.addColorStop(1, '#0468d7');
  ctx.fillStyle = g;
  roundRect(ctx, 40, 245, W - 80, 220, 32);
  ctx.fill();
  ctx.fillStyle = 'rgba(255,255,255,.8)';
  ctx.font = '500 24px Inter, sans-serif';
  ctx.fillText('Total sales', 72, 300);
  ctx.fillStyle = '#fff';
  ctx.font = '700 64px "Space Grotesk", Inter, sans-serif';
  ctx.fillText('24,860', 72, 375);
  ctx.font = '600 24px Inter, sans-serif';
  ctx.fillStyle = 'rgba(255,255,255,.85)';
  ctx.fillText('▲ 18% vs yesterday', 72, 425);

  // bar chart
  ctx.fillStyle = 'rgba(255,255,255,.04)';
  roundRect(ctx, 40, 495, W - 80, 230, 28);
  ctx.fill();
  const bars = [0.45, 0.7, 0.55, 0.9, 0.62, 0.8, 0.5];
  const bw = 38;
  const gap = (W - 80 - 60 - bars.length * bw) / (bars.length - 1);
  bars.forEach((v, i) => {
    const x = 70 + i * (bw + gap);
    const h = v * 150;
    const bg2 = ctx.createLinearGradient(0, 690 - h, 0, 690);
    bg2.addColorStop(0, i === 3 ? '#5eead4' : '#3fb6ff');
    bg2.addColorStop(1, 'rgba(63,182,255,.15)');
    ctx.fillStyle = bg2;
    roundRect(ctx, x, 690 - h, bw, h, 10);
    ctx.fill();
  });

  // list rows
  const rows = [
    ['#1042 · Dine-in', 'Table 7', '#3fb6ff'],
    ['#1043 · Delivery', 'On the way', '#5eead4'],
    ['#1044 · Takeaway', 'Printing…', '#a78bfa'],
  ];
  rows.forEach(([t, s, col], i) => {
    const y = 755 + i * 112;
    ctx.fillStyle = 'rgba(255,255,255,.045)';
    roundRect(ctx, 40, y, W - 80, 94, 24);
    ctx.fill();
    ctx.fillStyle = col;
    roundRect(ctx, 64, y + 22, 50, 50, 14);
    ctx.fill();
    ctx.fillStyle = '#e2e8f0';
    ctx.font = '600 26px Inter, sans-serif';
    ctx.fillText(t, 134, y + 46);
    ctx.fillStyle = '#94a3b8';
    ctx.font = '500 22px Inter, sans-serif';
    ctx.fillText(s, 134, y + 76);
  });

  // nav bar
  ctx.fillStyle = 'rgba(255,255,255,.06)';
  roundRect(ctx, 40, H - 110, W - 80, 76, 38);
  ctx.fill();
  [0, 1, 2, 3].forEach((i) => {
    ctx.fillStyle = i === 0 ? '#3fb6ff' : '#475569';
    ctx.beginPath();
    ctx.arc(110 + i * 107, H - 72, 12, 0, Math.PI * 2);
    ctx.fill();
  });

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

function Phone() {
  const texture = useMemo(makeScreenTexture, []);
  useEffect(() => () => texture.dispose(), [texture]);
  return (
    <group>
      {/* body */}
      <RoundedBox args={[1.9, 3.9, 0.2]} radius={0.24} smoothness={6}>
        <meshStandardMaterial color="#1b2236" metalness={0.85} roughness={0.28} />
      </RoundedBox>
      {/* bezel */}
      <RoundedBox args={[1.8, 3.8, 0.02]} radius={0.2} smoothness={6} position={[0, 0, 0.1]}>
        <meshStandardMaterial color="#020409" roughness={0.4} />
      </RoundedBox>
      {/* screen */}
      <mesh position={[0, 0, 0.115]}>
        <planeGeometry args={[1.68, 3.55]} />
        <meshBasicMaterial map={texture} toneMapped={false} />
      </mesh>
      {/* side buttons */}
      <mesh position={[0.97, 0.8, 0]}>
        <boxGeometry args={[0.04, 0.5, 0.08]} />
        <meshStandardMaterial color="#2a3350" metalness={0.9} roughness={0.3} />
      </mesh>
      {/* camera bump on back */}
      <RoundedBox args={[0.7, 0.7, 0.06]} radius={0.12} position={[-0.45, 1.35, -0.12]}>
        <meshStandardMaterial color="#232b42" metalness={0.8} roughness={0.3} />
      </RoundedBox>
    </group>
  );
}

const NODE_COLORS = ['#3fb6ff', '#5eead4', '#8b5cf6', '#7dd3fc'];

function Nodes({ count }: { count: number }) {
  const group = useRef<THREE.Group>(null);
  const nodes = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const a = (i / count) * Math.PI * 2;
        const r = 2.4 + (i % 3) * 0.35;
        return {
          pos: new THREE.Vector3(Math.cos(a) * r, Math.sin(a * 2) * 0.9 + (i % 2 ? 0.6 : -0.6), Math.sin(a) * r * 0.6),
          color: NODE_COLORS[i % NODE_COLORS.length],
          size: 0.05 + (i % 3) * 0.025,
        };
      }),
    [count],
  );

  const lineGeo = useMemo(() => {
    const pts: number[] = [];
    nodes.forEach((n, i) => {
      const m = nodes[(i + 1) % nodes.length];
      pts.push(n.pos.x, n.pos.y, n.pos.z, m.pos.x, m.pos.y, m.pos.z);
      if (i % 3 === 0) pts.push(n.pos.x, n.pos.y, n.pos.z, 0, 0, 0);
    });
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
    return g;
  }, [nodes]);
  useEffect(() => () => lineGeo.dispose(), [lineGeo]);

  useFrame((_, dt) => {
    if (group.current) group.current.rotation.y += dt * 0.12;
  });

  return (
    <group ref={group}>
      <lineSegments geometry={lineGeo}>
        <lineBasicMaterial color="#3fb6ff" transparent opacity={0.14} />
      </lineSegments>
      {nodes.map((n, i) => (
        <mesh key={i} position={n.pos}>
          <icosahedronGeometry args={[n.size, 1]} />
          <meshStandardMaterial color={n.color} emissive={n.color} emissiveIntensity={1.2} toneMapped={false} />
        </mesh>
      ))}
    </group>
  );
}

function Rig({ children }: { children: ReactNode }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((state, dt) => {
    if (!ref.current) return;
    const k = Math.min(1, dt * 3);
    ref.current.rotation.y += (state.pointer.x * 0.45 - 0.35 - ref.current.rotation.y) * k;
    ref.current.rotation.x += (-state.pointer.y * 0.25 + 0.05 - ref.current.rotation.x) * k;
  });
  return <group ref={ref}>{children}</group>;
}

export default function PhoneScene({ lite, active }: { lite: boolean; active: boolean }) {
  return (
    <Canvas
      frameloop={active ? 'always' : 'never'}
      dpr={lite ? [1, 1.25] : [1, 1.75]}
      gl={{ antialias: !lite, alpha: true, powerPreference: 'high-performance' }}
      camera={{ position: [0, 0, 7.2], fov: 42 }}
      style={{ touchAction: 'pan-y' }}
      aria-hidden
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 4, 5]} intensity={1.6} />
      <pointLight position={[-4, -2, 2]} intensity={14} color="#3fb6ff" />
      <pointLight position={[4, 2, -2]} intensity={10} color="#8b5cf6" />
      <Rig>
        <Float speed={1.6} rotationIntensity={0.25} floatIntensity={0.6}>
          <Phone />
        </Float>
        <Nodes count={lite ? 6 : 12} />
      </Rig>
    </Canvas>
  );
}
