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
  TrendingUp,
  TrendingDown,
} from "lucide-react";
import { useState } from "react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// Sample data generators
const sessionsOverTime = [
  { date: "Mon", sessions: 124, validated: 118, blocked: 6 },
  { date: "Tue", sessions: 156, validated: 149, blocked: 7 },
  { date: "Wed", sessions: 189, validated: 181, blocked: 8 },
  { date: "Thu", sessions: 201, validated: 192, blocked: 9 },
  { date: "Fri", sessions: 178, validated: 171, blocked: 7 },
  { date: "Sat", sessions: 95, validated: 91, blocked: 4 },
  { date: "Sun", sessions: 87, validated: 84, blocked: 3 },
];

const apiCallsData = [
  { hour: "00:00", calls: 42 },
  { hour: "04:00", calls: 18 },
  { hour: "08:00", calls: 89 },
  { hour: "10:00", calls: 156 },
  { hour: "12:00", calls: 201 },
  { hour: "14:00", calls: 178 },
  { hour: "16:00", calls: 234 },
  { hour: "18:00", calls: 189 },
  { hour: "20:00", calls: 134 },
  { hour: "22:00", calls: 67 },
];

const latencyData = [
  { date: "Mon", p50: 12, p95: 38, p99: 67 },
  { date: "Tue", p50: 11, p95: 35, p99: 62 },
  { date: "Wed", p50: 14, p95: 42, p99: 71 },
  { date: "Thu", p50: 10, p95: 31, p99: 55 },
  { date: "Fri", p50: 13, p95: 39, p99: 64 },
  { date: "Sat", p50: 9, p95: 28, p99: 48 },
  { date: "Sun", p50: 8, p95: 25, p99: 44 },
];

const policyDistribution = [
  { name: "Content Filter", value: 35 },
  { name: "Rate Limit", value: 25 },
  { name: "Auth Gate", value: 20 },
  { name: "Data Mask", value: 15 },
  { name: "Audit Log", value: 5 },
];

const CHART_COLORS = {
  primary: "hsl(38, 68%, 31%)",
  secondary: "hsl(38, 55%, 46%)",
  muted: "hsl(38, 30%, 76%)",
  accent: "hsl(36, 30%, 60%)",
  light: "hsl(38, 30%, 90%)",
};

const PIE_COLORS = [
  CHART_COLORS.primary,
  CHART_COLORS.secondary,
  CHART_COLORS.accent,
  CHART_COLORS.muted,
  CHART_COLORS.light,
];

