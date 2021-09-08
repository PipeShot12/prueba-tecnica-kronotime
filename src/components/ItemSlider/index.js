import styled from 'styled-components'
import mediaQuery from '../../mediaQuery'

export default function ItemSlider ({ name, price, img }) {
  return (
    <Container>
      <img src={img} alt={name} />
      <hr />
      <h4>{name}</h4>
      <h6>{price}</h6>
    </Container>
  )
}
const Container = styled.div`
width: 100%;
& > img{
width:  70%;
height: 22vh;
object-fit: contain;
margin: 0 auto;
}
& > hr{
border: 0.2vh solid var(--primary);
background-color: var(--primary);
width: 40%;
}
& > h4,h6{
margin: 0;
}
& > h6{
font-weight: 600;
font-size: 2vh;
}
& > h4 {
  font-size: 3vh;
}
@media(min-width:${mediaQuery.desktop}){
& > img{
width:  100%;
height: 30vh;
object-fit: contain;
margin: 0 auto;
}
}
@media(min-width:${mediaQuery.laptop}) and (max-width:${mediaQuery.desktop}){
& > img{
width:  100%;
height: 15em;
object-fit: contain;
margin: 0 auto;
}
& > h6{
font-size: 1em;
}
& > h4 {
  font-size: 1.5em;
}
}
`
