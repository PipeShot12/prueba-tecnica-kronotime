import NavMobile from 'components/NavMobile'
import { useMediaQuery } from 'react-responsive'
import mediaQuery from '../../mediaQuery'
import NavDesktop from 'components/NavDesktop'

export default function Header () {
  const isBigScreen = useMediaQuery({ minWidth: mediaQuery.laptop })
  return (
    <header>
      {!isBigScreen ? <NavMobile /> : <NavDesktop />}
    </header>
  )
}
