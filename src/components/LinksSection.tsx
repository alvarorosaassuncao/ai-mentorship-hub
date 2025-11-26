import { ExternalLink, MessageCircle, BookOpen, GraduationCap, Briefcase, Zap, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const LinksSection = () => {
  const links = [
    {
      title: "Grupo do Telegram",
      description: "Entre para a comunidade",
      url: "https://tr.ee/xPGtK0GLMc",
      icon: MessageCircle,
      gradient: "from-primary/20 to-accent/20"
    },
    {
      title: "Guia de Uso do ChatGPT + 60 Prompts",
      description: "Domine o ChatGPT com prompts prontos",
      url: "https://pay.kiwify.com.br/PapOzka",
      icon: BookOpen,
      gradient: "from-accent/20 to-primary/20"
    },
    {
      title: "Guia Definitivo de Agentes de IA",
      description: "Para iniciantes em IA",
      url: "https://pagina-de-vendas-ebook-ag.vercel.app/",
      icon: GraduationCap,
      gradient: "from-primary/20 to-accent/20"
    },
    {
      title: "Inteligência Artificial para Empreendedores",
      description: "IA aplicada aos negócios",
      url: "https://landingpage1-eosin.vercel.app/",
      icon: Briefcase,
      gradient: "from-accent/20 to-primary/20"
    },
    {
      title: "Lovable",
      description: "Crie apps com IA",
      url: "https://tr.ee/RSxYnZz52O",
      icon: Sparkles,
      gradient: "from-primary/20 to-accent/20"
    },
    {
      title: "Bolt.new",
      description: "Desenvolvimento rápido com IA",
      url: "https://tr.ee/hubCGNa8PJ",
      icon: Zap,
      gradient: "from-accent/20 to-primary/20"
    }
  ];

  return (
    <section className="py-12 relative">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="space-y-4 animate-fade-in-up">
          <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Acesse os Links
          </h2>
          
          {links.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`bg-gradient-to-r ${link.gradient} p-[1px] rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-glow`}>
                  <div className="bg-card backdrop-blur-sm rounded-xl p-4 flex items-center gap-4 hover:bg-card/80 transition-all">
                    <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-foreground font-semibold text-base group-hover:text-primary transition-colors">
                        {link.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">{link.description}</p>
                    </div>
                    <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LinksSection;
