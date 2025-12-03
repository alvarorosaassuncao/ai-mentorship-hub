const LinksSection = () => {
  const links = [{
    title: "Grupo do Telegram",
    url: "https://t.me/grupohubai",
    color: "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
  }, {
    title: "Guia de Uso do ChatGPT + 60 Prompts",
    url: "https://pay.kiwify.com.br/PapOzka",
    color: "bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700"
  }, {
    title: "Guia Definitivo de Agentes de IA",
    url: "https://pagina-de-vendas-ebook-ag.vercel.app/",
    color: "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
  }, {
    title: "Inteligência Artificial para Empreendedores",
    url: "https://landingpage1-eosin.vercel.app/",
    color: "bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700"
  }, {
    title: "Lovable",
    url: "https://lovable.dev/invite/5KYYKON",
    color: "bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700"
  }, {
    title: "Bolt.new",
    url: "https://bolt.new/",
    color: "bg-gradient-to-r from-gray-800 to-black hover:from-gray-900 hover:to-gray-950"
  }, {
    title: "Perplexity",
    url: "https://www.perplexity.ai/",
    color: "bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700"
  }, {
    title: "Readdy",
    url: "https://readdy.ai/invite/AavdaAoRuSd5",
    color: "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
  }, {
    title: "Excalidraw",
    url: "https://excalidraw.com/",
    color: "bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700"
  }, {
    title: "Crie seu minisite comigo",
    url: "https://wa.me/5532999482095?text=Olá+Álvaro+tudo+bem?+Tenho+interesse+em+saber+mais+sobre+a+sua+mentoria.",
    color: "bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700"
  }];
  const openLink = (url: string) => {
    window.open(url, '_blank');
  };
  return <section className="py-6 relative">
      <div className="container mx-auto px-4 max-w-md relative z-10">
        <h2 className="text-lg font-bold text-center mb-4 text-foreground uppercase tracking-wide">
          Acesse os Links Abaixo!!!
        </h2>
        
        <div className="space-y-3">
          {links.map((link, index) => <button key={index} onClick={() => openLink(link.url)} className={`w-full ${link.color} rounded-lg p-4 text-center font-semibold text-white transition-all duration-200 hover:scale-[1.02] shadow-lg hover:shadow-xl`}>{link.title}
            </button>)}
        </div>
      </div>
    </section>;
};
export default LinksSection;