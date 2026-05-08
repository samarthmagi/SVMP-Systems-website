import { FormEvent, useState } from "react";
import YuzzahPageShell from "@/components/YuzzahPageShell";
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
    <YuzzahPageShell
      eyebrow="Contact / Request a demo"
      title="Bring one real workflow."
      subtitle="The best first conversation is specific. Tell us where the work gets messy, what has to stay controlled, and what a useful pilot would need to prove."
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.75fr)]">
        <article className="rounded-[1.25rem] border border-white/10 bg-yuzzah-dark-800/70 p-6 md:p-8 lg:p-10">
          <span className="mb-5 block font-yuzzah-mono text-xs uppercase tracking-[0.24em] text-yuzzah-gold">
            Request a demo
          </span>
          <h2 className="mb-4 font-yuzzah-serif text-4xl tracking-[-0.035em] text-white md:text-5xl">
            No sales deck first. Context first.
          </h2>
          <p className="max-w-2xl leading-relaxed text-white/58">
            Share the team, the workflow, and the rollout surface. We will use it to decide whether SVMP-CS or a
            related governed AI workflow is actually worth discussing.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2.5">
                <Label htmlFor="contact-name" className="font-yuzzah-mono text-[0.68rem] uppercase tracking-[0.18em] text-white/50">Name</Label>
                <Input
                  id="contact-name"
                  value={form.name}
                  onChange={(event) => handleChange("name", event.target.value)}
                  placeholder="Your name"
                  className="h-[52px] rounded-[0.35rem] border-white/10 bg-white/[0.035] text-white placeholder:text-white/26 focus-visible:ring-yuzzah-gold/40"
                />
              </div>

              <div className="space-y-2.5">
                <Label htmlFor="contact-email" className="font-yuzzah-mono text-[0.68rem] uppercase tracking-[0.18em] text-white/50">Work email</Label>
                <Input
                  id="contact-email"
                  type="email"
                  value={form.workEmail}
                  onChange={(event) => handleChange("workEmail", event.target.value)}
                  placeholder="name@company.com"
                  className="h-[52px] rounded-[0.35rem] border-white/10 bg-white/[0.035] text-white placeholder:text-white/26 focus-visible:ring-yuzzah-gold/40"
                />
              </div>

              <div className="space-y-2.5">
                <Label htmlFor="contact-company" className="font-yuzzah-mono text-[0.68rem] uppercase tracking-[0.18em] text-white/50">Company</Label>
                <Input
                  id="contact-company"
                  value={form.company}
                  onChange={(event) => handleChange("company", event.target.value)}
                  placeholder="Company name"
                  className="h-[52px] rounded-[0.35rem] border-white/10 bg-white/[0.035] text-white placeholder:text-white/26 focus-visible:ring-yuzzah-gold/40"
                />
              </div>

              <div className="space-y-2.5">
                <Label htmlFor="contact-team-size" className="font-yuzzah-mono text-[0.68rem] uppercase tracking-[0.18em] text-white/50">Team size</Label>
                <Select value={form.teamSize} onValueChange={(value) => handleChange("teamSize", value)}>
                  <SelectTrigger id="contact-team-size" className="h-[52px] rounded-[0.35rem] border-white/10 bg-white/[0.035] text-white focus:ring-yuzzah-gold/40">
                    <SelectValue placeholder="Select team size" />
                  </SelectTrigger>
                  <SelectContent className="border-white/10 bg-yuzzah-dark-700 text-white">
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
              <Label htmlFor="contact-rollout" className="font-yuzzah-mono text-[0.68rem] uppercase tracking-[0.18em] text-white/50">What should the rollout cover?</Label>
              <Textarea
                id="contact-rollout"
                value={form.message}
                onChange={(event) => handleChange("message", event.target.value)}
                placeholder="Tell us about the support workflow, channels, knowledge sources, or operational issues you want to improve."
                className="min-h-[180px] resize-y rounded-[0.35rem] border-white/10 bg-white/[0.035] text-white placeholder:text-white/26 focus-visible:ring-yuzzah-gold/40"
              />
            </div>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-end">
              {submitState && (
                <p
                  className={`max-w-md text-sm leading-relaxed ${
                    submitState.type === "success" ? "text-yuzzah-gold" : "text-red-300"
                  }`}
                >
                  {submitState.message}
                </p>
              )}
              <Button
                type="submit"
                disabled={submitting}
                className="btn-primary h-[58px] min-w-[190px] rounded-[0.35rem] border border-white/10 bg-white px-7 font-yuzzah-mono text-[0.68rem] uppercase tracking-[0.2em] text-yuzzah-dark hover:bg-[#f4f3ee]"
              >
                {submitting ? "Sending..." : "Request a demo"}
              </Button>
            </div>
          </form>
        </article>

        <div className="space-y-5">
          {[
            {
              label: "Before the call",
              text: "We read the workflow note first. If it is too broad, we narrow it to one support path, one rule, and one source of truth.",
            },
            {
              label: "Useful fit",
              text: "Best fit is a team that needs speed but cannot afford uncontrolled answers, hidden decisions, or vague handoffs.",
            },
            {
              label: "Reply",
              text: "You get a direct follow-up, not an automated nurture sequence.",
            },
          ].map((item, index) => (
            <article key={item.label} className="rounded-[1rem] border border-white/10 bg-white/[0.025] p-6">
              <div className="mb-5 flex items-center justify-between">
                <span className="font-yuzzah-mono text-[0.68rem] uppercase tracking-[0.22em] text-yuzzah-gold">
                  {item.label}
                </span>
                <span className="font-yuzzah-mono text-[0.68rem] text-white/25">0{index + 1}</span>
              </div>
              <p className="text-sm leading-relaxed text-white/58">{item.text}</p>
            </article>
          ))}

          <article className="rounded-[1rem] border border-yuzzah-gold/25 bg-yuzzah-gold/[0.04] p-6">
            <span className="mb-4 block font-yuzzah-mono text-[0.68rem] uppercase tracking-[0.22em] text-yuzzah-gold">
              Strongest request
            </span>
            <p className="text-sm leading-relaxed text-white/62">
              "We have this workflow, these sources, this escalation rule, and we need to know where AI can safely help."
            </p>
          </article>
        </div>
      </div>
    </YuzzahPageShell>
  );
};

export default Contact;
