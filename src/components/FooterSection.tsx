const FooterSection = () => {
  return (
    <footer className="py-10 border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-heading text-lg font-bold uppercase tracking-wider text-primary">
            Nurlift
          </span>
          <p className="text-xs text-muted-foreground">
            © 2026 Nurlift. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
