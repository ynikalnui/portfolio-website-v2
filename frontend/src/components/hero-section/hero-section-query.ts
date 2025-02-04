import { gql } from '@apollo/client'

export type THeroSectionResponse = {
  heroSection: {
    qualities: { content: string }[]
    title: string
    personalPhoto: { url: string }
  }
}

export const GET_HERO_SECTION_DATA = gql`
  query GetHeroSectionData {
    heroSection {
      qualities {
        content
      }
      title
      personalPhoto {
        url
      }
    }
  }
`
