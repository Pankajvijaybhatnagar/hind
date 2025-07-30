import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="py-16 bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8 md:p-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Privacy Policy</h2>

        <div className="space-y-6 text-gray-700 text-base leading-relaxed">

          <div>
            <h3 className="text-xl font-semibold mb-2">1. Introduction</h3>
            <p>Hindustan Council of Secondary Education ("we", "our", "us") operates www.hcse.org.in (the “Site”).</p>
            <p>We are committed to protecting your personal information and respecting your privacy.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">2. Information We Collect</h3>
            <h4 className="font-medium mt-2">a) Personal Data You Provide Directly:</h4>
            <ul className="list-disc list-inside">
              <li>Contact Information: Name, email, phone, educational details submitted through forms.</li>
              <li>Course Registration: Name, address, email, phone.</li>
              <li>Newsletter Subscriptions: Email address and name.</li>
              <li>Certificate Verification: Student’s name, certificate number, etc.</li>
            </ul>
            <h4 className="font-medium mt-4">b) Automatically Collected Data:</h4>
            <ul className="list-disc list-inside">
              <li>Usage Data: Pages visited, IP address, browser info, timestamps.</li>
              <li>Cookies & Tracking: Used to customize your experience.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">3. How We Use Your Information</h3>
            <ul className="list-disc list-inside">
              <li>Respond to enquiries and process registrations.</li>
              <li>Verify certificates and manage subscriptions.</li>
              <li>Send newsletters and administrative notices.</li>
              <li>Improve services and ensure security.</li>
              <li>Fulfil ethical and legal obligations.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">4. Legal Basis for Processing</h3>
            <ul className="list-disc list-inside">
              <li>Consent: Newsletter or form sign-ups.</li>
              <li>Contractual Necessity: Course registrations, etc.</li>
              <li>Legitimate Interests: Improve services and site security.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">5. Data Sharing & Disclosure</h3>
            <ul className="list-disc list-inside">
              <li>Not sold or traded.</li>
              <li>Shared with concerned service providers under confidentiality.</li>
              <li>Only disclosed when legally required.</li>
              <li>In event of reorganization, subject to confidentiality.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">6. Data Retention</h3>
            <ul className="list-disc list-inside">
              <li>Enquiries/newsletters: Until unsubscribe or deletion request.</li>
              <li>Course/certificate records: Minimum 5 years.</li>
              <li>Usage logs: Up to 1 year.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">7. Your Rights</h3>
            <ul className="list-disc list-inside">
              <li>Access and receive your data.</li>
              <li>Correct inaccuracies.</li>
              <li>Request deletion (subject to law).</li>
              <li>Object/restrict certain uses.</li>
              <li>Withdraw consent.</li>
              <li>File complaints.</li>
            </ul>
            <p className="mt-2">Contact: <a href="mailto:info@hcse.org.in" className="text-blue-600 underline">info@hcse.org.in</a></p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">8. Security Measures</h3>
            <p>We use safeguards like encrypted storage and restricted access.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">9. Cookies & Tracking Technologies</h3>
            <p>Cookies help enhance user experience. You can disable them via your browser.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">10. Children’s Privacy</h3>
            <p>No collection from users under 18. Contact us if any such data is collected.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">11. Third-Party Links</h3>
            <p>Not responsible for third-party privacy practices.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">12. Changes to This Policy</h3>
            <p>We may update this policy and post revisions with date. Major changes will be communicated.</p>
            <p><strong>Last revised:</strong> July 2025</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">13. Contact Information</h3>
            <p>Hindustan Council of Secondary Education</p>
            <p>Email: <a href="mailto:info@hcse.org.in" className="text-blue-600 underline">info@hcse.org.in</a></p>
            <p>Website: <a href="https://www.hcse.org.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">www.hcse.org.in</a></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
