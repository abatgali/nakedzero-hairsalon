import config from "@/config";

// These are all the SEO tags you can add to your pages.
// It prefills data with default title/description/OG, etc.. and you can cusotmize it for each page.
// It's already added in the root layout.js so you don't have to add it to every pages
// But I recommend to set the canonical URL for each page (export const metadata = getSEOTags({canonicalUrlRelative: "/"});)
// See https://shipfa.st/docs/features/seo
export const getSEOTags = ({
  title,
  description,
  keywords,
  openGraph,
  canonicalUrlRelative,
  extraTags,
} = {}) => {
  return {
    // up to 50 characters (what does your app do for the user?) > your main should be here
    title: title || config.appName,
    // up to 160 characters (how does your app help the user?)
    description: description || config.appDescription,
    // some keywords separated by commas. by default it will be your app name
    keywords: keywords || [config.appName],
    applicationName: config.appName,
    // set a base URL prefix for other fields that require a fully qualified URL (.e.g og:image: og:image: 'https://yourdomain.com/share.png' => '/share.png')
    metadataBase: new URL(
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/"
        : `https://${config.domainName}/`
    ),

    openGraph: {
      title: openGraph?.title || config.appName,
      description: openGraph?.description || config.appDescription,
      url: openGraph?.url || `https://${config.domainName}/`,
      siteName: openGraph?.title || config.appName,
      // If you add an opengraph-image.(jpg|jpeg|png|gif) image to the /app folder, you don't need the code below
      // images: [
      //   {
      //     url: `https://${config.domainName}/share.png`,
      //     width: 1200,
      //     height: 660,
      //   },
      // ],
      locale: "en_US",
      type: "website",
    },

    twitter: {
      title: openGraph?.title || config.appName,
      description: openGraph?.description || config.appDescription,
      // If you add an twitter-image.(jpg|jpeg|png|gif) image to the /app folder, you don't need the code below
      // images: [openGraph?.image || defaults.og.image],
      card: "summary_large_image",
      creator: "@AnantBatgali",
    },

    // If a canonical URL is given, we add it. The metadataBase will turn the relative URL into a fully qualified URL
    ...(canonicalUrlRelative && {
      alternates: { canonical: canonicalUrlRelative },
    }),

    // If you want to add extra tags, you can pass them here
    ...extraTags,
  };
};

// Structured Data for Rich Results on Google.
// HairSalon is a recognized LocalBusiness type and unlocks rich results in local search.
// https://schema.org/HairSalon
export const renderSchemaTags = () => {
  return (
    <script
      type="application/ld+json"
      async=""
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HairSalon",
          "@id": `https://${config.domainName}`,
          name: config.appName,
          description: config.appDescription,
          image: `https://${config.domainName}/opengraph-image.png`,
          logo: `https://${config.domainName}/icon.png`,
          url: `https://${config.domainName}/`,
          telephone: "+1-317-701-7294",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "8319 US 31 S",
            addressLocality: "Indianapolis",
            addressRegion: "IN",
            postalCode: "46227",
            addressCountry: "US",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 39.6452,
            longitude: -86.1325,
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
              opens: "10:00",
              closes: "20:00",
            },
          ],
          areaServed: [
            { "@type": "City", name: "Indianapolis" },
            { "@type": "City", name: "Greenwood" },
          ],
          sameAs: [
            "https://www.instagram.com/nakedzerohairsalon/",
            "https://www.facebook.com/Nakedzero.com.uk/",
          ],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "22",
          },
        }),
      }}
    ></script>
  );
};
