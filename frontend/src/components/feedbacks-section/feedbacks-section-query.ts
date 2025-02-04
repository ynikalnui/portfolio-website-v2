import { gql } from '@apollo/client'

type TFeedbackItem = {
  feedbackText: string
  projectName: string
  qualities: {
    content: string
  }[]
  score: number
  title: string
}

export type TFeedbacksSectionDataResponse = {
  feedbackItems: TFeedbackItem[]
}

export const GET_FEEDBACKS_SECTION_DATA = gql`
  query GetFeedbacksSectionData {
    feedbackItems {
      feedbackText
      projectName
      qualities {
        content
      }
      score
      title
    }
  }
`
