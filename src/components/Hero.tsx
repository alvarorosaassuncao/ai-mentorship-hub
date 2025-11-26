import profilePhoto from "@/assets/profile-photo.jpg";
import { BeamsBackground } from "./ui/beams-background";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden bg-background pt-12">
      <BeamsBackground intensity="strong" className="absolute inset-0" />

      <div className="container mx-auto px-4 relative z-10 max-w-md">
        <div className="flex flex-col items-center space-y-4 animate-fade-in-up">
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
            <p className="text-sm text-muted-foreground">
              gopage.bio/assuncioneiaai
            </p>
            <h1 className="text-2xl font-bold text-foreground">
              Alvaro Assunção
            </h1>
            <p className="text-sm text-muted-foreground">
              Engenheiro de Software
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;