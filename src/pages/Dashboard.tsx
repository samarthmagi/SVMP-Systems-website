import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import {
  LogOut,
  Shield,
  FileText,
  BarChart3,
  Settings,
  Activity,
  Zap,
  Clock,
  ArrowUpRight,
  ChevronRight,
  Layers,
  Lock,
  Eye,
} from "lucide-react";

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const firstName = user?.email?.split("@")[0] ?? "there";

  const stats = [
    { label: "Sessions Validated", value: "—", change: null, icon: Shield },
    { label: "API Calls", value: "—", change: null, icon: Zap },
    { label: "Avg Latency", value: "—", change: null, icon: Clock },
    { label: "Active Policies", value: "—", change: null, icon: Lock },
  ];

  const quickActions = [
    {
      icon: Shield,
      title: "SVMP-CS",
      description: "Control-layer suite for LLM session validation and policy enforcement.",
      action: "Open Suite",
      href: "/cs",
    },
    {
      icon: FileText,
      title: "Research",
      description: "Published research, whitepapers, and technical documentation.",
      action: "Browse",
      href: "/research",
    },
    {
      icon: BarChart3,
      title: "Usage & Analytics",
      description: "Monitor validation metrics, API activity, and system health.",
      action: "Coming Soon",
      href: null,
    },
    {
      icon: Settings,
      title: "Settings",
      description: "Account preferences, API keys, and integration management.",
      action: "Coming Soon",
      href: null,
    },
  ];

  const recentActivity = [
    { text: "Account created", time: "Just now", icon: Activity },
    { text: "Welcome to SVMP Systems", time: "Just now", icon: Layers },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
        <div className="container flex items-center justify-between h-14">
          <div className="flex items-center gap-6">
            <button
              onClick={() => navigate("/")}
              className="font-heading text-lg font-semibold tracking-tight text-foreground hover:text-primary transition-colors"
            >
              SVMP Systems
            </button>
            <span className="hidden sm:block h-5 w-px bg-border" />
            <span className="hidden sm:block text-sm text-muted-foreground font-medium">
              Dashboard
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-md bg-muted/50">
              <div className="h-2 w-2 rounded-full bg-primary/60 animate-pulse-soft" />
              <span className="text-xs text-muted-foreground font-medium">
                {user?.email}
              </span>
            </div>
            <Button variant="ghost" size="sm" onClick={handleSignOut} className="text-muted-foreground hover:text-foreground">
              <LogOut className="h-4 w-4 mr-1.5" />
              <span className="hidden sm:inline">Sign out</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-8 md:py-12 space-y-10 animate-fade-in">
        {/* Welcome */}
        <section>
          <h1 className="text-3xl md:text-4xl font-heading font-semibold text-foreground tracking-tight">
            Welcome, {firstName}
          </h1>
          <p className="text-muted-foreground text-base mt-2 max-w-xl">
            Your command center for session validation, policy management, and AI governance tooling.
          </p>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group relative bg-card border border-border rounded-lg p-5 transition-all duration-300 hover:shadow-md hover:border-primary/20"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center justify-center w-9 h-9 rounded-md bg-muted">
                  <stat.icon className="h-4 w-4 text-primary" />
                </div>
                {stat.change && (
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                    {stat.change}
                  </span>
                )}
              </div>
              <p className="text-2xl font-heading font-semibold text-foreground tracking-tight">
                {stat.value}
              </p>
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* Main grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Quick Actions — 2 cols */}
          <section className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-heading font-semibold text-foreground">Quick Actions</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {quickActions.map((card) => (
                <div
                  key={card.title}
                  className={`group relative bg-card border border-border rounded-lg p-6 transition-all duration-300 hover:shadow-md hover:border-primary/20 ${
                    card.href ? "cursor-pointer" : ""
                  }`}
                  onClick={() => card.href && navigate(card.href)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted group-hover:bg-primary/10 transition-colors">
                      <card.icon className="h-5 w-5 text-primary" />
                    </div>
                    {card.href && (
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground/40 group-hover:text-primary transition-colors" />
                    )}
                  </div>
                  <h3 className="text-base font-heading font-semibold text-foreground mb-1.5">
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {card.description}
                  </p>
                  {card.href ? (
                    <span className="inline-flex items-center text-sm font-medium text-primary group-hover:underline underline-offset-4">
                      {card.action}
                      <ChevronRight className="h-3.5 w-3.5 ml-0.5" />
                    </span>
                  ) : (
                    <span className="text-xs text-muted-foreground/50 font-medium tracking-wide uppercase">
                      {card.action}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Sidebar */}
          <section className="space-y-6">
            {/* Activity */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                Recent Activity
              </h2>
              <div className="space-y-4">
                {recentActivity.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted shrink-0 mt-0.5">
                      <item.icon className="h-3.5 w-3.5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground">{item.text}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* System Status */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                System Status
              </h2>
              <div className="space-y-3">
                {[
                  { name: "Session Buffer", status: "Operational" },
                  { name: "Validation Gate", status: "Operational" },
                  { name: "Policy Engine", status: "Operational" },
                ].map((service) => (
                  <div key={service.name} className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{service.name}</span>
                    <div className="flex items-center gap-1.5">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span className="text-xs text-primary font-medium">{service.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                Resources
              </h2>
              <div className="space-y-2">
                {[
                  { label: "Documentation", href: "/research", icon: FileText },
                  { label: "About SVMP", href: "/about", icon: Eye },
                  { label: "Contact Support", href: "/contact", icon: Activity },
                ].map((link) => (
                  <button
                    key={link.label}
                    onClick={() => navigate(link.href)}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors group"
                  >
                    <link.icon className="h-4 w-4" />
                    <span className="flex-1 text-left">{link.label}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
