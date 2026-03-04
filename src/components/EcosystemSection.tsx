import { motion } from "framer-motion";
import { ArrowRightLeft, Users, BarChart3 } from "lucide-react";
import { useTranslation } from "react-i18next";

const EcosystemSection = () => {
  const { t } = useTranslation();

  const pillars = [
    {
      icon: ArrowRightLeft,
      title: t("ecosystem.pillar1_title"),
      description: t("ecosystem.pillar1_desc"),
    },
    {
      icon: Users,
      title: t("ecosystem.pillar2_title"),
      description: t("ecosystem.pillar2_desc"),
    },
    {
      icon: BarChart3,
      title: t("ecosystem.pillar3_title"),
      description: t("ecosystem.pillar3_desc"),
    },
  ];

  return (
    <section className="py-24 section-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2
            className="font-heading text-4xl md:text-5xl font-bold tracking-wider"
            style={{ color: "hsl(var(--section-light-heading))" }}
          >
            {t("ecosystem.title")}
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center leading-relaxed max-w-3xl mx-auto mb-20"
          style={{ color: "hsl(var(--section-light-body))" }}
        >
          {t("ecosystem.description")}
        </motion.p>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {pillars.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="text-center flex flex-col items-center gap-5 card-light rounded-xl p-8"
            >
              <div className="p-4 rounded-xl bg-primary/10">
                <item.icon className="text-primary" size={40} />
              </div>
              <h3 className="font-heading text-lg font-semibold tracking-wide text-primary whitespace-pre-line">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--section-light-body))" }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
