import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section id="sobre-nós" className="py-24 section-dark-gradient border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
            {t("about.title1")}
          </h2>
          <h3
            className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-wider mb-10"
            style={{ color: "hsl(var(--text-heading))" }}
          >
            {t("about.title2")}
          </h3>

          <div className="relative mb-10 pl-12">
            <span className="absolute left-0 top-0 text-5xl text-primary font-bold leading-none">"</span>
            <p className="text-foreground leading-relaxed italic">
              {t("about.quote")}
            </p>
          </div>

          <p className="text-foreground leading-relaxed mb-6">
            {t("about.p1_start")}<strong>{t("about.p1_bold")}</strong>{t("about.p1_end")}
          </p>

          <p className="text-foreground leading-relaxed">
            {t("about.p2_start")}<strong>{t("about.p2_bold1")}</strong>{t("about.p2_mid")}<strong>{t("about.p2_bold2")}</strong>{t("about.p2_mid2")}<strong>{t("about.p2_bold3")}</strong>{t("about.p2_end")}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
