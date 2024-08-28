import { Akshar } from "next/font/google";
import { getSEOTags } from "@/libs/seo";
import Head from "next/head";
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
        <Head>
          <GoogleAnalytics
            gaId="G-02E4QZ8T8B"
          />
          <meta name="trustpilot-one-time-domain-verification-id" content="e923b667-308d-403b-9bd3-421bc2de0874"/>
        </Head>
      )}
      <body>
          <Nav />
          {children}
          <Footer />
      </body>
    </html>
  );
}
