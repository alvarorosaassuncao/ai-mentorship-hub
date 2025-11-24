import { ExternalLink, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
const ToolsSection = () => {
  const tools = [{
    name: "Ferramenta IA 1",
    description: "Soluções avançadas de inteligência artificial",
    link: "https://tr.ee/RSxYnZz52O"
  }, {
    name: "Ferramenta IA 2",
    description: "Plataforma de desenvolvimento com IA",
    link: "https://tr.ee/hubCGNa8PJ"
  }, {
    name: "Base44",
    description: "Infraestrutura e hospedagem",
    link: "https://base44.com/"
  }, {
    name: "Hostinger Horizons",
    description: "Cloud hosting de alta performance",
    link: "https://www.hostinger.com/br/horizons"
  }, {
    name: "Google AI Studio",
    description: "Ferramentas Google para IA",
    link: "https://aistudio.google.com/apps"
  }];
  return <section className="py-20 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            
            <h2 className="text-4xl md:text-5xl font-bold">
              Ferramentas Mais{" "}
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Utilizadas
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Conheça as principais ferramentas que utilizo nos projetos de mentoria e desenvolvimento
            </p>
          </div>

          {/* Tools Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up" style={{
          animationDelay: '0.2s'
        }}>
            {tools.map((tool, index) => <div key={index} className="group relative rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow overflow-hidden" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default ToolsSection;