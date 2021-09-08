import React from 'react'
import styled from 'styled-components'
export default function index ({ style, children, href = '#' } = {}) {
  return (
    <Button style={style} href={href}>{children}</Button>
  )
}
const Button = styled.a`
outline: none;
text-decoration: none;
background-color: transparent;
color:var(--text-color);
border: 0.4vh solid white;
padding: 1.2vh 2.5vh;
font-family: var(--font-body);
font-weight: 800;
font-size: 2vh;
display: block;
margin: 0 auto;
background-position: 50% 50%;
background-image: linear-gradient(var(--primary),var(--primary));
background-repeat: no-repeat;
background-size: 0% 100%;
transition: background-size .2s ease-in-out, border .2s ease-in-out;
:hover{
background-size: 100% 100%;
border: 0.4vh solid var(--primary);
}
`
