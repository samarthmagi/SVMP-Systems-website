import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = () => (
  <PageLayout>
    <section className="py-24 md:py-32 flex items-center justify-center">
      <div className="w-full max-w-sm space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-heading font-semibold text-foreground mb-2">Sign in</h1>
          <p className="text-sm text-muted-foreground">Access your SVMP dashboard.</p>
        </div>
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-foreground">Email</Label>
            <Input id="email" type="email" placeholder="you@company.com" className="bg-card" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium text-foreground">Password</Label>
            <Input id="password" type="password" placeholder="••••••••" className="bg-card" />
          </div>
          <Button type="submit" className="w-full">Continue</Button>
        </form>
      </div>
    </section>
  </PageLayout>
);

export default Login;
