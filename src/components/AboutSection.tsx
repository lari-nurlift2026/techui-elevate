import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="sobre-nós" className="py-24 section-gradient-dark">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2
            className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wider mb-2"
            style={{ color: "hsl(var(--text-heading))" }}
          >
            Nurlift:
          </h2>
          <h3
            className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-wider mb-10"
            style={{ color: "hsl(var(--text-heading))" }}
          >
            Onde a Inovação Desafia o Óbvio
          </h3>

          <div className="relative mb-10 pl-12">
            <span className="absolute left-0 top-0 text-5xl text-primary font-bold leading-none">"</span>
            <p className="text-foreground leading-relaxed italic">
              Inspirada pela ursa Nur, símbolo de adaptação e força em territórios
              inesperados, a primeira de sua espécie nascida em ambiente tropical, a Nurlift
              surgiu para desafiar padrões e transformar complexidade em oportunidade.
              Unimos visão estratégica, inteligência emocional e rigor orientado por dados
              para conectar inovação global à realidade local.
            </p>
          </div>

          <p className="text-foreground leading-relaxed mb-6">
            Nascemos de uma parceria construída a partir de contrastes que se tornaram complementaridade.
            Onde outros viam barreiras, aplicamos <strong>estratégia e análise</strong> para abrir novos caminhos.
          </p>

          <p className="text-foreground leading-relaxed">
            Vivemos de perto as particularidades do Brasil e é essa vivência que nos permite{" "}
            <strong>transformar tecnologias globais em impacto tangível</strong>. Mais do que integrar soluções,
            atuamos como elo entre <strong>estratégia, tecnologia e execução</strong>, fazendo a inovação avançar
            com <strong>propósito e liderança</strong>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
