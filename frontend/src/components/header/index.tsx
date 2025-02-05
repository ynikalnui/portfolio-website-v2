import DesktopNav from './DesktopNav'
import HeaderLayout from './HeaderLayout'
import HeaderLogo from './header-logo'
import { GET_HEADER_LOGO_DATA, THeaderLogoResponse } from './header-logo/header-logo-query'
import { client } from '@/lib/apollo'
import OpenMenuButton from './open-menu-button'

export default async function Header() {
  const { data } = await client.query<THeaderLogoResponse>({
    query: GET_HEADER_LOGO_DATA
  })

  return (
    <HeaderLayout>
      <HeaderLogo {...data.logo} />
      <DesktopNav />
      <OpenMenuButton />
    </HeaderLayout>
  )
}
