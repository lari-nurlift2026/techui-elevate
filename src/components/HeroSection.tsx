import { motion } from "framer-motion";
import { ArrowRight, Rocket, Settings } from "lucide-react";
import heroImage from "@/assets/hero-aurora.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
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
            Onde a inovação global se torna lucratividade no Brasil.
          </h1>

          <p className="text-lg md:text-xl leading-relaxed mb-6 max-w-2xl text-foreground">
            Conectamos inovação e marketing avançado à execução prática no Brasil,
            transformando estratégia em resultado. Da expansão à consolidação,
            impulsionamos crescimento com escala, inteligência e visão local.
          </p>

          <p className="text-lg font-medium mb-8 text-foreground">
            Qual é o próximo passo da sua empresa?
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="glass-card-hover flex items-center gap-3 px-6 py-4 rounded-lg font-medium text-foreground group">
              <Rocket className="text-primary" size={20} />
              <span>Escalar operação</span>
              <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
            </button>
            <button className="glass-card-hover flex items-center gap-3 px-6 py-4 rounded-lg font-medium text-foreground group">
              <Settings className="text-primary" size={20} />
              <span>Consolidar infraestrutura</span>
              <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
