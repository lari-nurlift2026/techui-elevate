import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="recursos" className="py-24 section-dark-gradient border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-wider mb-2"
              style={{ color: "hsl(var(--text-heading))" }}
            >
              Pronto para <span className="text-primary">elevar</span>
            </h2>
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-wider mb-10"
              style={{ color: "hsl(var(--text-heading))" }}
            >
              sua operação?
            </h2>

            <div className="mb-8">
              <span className="font-heading text-3xl font-bold tracking-wider text-primary">
                Nurlift
              </span>
              <p className="text-muted-foreground text-xs tracking-widest uppercase mt-1">
                House of Tech
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <Phone className="text-primary mt-1" size={18} />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Telefone</p>
                  <p className="text-foreground">+55 11 0000-0000</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="text-primary mt-1" size={18} />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">E-mail</p>
                  <p className="text-foreground">contato@nurlift.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-primary mt-1" size={18} />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Endereço</p>
                  <p className="text-foreground">
                    Rua Dr. Luiz Folqueriane Sobrinho, 71<br />
                    Vila Mariana São Paulo/SP – Brasil
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <a href="#" className="p-2 rounded-full border border-border/50 text-foreground hover:text-primary hover:border-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 rounded-full border border-border/50 text-foreground hover:text-primary hover:border-primary transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Nome"
                className="w-full px-5 py-4 rounded-lg bg-secondary/60 border border-border/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="text"
                placeholder="Empresa"
                className="w-full px-5 py-4 rounded-lg bg-secondary/60 border border-border/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="email"
                placeholder="E-mail"
                className="w-full px-5 py-4 rounded-lg bg-secondary/60 border border-border/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <textarea
                placeholder="Mensagem"
                rows={4}
                className="w-full px-5 py-4 rounded-lg bg-secondary/60 border border-border/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                Enviar mensagem
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
