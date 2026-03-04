import { motion } from "framer-motion";

const steps = [
  {
    title: "Diagnóstico",
    description: "Análise profunda do cenário atual, oportunidades de mercado e posicionamento competitivo no Brasil.",
  },
  {
    title: "Estratégia",
    description: "Planejamento customizado com roadmap de execução, métricas e milestones de crescimento.",
  },
  {
    title: "Execução",
    description: "Implementação ágil com squads dedicados, sprints de duas semanas e reports semanais de progresso.",
  },
  {
    title: "Escala",
    description: "Otimização contínua, expansão de canais e aceleração de resultados com inteligência de dados.",
  },
];

const StrategySection = () => {
  return (
    <section id="sobre-nós" className="py-32 relative">
      <div className="glow-line w-full mb-32" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Processo</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-wider"
            style={{ color: "hsl(var(--text-heading))" }}
          >
            Da Estratégia à Escala
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card-hover rounded-xl p-10 relative overflow-hidden"
            >
              {/* Giant background number */}
              <span className="step-number absolute top-1/2 -translate-y-1/2 -left-2 text-[160px] leading-none select-none pointer-events-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative z-10 ml-16 md:ml-24">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
                  <h3 className="font-heading text-2xl font-semibold uppercase tracking-wide"
                    style={{ color: "hsl(var(--text-heading))" }}
                  >
                    {step.title}
                  </h3>
                </div>
                <p className="text-foreground leading-relaxed max-w-xl">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategySection;
