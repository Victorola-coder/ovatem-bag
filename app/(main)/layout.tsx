import { Animation, SiteFooter, SiteHeader } from "@/app/components/global";

export default function MainSiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Animation>
      <div className="min-h-screen bg-background">
        <SiteHeader />
        {children}
        <SiteFooter />
      </div>
    </Animation>
  );
}
