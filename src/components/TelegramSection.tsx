import { Send, Users } from "lucide-react";
import { Button } from "./ui/button";
const TelegramSection = () => {
  const telegramLink = "https://tr.ee/xPGtK0GLMc";
  return <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-card border border-primary/20 shadow-card">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, hsl(199 100% 50%) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}></div>
            </div>

            <div className="relative p-12 text-center space-y-8 animate-fade-in">
              {/* Icon */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-secondary blur-2xl opacity-50 animate-glow-pulse"></div>
                  <div className="relative p-6 bg-gradient-secondary rounded-3xl">
                    <Send className="h-12 w-12" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Junte-se à Nossa{" "}
                  <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                    Comunidade 2 
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Faça parte do nosso grupo exclusivo no Telegram e receba conteúdos, 
                  dicas e novidades sobre IA e desenvolvimento de software
                </p>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-8 py-4">
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-secondary" />
                  <div className="text-left">
                    <div className="text-2xl font-bold text-foreground">100+</div>
                    <div className="text-sm text-muted-foreground">Membros Ativos</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Send className="h-6 w-6 text-accent" />
                  <div className="text-left">
                    <div className="text-2xl font-bold text-foreground">100%</div>
                    <div className="text-sm text-muted-foreground">Gratuito</div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Button onClick={() => window.open(telegramLink, '_blank')} className="group bg-gradient-secondary hover:shadow-glow transition-all duration-300 hover:scale-105 text-lg py-6 px-8">
                <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Entrar no Grupo do Telegram
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default TelegramSection;