import { motion } from "framer-motion";
import { ArrowRight, Rocket, Network } from "lucide-react";
import { useTranslation } from "react-i18next";
import heroVideo from "@/assets/hero-polar-bear-aurora.mp4";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        src={heroVideo}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />

      <div className="container mx-auto px-6 relative z-10 pt-32 pb-20">
        <div className="max-w-3xl">
          <motion.h1
            className="font-heading text-5xl md:text-7xl font-bold uppercase tracking-wider mb-8"
            style={{ color: "hsl(var(--text-heading))" }}
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          >
            {t("hero.title").split(/(?<=\.)\s*/).filter(Boolean).map((line, i) => (
              <motion.span
                key={i}
                className="block"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
                }}
              >
                {line.trim()}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl leading-relaxed mb-6 max-w-2xl text-foreground"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            {t("hero.description")}
          </motion.p>

          <motion.p
            className="text-lg font-medium mb-8 text-foreground"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            {t("hero.cta")}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
