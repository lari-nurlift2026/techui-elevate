import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import partnerUberall from "@/assets/partner-uberall.png";
import partnerExid from "@/assets/partner-exid.png";
import partnerId from "@/assets/partner-id.png";

const partners = [
  { name: "Uberall", logo: partnerUberall },
  { name: "ex.id", logo: partnerExid },
  { name: "iD", logo: partnerId },
];

const PartnersSection = () => {
  const { t } = useTranslation();

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
            {t("partners.title")}
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center leading-relaxed max-w-3xl mx-auto mb-16"
          style={{ color: "hsl(var(--section-light-body))" }}
        >
          {t("partners.description")}
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-12 max-w-4xl mx-auto">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center justify-center p-6"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 md:h-16 w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
