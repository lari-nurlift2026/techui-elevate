import { motion } from "framer-motion";

const IntroSection = () => {
  return (
    <section className="py-24 section-gradient-dark">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wider mb-8 text-primary">
            Tecnologia Global. Estratégia Orientada por Dados. Crescimento Escalável.
          </h2>
          <p className="text-foreground text-lg leading-relaxed mb-4">
            Unimos plataformas globais de marketing a uma operação estratégica pensada para
            o Brasil, transformando inovação em resultados concretos.
          </p>
          <p className="text-foreground text-lg leading-relaxed">
            Com inteligência de dados, automação e foco em performance, construímos
            ecossistemas digitais prontos para escalar, otimizar investimentos e ampliar
            impacto de marca.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
