import { gql } from '@apollo/client'

export type THeaderLogoResponse = {
  logo: {
    fullName: string, 
    initials: string, 
    specialty: string
  }
}

export const GET_HEADER_LOGO_DATA = gql`
  query GetHeaderLogoData {
    logo {
      fullName
      initials
      specialty
    }
  }
`
