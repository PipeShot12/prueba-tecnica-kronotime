import styled from 'styled-components'
import { useState } from 'react'
import MenuToggle from 'components/MenuToggle'
import MenuDrop from 'components/MenuDrop'

export default function NavMobile () {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div>
      <Nav>
        <MenuToggle isOpen={showMenu} setIsOpen={setShowMenu} />
        <img src='https://cdn.shopify.com/s/files/1/0557/8280/1585/files/horizontal_logo.svg?v=1627075873' alt='logo' />
        <Icons>
          <span className='fas fa-search' />
          <span className='fas fa-user' />
          <span className='fas fa-shopping-cart' />
        </Icons>
      </Nav>
      <MenuDrop show={showMenu} />

    </div>
  )
}
const Nav = styled.div`
width: 100%;
background-color: var(--secondary);
padding: 1em 1em;
display: flex;
justify-content: space-between;
align-items: center;
img{
    width: 55%;
}
`
const Icons = styled.div`
& > span:nth-child(2){
    margin: 0 0.8em
}
& > span {
  cursor: pointer;
}
font-size: 2.5vh;
`
