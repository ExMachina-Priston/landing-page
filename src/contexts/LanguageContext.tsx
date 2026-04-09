import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "en" | "pt" | "es";

type Translations = Record<string, Record<Language, string>>;

const translations: Translations = {
  // Navbar
  "nav.home": { en: "Home", pt: "Início", es: "Inicio" },
  "nav.features": { en: "Features", pt: "Features", es: "Características" },
  "nav.story": { en: "Story", pt: "História", es: "Historia" },
  "nav.play": { en: "Play", pt: "Jogar", es: "Jugar" },

  // Hero
  "hero.subtitle": { en: "The Return of the Legend", pt: "O Retorno da Lenda", es: "El Regreso de la Leyenda" },
  "hero.description": {
    en: "Morions and Tempskrons must unite once more — Igolanos stirs in the Netherworld. Forge your destiny before darkness reclaims Efria.",
    pt: "Morions e Tempskrons devem se unir novamente — Igolanos desperta no Netherworld. Forje seu destino antes que as trevas reclamem Efria.",
    es: "Morions y Tempskrons deben unirse una vez más — Igolanos despierta en el Netherworld. Forja tu destino antes de que la oscuridad reclame Efria.",
  },
  "hero.cta": { en: "Start Adventure", pt: "Começar Aventura", es: "Comenzar Aventura" },
  "hero.learn": { en: "Learn More", pt: "Saiba Mais", es: "Saber Más" },

  // Features
  "features.title": { en: "Forge Your Destiny", pt: "Forje Seu Destino", es: "Forja Tu Destino" },
  "features.subtitle": {
    en: "A vast and dangerous world awaits the bravest adventurers",
    pt: "Um mundo vasto e perigoso aguarda os mais corajosos aventureiros",
    es: "Un mundo vasto y peligroso espera a los aventureros más valientes",
  },
  "features.pvp.title": { en: "New Assets", pt: "Novos Assets", es: "Nuevos Assets" },
  "features.pvp.desc": {
    en: "All character assets rebuilt from scratch — new classes, gender options, and 382+ exclusive animations crafted to deliver a fresh and unique experience.",
    pt: "Todos os assets de personagens refeitos do zero — classes inéditas, opção de gênero e mais de 382 animações exclusivas criadas para uma experiência única e renovada.",
    es: "Todos los assets de personajes reconstruidos desde cero — clases nuevas, opción de género y más de 382 animaciones exclusivas creadas para una experiencia única y renovada.",
  },
  "features.dungeon.title": { en: "New Graphics Engine", pt: "Novo Motor Gráfico", es: "Nuevo Motor Gráfico" },
  "features.dungeon.desc": {
    en: "The entire rendering pipeline rebuilt from the ground up, delivering exclusive graphical features, superior performance, and the best visual quality yet.",
    pt: "Toda a renderização foi reconstruída do zero, trazendo recursos gráficos exclusivos, desempenho superior e a melhor qualidade visual até agora.",
    es: "Todo el sistema de renderizado reconstruido desde cero, con recursos gráficos exclusivos, rendimiento superior y la mejor calidad visual hasta ahora.",
  },
  "features.classes.title": { en: "Everything from Scratch", pt: "Literalmente Tudo do Zero", es: "Todo Desde Cero" },
  "features.classes.desc": {
    en: "Every mechanic, feature, and system is being rebuilt from scratch — bringing new ways to play Priston Tale on a more reliable and customizable foundation.",
    pt: "Todas as mecânicas, features e sistemas estão sendo refeitos do zero — trazendo novas formas de jogar Priston Tale em uma base mais confiável e customizável.",
    es: "Todas las mecánicas, features y sistemas se reconstruyen desde cero — trayendo nuevas formas de jugar Priston Tale en una base más confiable y personalizable.",
  },

  // Lore
  "lore.title": { en: "The Story", pt: "A História", es: "La Historia" },
  "lore.quote": {
    en: '"The Great Kingdom fell. Igolanos unleashed his armies from the Netherworld — the Draxos and Sopphetios razed Pillai, Ricarten and every stronghold across Efria."',
    pt: '"O Grande Reino caiu. Igolanos desencadeou seus exércitos do Netherworld — os Draxos e Sopphetios arrasaram Pillai, Ricarten e cada fortaleza por toda Efria."',
    es: '"El Gran Reino cayó. Igolanos desató sus ejércitos desde el Netherworld — los Draxos y Sopphetios arrasaron Pillai, Ricarten y cada fortaleza en toda Efria."',
  },
  "lore.p1": {
    en: "After centuries of peace, the fallen god Igolanos — once known as Midranda — struck without warning. His corrupted forces destroyed every bastion of civilization, and the gods who protected Efria were weakened.",
    pt: "Após séculos de paz, o deus caído Igolanos — outrora conhecido como Midranda — atacou sem aviso. Suas forças corrompidas destruíram cada bastião de civilização, e os deuses que protegiam Efria foram enfraquecidos.",
    es: "Tras siglos de paz, el dios caído Igolanos — antes conocido como Midranda — atacó sin aviso. Sus fuerzas corrompidas destruyeron cada bastión de civilización, y los dioses que protegían Efria fueron debilitados.",
  },
  "lore.p2": {
    en: "Now, from the ashes, Morions and Tempskrons rise as one. Through Fusion — the union of magic and technology — they forge a new era. This is your story to write.",
    pt: "Agora, das cinzas, Morions e Tempskrons se erguem como um só. Através da Fusão — a união de magia e tecnologia — eles forjam uma nova era. Esta é a sua história para escrever.",
    es: "Ahora, de las cenizas, Morions y Tempskrons se alzan como uno solo. A través de la Fusión — la unión de magia y tecnología — forjan una nueva era. Esta es tu historia por escribir.",
  },
  "lore.classes": { en: "Classes", pt: "Classes", es: "Clases" },
  "lore.dungeons": { en: "Dungeons", pt: "Masmorras", es: "Mazmorras" },
  "lore.adventures": { en: "Adventures", pt: "Aventuras", es: "Aventuras" },

  // Roadmap
  "roadmap.title": { en: "Roadmap", pt: "Roadmap", es: "Roadmap" },
  "roadmap.subtitle": {
    en: "The path we walk to forge the destiny of Priston",
    pt: "O caminho que trilhamos para forjar o destino de Priston",
    es: "El camino que recorremos para forjar el destino de Priston",
  },
  "roadmap.now": { en: "Now", pt: "Agora", es: "Ahora" },
  "roadmap.launcher": { en: "[Game] Launcher + Auto Updater", pt: "[Game] Launcher + Auto Updater", es: "[Game] Launcher + Auto Updater" },
  "roadmap.uiInterface": { en: "[UI] User Interface I", pt: "[UI] User Interface I", es: "[UI] User Interface I" },
  "roadmap.charAssets": { en: "[Game] Character Assets", pt: "[Game] Character Assets", es: "[Game] Character Assets" },
  "roadmap.bugs": { en: "[Bugs] Corrections", pt: "[Bugs] Correções", es: "[Bugs] Correcciones" },
  "roadmap.social": { en: "[Social] Social Media Planning", pt: "[Social] Planejamento e divulgação redes sociais", es: "[Social] Planificación redes sociales" },
  "roadmap.inventoryReview": { en: "[Server] Inventory Review", pt: "[Server] Inventory Review", es: "[Server] Inventory Review" },
  "roadmap.backoffice": { en: "[Web] Backoffice", pt: "[Web] Backoffice", es: "[Web] Backoffice" },
  "roadmap.landingPage": { en: "[Web] Landing Page", pt: "[Web] Landing Page", es: "[Web] Landing Page" },
  "roadmap.observability": { en: "[Server] Observability", pt: "[Server] Observability", es: "[Server] Observability" },
  "roadmap.renderingEngine": { en: "[Game] Rendering Engine", pt: "[Game] Rendering Engine", es: "[Game] Rendering Engine" },
  "roadmap.documentation": { en: "[Planning] Documentation", pt: "[Planning] Documentação", es: "[Planning] Documentación" },

  // CTA
  "cta.title": { en: "Your Journey Starts Here", pt: "Sua Jornada Começa Aqui", es: "Tu Viaje Comienza Aquí" },
  "cta.desc": {
    en: "Create your account for free and embark on an epic adventure in the world of Priston Tale.",
    pt: "Crie sua conta gratuitamente e embarque em uma aventura épica no mundo de Priston Tale.",
    es: "Crea tu cuenta gratis y embárcate en una aventura épica en el mundo de Priston Tale.",
  },
  "cta.button": { en: "⚔ Play Now", pt: "⚔ Jogar Agora", es: "⚔ Jugar Ahora" },

  // Footer
  "footer.rights": {
    en: "© 2026 ExMachina. All rights reserved.",
    pt: "© 2026 ExMachina. Todos os direitos reservados.",
    es: "© 2026 ExMachina. Todos los derechos reservados.",
  },
  "footer.followUs": {
    en: "Follow us on social media",
    pt: "Siga-nos nas redes sociais",
    es: "Síguenos en redes sociales",
  },

  // Discord
  "discord.title": {
    en: "Join Our Discord",
    pt: "Entre no Nosso Discord",
    es: "Únete a Nuestro Discord",
  },
  "discord.description": {
    en: "Follow the project's progress, chat with the community, get exclusive updates and be the first to know about new features.",
    pt: "Acompanhe o andamento do projeto, converse com a comunidade, receba atualizações exclusivas e seja o primeiro a saber das novidades.",
    es: "Sigue el progreso del proyecto, chatea con la comunidad, recibe actualizaciones exclusivas y sé el primero en enterarte de las novedades.",
  },
  "discord.button": {
    en: "Join Discord",
    pt: "Entrar no Discord",
    es: "Unirse a Discord",
  },

  // Theme
  "theme.light": { en: "Light", pt: "Claro", es: "Claro" },
  "theme.dark": { en: "Dark", pt: "Escuro", es: "Oscuro" },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[key]?.[language] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
