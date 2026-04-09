import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const Particle = ({ delay, x, y, size, duration }: { delay: number; x: string; y: string; size: number; duration: number }) => (
  <motion.div
    className="absolute rounded-full"
    style={{
      left: x,
      top: y,
      width: size,
      height: size,
      background: `radial-gradient(circle, hsl(var(--gold) / 0.8), hsl(var(--gold) / 0) 70%)`,
    }}
    animate={{
      y: [0, -30, 0],
      opacity: [0, 0.8, 0],
      scale: [0.5, 1.2, 0.5],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const LoreSection = () => {
  const { t } = useLanguage();

  const particles = [
    { delay: 0, x: "10%", y: "20%", size: 6, duration: 3.5 },
    { delay: 0.8, x: "85%", y: "15%", size: 4, duration: 4 },
    { delay: 1.5, x: "20%", y: "70%", size: 8, duration: 3 },
    { delay: 0.3, x: "75%", y: "60%", size: 5, duration: 4.5 },
    { delay: 2, x: "50%", y: "10%", size: 7, duration: 3.2 },
    { delay: 1, x: "5%", y: "50%", size: 4, duration: 3.8 },
    { delay: 0.5, x: "90%", y: "40%", size: 6, duration: 4.2 },
    { delay: 1.8, x: "30%", y: "85%", size: 5, duration: 3.6 },
    { delay: 2.5, x: "60%", y: "75%", size: 3, duration: 4.8 },
    { delay: 0.7, x: "40%", y: "30%", size: 4, duration: 3.4 },
    { delay: 1.2, x: "15%", y: "90%", size: 6, duration: 4.1 },
    { delay: 2.2, x: "70%", y: "5%", size: 5, duration: 3.7 },
  ];

  return (
    <section id="sobre" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gold text-glow mb-4">
            {t("lore.title")}
          </h2>
          <div className="ornament-divider w-48 mx-auto" />
        </motion.div>

        <div className="relative flex flex-col lg:flex-row items-center lg:items-start">
          {/* Character silhouette with black fill + particles */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative w-[320px] h-[450px] md:w-[450px] md:h-[620px] flex-shrink-0 lg:-mr-24 z-10"
          >
            {/* Particles behind character */}
            <div className="absolute inset-0 -z-10">
              {particles.map((p, i) => (
                <Particle key={i} {...p} />
              ))}
            </div>

            {/* Ambient glow rings */}
            <motion.div
              className="absolute inset-0 -z-10"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full opacity-20"
                style={{
                  border: "1px solid hsl(var(--gold) / 0.3)",
                  boxShadow: "0 0 40px hsl(var(--gold) / 0.1)",
                }}
              />
            </motion.div>
            <motion.div
              className="absolute inset-0 -z-10"
              animate={{ rotate: -360 }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            >
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] h-[95%] rounded-full opacity-10"
                style={{
                  border: "1px dashed hsl(var(--gold) / 0.4)",
                }}
              />
            </motion.div>

            {/* Large glow behind */}
            <div
              className="absolute inset-0 -z-20 blur-3xl opacity-25"
              style={{
                background: `radial-gradient(ellipse at center, hsl(var(--gold) / 0.6), hsl(var(--accent) / 0.2) 50%, transparent 75%)`,
              }}
            />

            {/* Masked character - solid black fill */}
            <div className="character-mask-container w-full h-full animate-float bg-black" />
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex-1 lg:pt-12 relative z-20"
          >
            <div className="p-4 md:p-8">
              <p className="font-body text-foreground/90 text-lg md:text-xl leading-loose mb-6 italic text-glow">
                {t("lore.quote")}
              </p>
              
              <p className="font-body text-foreground/60 leading-loose mb-6">
                {t("lore.p1")}
              </p>
              <p className="font-body text-foreground/60 leading-loose">
                {t("lore.p2")}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LoreSection;
