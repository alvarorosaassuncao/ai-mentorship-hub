import Hero from "@/components/Hero";
import LinksSection from "@/components/LinksSection";
import AboutSection from "@/components/AboutSection";
import PlansSection from "@/components/PlansSection";
import { BeamsBackground } from "@/components/ui/beams-background";
import { MessageCircle } from "lucide-react";

const Index = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/5532999482095?text=Ol%C3%A1%20%C3%81lvaro%20tudo%20bem%3F%20Tenho%20interesse%20em%20saber%20mais%20sobre%20a%20sua%20mentoria.', '_blank');
  };

  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <BeamsBackground intensity="strong" className="fixed inset-0 z-0" />
      
      <div className="relative z-10">
        <Hero />
        <LinksSection />
        <AboutSection />
        <PlansSection />
        
        {/* Footer */}
        <footer className="py-8 border-t border-border mt-8">
          <div className="container mx-auto px-4 text-center">
            <p className="text-muted-foreground text-sm">
              © 2025 Alvaro Assunção - Mentoria em Inteligência Artificial
            </p>
          </div>
        </footer>
      </div>

      {/* Fixed WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl hover:scale-110 transition-all duration-200 flex items-center gap-2 font-semibold"
        aria-label="Fale pelo WhatsApp"
      >
        <MessageCircle size={24} />
        <span className="hidden sm:inline">Fale Agora Pelo WhatsApp</span>
      </button>
    </main>
  );
};
export default Index;