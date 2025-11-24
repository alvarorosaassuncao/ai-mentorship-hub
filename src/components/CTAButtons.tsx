import { MessageCircle, Code, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";

const CTAButtons = () => {
  const whatsappNumber = "5532999482095";
  
  const openWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  const buttons = [
    {
      icon: MessageCircle,
      label: "Quero contratar uma mentoria",
      message: "Quero contratar uma mentoria",
      gradient: "from-primary to-accent",
    },
    {
      icon: Code,
      label: "Quero desenvolver um projeto",
      message: "Quero desenvolver um projeto",
      gradient: "from-secondary to-primary",
    },
    {
      icon: MessageSquare,
      label: "Outros assuntos",
      message: "Outros assuntos",
      gradient: "from-accent to-secondary",
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Pronto para{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Transformar
              </span>{" "}
              sua Carreira?
            </h2>
            <p className="text-xl text-muted-foreground">
              Entre em contato agora e vamos conversar sobre como posso ajudá-lo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {buttons.map((btn, index) => {
              const Icon = btn.icon;
              return (
                <Button
                  key={index}
                  onClick={() => openWhatsApp(btn.message)}
                  className={`group relative h-auto py-8 px-6 bg-gradient-to-br ${btn.gradient} hover:shadow-glow transition-all duration-300 hover:scale-105`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col items-center gap-4 text-center">
                    <div className="p-4 bg-background/10 rounded-2xl group-hover:bg-background/20 transition-colors">
                      <Icon className="h-8 w-8" />
                    </div>
                    <span className="font-semibold text-base leading-tight">
                      {btn.label}
                    </span>
                  </div>
                  
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAButtons;
