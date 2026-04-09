import { motion } from "framer-motion";
import { useMemo } from "react";
import heroBg from "@/assets/hero-bg.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Particle = ({ delay, x, y, size, duration }: {delay: number;x: number;y: number;size: number;duration: number;}) =>
<motion.div
  className="absolute rounded-full"
  style={{
    left: `${x}%`,
    top: `${y}%`,
    width: size,
    height: size,
    background: `radial-gradient(circle, hsl(var(--gold) / 0.6), transparent)`
  }}
  animate={{
    y: [0, -60, -120],
    opacity: [0, 0.8, 0],
    scale: [0.5, 1, 0.3]
  }}
  transition={{
    duration,
    delay,
    repeat: Infinity,
    ease: "easeOut"
  }} />;



const HeroSection = () => {
  const { t } = useLanguage();

  const particles = useMemo(
    () =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: 30 + Math.random() * 60,
      size: 2 + Math.random() * 4,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4
    })),
    []
  );

  return (
    <section className="relative min-h-screen flex items-start justify-center overflow-hidden pt-24 md:pt-32">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Priston Tale" className="w-full h-full" style={{ objectFit: 'none', objectPosition: 'center' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background" />
      </div>

      {/* Particles */}
      <div className="absolute inset-0 z-[5] pointer-events-none">
        {particles.map((p) =>
        <Particle key={p.id} x={p.x} y={p.y} size={p.size} delay={p.delay} duration={p.duration} />
        )}
      </div>

      {/* Top section - logo and title */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}>
          <p className="font-display text-gold-light tracking-[0.4em] uppercase text-sm font-bold mb-4 animate-flicker drop-shadow-[0_0_10px_hsl(var(--gold)/0.5)]">
            {t("hero.subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col items-center mb-6">
          
          <svg width="80" height="80" viewBox="0 0 100 100" className="mb-4" style={{ filter: 'drop-shadow(0 0 35px hsl(30 30% 8% / 0.9)) drop-shadow(0 0 25px hsl(38 60% 50% / 0.8)) drop-shadow(0 0 50px hsl(38 60% 50% / 0.4))' }}>
            <circle cx="50" cy="50" r="45" fill="none" stroke="hsl(38 70% 65%)" strokeWidth="3" opacity="0.9" />
            <circle cx="50" cy="50" r="38" fill="none" stroke="hsl(38 70% 65%)" strokeWidth="2" opacity="0.6" />
            <path d="M50 18 L72 50 L50 82 L28 50 Z" fill="none" stroke="hsl(38 70% 65%)" strokeWidth="3" />
            <path d="M50 26 L66 50 L50 74 L34 50 Z" fill="hsl(38 60% 50% / 0.25)" stroke="hsl(38 70% 65%)" strokeWidth="2" />
            <path d="M50 34 L60 50 L50 66 L40 50 Z" fill="hsl(38 60% 50% / 0.5)" stroke="hsl(38 70% 65%)" strokeWidth="1.5" />
          </svg>
        </motion.div>

        
      </div>

      {/* Bottom section - description and buttons */}
      <div className="absolute bottom-24 left-0 right-0 z-10 text-center px-4">
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}
          className="font-body text-lg text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed font-thin md:text-lg" style={{ fontWeight: 300 }}>
          
          {t("hero.description")}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.3 }} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#discord" className="inline-block px-8 py-3 font-display text-sm uppercase tracking-widest bg-primary text-primary-foreground medieval-border hover:bg-gold-light transition-colors duration-300 font-medium border-2">
            {t("hero.cta")}
          </a>
          <a href="#sobre" className="inline-block px-8 py-3 font-display text-sm uppercase tracking-widest border-gold-dark text-gold hover:bg-secondary transition-colors duration-300 font-medium border-2">
            {t("hero.learn")}
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>);

};

export default HeroSection;