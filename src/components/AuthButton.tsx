import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogIn, LogOut } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import type { User } from "@supabase/supabase-js";

const AuthButton = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Erro",
        description: "Erro ao fazer logout",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Logout realizado",
        description: "Você foi desconectado com sucesso",
      });
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      {user ? (
        <Button
          onClick={handleLogout}
          variant="outline"
          className="bg-background/80 backdrop-blur-sm"
        >
          <LogOut size={16} className="mr-2" />
          Sair
        </Button>
      ) : (
        <Button
          onClick={() => navigate("/auth")}
          variant="outline"
          className="bg-background/80 backdrop-blur-sm"
        >
          <LogIn size={16} className="mr-2" />
          Login Admin
        </Button>
      )}
    </div>
  );
};

export default AuthButton;