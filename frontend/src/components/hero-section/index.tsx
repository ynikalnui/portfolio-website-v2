export default function HeroSection() {
  const introQualities = [
    'Front-End Developer',
    '5+ Years Experience',
    '3+ Well Done Projects',
    '20+ Skills'
  ]

  return (
    <section
      id='hero'
      className='relative flex h-[70vh] w-full bg-contain bg-[bottom_center] bg-no-repeat pt-20 md:h-screen md:bg-right-bottom'
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(255,255,255,0) 20%, rgba(255,255,255,1)), url('/images/personal-photo.png')"
      }}
    >
      <div className='mt-auto flex h-fit w-full flex-col items-center justify-center gap-y-10 pb-14 md:h-[80%] md:w-7/12 xl:h-full xl:w-6/12'>
        <h1
          data-aos='fade-up'
          className='text-center text-5xl font-semibold tracking-wider lg:text-7xl'
        >
          Oleh Skakun
        </h1>

        <ul className='flex w-full flex-col gap-y-8 text-2xl font-medium lg:text-3xl'>
          {introQualities.map((quality, index) => (
            <li
              key={index}
              className='flex w-full items-center overflow-hidden'
            >
              <div
                data-aos='slide-right'
                data-aos-delay={index * 200}
                className='h-[3px] flex-1 bg-black'
              />

              <h2
                data-aos='fade-in'
                data-aos-delay={index * 300}
                className='px-4'
              >
                {quality}
              </h2>

              <div
                data-aos='slide-left'
                data-aos-delay={index * 200}
                className='h-[3px] flex-1 bg-black'
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
