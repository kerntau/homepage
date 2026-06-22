import React, { useState, useEffect, useRef } from 'react';
import { 
  Code2, 
  Cpu, 
  Terminal, 
  ShieldAlert, 
  Database, 
  Globe, 
  GitBranch, 
  FileCode, 
  Layers, 
  Flame, 
  Activity,
  Server,
  Lock
} from 'lucide-react';

interface TechItem {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  category: 'frontend' | 'backend' | 'security' | 'tools';
  desc: string;
  proficiency: number; // 0 - 100
}

const techStack: TechItem[] = [
  { 
    id: 'nextjs', 
    name: 'Next.js', 
    icon: <Layers className="w-5 h-5" />, 
    color: '#ffffff', 
    category: 'frontend',
    desc: '全栈开发核心利器。精通 React Server Components (RSC)、服务端渲染 (SSR) 与前端性能优化，擅长构建高并发、极速加载的现代化全栈站点。',
    proficiency: 95
  },
  { 
    id: 'react', 
    name: 'React 19', 
    icon: <Code2 className="w-5 h-5" />, 
    color: '#61dafb', 
    category: 'frontend',
    desc: '系统架构的组件化起点。深刻理解并发模式 (Concurrent Mode)、Hooks 机制，擅长设计高度解耦、具备丝滑交互物理阻尼感的 UI 组件。',
    proficiency: 92
  },
  { 
    id: 'typescript', 
    name: 'TypeScript', 
    icon: <FileCode className="w-5 h-5" />, 
    color: '#3178c6', 
    category: 'frontend',
    desc: '类型安全之盾。100% 杜绝 any 类型，擅长复杂的泛型体操、高级条件类型推断，用类型规范系统底层的边界安全。',
    proficiency: 90
  },
  { 
    id: 'tailwind', 
    name: 'Tailwind CSS', 
    icon: <Globe className="w-5 h-5" />, 
    color: '#38bdf8', 
    category: 'frontend',
    desc: '极致的排版与视觉控制。坚信好的审美是技术力的分水岭。采用纯净的原子化样式，完美复刻高物理触感的微渐变与动效。',
    proficiency: 96
  },
  { 
    id: 'nodejs', 
    name: 'Node.js', 
    icon: <Server className="w-5 h-5" />, 
    color: '#339933', 
    category: 'backend',
    desc: '高性能服务端基石。基于 Express 等主流框架开发可靠的 API 路由和安全网关代理，处理流式数据与异步任务并发。',
    proficiency: 88
  },
  { 
    id: 'rust', 
    name: 'Rust / Go', 
    icon: <Cpu className="w-5 h-5" />, 
    color: '#ea5a1a', 
    category: 'backend',
    desc: '系统级高性能语言探索。编写内存安全、无损并发的协议解析器和定制开发自动化网安探针，注重指令级效率。',
    proficiency: 75
  },
  { 
    id: 'python', 
    name: 'Python', 
    icon: <Terminal className="w-5 h-5" />, 
    color: '#3776ab', 
    category: 'security',
    desc: '网安实战武器库。快速搭建漏洞扫描 PoC、执行复杂的流量阻截监控，结合 AI 完成智能化日志特征分析。',
    proficiency: 85
  },
  { 
    id: 'sec', 
    name: 'InfoSec', 
    icon: <Lock className="w-5 h-5" />, 
    color: '#ef4444', 
    category: 'security',
    desc: '网络与信息安全攻防。熟悉 OWASP Top 10，擅长应用权限深度审计、混淆流量加密分析与越权逻辑漏洞防御。',
    proficiency: 82
  },
  { 
    id: 'docker', 
    name: 'Docker & Nginx', 
    icon: <Activity className="w-5 h-5" />, 
    color: '#2496ed', 
    category: 'tools',
    desc: '微服务编排与边缘防御。编写 Dockerfile 实现沙箱环境隔离隔离，配置 Nginx 实现反向代理、SSL 证书硬解及负载均衡。',
    proficiency: 80
  },
  { 
    id: 'git', 
    name: 'Git & Linux', 
    icon: <GitBranch className="w-5 h-5" />, 
    color: '#f05032', 
    category: 'tools',
    desc: '极度规范的版本管理与底层基底。推崇优雅明晰的 Commit 习惯与规范的项目分支模型，精通 Linux 脚本自动化部署。',
    proficiency: 88
  },
];

