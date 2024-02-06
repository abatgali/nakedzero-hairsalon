import { Akshar } from "next/font/google";
import { getSEOTags } from "@/libs/seo";
import ClientLayout from "@/components/LayoutClient";
import config from "@/config";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

const font = Akshar({ subsets: ["latin"] });

export const viewport = {
  // Will use the primary color of your theme to show a nice theme color in the URL bar of supported browsers
  themeColor: config.colors.main,
  width: "device-width",
  initialScale: 1,
};

// This adds default SEO tags to all pages in our app.
// You can override them in each page passing params to getSOTags() function.
export const metadata = getSEOTags();

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme={config.colors.theme} className={font.className}>
      {config.domainName && (
        <head>
          <GoogleAnalytics
            gaId="G-02E4QZ8T8B"
          />
          <link rel="canonical" href="https://www.nakedzerosalon.com/" />
        </head>
      )}

      <body>
        {/* ClientLayout contains all the client wrappers (Crisp chat support, toast messages, tooltips, etc.) */}
        <ClientLayout>
          <Nav />
          {children}
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}
