const LinksSection = () => {
  const links = [
    {
      title: "Grupo do Telegram",
      url: "https://t.me/grupohubai",
      color: "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
    },
    {
      title: "Guia de Uso do ChatGPT + 60 Prompts",
      url: "https://pay.kiwify.com.br/PapOzka",
      color: "bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700"
    },
    {
      title: "Guia Definitivo de Agentes de IA",
      url: "https://pagina-de-vendas-ebook-ag.vercel.app/",
      color: "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
    },
    {
      title: "Inteligência Artificial para Empreendedores",
      url: "https://landingpage1-eosin.vercel.app/",
      color: "bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700"
    },
    {
      title: "Lovable",
      url: "https://lovable.dev/invite/5KYYKON",
      color: "bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700"
    },
    {
      title: "Bolt.new",
      url: "https://bolt.new/",
      color: "bg-gradient-to-r from-gray-800 to-black hover:from-gray-900 hover:to-gray-950"
    }
  ];

  const openLink = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section className="py-6 relative">
      <div className="container mx-auto px-4 max-w-md relative z-10">
        <h2 className="text-lg font-bold text-center mb-4 text-foreground uppercase tracking-wide">
          Acesse os Links Abaixo!!!
        </h2>
        
        <div className="space-y-3">
          {links.map((link, index) => (
            <button
              key={index}
              onClick={() => openLink(link.url)}
              className={`w-full ${link.color} rounded-lg p-4 text-center font-semibold text-white transition-all duration-200 hover:scale-[1.02] shadow-lg hover:shadow-xl`}
            >
              {link.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LinksSection;
