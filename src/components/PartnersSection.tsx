import { motion } from "framer-motion";

const partners = ["HubSpot", "Google Cloud", "Meta", "Segment", "Salesforce", "Braze"];

const PartnersSection = () => {
  return (
    <section className="py-24 bg-muted/30">
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
            Parceiros
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-foreground leading-relaxed max-w-3xl mx-auto mb-16"
        >
          Orquestramos soluções de marketing líderes no cenário global para estruturar e fortalecer sua
          infraestrutura de marketing no Brasil — conectando tecnologia, estratégia e execução com foco
          em resultados consistentes.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {partners.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center justify-center py-6 px-4 glass-card rounded-xl"
            >
              <span className="font-heading text-xl md:text-2xl font-bold tracking-wide text-muted-foreground">
                {name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
