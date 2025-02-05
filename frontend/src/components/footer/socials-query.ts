import { gql } from '@apollo/client'

export type TSocialsResponse = {
  socials: { link: string }[]
}

export const GET_SOCIALS_DATA = gql`
  query GetSocials {
    socials {
      link
    }
  }
`
