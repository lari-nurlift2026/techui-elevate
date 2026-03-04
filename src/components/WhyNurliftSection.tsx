import { motion } from "framer-motion";
import { Globe, TrendingUp, ShieldCheck, BarChart3 } from "lucide-react";

const reasons = [
  {
    icon: Globe,
    title: "Presença Global",
    description: "Conexão com mercados da América do Norte, Europa e Ásia para trazer inovação validada ao Brasil.",
  },
  {
    icon: TrendingUp,
    title: "Crescimento Acelerado",
    description: "Frameworks de go-to-market que reduzem time-to-value e aceleram ROI desde os primeiros ciclos.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Governança",
    description: "Operação estruturada com LGPD, SLAs definidos e governança de dados desde o dia um.",
  },
  {
    icon: BarChart3,
    title: "Dados & Performance",
    description: "Decisões orientadas por dados reais, com dashboards e KPIs claros para evolução contínua.",
  },
];

const WhyNurliftSection = () => {
  return (
    <section id="por-que-o-brasil?" className="py-32 relative">
      <div className="glow-line w-full mb-32" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Diferencial</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-wider"
            style={{ color: "hsl(var(--text-heading))" }}
          >
            Por que a Nurlift
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reasons.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="glass-card-hover rounded-xl p-10 relative overflow-hidden"
            >
              <span className="step-number absolute -top-4 -right-2 text-[120px] leading-none select-none pointer-events-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative z-10 flex flex-col gap-4">
                <div className="p-3 rounded-lg bg-primary/10 w-fit">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-heading text-xl font-semibold uppercase tracking-wide"
                  style={{ color: "hsl(var(--text-heading))" }}
                >
                  {item.title}
                </h3>
                <p className="text-foreground leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyNurliftSection;
