import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const VideoCard = ({ titleKey, descKey, video, index }: { titleKey: string; descKey: string; video: string; index: number }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="medieval-border bg-card overflow-hidden group hover:border-gold transition-colors duration-500"
    >
      <div className="h-48 overflow-hidden relative">
        <video ref={videoRef} src={video} muted loop playsInline preload="metadata" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-gold-light mb-3">{t(titleKey)}</h3>
        <p className="font-body text-foreground/70 leading-relaxed text-sm">{t(descKey)}</p>
      </div>
    </motion.div>
  );
};

const features = [
  { titleKey: "features.pvp.title", descKey: "features.pvp.desc", video: "/videos/new-assets.mp4" },
  { titleKey: "features.dungeon.title", descKey: "features.dungeon.desc", video: "/videos/new-engine.mp4" },
  { titleKey: "features.classes.title", descKey: "features.classes.desc", video: "/videos/from-scratch.mp4" },
];

const FeaturesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="features" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gold text-glow mb-4">{t("features.title")}</h2>
          <div className="ornament-divider w-48 mx-auto mb-6" />
          <p className="font-body text-muted-foreground max-w-xl mx-auto text-lg">{t("features.subtitle")}</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <VideoCard key={f.titleKey} titleKey={f.titleKey} descKey={f.descKey} video={f.video} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
