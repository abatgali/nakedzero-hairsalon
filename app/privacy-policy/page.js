import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: `Salon Policies & Privacy`,
  canonicalUrlRelative: "/privacy-policy",
});

const PrivacyPolicy = () => {
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
          </svg>{" "}
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6 pt-24">
          Privacy Policy <span className="font-light">{config.appName}</span>
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap pb-24"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Last Updated: February 6, 2024

Welcome to NakedzerO Hair Salon's Privacy Policy. This document outlines how we collect, use, and protect the personal and non-personal information obtained through our website, https://nakedzerosalon.com | Muilesam.com.

1. Information We Collect

We collect the following user data when you book an appointment:

Name
Email address
Phone number
Additionally, we use web cookies to gather non-personal data.

2. Purpose of Data Collection

We use the collected information for the following purposes:

Appointment processing
Customer support
Updates related to our services

3. Data Sharing

We do not share any user data with third parties. Your information is confidential and remains within NakedzerO Hair Salon.

4. Children's Privacy

We do not knowingly collect any data from individuals under the age of 18. Our services are intended for adults.

5. Updates to the Privacy Policy

Users are encouraged to check our website for updates to the Privacy Policy. We may revise this policy periodically to reflect any changes in our practices.

6. Contact Information

If you have any questions or concerns regarding this Privacy Policy, please contact us at nakedzerosalon@gmail.com.

Thank you for trusting NakedzerO Hair Salon with your information. Your privacy is important to us.`}
        </pre>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
