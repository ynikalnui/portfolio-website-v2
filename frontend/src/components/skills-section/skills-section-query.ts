import { gql } from '@apollo/client'

type TSkillItem = {
  skills: { content: string }[]
  title: string
}

export type TSkillsSectionResponse = {
  skillItems: TSkillItem[]
}

export const GET_SKILLS_SECTION_DATA = gql`
  query GetSkillsSectionData($skillsPagination: PaginationArg) {
    skillItems(sort: "title:asc") {
      skills(pagination: $skillsPagination) {
        content
      }
      title
    }
  }
`
