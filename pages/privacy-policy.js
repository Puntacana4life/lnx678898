import React from "react";
import PageBanner from "../components/Common/PageBanner";

const PrivacyPolicy = () => {
  // Contenido de la política de privacidad formateado
  const privacyPolicyContent = [
    {
      title: "1. Introduction",
      content: (
        <>
          <p>
            Welcome to puntacana4life.com. We are committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and protect your personal information.
          </p>
        </>
      )
    },
    {
      title: "2. Information We Collect",
      content: (
        <>
          <p>We may collect and process the following information about you:</p>
          <ul>
            <li><strong>Personal Identification Information (PII):</strong> Name, email address, phone number, postal address.</li>
            <li><strong>Non-Personal Information:</strong> Data that does not identify a specific individual, such as demographic information, site usage data, and user preferences.</li>
            <li><strong>Technical Information:</strong> IP address, browser type, operating system, and browsing data.</li>
          </ul>
        </>
      )
    },
    {
      title: "3. Use of Your Information",
      content: (
        <>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide and improve our services.</li>
            <li>Personalize your experience on the Site.</li>
            <li>Communicate with you, respond to your inquiries, and provide customer support.</li>
            <li>Send newsletters, promotions, and notifications about services that may interest you.</li>
            <li>Comply with legal obligations and protect our rights and property.</li>
          </ul>
        </>
      )
    },
    {
      title: "4. Disclosure of Your Information",
      content: (
        <>
          <p>We may share your information with:</p>
          <ul>
            <li>Service Providers: Companies that help us operate our Site and provide our services.</li>
            <li>Business Partners: With your consent, we may share your information with business partners to offer you relevant products and services.</li>
            <li>Legal Compliance: Legal or regulatory authorities, when necessary to comply with a legal obligation or protect our rights.</li>
          </ul>
        </>
      )
    },
    {
      title: "5. Security of Your Information",
      content: (
        <>
          <p>We implement security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, we cannot guarantee the absolute security of your information transmitted over the Internet.</p>
        </>
      )
    },
    {
      title: "6. Cookies and Similar Technologies",
      content: (
        <>
          <p>We use cookies and similar technologies to enhance your experience on our Site. Cookies allow us to remember your preferences and personalize content. You can configure your browser to reject cookies, but this may affect the functionality of the Site.</p>
        </>
      )
    },
    {
      title: "7. Your Rights",
      content: (
        <>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal information.</li>
            <li>Rectify incorrect or incomplete information.</li>
            <li>Request the deletion of your personal information.</li>
            <li>Object to the processing of your personal information.</li>
            <li>Withdraw your consent at any time.</li>
          </ul>
          <p>To exercise these rights, please contact us using the contact information provided below.</p>
        </>
      )
    },
    {
      title: "8. Links to Other Websites",
      content: (
        <>
          <p>Our Site may contain links to other websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies.</p>
        </>
      )
    },
    {
      title: "9. Changes to this Privacy Policy",
      content: (
        <>
          <p>We may update this Privacy Policy periodically. We will post any changes on this page and, if the changes are significant, we will notify you through a notice on our Site.</p>
        </>
      )
    },
    {
      title: "10. Contact",
      content: (
        <>
          <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
          <ul>
            <li>Email: info@puntacana4life.com</li>
            <li>Phone: 809-805-4087</li>
            <li>Postal Address: Plaza Tobaco, local #26, Punta Cana, Rep, Dom.</li>
          </ul>
        </>
      )
    }
  ];

  return (
    <>
      <PageBanner bannerTitle="Privacy Policy" pageName="Privacy Policy" />

      <section className="faq-wrap pt-100 pb-100">
        <div className="container">
          <div className="row gx-5 justify-content-center">
            <div className="col-xl-8">
              <div className="pp-content-wrap">
                {privacyPolicyContent.map((section, index) => (
                  <div key={index} className="pp-content">
                    <h4>{section.title}</h4>
                    {section.content}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
