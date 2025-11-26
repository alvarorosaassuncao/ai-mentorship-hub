import profilePhoto from "@/assets/profile-photo.jpg";
import { Youtube, Instagram } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[60vh] flex flex-col items-center justify-start overflow-hidden bg-transparent pt-12 pb-8">
      <div className="container mx-auto px-4 relative z-10 max-w-md">
        <div className="flex flex-col items-center space-y-3 animate-fade-in-up">
          {/* Profile Photo with Blue Glow */}
          <div className="relative mt-8">
            <div className="absolute -inset-4 bg-primary rounded-full blur-2xl opacity-60 animate-glow-pulse"></div>
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-primary shadow-glow">
              <img 
                src={profilePhoto} 
                alt="Alvaro Assunção" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name and Title */}
          <div className="text-center space-y-1">
            <h1 className="text-2xl font-bold text-foreground">
              Alvaro Assunção
            </h1>
            <p className="text-sm text-muted-foreground">
              Engenheiro de Software
            </p>
            
            {/* Social Media Icons */}
            <div className="flex items-center justify-center gap-4 pt-2">
              <a 
                href="https://www.youtube.com/@alvaroassuncione" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-red-500 hover:text-red-600 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={24} />
              </a>
              <a 
                href="https://www.instagram.com/alvaroassuncione/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://www.tiktok.com/@alvaroassuncione" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors text-2xl"
                aria-label="TikTok"
              >
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;