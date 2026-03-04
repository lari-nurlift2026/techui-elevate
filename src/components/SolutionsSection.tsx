import { motion } from "framer-motion";
import { BarChart3, Globe, Megaphone, Code, Users, TrendingUp } from "lucide-react";

const solutions = [
  {
    icon: Globe,
    title: "Expansão de Mercado",
    description: "Estratégias de entrada no mercado brasileiro com análise de concorrência, posicionamento e adaptação cultural.",
  },
  {
    icon: Megaphone,
    title: "Marketing de Performance",
    description: "Campanhas data-driven com ROI mensurável. Mídia paga, SEO, conteúdo e automação de funis.",
  },
  {
    icon: Code,
    title: "Infraestrutura Digital",
    description: "Desenvolvimento de plataformas, integração de sistemas e arquitetura escalável para operação local.",
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description: "Dashboards e relatórios inteligentes que transformam dados em decisões estratégicas de crescimento.",
  },
  {
    icon: Users,
    title: "Talent Acquisition",
    description: "Recrutamento especializado de talentos tech e liderança para times de alta performance no Brasil.",
  },
  {
    icon: TrendingUp,
    title: "Growth Operations",
    description: "Operação contínua de crescimento com squads dedicados, sprints e KPIs claros de escala.",
  },
];

const SolutionsSection = () => {
  return (
    <section id="serviços" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Soluções</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-wider"
            style={{ color: "hsl(var(--text-heading))" }}
          >
            O que entregamos
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card-hover rounded-xl p-8 md:p-10 group"
            >
              <div className="flex flex-col items-start gap-5">
                <div className="p-3 rounded-lg bg-primary/10">
                  <item.icon className="text-primary" size={28} />
                </div>
                <h3 className="font-heading text-xl font-semibold uppercase tracking-wide"
                  style={{ color: "hsl(var(--text-heading))" }}
                >
                  {item.title}
                </h3>
                <p className="text-foreground leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
