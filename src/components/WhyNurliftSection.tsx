import { motion } from "framer-motion";
import { Layers, Globe, Brain } from "lucide-react";
import { useTranslation } from "react-i18next";

const WhyNurliftSection = () => {
  const { t } = useTranslation();

  const reasons = [
    {
      icon: Layers,
      stat: t("why.r1_stat"),
      title: t("why.r1_title"),
      description: t("why.r1_desc"),
    },
    {
      icon: Globe,
      stat: t("why.r2_stat"),
      title: t("why.r2_title"),
      description: t("why.r2_desc"),
    },
    {
      icon: Brain,
      stat: t("why.r3_stat"),
      title: t("why.r3_title"),
      description: t("why.r3_desc"),
    },
  ];

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
            {t("why.label")}
          </p>
          <h2
            className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-wider max-w-4xl mx-auto"
            style={{ color: "hsl(var(--text-heading))" }}
          >
            {t("why.title")}
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
