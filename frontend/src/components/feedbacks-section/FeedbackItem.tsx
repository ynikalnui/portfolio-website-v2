import Image from 'next/image'

type TFeedbackItemProps = {
  feedbackText: string
  projectName: string
  qualities: {
    content: string
  }[]
  score: number
  title: string
}

export default function FeedbackItem({ feedbackText, projectName, qualities, score, title }: TFeedbackItemProps) {
  return (
    <div className='flex w-full flex-col gap-y-4 overflow-hidden'>
      <h3 data-aos='fade-up' className='section-text-xl'>
        {title}
      </h3>

      <div data-aos='slide-right' data-aos-duration='1000' className='h-[3px] w-full bg-black' />

      <div className='flex gap-x-2 overflow-hidden'>
        <div className='flex w-3/12 grow flex-col justify-between gap-y-6'>
          <h4 data-aos='fade-right' className='text-base font-medium md:text-lg lg:text-xl'>
            {projectName}
          </h4>

          <div data-aos='fade-in' className='flex flex-col gap-y-1'>
            <p className='text-sm font-medium md:text-base lg:text-lg'>Key Qualities</p>
            <ul className='flex flex-wrap gap-2 text-sm font-normal lg:text-base'>
              {qualities.map((e, index) => (
                <li key={index}>{e.content}</li>
              ))}
            </ul>
          </div>

          <div data-aos='fade-in' className='flex flex-col gap-y-1'>
            <p className='text-sm font-medium md:text-base lg:text-lg'>Score</p>

            <ul className='flex gap-x-1'>
              {Array.from({ length: 5 }, (_, index) => (
                <li key={index}>
                  <Image src={index < score ? '/images/star-icon-yellow.svg' : '/images/star-icon-grey.svg'} alt='review star' width={25} height={25} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div data-aos='slide-down' data-aos-duration='1000' className='w-[3px] grow bg-black' />

        <div className='flex w-9/12 grow items-center overflow-hidden'>
          <p data-aos='slide-right' className='text-sm font-normal italic leading-6 md:text-base lg:text-xl lg:leading-8'>
            “{feedbackText}”
          </p>
        </div>
      </div>
    </div>
  )
}
