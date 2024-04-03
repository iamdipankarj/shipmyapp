import { resend } from '@/lib/resend'
import WelcomeEmail from '@/emails/welcome-email';

function text({ url, host }: { url: string; host: string }) {
  return `Sign in to ${host}\n${url}\n\n`
}

export async function sendWelcomeEmail(params: {
  identifier: string
  url: string
  userFirstname: string
}) {
  const { identifier, url, userFirstname } = params
  const { host } = new URL(url)

  try {
    const data = await resend.emails.send({
      from: 'no-reply@notification.shipmyapp.com',
      to: [identifier],
      subject: `Welcome to ${host}`,
      text: text({ url, host }),
      react: WelcomeEmail({ userFirstname })
    })
    return { success: true, data }
  } catch (error) {
    throw new Error('Failed to send the Welcome Email.')
  }
}