export default function TechSphere() {
  const [selectedTech, setSelectedTech] = useState<TechItem>(techStack[0]);
  const [rotation, setRotation] = useState({ x: 0.3, y: 0.5 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto slow horizontal rotating drift to feel alive
  useEffect(() => {
    if (isDragging) return;
    const timer = setInterval(() => {
      setRotation(prev => ({
        ...prev,
        y: prev.y + 0.003
      }));
    }, 30);
    return () => clearInterval(timer);
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;
    dragStart.current = { x: e.clientX, y: e.clientY };

    setRotation(prev => ({
      x: Math.max(-Math.PI / 3, Math.min(Math.PI / 3, prev.x - dy * 0.007)),
      y: prev.y + dx * 0.007
    }));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="w-full flex flex-col md:flex-row gap-6 mt-4 z-10" id="tech-sphere-component">
      {/* 3D Orbit Window */}
      <div 
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className="w-full md:w-1/2 h-[320px] bg-white/[0.01] border border-white/5 rounded-sm relative overflow-hidden flex items-center justify-center select-none cursor-grab active:cursor-grabbing group"
      >
        {/* Subtle grid base inside sphere */}
        <div className="absolute inset-0 bg-[radial-gradient(#111111_0.5px,transparent_0.5px)] [background-size:16px_16px] opacity-40"></div>
        
        {/* Helper guide */}
        <div className="absolute top-3 left-3 font-mono text-[8px] text-[#444444] tracking-widest uppercase">
          PERIM_ORBIT_AXIS // DRAG TO ROTATE
        </div>

        {/* 3D World container */}
        <div 
          className="relative w-full h-full flex items-center justify-center"
          style={{ perspective: '600px' }}
        >
          {techStack.map((tech, index) => {
            // Distribute nodes evenly on spherical latitudes/longitudes
            const total = techStack.length;
            const phi = Math.acos(-1 + (2 * index) / total); // latitude
            const theta = rotation.y + index * ((2 * Math.PI) / total); // longitude dynamically rotated around Y

            // Cartesian positions inside sphere (radius 100px)
            const r = 110;
            let x = r * Math.sin(phi) * Math.sin(theta);
            let y = r * Math.cos(phi);
            let z = r * Math.sin(phi) * Math.cos(theta);

            // Rotate around visual X axis to match the camera pitch
            const cosX = Math.cos(rotation.x);
            const sinX = Math.sin(rotation.x);
            const rotY = y * cosX - z * sinX;
            const rotZ = y * sinX + z * cosX;

            // Camera Projection coordinates
            const distance = 250;
            const tempZ = rotZ + 180; // offset back
            const scale = distance / (distance + tempZ);
            
            // Scaled positioning on flat CSS container
            const finalX = x * scale;
            const finalY = rotY * scale;

            // Opacity represents depth (far away nodes are dimmer)
            const depthRatio = (tempZ - 70) / 220; // 0 (near) to 1 (far)
            const opacity = Math.max(0.12, 1.0 - depthRatio * 0.75);
            const zIndex = Math.round(100 - tempZ);

            const isSelected = selectedTech.id === tech.id;

            return (
              <button
                key={tech.id}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedTech(tech);
                }}
                className={`absolute w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 no-select ${
                  isSelected 
                    ? 'bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.4)] scale-110' 
                    : 'bg-[#050505] text-[#888888] border-white/10 hover:border-white/40 hover:text-white'
                }`}
                style={{
                  transform: `translate3d(${finalX}px, ${finalY}px, 0px) scale(${scale * (isSelected ? 1.15 : 1)})`,
                  opacity: opacity,
                  zIndex: zIndex,
                  cursor: 'pointer',
                  transition: isDragging ? 'none' : 'transform 0.1s ease-out, opacity 0.1s ease-out',
                }}
                title={tech.name}
              >
                {/* Visual node light trace */}
                {isSelected && (
                  <span className="absolute -inset-1 rounded-full border border-white/20 animate-ping opacity-60"></span>
                )}
                {tech.icon}
              </button>
            );
          })}

          {/* Central Core dynamic visual */}
          <div className="absolute w-16 h-16 rounded-full border border-white/5 bg-white/[0.01] flex flex-col items-center justify-center pointer-events-none">
            <span className="text-[7px] font-mono text-[#444444] tracking-widest">SYS_CORE</span>
            <Activity className="w-4 h-4 text-white/20 animate-pulse mt-0.5" />
          </div>
        </div>
      </div>

      {/* Tech Specifications card info */}
      <div className="w-full md:w-1/2 flex flex-col justify-between p-4 bg-white/[0.02] border border-white/5 rounded-sm font-mono text-xs select-text">
        <div className="space-y-4">
          <div className="flex justify-between items-center border-b border-white/10 pb-2">
            <div className="flex items-center gap-2">
              <span 
                className="w-2 h-2 rounded-full animate-pulse" 
                style={{ backgroundColor: selectedTech.color }}
              />
              <span className="font-bold text-sm tracking-widest text-white uppercase">{selectedTech.name}</span>
            </div>
            <span className="text-[#666666] tracking-wider text-[10px]">CATEGORY // {selectedTech.category.toUpperCase()}</span>
          </div>

          <p className="text-[#bbbbbb] leading-relaxed font-sans text-[12.5px]">
            {selectedTech.desc}
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-white/5 space-y-2">
          <div className="flex justify-between items-center text-[10px]">
            <span className="text-[#666666]">COMMAND STRENGTH</span>
            <span className="text-white font-bold">{selectedTech.proficiency}%</span>
          </div>
          <div className="w-full h-[2px] bg-white/5 overflow-hidden">
            <div 
              className="h-full bg-white transition-all duration-500 ease-out"
              style={{ width: `${selectedTech.proficiency}%` }}
            />
          </div>
          <div className="flex justify-between text-[8px] text-[#444444] pt-1">
            <span>READY_MODULE</span>
            <span>VER_V5.0_STABLE</span>
          </div>
        </div>
      </div>
    </div>
  );
}
