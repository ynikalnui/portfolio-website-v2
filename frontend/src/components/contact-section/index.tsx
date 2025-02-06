'use client'

import { useForm } from 'react-hook-form'
import Form from 'next/form'
import { sendEmail, TFormData } from '@/utils/sendEmail'

export default function ContactSection() {
  const { register, handleSubmit } = useForm<TFormData>()

  const onSubmit = (data: TFormData) => {
    if (data.honeypot) return

    sendEmail(data)
  }

  return (
    <section id='contact' className='section-container'>
      <h2 data-aos='fade-up' className='section-title'>
        Contact
      </h2>

      <Form onSubmit={handleSubmit(onSubmit)} action={'/api/email'} className='flex w-full flex-col gap-y-4'>
        <div className='flex w-full gap-x-4'>
          <input
            type='text'
            placeholder='Your name'
            className='w-1/2 border-b-2 border-black py-2 text-lg font-normal tracking-widest placeholder:text-center lg:text-xl'
            {...register('name', { required: true })}
            aria-required='true'
          />

          <input
            type='email'
            placeholder='Your email'
            className='w-1/2 border-b-2 border-black py-2 text-lg font-normal tracking-widest placeholder:text-center lg:text-xl'
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Enter a valid email address'
              }
            })}
            aria-required='true'
          />
        </div>

        <div className='w-full'>
          <textarea
            rows={4}
            placeholder='Your Message'
            className='no-scrollbar w-full border-b-2 border-black py-4 text-lg font-normal tracking-widest placeholder:text-center lg:text-xl'
            {...register('message', { required: true })}
            aria-required='true'
          />
        </div>

        {/* Honeypot Field (Hidden from Users) */}
        <input
          type='text'
          className='hidden'
          {...register('honeypot', { required: false })}
          aria-hidden='true'
          tabIndex={-1}
        />

        <button
          type='submit'
          className='section-text-lg mx-auto w-full bg-black px-4 py-2 text-white md:w-1/2 lg:w-1/3'
        >
          Send Message
        </button>
      </Form>
    </section>
  )
}
