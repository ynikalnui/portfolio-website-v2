import { gql } from '@apollo/client'

type TProject = {
  documentId: string
  dates: string
  projectImage: {
    url: string
    alternativeText: string
  }
  projectShortDescription: string
  title: string
}

export type TProjectsSectionResponse = {
  projectItems: TProject[]
}

export const GET_PROJECTS_SECTION_DATA = gql`
  query GetProjectsSectionData {
    projectItems {
      documentId
      dates
      projectImage {
        url
        alternativeText
      }
      projectShortDescription
      title
    }
  }
`
