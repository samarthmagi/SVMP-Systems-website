import { FormEvent, useState } from "react";
import PageShell from "@/components/layout/PageShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

type FormState = {
  name: string;
  workEmail: string;
  company: string;
  teamSize: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  workEmail: "",
  company: "",
  teamSize: "",
  message: "",
};

const teamSizeOptions = ["1-10", "11-25", "26-50", "51-200", "201+"];

const Contact = () => {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const { toast } = useToast();

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    if (submitState) setSubmitState(null);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name.trim() || !form.workEmail.trim() || !form.company.trim() || !form.teamSize.trim() || !form.message.trim()) {
      toast({
        title: "Complete the form",
        description: "Please fill in each field so we have enough context to respond well.",
        variant: "destructive",
      });
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.workEmail.trim())) {
      toast({
        title: "Use a valid work email",
        description: "Please check the email address and try again.",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("/api/request-demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = (await response.json()) as { success?: boolean; message?: string; error?: string };

      if (!response.ok || !result.success) {
        const description = result.error || result.message || "We couldn't send the request just now. Please try again.";
        setSubmitState({ type: "error", message: description });
        toast({
          title: "Submission failed",
          description,
          variant: "destructive",
        });
        return;
      }

      setForm(initialState);
      setSubmitState({
        type: "success",
        message: result.message || "Your request has been sent. We'll follow up shortly.",
      });
      toast({
        title: "Request sent",
        description: result.message || "Your request has been sent. We'll follow up shortly.",
      });
    } catch {
      const description = "We couldn't send the request just now. Please try again.";
      setSubmitState({ type: "error", message: description });
      toast({
        title: "Submission failed",
        description,
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <PageShell
      title="Contact"
      subtitle="SVMP Systems builds practical AI products and systems for real operational workflows. This is the right place to start a conversation about SVMP CS or related support, knowledge, and governance workflows."
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.85fr)]">
        <article className="tacet-panel p-6 md:p-8">
          <span className="meta-line mb-4 block">Request a demo</span>
          <h2 className="mb-3 font-heading text-4xl font-semibold text-foreground md:text-5xl">Tell us about the team.</h2>
          <p className="max-w-2xl text-muted-foreground">
            Share a little context and we&apos;ll use it to shape the first conversation around SVMP CS, rollout priorities, and the workflows you want to improve.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2.5">
                <Label htmlFor="contact-name" className="text-sm font-medium text-foreground">Name</Label>
                <Input
                  id="contact-name"
                  value={form.name}
                  onChange={(event) => handleChange("name", event.target.value)}
                  placeholder="Your name"
                  className="h-12 rounded-none border-[var(--line)] bg-background/70"
                />
              </div>

              <div className="space-y-2.5">
                <Label htmlFor="contact-email" className="text-sm font-medium text-foreground">Work email</Label>
                <Input
                  id="contact-email"
                  type="email"
                  value={form.workEmail}
                  onChange={(event) => handleChange("workEmail", event.target.value)}
                  placeholder="name@company.com"
                  className="h-12 rounded-none border-[var(--line)] bg-background/70"
                />
              </div>

              <div className="space-y-2.5">
                <Label htmlFor="contact-company" className="text-sm font-medium text-foreground">Company</Label>
                <Input
                  id="contact-company"
                  value={form.company}
                  onChange={(event) => handleChange("company", event.target.value)}
                  placeholder="Company name"
                  className="h-12 rounded-none border-[var(--line)] bg-background/70"
                />
              </div>

              <div className="space-y-2.5">
                <Label htmlFor="contact-team-size" className="text-sm font-medium text-foreground">Team size</Label>
                <Select value={form.teamSize} onValueChange={(value) => handleChange("teamSize", value)}>
                  <SelectTrigger id="contact-team-size" className="h-12 rounded-none border-[var(--line)] bg-background/70">
                    <SelectValue placeholder="Select team size" />
                  </SelectTrigger>
                  <SelectContent>
                    {teamSizeOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2.5">
              <Label htmlFor="contact-rollout" className="text-sm font-medium text-foreground">What should the rollout cover?</Label>
              <Textarea
                id="contact-rollout"
                value={form.message}
                onChange={(event) => handleChange("message", event.target.value)}
                placeholder="Tell us about the support workflow, channels, knowledge sources, or operational issues you want to improve."
                className="min-h-[170px] resize-y rounded-none border-[var(--line)] bg-background/70"
              />
            </div>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-end">
              {submitState && (
                <p
                  className={`max-w-md text-sm leading-relaxed ${
                    submitState.type === "success" ? "text-foreground" : "text-destructive"
                  }`}
                >
                  {submitState.message}
                </p>
              )}
              <Button
                type="submit"
                disabled={submitting}
                className="h-12 min-w-[180px] rounded-none bg-foreground px-6 text-background hover:bg-foreground/90"
              >
                {submitting ? "Sending..." : "Request a demo"}
              </Button>
            </div>
          </form>
        </article>

        <div className="space-y-6">
          <article className="focus-card p-6 md:p-8">
            <span className="meta-line mb-4 block">What happens next</span>
            <h3 className="mb-3 font-heading text-3xl font-semibold text-foreground">A practical first conversation.</h3>
            <p className="text-muted-foreground">
              We use the details you share to understand the support workflow, the operating constraints, and where SVMP CS could create the most useful leverage.
            </p>
          </article>

          <article className="focus-card p-6 md:p-8">
            <span className="meta-line mb-4 block">Best for</span>
            <h3 className="mb-3 font-heading text-3xl font-semibold text-foreground">Teams that want better support operations, not just more automation.</h3>
            <p className="text-muted-foreground">
              The page is built for businesses exploring WhatsApp-first support, approved knowledge workflows, governed AI responses, and private operational oversight through SVMP CS.
            </p>
          </article>
        </div>
      </div>
    </PageShell>
  );
};

export default Contact;
