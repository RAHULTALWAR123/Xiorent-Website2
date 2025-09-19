"use client";
import React from "react";

const CookiePolicy = () => {
    return (
        <div className="min-h-screen bg-transparent text-white-400 p-[120px]">
            {/* Title */}
            <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent">
                Cookies Policy
            </h1>

            {/* Last Updated */}
            <div className="mb-10 pl-[58px]">
                <p className="text-sm text-white mb-2">
                    Last Updated: <span className="font-medium">15/07/2025</span>
                </p>
                <div className="border-b border-white"></div>
            </div>



            <div className="max-w-4xl mx-auto space-y-10 leading-relaxed">
                {/* Intro */}
                <section>
                    <p>
                        At{" "}
                        <span className="font-semibold">
                            Xiorent Technologies Private Limited
                        </span>{" "}
                        (“we”, “our”, or “us”), we use cookies and similar tracking
                        technologies on our website to improve your browsing experience,
                        analyse website traffic, and understand how visitors interact with
                        our digital content. This Cookie Policy explains what cookies are,
                        how we use them, and your choices regarding their use.
                    </p>
                </section>

                {/* What Are Cookies */}
                <section>
                    <h2 className="text-xl font-bold text-purple-300 mb-3">
                        What Are Cookies?
                    </h2>
                    <p>
                        Cookies are small text files that are stored on your device
                        (computer, tablet, smartphone) when you visit a website. They help
                        us recognise your device, remember your preferences, and enhance
                        your user experience.
                    </p>
                    <p className="mt-4">Cookies can be classified as:</p>
                    <ul className="list-disc list-inside mt-2 space-y-2">
                        <li>
                            <span className="font-semibold">Session Cookies:</span> Temporary
                            cookies that are deleted when you close your browser.
                        </li>
                        <li>
                            <span className="font-semibold">Persistent Cookies:</span> Remain
                            on your device until deleted or expired.
                        </li>
                        <li>
                            <span className="font-semibold">First-Party Cookies:</span> Set
                            directly by our website.
                        </li>
                        <li>
                            <span className="font-semibold">Third-Party Cookies:</span> Set by
                            external services we use (e.g., analytics, advertising).
                        </li>
                    </ul>
                </section>

                {/* How We Use Cookies */}
                <section>
                    <h2 className="text-xl font-bold text-purple-300 mb-3">
                        How We Use Cookies
                    </h2>
                    <p>We use cookies for the following purposes:</p>
                    <ul className="list-disc list-inside mt-2 space-y-2">
                        <li>
                            <span className="font-semibold">Essential Cookies:</span> Required
                            for the website to function properly and cannot be disabled. They
                            include cookies that enable basic features such as page navigation
                            and secure access.
                        </li>
                        <li>
                            <span className="font-semibold">
                                Performance & Analytics Cookies:
                            </span>{" "}
                            Help us understand how users interact with our website by
                            collecting anonymous data (e.g., Google Analytics). This improves
                            website performance and user experience.
                        </li>
                        <li>
                            <span className="font-semibold">Functionality Cookies:</span>{" "}
                            Remember your preferences and settings (e.g., language).
                        </li>
                        <li>
                            <span className="font-semibold">
                                Advertising & Targeting Cookies:
                            </span>{" "}
                            Set by advertising partners to deliver relevant ads and measure
                            campaign effectiveness.
                        </li>
                    </ul>
                </section>

                {/* Third-Party Cookies */}
                <section>
                    <h2 className="text-xl font-bold text-purple-300 mb-3">
                        Third-Party Cookies
                    </h2>
                    <p>
                        We may use third-party services such as analytics or marketing tools
                        that place cookies on your device to collect data. These cookies are
                        subject to their respective third-party privacy policies.
                    </p>
                </section>

                {/* Managing Cookies */}
                <section>
                    <h2 className="text-xl font-bold text-purple-300 mb-3">
                        Managing Cookies
                    </h2>
                    <p>
                        You can manage or disable cookies through your browser settings at
                        any time. Please note that blocking certain cookies may impact the
                        functionality of our website.
                    </p>
                </section>

                {/* Updates */}
                <section>
                    <h2 className="text-xl font-bold text-purple-300 mb-3">
                        Updates to This Policy
                    </h2>
                    <p>
                        We may update this Cookie Policy from time to time to reflect
                        changes in technology or legal requirements. The “Last Updated” date
                        at the top of this page will indicate when it was last revised.
                    </p>
                </section>

                {/* Contact */}
                <section>
                    <h2 className="text-xl font-bold text-purple-300 mb-3">Contact Us</h2>
                    <p>
                        If you have any questions or concerns regarding this Cookie Policy,
                        please contact us at:
                    </p>
                    <p className="mt-2">
                        <span className="font-semibold">Email:</span>{" "}
                        <a
                            href="mailto:official@xiorent.com"
                            className="text-cyan-400 hover:underline"
                        >
                            official@xiorent.com
                        </a>
                        <br />
                        <span className="font-semibold">Registered Address:</span> 10/10,
                        Hridaypur, Kolkata, West Bengal, 700127, India
                    </p>
                </section>
            </div>
        </div>
    );
};

export default CookiePolicy;