type TimeRange = "24h" | "7d" | "30d";

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-card border border-border rounded-lg px-3 py-2 shadow-md">
      <p className="text-xs font-medium text-foreground mb-1">{label}</p>
      {payload.map((entry: any, i: number) => (
        <p key={i} className="text-xs text-muted-foreground">
          <span className="inline-block w-2 h-2 rounded-full mr-1.5" style={{ backgroundColor: entry.color }} />
          {entry.name}: <span className="font-medium text-foreground">{entry.value}</span>
        </p>
      ))}
    </div>
  );
};

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [timeRange, setTimeRange] = useState<TimeRange>("7d");

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const firstName = user?.email?.split("@")[0] ?? "there";

  const stats = [
    { label: "Sessions Validated", value: "1,030", change: "+12.3%", trend: "up" as const, icon: Shield },
    { label: "API Calls (Today)", value: "1,308", change: "+8.1%", trend: "up" as const, icon: Zap },
    { label: "Avg Latency", value: "11ms", change: "-4.2%", trend: "down" as const, icon: Clock },
    { label: "Active Policies", value: "5", change: null, trend: null, icon: Lock },
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
    { text: "Policy 'Content Filter v2' updated", time: "2 min ago", icon: Shield },
    { text: "234 sessions validated", time: "1 hour ago", icon: Activity },
    { text: "New API key generated", time: "3 hours ago", icon: Zap },
    { text: "Rate limit policy triggered", time: "5 hours ago", icon: Lock },
    { text: "Account created", time: "1 day ago", icon: Layers },
  ];

  const timeRangeOptions: { label: string; value: TimeRange }[] = [
    { label: "24h", value: "24h" },
    { label: "7d", value: "7d" },
    { label: "30d", value: "30d" },
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

      <main className="container py-8 md:py-12 space-y-8 animate-fade-in">
        {/* Welcome + time range */}
        <section className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-heading font-semibold text-foreground tracking-tight">
              Welcome, {firstName}
            </h1>
            <p className="text-muted-foreground text-base mt-2 max-w-xl">
              Your command center for session validation, policy management, and AI governance tooling.
            </p>
          </div>
          <div className="flex items-center gap-1 bg-muted/50 rounded-lg p-1">
            {timeRangeOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setTimeRange(opt.value)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                  timeRange === opt.value
                    ? "bg-card text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
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
                  <span className={`inline-flex items-center gap-0.5 text-xs font-medium px-2 py-0.5 rounded-full ${
                    stat.trend === "up" 
                      ? "text-primary bg-primary/10" 
                      : "text-primary bg-primary/10"
                  }`}>
                    {stat.trend === "up" ? (
                      <TrendingUp className="h-3 w-3" />
                    ) : (
                      <TrendingDown className="h-3 w-3" />
                    )}
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

        {/* Charts Row 1 */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Sessions Over Time */}
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                  Session Validation
                </h3>
                <p className="text-xs text-muted-foreground mt-1">Validated vs blocked sessions</p>
              </div>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: CHART_COLORS.primary }} />
                  Validated
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: CHART_COLORS.muted }} />
                  Blocked
                </span>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={sessionsOverTime}>
                <defs>
                  <linearGradient id="gradValidated" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={CHART_COLORS.primary} stopOpacity={0.2} />
                    <stop offset="100%" stopColor={CHART_COLORS.primary} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(36, 30%, 90%)" vertical={false} />
                <XAxis dataKey="date" tick={{ fontSize: 11, fill: "hsl(30, 10%, 40%)" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: "hsl(30, 10%, 40%)" }} axisLine={false} tickLine={false} width={35} />
                <Tooltip content={<CustomTooltip />} />
                <Area type="monotone" dataKey="validated" stroke={CHART_COLORS.primary} fill="url(#gradValidated)" strokeWidth={2} name="Validated" />
                <Area type="monotone" dataKey="blocked" stroke={CHART_COLORS.muted} fill="transparent" strokeWidth={1.5} strokeDasharray="4 4" name="Blocked" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* API Calls */}
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                  API Traffic
                </h3>
                <p className="text-xs text-muted-foreground mt-1">Requests per time window</p>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={apiCallsData} barSize={24}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(36, 30%, 90%)" vertical={false} />
                <XAxis dataKey="hour" tick={{ fontSize: 10, fill: "hsl(30, 10%, 40%)" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: "hsl(30, 10%, 40%)" }} axisLine={false} tickLine={false} width={35} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="calls" fill={CHART_COLORS.primary} radius={[3, 3, 0, 0]} name="Calls" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Charts Row 2 */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Latency */}
          <div className="lg:col-span-2 bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                  Response Latency
                </h3>
                <p className="text-xs text-muted-foreground mt-1">P50 / P95 / P99 percentiles (ms)</p>
              </div>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-0.5 rounded" style={{ backgroundColor: CHART_COLORS.primary }} />
                  P50
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-0.5 rounded" style={{ backgroundColor: CHART_COLORS.secondary }} />
                  P95
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-0.5 rounded" style={{ backgroundColor: CHART_COLORS.muted }} />
                  P99
                </span>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={latencyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(36, 30%, 90%)" vertical={false} />
                <XAxis dataKey="date" tick={{ fontSize: 11, fill: "hsl(30, 10%, 40%)" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: "hsl(30, 10%, 40%)" }} axisLine={false} tickLine={false} width={35} unit="ms" />
                <Tooltip content={<CustomTooltip />} />
                <Line type="monotone" dataKey="p50" stroke={CHART_COLORS.primary} strokeWidth={2} dot={false} name="P50" />
                <Line type="monotone" dataKey="p95" stroke={CHART_COLORS.secondary} strokeWidth={1.5} dot={false} name="P95" />
                <Line type="monotone" dataKey="p99" stroke={CHART_COLORS.muted} strokeWidth={1.5} strokeDasharray="4 4" dot={false} name="P99" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Policy Distribution */}
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                Policy Distribution
              </h3>
              <p className="text-xs text-muted-foreground mt-1">Active policies by type</p>
            </div>
            <ResponsiveContainer width="100%" height={160}>
              <PieChart>
                <Pie
                  data={policyDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={45}
                  outerRadius={70}
                  paddingAngle={3}
                  dataKey="value"
                  stroke="none"
                >
                  {policyDistribution.map((_entry, index) => (
                    <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-1.5 mt-2">
              {policyDistribution.map((item, i) => (
                <div key={item.name} className="flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1.5 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: PIE_COLORS[i] }} />
                    {item.name}
                  </span>
                  <span className="font-medium text-foreground">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Quick Actions — 2 cols */}
          <section className="lg:col-span-2 space-y-4">
            <h2 className="text-lg font-heading font-semibold text-foreground">Quick Actions</h2>
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
