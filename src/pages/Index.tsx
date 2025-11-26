import Hero from "@/components/Hero";
import LinksSection from "@/components/LinksSection";
import PlansSection from "@/components/PlansSection";

const Index = () => {
  return <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <LinksSection />
      <PlansSection />
      
      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Alvaro Assunção - Mentoria em Inteligência Artificial
          </p>
        </div>
      </footer>
    </main>;
};
export default Index;