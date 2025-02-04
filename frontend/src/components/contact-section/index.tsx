import Form from 'next/form'

export default function ContactSection() {
  return (
    <section id='contact' className='section-container'>
      <h2 data-aos='fade-up' className='section-title'>
        Contact
      </h2>

      <Form className='flex w-full flex-col gap-y-4' action={''}>
        <div className='flex w-full gap-x-4'>
          <input
            data-aos='fade-up'
            type='text'
            placeholder='Your Name'
            className='w-1/2 border-b-2 border-black py-2 text-lg font-normal tracking-widest outline-none placeholder:text-center lg:text-xl'
          />

          <input
            data-aos='fade-up'
            data-aos-delay='300'
            type='text'
            placeholder='Your Email'
            className='w-1/2 border-b-2 border-black py-2 text-lg font-normal tracking-widest outline-none placeholder:text-center lg:text-xl'
          />
        </div>
        <div className='w-full'>
          <textarea
            data-aos='fade-up'
            data-aos-delay='600'
            rows={4}
            placeholder='Your Message'
            className='no-scrollbar w-full border-b-2 border-black py-4 text-lg font-normal tracking-widest outline-none placeholder:text-center lg:text-xl'
          />
        </div>
      </Form>

      <button className='section-text-lg mx-auto w-full bg-black px-4 py-2 text-white md:w-1/2 lg:w-1/3'>Send Message</button>
    </section>
  )
}
