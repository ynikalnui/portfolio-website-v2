import Image from 'next/image'

export default function FeedbackItem() {
  return (
    <div className='flex w-full flex-col gap-y-4 overflow-hidden'>
      <h3 data-aos='fade-up' className='section-text-xl'>
        Upwork
      </h3>

      <div
        data-aos='slide-right'
        data-aos-duration='1000'
        className='h-[3px] w-full bg-black'
      />

      <div className='flex gap-x-2 overflow-hidden'>
        <div className='flex w-3/12 grow flex-col justify-between gap-y-6'>
          <h4
            data-aos='fade-right'
            className='text-base font-medium md:text-lg lg:text-xl'
          >
            API Tool page
          </h4>

          <div data-aos='fade-in' className='flex flex-col gap-y-1'>
            <p className='text-sm font-medium md:text-base lg:text-lg'>
              Key Qualities
            </p>
            <ul className='flex flex-wrap gap-2 text-sm font-normal lg:text-base'>
              <li>Great</li>
              <li>Great</li>
              <li>Great</li>
            </ul>
          </div>

          <div data-aos='fade-in' className='flex flex-col gap-y-1'>
            <p className='text-sm font-medium md:text-base lg:text-lg'>Score</p>

            <div className='flex flex-wrap gap-x-2'>
              <ul className='flex gap-x-1'>
                <li>
                  <Image
                    src='/images/star-icon.svg'
                    alt='review star'
                    width={25}
                    height={25}
                  />
                </li>
                <li>
                  <Image
                    src='/images/star-icon.svg'
                    alt='review star'
                    width={25}
                    height={25}
                  />
                </li>
                <li>
                  <Image
                    src='/images/star-icon.svg'
                    alt='review star'
                    width={25}
                    height={25}
                  />
                </li>
                <li>
                  <Image
                    src='/images/star-icon.svg'
                    alt='review star'
                    width={25}
                    height={25}
                  />
                </li>
                <li>
                  <Image
                    src='/images/star-icon.svg'
                    alt='review star'
                    width={25}
                    height={25}
                  />
                </li>
              </ul>
              <p className='text-sm font-normal md:text-base lg:text-lg'>5.0</p>
            </div>
          </div>
        </div>

        <div
          data-aos='slide-down'
          data-aos-duration='1000'
          className='w-[3px] grow bg-black'
        />

        <div className='flex w-9/12 grow items-center overflow-hidden'>
          <p
            data-aos='slide-right'
            className='text-sm font-normal italic leading-6 md:text-base lg:text-xl lg:leading-8'
          >
            “This was a great experience working with Oleh. I expected the
            project would just provide the ability to visualize sensor data in a
            graph and table, but Oleh proposed additional functionality and
            features, like storing the data in a Google sheet. And it was a
            great idea, which Oleh has successfully implemented. If you need a
            great front-end developer - Oleh is the right one, perfectly fits
            the expectations. I highly recommend hiring this guy.”
          </p>
        </div>
      </div>
    </div>
  )
}
