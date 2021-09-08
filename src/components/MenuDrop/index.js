import React from 'react'
import styled from 'styled-components'

export default function MenuDrop ({ show }) {
  return (
    <MenuOptions show={show}>
      <li><a href='/colecciones'>COLECCIONES</a></li>
      <li><a href='/hombres'>HOMBRES</a></li>
      <li><a href='/mujeres'>MUJERES</a></li>
      <li><a href='/sale'>SALE</a></li>
    </MenuOptions>
  )
}
const MenuOptions = styled.ul`
width: 100%;
margin: 0;
/* display: ${props => props.show ? 'block' : 'none'}; */
max-height: ${props => props.show ? '30vh' : '0vh'};
background-color: var(--primary);
padding: 0 0;
li{
    list-style: none;
    font-family: var(--font-heading);
    font-weight: 600;
    font-size: 2vh;
    padding: 1.5vh 4vh;
    visibility: ${props => props.show ? 'visible' : 'hidden'};
    transition: visibility 0.3s ease-in-out;
    cursor: pointer;
}
li:last-child{
    background-color: var(--button-sale);
}
a{
    text-decoration: none;
    color: white;
    width: 100%;
}
transition: max-height 0.3s ease-in-out;
`
