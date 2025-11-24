import heroImage from "@/assets/hero-image.jpg";
import { BeamsBackground } from "./ui/beams-background";
import { ParticleTextEffect } from "./ui/particle-text-effect";

const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <BeamsBackground intensity="strong" className="absolute inset-0" />

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="flex justify-center lg:justify-start mb-6">
              <ParticleTextEffect 
                words={["ASSUNCIONE", "INTELIGÊNCIA", "ARTIFICIAL"]} 
                className="w-full max-w-3xl"
              />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Mentoria com{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-float">
                Alvaro Assunção
              </span>
            </h1>
            
            <p className="text-muted-foreground leading-relaxed text-base">
              Alvaro Assunção — Engenheiro de Software com mais de 6 anos de experiência em 
              Desenvolvimento de Sistemas e Análise de Dados.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span className="text-muted-foreground">Especialista em IA</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-muted-foreground">6+ Anos de Experiência</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span className="text-muted-foreground">Projetos Personalizados</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="absolute -inset-4 bg-gradient-secondary rounded-3xl blur-3xl opacity-30 animate-glow-pulse"></div>
            <div className="relative rounded-3xl overflow-hidden border border-accent/20 shadow-glow">
              <img src={heroImage} alt="Alvaro Assunção - Mentor de IA" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-accent rounded-full"></div>
        </div>
      </div>
    </section>;
};
export default Hero;