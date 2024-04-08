import { TextBanner } from "@/components/text-banner";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <>
      <TextBanner>Privacy Policy</TextBanner>
      <main className="flex min-h-screen flex-col items-center py-16">
        <div className="container prose">
          <section>
            <p><strong>Last updated:</strong> 8th April 2024.</p>
          </section>
          <section>
            <p>
              Welcome to ShipMyApp. This Privacy Policy explains how we collect, use, and share information about you when you visit or use our website, <Link href="https://shipmyapp.com">https://shipmyapp.com</Link>. We strive to be transparent and clear in our data practices and to respect your privacy.
            </p>
          </section>
          <section>
            <h2>Data Collection and Use</h2>
            <ol>
              <li>
                <strong>Personal Data:</strong> We do not collect personal data unless you voluntarily provide it, for example, by entering your github username when purchasing the product.
              </li>
              <li>
                <strong>Usage Data:</strong> We use Pirsch, a cookie-free and privacy-friendly analytics tool, to collect anonymized data about website usage to improve our services.
              </li>
              <li>
                <strong>Cookies:</strong> Our website uses cookies to enhance user experience. You may refuse the use of cookies by selecting the appropriate settings on your browser.
              </li>
            </ol>
          </section>
          <section>
            <h2>Affiliate Program</h2>
            <p>
              We participate in an affiliate program with Lemon Squeezy. This program uses local tracking to recognize referrals without sharing any personal data. Affiliate links may also be present in our documentation.
            </p>
          </section>
          <section>
            <h2>Sharing of Information</h2>
            <p>
              We do not sell, trade, or rent your personal identification information to others. However, we may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates, and advertisers.
            </p>
          </section>
          <section>
            <h2>Security</h2>
            <p>
              We are committed to ensuring that your information is secure. We have put
              in place suitable physical, electronic, and managerial procedures to
              safeguard and secure the information we collect online.
            </p>
          </section>
          <section>
            <h2>Age Restrictions</h2>
            <p>
              Our website does not have age restrictions. However, we do not knowingly collect personal information from children under the age of 13.
            </p>
          </section>
          <section>
            <h2>Changes to This Privacy Policy</h2>
            <p>
              ShipMyApp reserves the right to update this privacy policy at any time. When we do, we will revise the updated date at the bottom of this page. We encourage users to frequently check this page for any changes to stay informed.
            </p>
          </section>
          <section>
            <h2>Contacting Us</h2>
            <p>
              If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:
            </p>
            <ul>
              <li>
                <a href="mailto:iamdipankarj.workspace@gmail.com">iamdipankarj.workspace@gmail.com</a>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </>
  )
}