import DesktopNav from './DesktopNav'
import OpenMenuButton from './OpenMenuButton'
import HeaderLayout from './HeaderLayout'
import HeaderLogo from './HeaderLogo'
import { GET_HEADER_LOGO_DATA, THeaderLogoResponse } from './HeaderLogo/header-logo-query'
import { client } from '@/lib/apollo'

export default async function Header() {
  const { data } = await client.query<THeaderLogoResponse>({ query: GET_HEADER_LOGO_DATA })

  return (
    <HeaderLayout>
      <HeaderLogo {...data.logo}/>
      <DesktopNav />
      <OpenMenuButton />
    </HeaderLayout>
  )
}
