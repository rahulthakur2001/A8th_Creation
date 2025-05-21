import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-2"><strong>Effective Date:</strong> [Insert Date]</p>
      <p className="mb-6"><strong>Last Updated:</strong> [Insert Date]</p>

      <p className="mb-6">
        Welcome to <strong>[Your Website Name]</strong> (“we,” “our,” or “us”). We are committed to protecting your privacy
        and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy explains
        how we collect, use, disclose, and protect your information when you use our website and services related to photo
        uploading and sharing.
      </p>

      <Section number="1" title="Information We Collect" />
      <SubSection title="a. Personal Information">
        When you create an account or interact with our services, we may collect personal data including:
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Name</li>
          <li>Email address</li>
          <li>Username</li>
          <li>Profile photo (if provided)</li>
          <li>Contact information</li>
        </ul>
      </SubSection>

      <SubSection title="b. Uploaded Photos">
        We collect the photos and images you upload to our platform, including associated metadata (e.g., time, date,
        location if embedded).
      </SubSection>

      <SubSection title="c. Usage Data">
        We may automatically collect data about how you interact with our website, including:
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>IP address</li>
          <li>Browser type</li>
          <li>Device information</li>
          <li>Pages visited</li>
          <li>Time spent on pages</li>
        </ul>
      </SubSection>

      <Section number="2" title="How We Use Your Information">
        We use the information we collect to:
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Provide and maintain our services</li>
          <li>Display and manage your uploaded content</li>
          <li>Communicate with you about your account or service updates</li>
          <li>Improve and personalize user experience</li>
          <li>Detect, prevent, and address technical issues and misuse</li>
        </ul>
      </Section>

      <Section number="3" title="Sharing and Disclosure">
        We do not sell your personal information. However, we may share your data with:
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li><strong>Service Providers:</strong> Trusted third parties who help us operate and improve our services.</li>
          <li><strong>Legal Authorities:</strong> If required by law or in response to valid legal requests.</li>
          <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or asset sale.</li>
        </ul>
      </Section>

      <Section number="4" title="User Content & Public Sharing">
        If you choose to make your photos public, they may be visible to other users or the general public. Please use caution
        when sharing content publicly.
      </Section>

      <Section number="5" title="Data Security">
        We implement appropriate security measures to protect your data. However, no system is completely secure, and we
        cannot guarantee absolute security of your information.
      </Section>

      <Section number="6" title="Your Rights">
        Depending on your location, you may have the following rights:
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Access the information we hold about you</li>
          <li>Request correction or deletion</li>
          <li>Object to or restrict certain data processing</li>
          <li>Withdraw consent at any time</li>
        </ul>
        <p className="mt-2">To exercise these rights, contact us at [your contact email].</p>
      </Section>

      <Section number="7" title="Cookies & Tracking Technologies">
        We may use cookies and similar technologies to improve user experience and gather analytics. You can control cookie
        preferences through your browser settings.
      </Section>

      <Section number="8" title="Third-Party Links">
        Our website may contain links to third-party websites. We are not responsible for the content or privacy practices of
        those sites.
      </Section>

      <Section number="9" title="Children’s Privacy">
        Our services are not intended for children under the age of 13. We do not knowingly collect personal data from
        children without parental consent.
      </Section>

      <Section number="10" title="Changes to This Policy">
        We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated effective
        date.
      </Section>

      <Section number="11" title="Contact Us">
        If you have any questions or concerns about this Privacy Policy, please contact us at:
        <div className="mt-2">
          <strong>[Your Website Name]</strong><br />
          Email: [your contact email]<br />
          Website: [yourwebsite.com]
        </div>
      </Section>
    </div>
  );
};

const Section = ({ number, title, children }) => (
  <div className="mb-6">
    <h2 className="text-xl font-semibold mb-2">{number}. {title}</h2>
    <div className="text-base space-y-2">{children}</div>
  </div>
);

const SubSection = ({ title, children }) => (
  <div className="mb-6">
    <h3 className="text-lg font-medium mb-1">{title}</h3>
    <p>{children}</p>
  </div>
);

export default PrivacyPolicy;
