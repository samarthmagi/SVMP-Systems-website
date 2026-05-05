import { ArrowRight } from "lucide-react";
import PageShell from "@/components/layout/PageShell";
import { Button } from "@/components/ui/button";

const CS = () => (
  <PageShell
    title="SVMP-CS"
    subtitle="Governed AI customer support for WhatsApp-first businesses. SVMP-CS answers from approved knowledge, escalates unclear cases to humans, and gives teams a private portal to review sessions, metrics, integrations, and settings."
  >
    <div className="grid gap-6 md:grid-cols-2">
      <article className="focus-card p-6 md:p-8">
        <span className="meta-line mb-4 block">Approved Knowledge</span>
        <h3 className="mb-3 font-heading text-3xl font-semibold text-foreground">Answer from approved information, not uncontrolled guesses.</h3>
        <p className="text-muted-foreground">
          SVMP-CS is built for support teams that want faster WhatsApp responses without giving up control. It uses approved knowledge, brand rules, and confidence checks before an answer is sent.
        </p>
      </article>
      <article className="focus-card p-6 md:p-8">
        <span className="meta-line mb-4 block">Escalation & Oversight</span>
        <h3 className="mb-3 font-heading text-3xl font-semibold text-foreground">Escalate unclear cases instead of forcing the AI to improvise.</h3>
        <p className="text-muted-foreground">
          When confidence is low or the request falls outside approved knowledge, SVMP-CS routes the conversation to a human. Teams can then review sessions, governance decisions, and support quality through a private operational portal.
        </p>
      </article>
      <article className="tacet-panel md:col-span-2">
        <div className="grid gap-8 p-6 md:grid-cols-[1.1fr,0.9fr] md:p-8">
          <div>
            <span className="meta-line mb-4 block">Positioning</span>
            <h3 className="mb-3 font-heading text-3xl font-semibold text-foreground md:text-4xl">Operational support software for businesses that need speed with control.</h3>
            <p className="max-w-3xl text-muted-foreground">
              SVMP-CS is not a generic chatbot and it is not a demo toy. It is governed customer support software designed to reduce repetitive support work on WhatsApp while preserving visibility, auditability, brand consistency, and human fallback when needed.
            </p>
            <div className="mt-6">
              <Button asChild size="lg" className="rounded-none px-6">
                <a href="https://svmp-cs.vercel.app/" target="_blank" rel="noreferrer">
                  Visit SVMP-CS <ArrowRight aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>
          <div className="grid gap-3">
            {["Knowledge control", "Brand voice", "Session review", "Metrics", "Integrations", "Settings"].map((item) => (
              <div key={item} className="quiet-pill">
                {item}
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  </PageShell>
);

export default CS;
