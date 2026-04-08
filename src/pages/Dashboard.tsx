import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { LogOut, Shield, FileText, BarChart3, Settings } from "lucide-react";

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const cards = [
    {
      icon: Shield,
      title: "SVMP-CS",
      description: "Access the control-layer suite for your LLM workflows.",
      action: "Open",
      href: "/cs",
    },
    {
      icon: FileText,
      title: "Research",
      description: "Browse published research and technical documentation.",
      action: "View",
      href: "/research",
    },
    {
      icon: BarChart3,
      title: "Usage",
      description: "Monitor session validation metrics and API activity.",
      action: "Coming soon",
      href: null,
    },
    {
      icon: Settings,
      title: "Settings",
      description: "Manage your account preferences and integrations.",
      action: "Coming soon",
      href: null,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <header className="border-b border-border bg-card/80 backdrop-blur-sm">
        <div className="container flex items-center justify-between h-16">
          <span className="font-heading text-xl font-semibold tracking-tight text-foreground">
            SVMP Systems
          </span>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden sm:inline">
              {user?.email}
            </span>
            <Button variant="ghost" size="sm" onClick={handleSignOut}>
              <LogOut className="h-4 w-4 mr-1.5" />
              Sign out
            </Button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="container py-12 md:py-20">
        {/* Welcome */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-heading font-semibold text-foreground tracking-tight mb-2">
            Welcome back
          </h1>
          <p className="text-muted-foreground text-base max-w-lg">
            Your SVMP dashboard. Access products, review research, and manage your account.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group bg-card border border-border rounded-lg p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-md bg-muted mb-4">
                <card.icon className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-lg font-heading font-semibold text-foreground mb-1.5">
                {card.title}
              </h2>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                {card.description}
              </p>
              {card.href ? (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate(card.href!)}
                  className="w-full"
                >
                  {card.action}
                </Button>
              ) : (
                <span className="block text-center text-xs text-muted-foreground/70 font-medium tracking-wide uppercase">
                  {card.action}
                </span>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
