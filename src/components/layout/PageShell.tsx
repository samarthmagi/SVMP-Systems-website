import PageLayout from "./PageLayout";

interface PageShellProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

const PageShell = ({ title, subtitle, children }: PageShellProps) => (
  <PageLayout>
    <section className="paper-hero soft-grid px-0 py-14 md:py-18">
      <div className="container">
        <p className="meta-line mb-4">{title}</p>
        <h1 className="display-title max-w-5xl text-5xl text-foreground md:text-7xl lg:text-8xl">{title}</h1>
        {subtitle && (
          <p className="mt-5 max-w-3xl text-lg text-muted-foreground leading-relaxed md:text-xl">{subtitle}</p>
        )}
      </div>
    </section>
    {children && (
      <section className="px-0 py-16 md:py-20">
        <div className="container max-w-5xl">{children}</div>
      </section>
    )}
  </PageLayout>
);

export default PageShell;
