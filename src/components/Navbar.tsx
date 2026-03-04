import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const navItems = [
    { label: t("nav.home"), href: "#home" },
    { label: t("nav.services"), href: "#serviços" },
    { label: t("nav.about"), href: "#sobre-nós" },
    { label: t("nav.contact"), href: "#recursos" },
  ];

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "pt" ? "en" : "pt");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="#" className="font-heading text-2xl font-bold tracking-wider uppercase text-primary">
          Nurlift
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navItems.map((item, i) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`text-sm font-medium tracking-wide transition-colors hover:text-primary ${
                    i === 0 ? "text-primary" : "text-foreground"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 text-xs font-medium tracking-wider uppercase px-3 py-1.5 rounded-full border border-border/50 text-foreground hover:text-primary hover:border-primary transition-colors"
          >
            {i18n.language === "pt" ? "EN" : "PT"}
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleLang}
            className="text-xs font-medium tracking-wider uppercase px-3 py-1.5 rounded-full border border-border/50 text-foreground hover:text-primary transition-colors"
          >
            {i18n.language === "pt" ? "EN" : "PT"}
          </button>
          <button onClick={() => setOpen(!open)} className="text-foreground">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden glass-card border-t border-border/30 overflow-hidden"
          >
            <ul className="flex flex-col gap-4 p-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
