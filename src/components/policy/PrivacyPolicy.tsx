// src/app/privacy/page.tsx
"use client";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br bg-transparent text-gray-100 px-[120px] py-[120px]">
      {/* Heading */}
       <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent">
      Privacy Policy
    </h1>

       <p className="mb-4 mt-6">
          <strong>Effective Date:</strong> 15/07/2025
        </p>
        <p className="mb-2">
          <strong>Company Name:</strong> Xiorent Technologies Private Limited
        </p>
        <p className="mb-2">
          <strong>Registered Address:</strong> 10/10, Hindustan Kolkata, West Bengal, 700127, India
        </p>
        <p className="mb-6">
          <strong>Email:</strong>{" "}
          <a href="mailto:info@xiorent.com" className="text-blue-600 underline">
            info@xiorent.com
          </a>
          <div className="border-b border-white mb-4"></div>
        </p>
        

      <div className="max-w-5xl mx-auto space-y-12 leading-relaxed ">
        {/* Intro */}
        <section>
          <p>
            At <strong>Xiorent Technologies Private Limited</strong> ("we", "us",
            or "our"), we are committed to protecting the privacy and personal
            data of our users, clients, and visitors. This Privacy Policy outlines
            how we collect, use, disclose, and protect your information when you
            interact with our website, services, or communications. By using our
            services, you agree to the terms of this Privacy Policy.
          </p>
        </section>

        {/* Information We Collect */}
        <section>
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">
            Information We Collect
          </h2>
          <p>We may collect the following types of information:</p>
          <ul className="list-disc ml-6 mt-3 space-y-2">
            <li>
              <strong>Personal Information:</strong> Name, email address, phone
              number, company details, billing/payment details (if applicable).
            </li>
            <li>
              <strong>Technical Information:</strong> IP address, browser type
              and version, device info, operating system, location data (if
              enabled), log files, cookies, and web beacons.
            </li>
          </ul>
        </section>

        {/* How We Use Your Information */}
        <section>
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">
            How We Use Your Information
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>To provide, maintain, and improve our services</li>
            <li>To respond to inquiries and provide customer support</li>
            <li>To personalize user experience</li>
            <li>
              To send updates, offers, or marketing content (with your consent)
            </li>
            <li>To manage contracts, payments, or project collaboration</li>
            <li>
              To analyze usage data and improve website performance
            </li>
            <li>To comply with legal obligations and prevent fraud</li>
          </ul>
        </section>

        {/* Sharing Info */}
        <section>
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">
            Sharing Your Information
          </h2>
          <p>
            We do not sell your personal data. However, we may share your data
            with:
          </p>
          <ul className="list-disc ml-6 mt-3 space-y-2">
            <li>Trusted third-party service providers</li>
            <li>Legal authorities if required by law</li>
            <li>
              Internal team members who require access for operational purposes
            </li>
          </ul>
        </section>

        {/* Cookies */}
        <section>
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">
            Cookies and Tracking Technologies
          </h2>
          <p>
            We use cookies and similar technologies to enhance user experience,
            gather analytics, and personalize content. You can manage cookie
            preferences through your browser settings. For detailed information,
            refer to our <a href="/cookie" className="text-cyan-400">Cookie Policy</a>.
          </p>
        </section>

        {/* Data Retention */}
        <section>
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">
            Data Retention
          </h2>
          <p>
            We retain personal data only as long as necessary to fulfill the
            purposes outlined in this policy or as required by applicable law.
            Data is securely deleted or anonymized when no longer needed.
          </p>
        </section>

        {/* Data Security */}
        <section>
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">
            Data Security
          </h2>
          <p>
            We implement security measures to protect your data from
            unauthorized access, loss, misuse, or alteration. However, no method
            of transmission over the Internet or electronic storage is 100%
            secure.
          </p>
        </section>

        {/* Your Rights */}
        <section>
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">
            Your Rights
          </h2>
          <p>Depending on applicable laws, you may have the right to:</p>
          <ul className="list-disc ml-6 mt-3 space-y-2">
            <li>Access personal data we hold about you</li>
            <li>Request correction or deletion of your data</li>
            <li>Withdraw consent at any time</li>
            <li>Object to processing of your data</li>
            <li>
              Lodge a complaint with a data protection authority
            </li>
          </ul>
          <p className="mt-3">
            You can exercise these rights by contacting us at{" "}
            <a href="mailto:official@xiorent.com" className="text-cyan-400">
              official@xiorent.com
            </a>
            .
          </p>
        </section>

        {/* Third Party Links */}
        <section>
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">
            Third-Party Links
          </h2>
          <p>
            Our website may contain links to external websites. We are not
            responsible for the privacy practices of third-party sites. Please
            review their policies before sharing data.
          </p>
        </section>

        {/* Children */}
        <section>
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">
            Children’s Privacy
          </h2>
          <p>
            Our services are not intended for individuals under 18. We do not
            knowingly collect personal data from minors. If you believe we have
            unintentionally collected such data, please contact us for prompt
            removal.
          </p>
        </section>

        {/* Updates */}
        <section>
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">
            Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy periodically. The latest version
            will always be available on our website with the updated effective
            date.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">
            Contact Us
          </h2>
          <p>
            If you have questions regarding this Privacy Policy, contact us at:{" "}
          </p>
          <p className="mt-2">
            Email:{" "}
            <a href="mailto:official@xiorent.com" className="text-cyan-400">
              official@xiorent.com
            </a>
            <br />
            Address: 10/10, Hridaypur, Kolkata, West Bengal, 700127, India
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
