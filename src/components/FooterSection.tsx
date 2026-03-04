import { useTranslation } from "react-i18next";

const FooterSection = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-10 section-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-heading text-lg font-bold uppercase tracking-wider text-primary">
            Nurlift
          </span>
          <p className="text-xs text-muted-foreground">
            {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
