import mediaQuery from 'mediaQuery'
import styled from 'styled-components'

export default function NavMobile () {
  return (
    <div>
      <Nav>
        <img src='https://cdn.shopify.com/s/files/1/0343/2824/8459/files/Technomarine-01.svg?v=1625857837' alt='logo' />
        <Links>
          <li><a href='/colecciones'>COLECCIONES</a></li>
          <li><a href='/hombres'>HOMBRES</a></li>
          <li><a href='/mujeres'>MUJERES</a></li>
          <li><ButtonSale className='button-sale' href='/sale'>SALE</ButtonSale></li>
        </Links>
        <Icons>
          <li><a href='/serach'><span className='fas fa-search' /></a></li>
          <li><a href='/cart'><span className='fas fa-shopping-cart' /></a></li>
        </Icons>
      </Nav>
    </div>
  )
}
const Nav = styled.div`
width: 100%;
background-color: var(--secondary);
display: flex;
justify-content: space-between;
align-items: center;
padding: 1.4vh 5vh;
img{
    width: 14%;
}

`
const Links = styled.ul`
display: flex;
& > li {
    list-style: none;
    padding-right: 5vh;
    font-size: 1.8vh;
    display: inline-block;
}

a{
    text-decoration: none;
    color: white;
    position: relative;
    padding-bottom: 0.5vh;
   
}
& > li > a:before{
   position: absolute;
   bottom: 0;
   left: 0;
   content: '';
   width: 0;
   display: block;
   border-top: 0.2vh solid var(--text-color);
   transition: width 0.2s ease;
}
& > li > a:hover:before{
  width: 100%;
}
.button-sale:hover:before{
  width: 0;
}
@media(min-width:${mediaQuery.laptop}) and (max-width:${mediaQuery.desktop}){
& > li {
  font-size: 0.8em;
  }
}
`
const ButtonSale = styled.a`
 background-color: var(--button-sale);
 border-radius: 0.5vh;
 padding: 0.5vh 1vh;
`
const Icons = styled.ul`
display: flex;
& > li {
    list-style: none;
    padding-left: 2vh;
}
& > li > a{
    text-decoration: none;
    color: var(--text-color);
    font-size: 2.5vh;
}
@media(min-width:${mediaQuery.laptop}) and (max-width:${mediaQuery.desktop}){
& > li > a{
font-size: 1.8vh;
}
}
`
