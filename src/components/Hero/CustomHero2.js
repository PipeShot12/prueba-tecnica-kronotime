import styled from 'styled-components'
import Button from '../CustomButton'
import mediaQuery from '../../mediaQuery'
export default function CustomHero1 () {
  return (
    <Container>
      <img style={{ width: '100%' }} src='https://cdn.shopify.com/s/files/1/0343/2824/8459/files/TP-BPRINC-RELOJES-MOB-1080X1080_copia.jpg?v=1628112836' alt='dddd' />
      <ContainerText>
        <h5>¡ÚLTIMAS UNIDADES!</h5>
        <h4>MODELOS EXCLUSIVOS</h4>
        <h3>$499.900</h3>
        <Button style={{ width: '60%' }}>LOS QUIERO</Button>
      </ContainerText>
    </Container>
  )
}
const Container = styled.div`
position: relative;
width: 100%;
@media(min-width:${mediaQuery.laptop}){
  & > img{
  content: url('https://cdn.shopify.com/s/files/1/0343/2824/8459/files/TP-BPRINC-RELOJES-DESK-1920x650_copia_1.jpg?v=1628112825');
}
}
`
const ContainerText = styled.div`
position: absolute;
top: 6%;
left: 50%;
width: 100%;
transform: translateX(-50%);
& > h3,h4,h5{
    text-align: center;
    margin: 0;
    font-weight: 800;
    line-height: 1.3;
    display: block;
}
& > h3{
    font-size: 3.5vh;
    margin-bottom: 1.5vh;
}
& > h4{
    font-size: 3.8vh;
}
& > h5{
    font-size: 2.5vh;
}
@media(max-width:${mediaQuery.small}){
& > h3{
  font-size: 3.2vh;
  margin-bottom: 0.2em;
}
& > h4{
  font-size: 3vh;
}
& > h5{
  font-size: 2vh;
}
& > a {
    padding: 0.5vh 0.2vh;
    font-size: 1.8vh;
  }
}
@media(min-width:${mediaQuery.desktop}){
top: 50%;
left: 0;
transform: translateX(0);
transform: translateY(-50%);
width: 40%;
}

@media(min-width:${mediaQuery.laptop}) and (max-width:${mediaQuery.desktop}){
top: 50%;
left: 0;
transform: translateX(0);
transform: translateY(-50%);
width: 40%;
& > h3{
font-size: 1.8em;
margin-bottom: 0.5vh;
}
& > h4{
  font-size: 2em;
}
& > h5{
  font-size: 1.5em;
}
& > a {
padding:0.5vh 0.5vh;
font-size: 1.2em;
}
}
/* @media (orientation: landscape) and (max-width:1024px ){
& > h3{
    font-size: 6vh;
    margin-bottom: 1.5vh;
}
& > h4{
    font-size: 8vh;
}
& > h5{
    font-size: 5vh;
}
& > a {
    padding: 0.5vh 0.2vh;
    font-size: 5vh;
  }
} */
`
