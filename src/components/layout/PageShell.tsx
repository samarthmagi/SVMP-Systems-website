import PageLayout from "./PageLayout";

interface PageShellProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

const PageShell = ({ title, subtitle, children }: PageShellProps) => (
  <PageLayout>
    <section className="py-24 md:py-32">
      <div className="container max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-heading font-semibold text-foreground mb-4">{title}</h1>
        {subtitle && (
          <p className="text-lg text-muted-foreground leading-relaxed">{subtitle}</p>
        )}
        {children && <div className="mt-12">{children}</div>}
      </div>
    </section>
  </PageLayout>
);

export default PageShell;
