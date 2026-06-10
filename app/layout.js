import { Akshar } from "next/font/google";
import { getSEOTags, renderSchemaTags } from "@/libs/seo";
import config from "@/config";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

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
      <body className="pb-14 md:pb-0">
        {renderSchemaTags()}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17686693077"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17686693077');
          `}
        </Script>
        <Nav />
        {children}
        <Footer />
        <MobileActionBar />
        <GoogleAnalytics gaId="G-02E4QZ8T8B" />
      </body>
    </html>
  );
}
