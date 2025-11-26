const LinksSection = () => {
  const links = [
    {
      title: "Grupo do Telegram",
      url: "https://tr.ee/xPGtK0GLMc"
    },
    {
      title: "Guia de Uso do ChatGPT + 60 Prompts",
      url: "https://pay.kiwify.com.br/PapOzka"
    },
    {
      title: "Guia Definitivo de Agentes de IA",
      url: "https://pagina-de-vendas-ebook-ag.vercel.app/"
    },
    {
      title: "Inteligência Artificial para Empreendedores",
      url: "https://landingpage1-eosin.vercel.app/"
    },
    {
      title: "Lovable",
      url: "https://tr.ee/RSxYnZz52O"
    },
    {
      title: "Bolt.new",
      url: "https://tr.ee/hubCGNa8PJ"
    }
  ];

  return (
    <section className="py-6 relative -mt-32">
      <div className="container mx-auto px-4 max-w-md relative z-10">
        <h2 className="text-lg font-bold text-center mb-4 text-foreground uppercase tracking-wide">
          Acesse os Links Abaixo!!!
        </h2>
        
        <div className="space-y-3">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-muted/80 backdrop-blur-sm hover:bg-muted rounded-lg p-4 text-center font-medium text-foreground transition-all duration-200 hover:scale-[1.02] border border-border/50"
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LinksSection;
