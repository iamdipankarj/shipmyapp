import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
// import { BannerSimple } from "@/components/banner-simple";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {/* <BannerSimple />  */}
      {children}
      <Footer />
    </>
  );
}
