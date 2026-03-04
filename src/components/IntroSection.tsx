import { motion } from "framer-motion";

const IntroSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wider mb-8 text-primary">
            Tecnologia Global, Execução Local e Resultados Mensuráveis
          </h2>
          <p className="text-foreground text-lg leading-relaxed mb-4">
            Integramos plataformas globais de marketing a uma operação estratégica adaptada
            ao Brasil, transformando inovação em demanda real.
          </p>
          <p className="text-foreground text-lg leading-relaxed">
            Com dados, eficiência e foco em performance, estruturamos ecossistemas digitais
            prontos para escalar com consistência.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
