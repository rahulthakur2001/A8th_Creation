import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
      <p className="mb-2"><strong>Effective Date:</strong> [Insert Date]</p>
      <p className="mb-6"><strong>Last Updated:</strong> [Insert Date]</p>

      <p className="mb-6">
        Welcome to <strong>[Your Website Name]</strong> (“we,” “our,” or “us”). By using our website and services,
        you agree to comply with and be bound by the following terms and conditions.
        Please read these Terms carefully before accessing or using our platform.
      </p>

      <Section number="1" title="Acceptance of Terms">
        By accessing or using the services provided by [Your Website Name], you agree to be bound by these Terms and Conditions,
        including any updates or modifications. If you do not agree to these terms, please refrain from using our website.
      </Section>

      <Section number="2" title="User Registration and Account">
        To access certain features of the website, you may need to register for an account. You agree to provide accurate,
        complete, and up-to-date information during the registration process and maintain the confidentiality of your account
        credentials. You are responsible for all activity that occurs under your account.
      </Section>

      <Section number="3" title="Use of the Website">
        <p>You agree to use the website for lawful purposes only and in accordance with these Terms. You may not use the platform to:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Upload, post, or distribute content that is unlawful, defamatory, offensive, or violates any intellectual property rights.</li>
          <li>Engage in fraudulent activities or upload viruses, malware, or any other harmful code.</li>
          <li>Attempt to gain unauthorized access to any part of the website or related systems.</li>
        </ul>
      </Section>

      <Section number="4" title="User Content">
        <p>
          By uploading photos, images, or any content to the website, you grant us a non-exclusive, royalty-free,
          and worldwide license to use, display, modify, and distribute your content solely for the purpose of providing our services.
        </p>
        <p className="mt-2">You agree that:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Your uploaded content will not infringe any copyright, trademark, or other intellectual property rights.</li>
          <li>You have all necessary rights and permissions to upload the content.</li>
          <li>You will not upload any content that violates our content guidelines.</li>
        </ul>
      </Section>

      <Section number="5" title="Prohibited Conduct">
        <p>You agree not to:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Violate any applicable local, state, national, or international laws or regulations.</li>
          <li>Engage in any activity that could harm or interfere with the functionality of the website.</li>
          <li>Upload or share any content that is offensive, obscene, hateful, or discriminatory.</li>
        </ul>
      </Section>

      <Section number="6" title="Termination of Account">
        We reserve the right to suspend or terminate your account, at our discretion, if we believe you have violated these Terms
        or engaged in any illegal activity. You may also terminate your account at any time by contacting us.
      </Section>

      <Section number="7" title="Intellectual Property">
        All content on the website, including text, graphics, logos, images, and software, is owned by [Your Website Name]
        or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce,
        distribute, or otherwise use any of our content without prior written permission.
      </Section>

      <Section number="8" title="Disclaimers">
        The website and services are provided "as is," without any warranties of any kind, either express or implied,
        including but not limited to the implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
        We do not guarantee the accuracy, reliability, or availability of the website and services.
      </Section>

      <Section number="9" title="Limitation of Liability">
        To the fullest extent permitted by law, [Your Website Name] shall not be liable for any direct, indirect, incidental,
        special, or consequential damages, including but not limited to loss of profits, data, or use, arising out of or in
        connection with your use of the website or services.
      </Section>

      <Section number="10" title="Indemnification">
        You agree to indemnify and hold harmless [Your Website Name], its affiliates, employees, and partners from any claims,
        losses, liabilities, damages, or expenses (including legal fees) arising out of your violation of these Terms or your
        use of the website and services.
      </Section>

      <Section number="11" title="Privacy">
        Your use of the website is also governed by our Privacy Policy, which can be found <a href="/privacy-policy" className="text-blue-600 underline">here</a>.
        By using the website, you consent to the collection and use of your information as outlined in our Privacy Policy.
      </Section>

      <Section number="12" title="Changes to Terms">
        We reserve the right to modify, update, or change these Terms at any time. Any changes will be posted on this page with
        an updated effective date. Your continued use of the website after such changes constitutes acceptance of the new terms.
      </Section>

      <Section number="13" title="Governing Law">
        These Terms and Conditions are governed by and construed in accordance with the laws of [Your Country/State], and any
        disputes will be resolved in the appropriate courts of [Your Country/State].
      </Section>

      <Section number="14" title="Contact Us">
        <p>If you have any questions or concerns about these Terms and Conditions, please contact us at:</p>
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

export default TermsAndConditions;
