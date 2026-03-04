import { motion } from "framer-motion";
import { Shield, Zap, Target, Award } from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Foco no Brasil",
    description: "Conhecimento profundo do mercado brasileiro, regulações, cultura de consumo e dinâmica competitiva local.",
  },
  {
    icon: Zap,
    title: "Execução Ágil",
    description: "Squads multidisciplinares que entregam com velocidade de startup e rigor de enterprise.",
  },
  {
    icon: Shield,
    title: "Confiança Global",
    description: "Parceiros de empresas líderes mundiais que confiam na nossa metodologia comprovada de resultados.",
  },
  {
    icon: Award,
    title: "Resultados Mensuráveis",
    description: "Cada ação é rastreada, otimizada e reportada. Transparência total em KPIs e ROI.",
  },
];

const WhyNurliftSection = () => {
  return (
    <section id="por-que-o-brasil?" className="py-32 relative">
      {/* Divider */}
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
              {/* Background step number */}
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
