import React from "react";
import PageBanner from "../components/Common/PageBanner";

const TermsCondition = () => {
  return (
    <>
      <PageBanner
        bannerTitle="Terms of Use"
        pageName="Terms of Use"
      />

      <section className="terms-wrap pt-5 pb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-9">
              <div className="terms-content mb-4">
                <h4 className="mb-3">1. Introduction</h4>
                <p>
                  Welcome to Puntacana4Life.com. By accessing and using this website, you agree to comply with and be bound by the following terms and conditions of use. Please review them carefully.
                </p>
              </div>

              <div className="terms-content mb-4">
                <h4 className="mb-3">2. Acceptance of Terms</h4>
                <p>
                  By using this website, you agree to these terms of use. If you do not agree with any part of these terms, you must not use this website.
                </p>
              </div>

              <div className="terms-content mb-4">
                <h4 className="mb-3">3. Changes to Terms</h4>
                <p>
                  Puntacana4Life.com reserves the right to change, modify, or update these terms at any time without prior notice. Your continued use of the website constitutes your acceptance of any such changes.
                </p>
              </div>

              <div className="terms-content mb-4">
                <h4 className="mb-3">4. Use of the Website</h4>
                <div className="mb-3">
                  <p><strong>Eligibility:</strong></p>
                  <ul>
                    <li>You must be at least 18 years old to use this website.</li>
                  </ul>
                </div>
                <div className="mb-3">
                  <p><strong>Permitted Use:</strong></p>
                  <ul>
                    <li>You may use the website for lawful purposes only.</li>
                  </ul>
                </div>
                <div>
                  <p><strong>Prohibited Use:</strong></p>
                  <ul>
                    <li>You are prohibited from using the website to engage in any illegal activities or to transmit any harmful, offensive, or unlawful material.</li>
                  </ul>
                </div>
              </div>

              <div className="terms-content mb-4">
                <h4 className="mb-3">5. Intellectual Property</h4>
                <p>
                  All content on this website, including text, graphics, logos, images, and software, is the property of Puntacana4Life.com or its content suppliers and is protected by copyright, trademark, and other intellectual property laws.
                </p>
              </div>

              <div className="terms-content mb-4">
                <h4 className="mb-3">6. User Conduct</h4>
                <ul>
                  <li>Disrupt or interfere with the security of the website.</li>
                  <li>Attempt to gain unauthorized access to any portion of the website.</li>
                  <li>Use the website for any fraudulent or unlawful purpose.</li>
                </ul>
              </div>

              <div className="terms-content mb-4">
                <h4 className="mb-3">7. Privacy Policy</h4>
                <p>
                  Please review our <a href="link to privacy policy">Privacy Policy</a> to understand our practices regarding the collection and use of your personal information.
                </p>
              </div>

              <div className="terms-content mb-4">
                <h4 className="mb-3">8. Disclaimer of Warranties</h4>
                <p>
                  The website is provided on an "as-is" and "as-available" basis. Puntacana4Life.com makes no warranties, express or implied, regarding the website's operation or the information, content, or materials included on the website.
                </p>
              </div>

              <div className="terms-content mb-4">
                <h4 className="mb-3">9. Limitation of Liability</h4>
                <p>
                  Puntacana4Life.com will not be liable for any damages arising from the use or inability to use the website, including but not limited to direct, indirect, incidental, punitive, and consequential damages.
                </p>
              </div>

              <div className="terms-content mb-4">
                <h4 className="mb-3">10. Indemnification</h4>
                <p>
                  You agree to indemnify and hold Puntacana4Life.com harmless from any claims, damages, losses, liabilities, costs, and expenses arising from your use of the website or violation of these terms.
                </p>
              </div>

              <div className="terms-content mb-4">
                <h4 className="mb-3">11. Governing Law</h4>
                <p>
                  These terms of use are governed by and construed in accordance with the laws of [your jurisdiction], without regard to its conflict of law principles.
                </p>
              </div>

              <div className="terms-content">
                <h4 className="mb-3">12. Contact Information</h4>
                <ul>
                  <li>Email: <a href="mailto:info@puntacana4life.com">info@puntacana4life.com</a></li>
                  <li>Phone: <a href="tel:+18098054087">809-805-4087</a></li>
                  <li>Address: Plaza Tobacco, Local #26, Punta Cana, Dominican Republic.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsCondition;
