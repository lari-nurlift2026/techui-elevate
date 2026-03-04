import { motion } from "framer-motion";
import { Grid3X3, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

const SolutionsSection = () => {
  const { t } = useTranslation();

  const solutions = [
    {
      icon: Grid3X3,
      title: t("solutions.enterprise.title"),
      subtitle: t("solutions.enterprise.subtitle"),
      description: t("solutions.enterprise.description"),
      deliverables: [
        t("solutions.enterprise.d1"),
        t("solutions.enterprise.d2"),
        t("solutions.enterprise.d3"),
        t("solutions.enterprise.d4"),
      ],
    },
    {
      icon: Zap,
      title: t("solutions.scaleups.title"),
      subtitle: t("solutions.scaleups.subtitle"),
      description: t("solutions.scaleups.description"),
      deliverables: [
        t("solutions.scaleups.d1"),
        t("solutions.scaleups.d2"),
        t("solutions.scaleups.d3"),
        t("solutions.scaleups.d4"),
      ],
    },
  ];

  return (
    <section id="serviços" className="py-24 section-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2
            className="font-heading text-4xl md:text-5xl font-bold italic tracking-wider"
            style={{ color: "hsl(var(--section-light-heading))" }}
          >
            {t("solutions.title")}
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
              className="rounded-xl p-10 card-light"
            >
              <div className="flex flex-col gap-5">
                <div className="p-3 rounded-lg bg-primary/10 w-fit">
                  <item.icon className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-semibold uppercase tracking-wide text-primary">
                    {item.title}
                  </h3>
                  <p className="text-sm mt-1" style={{ color: "hsl(var(--section-light-muted))" }}>
                    {item.subtitle}
                  </p>
                </div>
                <p className="leading-relaxed" style={{ color: "hsl(var(--section-light-body))" }}>
                  {item.description}
                </p>
                <div>
                  <p className="text-primary font-medium tracking-widest uppercase text-xs mb-3">
                    {t("solutions.deliverables_label")}
                  </p>
                  <ul className="space-y-2">
                    {item.deliverables.map((d) => (
                      <li key={d} className="text-sm flex items-start gap-2" style={{ color: "hsl(var(--section-light-body))" }}>
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
