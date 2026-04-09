import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage, type Language } from "@/contexts/LanguageContext";

const langLabels: Record<Language, string> = {
  en: "EN",
  pt: "PT",
  es: "ES",
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const links = [
    { label: t("nav.home"), href: "#" },
    { label: t("nav.features"), href: "#features" },
    { label: t("nav.story"), href: "#sobre" },
    { label: "DISCORD", href: "#discord" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-14">
        <a href="#" className="font-display text-gold font-bold tracking-wider text-lg flex items-center gap-2">
          <svg width="24" height="24" viewBox="0 0 100 100" className="drop-shadow-[0_0_8px_hsl(var(--gold)/0.5)]">
            <circle cx="50" cy="50" r="45" fill="none" stroke="hsl(var(--gold))" strokeWidth="3" opacity="0.7" />
            <path d="M50 18 L72 50 L50 82 L28 50 Z" fill="none" stroke="hsl(var(--gold-light))" strokeWidth="3" />
            <path d="M50 30 L64 50 L50 70 L36 50 Z" fill="hsl(var(--gold)/0.25)" stroke="hsl(var(--gold))" strokeWidth="2" />
          </svg>
          Ex Machina
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-display text-xs uppercase tracking-widest text-foreground/70 hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}

          {/* Language selector */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 p-2 rounded-sm hover:bg-secondary transition-colors text-foreground/70 hover:text-gold"
            >
              <Globe size={16} />
              <span className="font-display text-xs uppercase tracking-wider">{langLabels[language]}</span>
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-1 bg-card border border-border rounded-sm shadow-lg overflow-hidden">
                {(Object.keys(langLabels) as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => { setLanguage(lang); setLangOpen(false); }}
                    className={`block w-full px-4 py-2 text-left font-display text-xs uppercase tracking-wider transition-colors ${
                      language === lang
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground/70 hover:bg-secondary hover:text-gold"
                    }`}
                  >
                    {langLabels[lang]}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-2">
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="p-2 text-foreground/70 hover:text-gold"
            >
              <Globe size={18} />
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-1 bg-card border border-border rounded-sm shadow-lg">
                {(Object.keys(langLabels) as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => { setLanguage(lang); setLangOpen(false); }}
                    className={`block w-full px-4 py-2 text-left font-display text-xs uppercase tracking-wider ${
                      language === lang
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground/70 hover:bg-secondary"
                    }`}
                  >
                    {langLabels[lang]}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button className="text-foreground" onClick={() => setOpen(!open)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 font-display text-xs uppercase tracking-widest text-foreground/70 hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
