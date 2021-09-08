import banner from '../../assets/desktop.jpg'
import styled from 'styled-components'
import React from 'react'
import mediaQuery from '../../mediaQuery'
export default function Banner () {
  return (
    <Container>
      <BannerImage>
        <h2>Live Deeper</h2>
      </BannerImage>
    </Container>
  )
}
const Container = styled.div`
width: 100%;
overflow: hidden;
`
const BannerImage = styled.div`
width: 100%;
height: 40vh;
background: linear-gradient(rgba(0, 137, 207, 0.45),rgba(0, 137, 207, 0.45)),
    url('https://images.unsplash.com/photo-1507680576301-98c2029cf434?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
background-size: cover;
background-position: 100% 80%;
transition: transform .4s ease-in-out;
cursor: pointer;
&:hover{
background:url('https://images.unsplash.com/photo-1507680576301-98c2029cf434?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
background-size: cover;
transform: scale(1.1);
}
display:grid;
place-items: center;
&:hover > h2{
color:var(--secondary)
}
h2{
margin: 0;
font-size:7.5vh;
transition: color .4s ease-in-out;
user-select: none;
}
@media(min-width:${mediaQuery.laptop}) and (max-width:${mediaQuery.desktop}){
  
  background: linear-gradient(rgba(0, 137, 207, 0.45),rgba(0, 137, 207, 0.45)),
  url(${banner});
  background-size: cover;
  background-position: 100% 80%;
  height: 50vh;
  h2{
  font-size: 15vh;
  }
  &:hover{
  background:url(${banner});
  background-size: cover;
  background-position: 100% 80%;
  transform: scale(1.1);
  }
}
`
