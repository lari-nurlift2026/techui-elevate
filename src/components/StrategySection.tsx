import { motion } from "framer-motion";

const steps = [
  {
    title: "Diagnóstico",
    description: "Mapeamos mercado, stack atual, gaps e oportunidades com dados reais.",
  },
  {
    title: "Arquitetura",
    description:
      "Estruturamos a base operacional ideal, conectando ferramentas, processos e pessoas para criar uma operação eficiente, escalável e orientada a resultados.",
  },
  {
    title: "Execução",
    description: "Implementamos com equipe local, integrações e KPIs desde o dia um.",
  },
  {
    title: "Escala",
    description:
      "Refinamos continuamente a operação por meio de automação estratégica e inteligência orientada por dados, aplicando tecnologia de forma criteriosa para gerar eficiência real, decisões mais precisas e evolução consistente da performance.",
  },
];

const StrategySection = () => {
  return (
    <section className="py-32 section-gradient-alt">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2
            className="font-heading text-4xl md:text-5xl font-bold tracking-wider"
            style={{ color: "hsl(var(--text-heading))" }}
          >
            Da estratégia à escala
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20 max-w-2xl mx-auto text-muted-foreground"
        >
          Um framework validado em 4 etapas para eliminar incerteza e acelerar resultados.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="flex flex-col gap-3"
            >
              <span className="font-heading text-5xl md:text-6xl font-bold text-primary/20">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3
                className="font-heading text-xl font-semibold uppercase tracking-wide"
                style={{ color: "hsl(var(--text-heading))" }}
              >
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategySection;
