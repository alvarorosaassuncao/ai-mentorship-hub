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
        
      </div>
    </section>;
};
export default ToolsSection;