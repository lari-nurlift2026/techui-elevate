import { motion } from "framer-motion";
import { Layers, Globe, Brain } from "lucide-react";

const reasons = [
  {
    icon: Layers,
    stat: "+20 OPERAÇÕES ORQUESTRADAS",
    title: "Arquitetura estratégica validada",
    description:
      "Metodologia proprietária de soft landing testada em +20 operações internacionais. Cada implementação é desenhada como infraestrutura — não como projeto.",
  },
  {
    icon: Globe,
    stat: "3 HUBS ESTRATÉGICOS ATIVOS",
    title: "Rede global, execução local",
    description:
      "Presença estratégica em São Paulo, Los Angeles e Bruxelas. Suporte multilingue (PT • EN • ES) em cada interação. Comunicação fluida, sem ruído.",
  },
  {
    icon: Brain,
    stat: "+15 ANOS DE INTELIGÊNCIA ACUMULADA",
    title: "Inteligência Data-Driven",
    description:
      "+15 anos orquestrando tecnologias em mercados internacionais com governança de dados, compliance e KPIs mensuráveis desde o dia um.",
  },
];

const WhyNurliftSection = () => {
  return (
    <section id="por-que" className="py-24 section-dark-gradient border-t border-white/5">
      <div className="glow-line w-full mb-24" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Por que a Nurlift
          </p>
          <h2
            className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-wider max-w-4xl mx-auto"
            style={{ color: "hsl(var(--text-heading))" }}
          >
            Metodologia validada, presença global e inteligência data-driven
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="card-glow rounded-xl p-10"
            >
              <div className="flex flex-col gap-5">
                <div className="p-3 rounded-lg bg-primary/10 w-fit">
                  <item.icon className="text-primary" size={24} />
                </div>
                <p className="text-primary text-xs font-bold tracking-widest uppercase">
                  {item.stat}
                </p>
                <h3
                  className="font-heading text-xl font-semibold uppercase tracking-wide"
                  style={{ color: "hsl(var(--text-heading))" }}
                >
                  {item.title}
                </h3>
                <p className="text-foreground leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyNurliftSection;
