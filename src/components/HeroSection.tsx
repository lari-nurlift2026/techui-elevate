import { motion } from "framer-motion";
import { ArrowRight, Rocket, Network } from "lucide-react";
import { useTranslation } from "react-i18next";
import heroImage from "@/assets/hero-aurora.jpg";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Aurora boreal sobre montanhas" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase tracking-wider mb-8"
            style={{ color: "hsl(var(--text-heading))" }}
          >
            {t("hero.title")}
          </h1>

          <p className="text-lg md:text-xl leading-relaxed mb-6 max-w-2xl text-foreground">
            {t("hero.description")}
          </p>

          <p className="text-lg font-medium mb-8 text-foreground">
            {t("hero.cta")}
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="glass-card-hover flex items-center gap-3 px-6 py-4 rounded-lg font-medium text-foreground group">
              <Rocket className="text-primary" size={20} />
              <span>{t("hero.scale")}</span>
              <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
            </button>
            <button className="glass-card-hover flex items-center gap-3 px-6 py-4 rounded-lg font-medium text-foreground group">
              <Network className="text-primary" size={20} />
              <span>{t("hero.consolidate")}</span>
              <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
