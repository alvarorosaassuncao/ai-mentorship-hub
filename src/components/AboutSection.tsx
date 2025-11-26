const AboutSection = () => {
  return (
    <section className="py-12 relative">
      <div className="container mx-auto px-4 max-w-md relative z-10">
        <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border">
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
    </section>
  );
};

export default AboutSection;
