import Header from "./Header";
import Footer from "./Footer";

const PageLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1 relative z-[1]">{children}</main>
    <Footer />
  </div>
);

export default PageLayout;
