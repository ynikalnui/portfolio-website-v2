import { client } from '@/lib/apollo'
import FeedbackItem from './FeedbackItem'
import { GET_FEEDBACKS_SECTION_DATA, TFeedbacksSectionDataResponse } from './feedbacks-section-query'

export default async function FeedbacksSection() {
  const { data } = await client.query<TFeedbacksSectionDataResponse>({
    query: GET_FEEDBACKS_SECTION_DATA
  })

  return (
    <section id='feedbacks' className='section-container'>
      <h2 data-aos='fade-up' className='section-title'>
        Feedbacks
      </h2>

      <div className='flex flex-col gap-y-4'>
        {data.feedbackItems.map((feedback, index) => (
          <FeedbackItem
            key={index}
            feedbackText={feedback.feedbackText}
            projectName={feedback.projectName}
            qualities={feedback.qualities}
            score={feedback.score}
            title={feedback.title}
          />
        ))}
      </div>
    </section>
  )
}
