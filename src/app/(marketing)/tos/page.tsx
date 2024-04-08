import { TextBanner } from "@/components/text-banner";
import Link from "next/link";

export default function TOS() {
  return (
    <>
      <TextBanner>Terms and Conditions</TextBanner>
      <main className="flex min-h-screen flex-col items-center py-16">
        <div className="container prose">
          <section>
            <p><strong>Last updated:</strong> 8th April 2024.</p>
          </section>
          <h2>1. Introduction</h2>
          <p>
            Welcome to ShipMyApp. These terms and conditions govern your use of our software, ShipMyApp.
          </p>
          <h2>2. Acceptance of Terms</h2>
          <p>
            By purchasing and using ShipMyApp, you agree to these terms.
          </p>
          <h2>3. License to Use</h2>
          <ul>
            <li>
              <strong>Grant:</strong> Upon purchase, we grant you a perpetual, non-exclusive license to use and modify ShipMyApp&apos;s code.
            </li>
            <li>
              <strong>Scope:</strong> You are permitted to use the code to develop new software, including for commercial purposes.
            </li>
          </ul>
          <h2>4. User Responsibilities</h2>
          <ul>
            <li>
              <strong>Code Use:</strong> You are responsible for any software created using ShipMyApp&apos;s code.
            </li>
            <li>
              <strong>Compliance:</strong> You agree to comply with all applicable laws and regulations in your use and development of new software with ShipMyApp&apos;s code.
            </li>
          </ul>
          <h2>5. Intellectual Property</h2>
          <ul>
            <li>
              <strong>Original Software:</strong> All rights in the original ShipMyApp software remain our property.
            </li>
            <li>
              <strong>User Creations:</strong> ShipMyApp is not responsible for what the user does with the  user-generated content.
            </li>
          </ul>
          <h2>6. Privacy and Data Use</h2>
          <p>
            Please refer to our <Link href="/privacy-policy">Privacy Policy</Link> to understand how we handle your data.
          </p>
          <h2>7. Modifications to Terms</h2>
          <p>
            We may revise these terms. We will notify you of significant changes, but you should review them periodically.
          </p>
          <h2>8. Termination of License</h2>
          <p>
            We may revoke your license if you violate these terms, without prejudice to any other rights.
          </p>
          <h2>9. Warranty Disclaimer</h2>
          <p>
            ShipMyApp is provided "as is". We do not warrant that it will be suitable for your intended use or that it will be uninterrupted or error-free.
          </p>
          <h2>10. Limitation of Liability</h2>
          <p>
            Our liability to you is limited to the amount you paid for ShipMyApp. We are not liable for any consequences arising from your use or modification of the software.
          </p>
          <h2>11. Governing Law</h2>
          <p>
            These terms are governed by Italy and any disputes will be subject to the jurisdiction of Italy courts.
          </p>
          <h2>12. Contact Information</h2>
          <p>
            For inquiries or concerns about these terms, please contact us at <Link href="mailto:iamdipankarj.workspace@gmail.com">iamdipankarj.workspace@gmail.com</Link>.
          </p>
          <p>
            By purchasing and using ShipMyApp, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions.
          </p>
        </div>
      </main>
    </>
  )
}