import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const IntroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 section-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2
            className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wider mb-8"
            style={{ color: "hsl(var(--section-light-heading))" }}
          >
            {t("intro.title")}
          </h2>
          <p className="text-lg leading-relaxed mb-4" style={{ color: "hsl(var(--section-light-body))" }}>
            {t("intro.p1")}
          </p>
          <p className="text-lg leading-relaxed" style={{ color: "hsl(var(--section-light-body))" }}>
            {t("intro.p2")}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
