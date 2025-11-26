import profilePhoto from "@/assets/profile-photo.jpg";
import { BeamsBackground } from "./ui/beams-background";
import { ParticleTextEffect } from "./ui/particle-text-effect";

const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <BeamsBackground intensity="strong" className="absolute inset-0" />

      {/* Content */}
      <div className="container mx-auto px-4 py-12 relative z-10 max-w-2xl">
        <div className="flex flex-col items-center space-y-8 animate-fade-in-up">
          {/* Particle Text Effect */}
          <div className="w-full flex justify-center mb-4">
            <ParticleTextEffect 
              words={["ASSUNCIONE", "INTELIGÊNCIA", "ARTIFICIAL"]} 
              className="w-full max-w-3xl"
            />
          </div>

          {/* Profile Photo with Blue Glow */}
          <div className="relative">
            <div className="absolute -inset-4 bg-primary rounded-full blur-2xl opacity-60 animate-glow-pulse"></div>
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-primary shadow-glow">
              <img 
                src={profilePhoto} 
                alt="Alvaro Assunção" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name and Title */}
          <div className="text-center space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Alvaro Assunção
              </span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Engenheiro de Software | Especialista em IA
            </p>
          </div>

          {/* Description */}
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border shadow-card">
            <h2 className="text-xl font-bold text-foreground mb-4">
              Mentoria Individual em Inteligência Artificial
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Se você está começando no mundo da IA e quer aprender a criar sistemas funcionais que realmente geram resultados, esta mentoria é para você.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Sou Engenheiro de Software com mais de 6 anos de experiência em análise de dados e desenvolvimento de sistemas, e vou te guiar passo a passo para transformar ideias em soluções práticas usando Inteligência Artificial.
            </p>
            <p className="text-foreground text-sm font-semibold mb-2">Na mentoria você vai:</p>
            <ul className="text-muted-foreground text-sm space-y-2 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Entender os fundamentos da IA de forma simples e aplicada.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Aprender a criar prompts eficazes e sistemas inteligentes sem complicação.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Desenvolver projetos funcionais que podem ser aplicados em diferentes áreas de negócio.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Receber acompanhamento individual para acelerar seu aprendizado e evitar erros comuns.</span>
              </li>
            </ul>
            <p className="text-muted-foreground text-sm leading-relaxed italic">
              👉 O objetivo é que você saia da mentoria com confiança e autonomia para usar IA no seu dia a dia ou nos seus projetos profissionais.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;