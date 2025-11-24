import { Check, ArrowRight, Sparkles, Zap, Crown } from "lucide-react";
import { Button } from "./ui/button";
const PlansSection = () => {
  const whatsappNumber = "5532999482095";
  const openWhatsApp = (planName: string) => {
    const message = encodeURIComponent(`Quero saber mais sobre o plano: ${planName}`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };
  const plans = [{
    icon: Sparkles,
    name: "Mentoria Individual",
    description: "Ideal para começar sua jornada em IA",
    features: ["Sessões individuais personalizadas", "Acompanhamento de projetos", "Material didático exclusivo", "Suporte via WhatsApp", "Certificado de conclusão"],
    highlight: true,
    gradient: "from-accent/10 to-primary/10",
    iconColor: "text-accent"
  }, {
    icon: Zap,
    name: "Desenvolvimento de Projeto",
    description: "Transforme sua ideia em realidade",
    features: ["Desenvolvimento completo do projeto", "Arquitetura e planejamento", "Implementação com IA", "Testes e otimização", "Documentação técnica", "Deploy e manutenção inicial"],
    highlight: false,
    gradient: "from-primary/10 to-accent/10",
    iconColor: "text-primary"
  }];
  return <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-glow-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" style={{
        animationDelay: '1s'
      }}></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Escolha seu{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Plano Ideal
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Soluções personalizadas para cada necessidade, desde mentoria individual até projetos empresariais completos
            </p>
          </div>

          {/* Plans Grid */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto animate-fade-in-up" style={{
          animationDelay: '0.2s'
        }}>
            {plans.map((plan, index) => {
            const Icon = plan.icon;
            return <div key={index} className={`group relative rounded-3xl bg-gradient-card border transition-all duration-500 hover:scale-105 ${plan.highlight ? 'border-accent shadow-glow lg:scale-105' : 'border-border hover:border-accent/50 hover:shadow-card'}`} style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  {/* Popular badge */}
                  {plan.highlight && <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="px-4 py-2 bg-gradient-secondary rounded-full text-sm font-bold shadow-glow">
                        MAIS POPULAR
                      </span>
                    </div>}

                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} rounded-3xl opacity-50`}></div>

                  <div className="relative p-8 space-y-6">
                    {/* Icon */}
                    <div className="flex justify-center">
                      <div className={`p-4 bg-gradient-to-br ${plan.gradient} rounded-2xl border border-border`}>
                        <Icon className={`h-8 w-8 ${plan.iconColor}`} />
                      </div>
                    </div>

                    {/* Plan Info */}
                    <div className="text-center space-y-2">
                      <h3 className="text-2xl font-bold text-foreground">
                        {plan.name}
                      </h3>
                      <p className="text-muted-foreground">
                        {plan.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-3 py-6">
                      {plan.features.map((feature, featureIndex) => <div key={featureIndex} className="flex items-start gap-3">
                          <div className={`mt-1 p-1 rounded-full ${plan.highlight ? 'bg-accent/20' : 'bg-primary/20'}`}>
                            <Check className={`h-4 w-4 ${plan.highlight ? 'text-accent' : 'text-primary'}`} />
                          </div>
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>)}
                    </div>

                    {/* CTA Button */}
                    <Button onClick={() => openWhatsApp(plan.name)} className={`w-full group/btn transition-all duration-300 ${plan.highlight ? 'bg-gradient-secondary hover:shadow-glow text-secondary-foreground' : 'bg-gradient-primary hover:shadow-card text-primary-foreground'}`}>
                      Saiba mais
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>

                  {/* Bottom accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${plan.highlight ? 'from-accent via-primary to-accent' : 'from-primary via-accent to-primary'}`}></div>
                </div>;
          })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center animate-fade-in" style={{
          animationDelay: '0.6s'
        }}>
            
            
          </div>
        </div>
      </div>
    </section>;
};
export default PlansSection;