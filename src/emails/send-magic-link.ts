import { resend } from '@/lib/resend'
import MagicLinkEmail from '@/emails/magic-link-email'

function text({ url, host }: { url: string; host: string }) {
  return `Sign in to ${host}\n${url}\n\n`
}

export async function sendMagicLink(params: {
  identifier: string
  url: string
}) {
  const { identifier, url } = params
  const { host } = new URL(url)

  try {
    const data = await resend.emails.send({
      from: 'no-reply@notification.shipmyapp.com',
      to: [identifier],
      subject: `Log in to ${host}`,
      text: text({ url, host }),
      react: MagicLinkEmail({ url, host })
    })
    return { success: true, data }
  } catch (error) {
    throw new Error('Failed to send the verification Email.')
  }
}
