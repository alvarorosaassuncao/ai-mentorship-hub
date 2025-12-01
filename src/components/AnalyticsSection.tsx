import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Eye, MousePointerClick, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { User } from "@supabase/supabase-js";

interface ButtonStats {
  button_name: string;
  click_count: number;
}

const AnalyticsSection = () => {
  const [totalVisits, setTotalVisits] = useState<number>(0);
  const [buttonStats, setButtonStats] = useState<ButtonStats[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      
      if (session?.user) {
        // Check if user is admin
        const { data: roleData } = await supabase
          .from('user_roles')
          .select('role')
          .eq('user_id', session.user.id)
          .eq('role', 'admin')
          .single();
        
        setIsAdmin(!!roleData);
      }
      setIsLoading(false);
    };

    checkAuth();
    fetchAnalytics();
    
    // Subscribe to realtime updates
    const visitsChannel = supabase
      .channel('page-visits-changes')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'page_visits'
        },
        () => fetchAnalytics()
      )
      .subscribe();

    const clicksChannel = supabase
      .channel('button-clicks-changes')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'button_clicks'
        },
        () => fetchAnalytics()
      )
      .subscribe();

    return () => {
      supabase.removeChannel(visitsChannel);
      supabase.removeChannel(clicksChannel);
    };
  }, []);

  const fetchAnalytics = async () => {
    try {
      // Get total page visits
      const { count: visitsCount } = await supabase
        .from('page_visits')
        .select('*', { count: 'exact', head: true });

      setTotalVisits(visitsCount || 0);

      // Get button click stats
      const { data: clicksData } = await supabase
        .from('button_clicks')
        .select('button_name');

      if (clicksData) {
        const statsMap = clicksData.reduce((acc, { button_name }) => {
          acc[button_name] = (acc[button_name] || 0) + 1;
          return acc;
        }, {} as Record<string, number>);

        const stats = Object.entries(statsMap)
          .map(([button_name, click_count]) => ({
            button_name,
            click_count
          }))
          .sort((a, b) => b.click_count - a.click_count);

        setButtonStats(stats);
      }
    } catch (error) {
      console.error('Error fetching analytics:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <section className="py-8 relative">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-background/60 backdrop-blur-sm rounded-xl p-6 border border-border shadow-xl">
            <p className="text-center text-muted-foreground">Carregando estatísticas...</p>
          </div>
        </div>
      </section>
    );
  }

  // Show login prompt if not logged in or not admin
  if (!user || !isAdmin) {
    return (
      <section className="py-8 relative">
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="bg-background/60 backdrop-blur-sm rounded-xl p-8 border border-border shadow-xl text-center">
            <Lock className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">
              Acesso Restrito
            </h3>
            <p className="text-muted-foreground mb-4">
              Esta seção é visível apenas para administradores
            </p>
            {!user && (
              <button
                onClick={() => navigate("/auth")}
                className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Fazer Login
              </button>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 relative">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <h2 className="text-2xl font-bold text-center mb-6 text-foreground uppercase tracking-wide">
          📊 Estatísticas de Acesso
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Total Visits Card */}
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm rounded-xl p-6 border border-border shadow-xl">
            <div className="flex items-center gap-3 mb-2">
              <Eye className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Total de Visitas</h3>
            </div>
            <p className="text-4xl font-bold text-primary">{totalVisits}</p>
          </div>

          {/* Button Clicks Card */}
          <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 backdrop-blur-sm rounded-xl p-6 border border-border shadow-xl">
            <div className="flex items-center gap-3 mb-2">
              <MousePointerClick className="w-6 h-6 text-secondary" />
              <h3 className="text-lg font-semibold text-foreground">Cliques nos Botões</h3>
            </div>
            <p className="text-4xl font-bold text-secondary">
              {buttonStats.reduce((sum, stat) => sum + stat.click_count, 0)}
            </p>
          </div>
        </div>

        {/* Button Statistics */}
        {buttonStats.length > 0 && (
          <div className="mt-6 bg-background/60 backdrop-blur-sm rounded-xl p-6 border border-border shadow-xl">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Botões Mais Clicados
            </h3>
            <div className="space-y-3">
              {buttonStats.map((stat, index) => (
                <div 
                  key={stat.button_name}
                  className="flex items-center justify-between p-3 bg-muted/30 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-bold text-primary">#{index + 1}</span>
                    <span className="text-foreground font-medium">{stat.button_name}</span>
                  </div>
                  <span className="text-2xl font-bold text-primary">{stat.click_count}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AnalyticsSection;