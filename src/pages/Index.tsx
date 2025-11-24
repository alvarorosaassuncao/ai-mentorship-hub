import Hero from "@/components/Hero";
import CTAButtons from "@/components/CTAButtons";
import TelegramSection from "@/components/TelegramSection";
import ToolsSection from "@/components/ToolsSection";
import PlansSection from "@/components/PlansSection";
const Index = () => {
  return <main className="min-h-screen bg-background text-foreground">
      <Hero />
      
      <PlansSection />
      <ToolsSection />
      <TelegramSection />
      
      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 Alvari Assunção - Mentoria em Inteligência Artificial
          </p>
        </div>
      </footer>
    </main>;
};
export default Index;