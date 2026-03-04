import { motion } from "framer-motion";
import { Grid3X3, Zap } from "lucide-react";

const solutions = [
  {
    icon: Grid3X3,
    title: "Enterprise",
    subtitle: "Governança, integração e escala sustentável",
    description:
      "Conectamos stacks globais à operação brasileira com governança clara, compliance LGPD e processos preparados para escalar com segurança. Menos fricção. Mais controle. Resultados mensuráveis.",
    deliverables: [
      "Orquestração estratégica de stacks multi-vendor",
      "Governança de dados e compliance LGPD",
      "Operação escalável com SLAs definidos",
      "Integração fluida entre times locais e globais",
    ],
  },
  {
    icon: Zap,
    title: "PMEs e Scale-ups",
    subtitle: "Agilidade, performance e crescimento acelerado",
    description:
      "Implementamos soluções enxutas que transformam tecnologia em crescimento rápido. Com automação estratégica e métricas claras, aceleramos o time-to-value e geramos ROI desde os primeiros ciclos.",
    deliverables: [
      "Stack essencial de alto impacto",
      "Automação de marketing e vendas orientada a resultados",
      "Performance com indicadores objetivos",
      "Implementação rápida com foco em geração de demanda",
    ],
  },
];

const SolutionsSection = () => {
  return (
    <section id="serviços" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2
            className="font-heading text-4xl md:text-5xl font-bold italic tracking-wider"
            style={{ color: "hsl(var(--text-heading))" }}
          >
            Soluções calibradas para cada realidade
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {solutions.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card-hover rounded-xl p-10 relative overflow-hidden"
            >
              <div className="relative z-10 flex flex-col gap-5">
                <div className="p-3 rounded-lg bg-primary/10 w-fit">
                  <item.icon className="text-primary" size={28} />
                </div>
                <div>
                  <h3
                    className="font-heading text-2xl font-semibold uppercase tracking-wide text-primary"
                  >
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">{item.subtitle}</p>
                </div>
                <p className="text-foreground leading-relaxed">{item.description}</p>
                <div>
                  <p className="text-primary font-medium tracking-widest uppercase text-xs mb-3">
                    O que entregamos:
                  </p>
                  <ul className="space-y-2">
                    {item.deliverables.map((d) => (
                      <li key={d} className="text-foreground text-sm flex items-start gap-2">
                        <span className="text-primary mt-1">·</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
