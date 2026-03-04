const FooterSection = () => {
  return (
    <footer className="py-16 border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-heading text-xl font-bold uppercase tracking-wider text-primary">
              Nurlift
            </span>
            <p className="text-muted-foreground text-sm mt-1">
              Inovação global. Execução local.
            </p>
          </div>

          <div className="flex gap-8">
            {["Home", "Serviços", "Sobre nós", "Recursos"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <p className="text-xs text-muted-foreground">
            © 2026 Nurlift. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
