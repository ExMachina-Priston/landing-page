import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const DiscordSection = () => {
  const { t } = useLanguage();

  return (
    <section id="discord" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/30 via-background to-secondary/30" />
      
      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#5865F2]/20 mb-6">
            <MessageCircle className="w-8 h-8 text-[#5865F2]" />
          </div>
          
          <h2 className="font-display text-2xl md:text-4xl font-bold text-gold text-glow mb-4">
            {t("discord.title")}
          </h2>
          
          <div className="ornament-divider w-32 mx-auto mb-6" />
          
          <p className="font-body text-muted-foreground max-w-xl mx-auto text-lg mb-8">
            {t("discord.description")}
          </p>
          
          <a
            href="https://discord.gg/exmachina"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#5865F2] hover:bg-[#4752C4] text-white font-display font-semibold rounded-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#5865F2]/20"
          >
            <MessageCircle className="w-5 h-5" />
            {t("discord.button")}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default DiscordSection;
