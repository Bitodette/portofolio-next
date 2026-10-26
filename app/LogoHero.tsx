"use client";

import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";

function useDrift(sx: MotionValue<number>, sy: MotionValue<number>, fx: number, fy: number) {
  const x = useTransform(sx, [-0.5, 0.5], [-fx, fx]);
  const y = useTransform(sy, [-0.5, 0.5], [-fy, fy]);
  return { x, y };
}

function Scatter({ dx, dy, delay, children }: { dx: number; dy: number; delay: number; children: ReactNode }) {
  return (
    <motion.g
      initial={{ x: dx, y: dy, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 55, damping: 13, delay }}
    >
      {children}
    </motion.g>
  );
}

const MONCONG_Z = 40;

export default function LogoHero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const logoRef = useRef<HTMLDivElement>(null);

  const springConfig = { damping: 50, stiffness: 400 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const inti = useDrift(smoothX, smoothY, 4, 4);
  const moncong = useDrift(smoothX, smoothY, 7, 7);

  const tiltRX = useTransform(smoothY, [-0.5, 0.5], [12, -12]);
  const tiltRY = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);

  const s1 = useDrift(smoothX, smoothY, -45, -25);
  const s2 = useDrift(smoothX, smoothY, -35, -30);
  const s3 = useDrift(smoothX, smoothY, -25, -35);
  const s4 = useDrift(smoothX, smoothY, -15, -50);
  const s5 = useDrift(smoothX, smoothY, -20, -40);
  const s6 = useDrift(smoothX, smoothY, -40, -45);
  const s7 = useDrift(smoothX, smoothY, -55, -20);
  const s8 = useDrift(smoothX, smoothY, -40, -25);
  const s9 = useDrift(smoothX, smoothY, -30, -35);
  const s10 = useDrift(smoothX, smoothY, -25, -30);
  const s11 = useDrift(smoothX, smoothY, -50, -40);
  const s12 = useDrift(smoothX, smoothY, -35, -25);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = logoRef.current?.getBoundingClientRect();
      const cx = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
      const cy = rect ? rect.top + rect.height / 2 : window.innerHeight / 2;
      const nx = (e.clientX - cx) / window.innerWidth;
      const ny = (e.clientY - cy) / window.innerHeight;
      mouseX.set(Math.max(-0.5, Math.min(0.5, nx)));
      mouseY.set(Math.max(-0.5, Math.min(0.5, ny)));
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div
      ref={logoRef}
      className="relative w-full max-w-100 sm:w-55 lg:w-90 mt-10"
      style={{ aspectRatio: "835 / 891.78", perspective: 1200 }}
      role="img"
      aria-label="Logo Portofolio"
    >
      <motion.div
        className="absolute inset-0"
        style={{
          rotateX: tiltRX,
          rotateY: tiltRY,
          transformPerspective: 800,
          transformStyle: "preserve-3d",
        }}
      >
      <svg
        id="Layer_2"
        viewBox="400 0 835 891.78"
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
      <Scatter dx={60} dy={-320} delay={0.05}>
      <motion.g style={s4} id="_4_layer">
        <polygon id="_4" points="799.47 30.53 906.78 141.28 1000.34 111.01 799.47 30.53" fill="#e0d5c3" />
      </motion.g>
      </Scatter>
      <Scatter dx={130} dy={-230} delay={0.1}>
      <motion.g style={s5} id="_5_layer">
        <polygon id="_5" points="905.41 170.86 944.39 228.64 983.83 156.64 905.41 170.86" fill="#dfd4c0" />
      </motion.g>
      </Scatter>
      <Scatter dx={220} dy={-200} delay={0.15}>
      <motion.g style={s6} id="_6_layer">
        <polygon id="_6" points="1031.06 122.71 975.11 231.85 1123.7 285.97 1031.06 122.71" fill="#2e2f29" />
      </motion.g>
      </Scatter>
      <Scatter dx={320} dy={-100} delay={0.2}>
      <motion.g style={s7} id="_7_layer">
        <polygon id="_7" points="1120.03 321.74 1168.64 299.73 1155.8 331.83 1120.03 321.74" fill="#2e2f29" />
      </motion.g>
      </Scatter>
      <Scatter dx={-160} dy={-260} delay={0.1}>
      <motion.g style={s3} id="_3_layer">
        <polygon id="_3" points="608.24 156.64 590.81 207.09 697.2 167.65 695.37 138.3 608.24 156.64" fill="#2e2f29" />
      </motion.g>
      </Scatter>
      <Scatter dx={-260} dy={-190} delay={0.15}>
      <motion.g style={s2} id="_2_layer">
        <polygon id="_2" points="566.04 122.71 572.46 239.19 474.32 285.97 566.04 122.71" fill="#2e2f29" />
      </motion.g>
      </Scatter>
      <Scatter dx={-300} dy={-150} delay={0.2}>
      <motion.g style={s1} id="_1_layer">
        <polygon id="_1" points="494.5 156.64 490.83 192.64 466.99 221.76 455.06 177.74 494.5 156.64" fill="#2e2f29" />
      </motion.g>
      </Scatter>
      <Scatter dx={-320} dy={100} delay={0.25}>
      <motion.g style={s8} id="_8_layer">
        <polygon id="_8" points="469.74 557 489.46 577.87 501.15 625.1 461.25 586.12 469.74 557" fill="#2e2f29" />
      </motion.g>
      </Scatter>
      <Scatter dx={-220} dy={220} delay={0.3}>
      <motion.g style={s9} id="_9_layer">
        <polygon id="_9" points="561.23 627.85 520.3 627.85 543.34 691.48 604.57 738.95 561.23 627.85" fill="#2e2f29" />
      </motion.g>
      </Scatter>
      <Scatter dx={170} dy={230} delay={0.3}>
      <motion.g style={s11} id="_11_layer">
        <polygon id="_11" points="1055.14 603.55 1095.73 574.66 1055.14 692.97 930.4 787.33 973.28 693.2 1060.41 659.27 1055.14 603.55" fill="#e0d5c3" />
      </motion.g>
      </Scatter>
      <Scatter dx={160} dy={190} delay={0.25}>
      <motion.g style={s10} id="_10_layer">
        <polygon id="_10" points="1031.06 618.91 1031.06 643.68 974.2 662.02 1031.06 618.91" fill="#e0d5c3" />
      </motion.g>
      </Scatter>
      <Scatter dx={260} dy={160} delay={0.35}>
      <motion.g style={s12} id="_12_layer">
        <polygon id="_12" points="1104.44 633.59 1108.11 656.52 1132.87 630.83 1104.44 633.59" fill="#e0d5c3" />
      </motion.g>
      </Scatter>

      </svg>

      <motion.div
        className="absolute inset-0"
        style={{
          x: inti.x,
          y: inti.y,
          transformStyle: "preserve-3d",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.8 }}
      >
        <svg
          viewBox="400 0 835 891.78"
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <g id="kacamata_inti">
        <polygon points="799.47 328.16 799.47 289.64 927.73 289.64 1070.5 349.25 1071.19 369.55 1124.5 345.82 1124.01 456.11 1071.73 479.04 1071.73 512.97 930.4 573.28 870.55 573.28 814.15 490.73 798.44 490.73 798.44 460.01 828.02 460.41 886.38 542.32 922.83 542.32 1039.55 493.94 1039.55 368.75 922.61 320.59 882.71 320.59 877.2 328.16 799.47 328.16" fill="#2e2f29" />
        <polygon points="799.47 197.92 799.47 289.64 669.69 289.64 526.61 347.42 526.61 369.43 485.33 351.09 485.33 311.65 624.75 227.27 799.47 197.92" fill="#2e2f29" />
        <polygon points="799.47 328.16 798.44 460.01 768.86 460.01 712.11 542.44 676.11 542.44 559.17 492.8 559.17 369.43 676.8 320.82 715.32 320.82 722.31 328.73 799.47 328.16" fill="#2e2f29" />
        <polygon points="798.44 490.73 799.47 553.1 668.08 611.57 572.24 586.58 561.23 627.85 497.25 559.29 485.56 527.42 485.56 461.58 527.52 478.58 527.52 513.66 668.54 573.51 728.39 573.97 785.25 490.5 798.44 490.73" fill="#2e2f29" />
          </g>
        </svg>
      </motion.div>

      {/* mouth */}
      <motion.div
        className="absolute inset-0"
        style={{ x: moncong.x, y: moncong.y, z: MONCONG_Z, transformStyle: "preserve-3d" }}
      >
      <svg
        viewBox="400 0 835 891.78"
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
      <Scatter dx={0} dy={220} delay={0.4}>
      <motion.g id="mulut">
        <polygon points="681.61 663.85 799.47 595.98 799.47 631.75 720.13 676.69 772.41 817.03 799.47 817.03 799.47 848.21 751.32 848.21 681.61 663.85" fill="#c1603d" />
        <polygon points="917.33 663.85 799.47 595.98 799.47 631.75 878.81 676.69 826.53 817.03 799.47 817.03 799.47 848.21 847.62 848.21 917.33 663.85" fill="#c1603d" />
      </motion.g>
      </Scatter>
      </svg>
      </motion.div>

      {/* tongue */}
      <motion.div
        className="absolute inset-0"
        style={{ x: moncong.x, y: moncong.y, z: MONCONG_Z, transformStyle: "preserve-3d" }}
      >
      <svg
        viewBox="400 0 835 891.78"
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
      <Scatter dx={0} dy={280} delay={0.5}>
      <motion.g id="lidah_layer">
        <polygon id="lidah" points="720.44 677.51 878.81 676.69 799.62 802.35 720.44 677.51" fill="#c1603d" />
      </motion.g>
      </Scatter>
      </svg>
      </motion.div>
      </motion.div>
    </div>
  );
}
