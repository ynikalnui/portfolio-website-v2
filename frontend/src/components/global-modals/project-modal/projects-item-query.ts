import { gql } from '@apollo/client'

type TProjectStack = {
  content: string
}

type TProjectShowcase = {
  alternativeText: string
  url: string
}

export type TProjectsItemResponse = {
  projectItem: {
    dates: string
    projectFullDescription: string
    projectWebsite: string
    title: string
    projectShowcase: TProjectShowcase[]
    projectStack: TProjectStack[]
  }
}

export const GET_PROJECTS_ITEM_DATA = gql`
  query GetProjectsItemData($documentId: ID!) {
    projectItem(documentId: $documentId) {
      dates
      title
      projectStack {
        content
      }
      projectFullDescription
      projectShowcase {
        alternativeText
        url
      }
      projectWebsite
    }
  }
`
