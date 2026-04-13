import PageLayout from "./PageLayout";

interface PageShellProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

const PageShell = ({ title, subtitle, children }: PageShellProps) => (
  <PageLayout>
    <section className="paper-hero px-0 py-16 md:py-20">
      <div className="container max-w-[1160px]">
        <p className="meta-line mb-4">{title}</p>
        <h1 className="display-title max-w-4xl text-6xl text-foreground md:text-7xl lg:text-8xl">{title}</h1>
        {subtitle && (
          <p className="mt-5 max-w-3xl text-lg text-muted-foreground leading-relaxed md:text-xl">{subtitle}</p>
        )}
      </div>
    </section>
    {children && (
      <section className="px-0 py-16 md:py-20">
        <div className="container max-w-[1160px]">{children}</div>
      </section>
    )}
  </PageLayout>
);

export default PageShell;
