import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: `Terms and Conditions | ${config.appName}`,
  canonicalUrlRelative: "/tos",
});

const TOS = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6 pt-24">
          Terms and Conditions{" "}
          <span className="font-light"> {config.appName}</span>
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Last Updated: February 6, 2024

Welcome to NakedzerO Hair Salon's Terms & Services. By using our website, https://nakedzerosalon.com | muilesam.com, you agree to comply with and be bound by the following terms. If you do not agree with these terms, please refrain from using our services.

1. Description of Services

NakedzerO Hair Salon provides a variety of services, including but not limited to haircuts, color, styling, skin care products, and treatments.

2. User Data Collection

When you book an appointment with NakedzerO Hair Salon, we collect the following user data:

Name
Email address
Phone number

3. Non-Personal Data Collection

We use web cookies to collect non-personal data to enhance user experience and improve our services.

4. Link to Privacy Policy

Please review our Privacy Policy at Privacy Policy to understand how we collect, use, and protect your personal and non-personal information.

5. Governing Law

These Terms & Services are governed by the laws of the United States of America.

6. Updates to the Terms

Users are encouraged to regularly check our website for updates to the Terms & Services. Continued use of our services after any modifications indicates your acceptance of the updated terms.

If you have any questions or concerns regarding these terms, please contact us at nakedzerosalon@gmail.com.

Thank you for choosing NakedzerO Hair Salon. We appreciate your cooperation with our Terms & Services.




`}
        </pre>
      </div>
    </main>
  );
};

export default TOS;
