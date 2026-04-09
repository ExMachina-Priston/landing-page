import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const months = ["JAN", "FEB", "MAR", "APR"];

interface Task {
  labelKey: string;
  startMonth: number; // 0=JAN, 1=FEB, 2=MAR, 3=APR
  endMonth: number;
  color: "game" | "ui" | "bug" | "social" | "server" | "web" | "planning";
}

const tasks: Task[] = [
  { labelKey: "roadmap.launcher", startMonth: 0, endMonth: 1, color: "game" },
  { labelKey: "roadmap.uiInterface", startMonth: 0, endMonth: 2, color: "ui" },
  { labelKey: "roadmap.charAssets", startMonth: 0, endMonth: 3, color: "game" },
  { labelKey: "roadmap.backoffice", startMonth: 2, endMonth: 3, color: "web" },
  { labelKey: "roadmap.observability", startMonth: 2, endMonth: 3, color: "server" },
  { labelKey: "roadmap.renderingEngine", startMonth: 2, endMonth: 3, color: "game" },
  { labelKey: "roadmap.documentation", startMonth: 0, endMonth: 3, color: "planning" },
];

const colorMap: Record<string, string> = {
  game: "bg-[hsl(var(--gold)/0.25)] border-gold-dark/40 text-gold-light",
  ui: "bg-[hsl(270,50%,60%/0.2)] border-[hsl(270,40%,50%/0.4)] text-[hsl(270,50%,75%)]",
  bug: "bg-[hsl(0,50%,50%/0.15)] border-[hsl(0,40%,45%/0.4)] text-[hsl(0,50%,70%)]",
  social: "bg-[hsl(200,60%,50%/0.15)] border-[hsl(200,40%,50%/0.3)] text-[hsl(200,50%,75%)]",
  server: "bg-[hsl(38,60%,50%/0.15)] border-gold-dark/30 text-gold-light",
  web: "bg-[hsl(160,50%,50%/0.15)] border-[hsl(160,40%,40%/0.3)] text-[hsl(160,50%,70%)]",
  planning: "bg-[hsl(var(--muted)/0.6)] border-muted-foreground/30 text-muted-foreground",
};

// MAR 26 position: month 5 (MAR) + 26/31 ≈ 5.84 out of 8
// Dynamic "Now" position: JAN 1 = 0%, APR 30 = 100%
const getNowPercent = () => {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 1); // Jan 1
  const end = new Date(now.getFullYear(), 3, 30); // Apr 30
  const total = end.getTime() - start.getTime();
  const elapsed = now.getTime() - start.getTime();
  return Math.min(100, Math.max(0, (elapsed / total) * 100));
};
  const nowPercent = getNowPercent();

const RoadmapSection = () => {
  const { t } = useLanguage();

  return (
    <section id="roadmap" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="relative max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gold text-glow mb-4">{t("roadmap.title")}</h2>
          <div className="ornament-divider w-48 mx-auto mb-6" />
          <p className="font-body text-muted-foreground max-w-xl mx-auto text-lg">{t("roadmap.subtitle")}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="medieval-border bg-card/60 backdrop-blur-sm p-4 md:p-8 relative overflow-hidden">
          {/* Now marker */}
          <div className="absolute top-0 bottom-0 w-0.5 z-20 bg-destructive/80" style={{ left: `${nowPercent}%` }}>
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 bg-destructive text-destructive-foreground font-display text-[10px] uppercase tracking-wider px-3 py-1 rounded-sm shadow-lg whitespace-nowrap">
              {t("roadmap.now")}
            </div>
          </div>

          {/* Month headers */}
          <div className="grid grid-cols-4 gap-1 mb-4">
            {months.map((m, i) => (
              <div key={m} className={`font-display text-[10px] md:text-sm text-center py-2 tracking-wider uppercase ${i === 2 ? "bg-secondary text-foreground" : "bg-secondary/40 text-foreground/60"}`}>
                {m}
              </div>
            ))}
          </div>

          {/* Tasks */}
          <div className="space-y-1.5">
            {tasks.map((task, idx) => {
              const colors = colorMap[task.color];
              const leftPercent = (task.startMonth / 4) * 100;
              const widthPercent = ((task.endMonth - task.startMonth + 1) / 4) * 100;

              return (
                <motion.div
                  key={task.labelKey}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="relative h-9 md:h-10"
                >
                  <div
                    className={`absolute top-0 bottom-0 border rounded-sm px-2 md:px-3 flex items-center font-body text-[10px] md:text-xs whitespace-nowrap overflow-hidden ${colors}`}
                    style={{
                      left: `${leftPercent}%`,
                      width: `${widthPercent}%`,
                    }}
                  >
                    <span className="truncate">{t(task.labelKey)}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RoadmapSection;
