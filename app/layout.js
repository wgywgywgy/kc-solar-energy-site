import "./globals.css";

import { LangProvider } from "@/components/lang-provider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata = {
  title: "KC Solar Energy LLC",
  description: "Photovoltaic power generation and energy storage solutions from KC Solar Energy LLC."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <LangProvider>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </LangProvider>
      </body>
    </html>
  );
}
