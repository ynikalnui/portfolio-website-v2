import { type NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'

import { RateLimiterMemory } from 'rate-limiter-flexible'

const rateLimiter = new RateLimiterMemory({
  points: 2,
  duration: 600
})

export async function POST(request: NextRequest) {
  const { email, name, message } = await request.json()

  const ip = request.headers.get('x-forwarded-for') || 'unknown'

  try {
    await rateLimiter.consume(ip)
  } catch {
    return NextResponse.json({ message: 'Too many requests. Please try again after 10 minutes.' }, { status: 429 })
  }

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NEXT_GMAIL_NAME,
      pass: process.env.NEXT_GMAIL_PASSWORD
    }
  })

  const mailOptions: Mail.Options = {
    from: process.env.NEXT_GMAIL_NAME,
    to: process.env.NEXT_GMAIL_NAME,
    subject: `Message from ${name} (${email})`,
    text: message
  }

  const sendMailPromise = async () => {
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent')
        } else {
          reject(err.message)
        }
      })
    })
  }

  try {
    await sendMailPromise()
    return NextResponse.json({ message: 'Email sent' })
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 })
  }
}
