import styled from 'styled-components'
import Button from '../../components/CustomButton/index'
import mediaQuery from '../../mediaQuery'
export default function CustomHero1 () {
  return (
    <Container>
      <img style={{ width: '100%' }} src='https://cdn.shopify.com/s/files/1/0343/2824/8459/files/TP-BPRINC-RELOJES-MOB-1080X1080_1.jpg?v=1630106567' alt='dddd' />
      <ContainerText>
        <h4>MODELOS DESDE</h4>
        <h3>$299.000</h3>
        <Button style={{ width: '60%' }}>COMPRAR AHORA</Button>
      </ContainerText>
    </Container>
  )
}
const Container = styled.div`
position: relative;
width: 100%;
@media(min-width:${mediaQuery.laptop}){
  & > img{
  content: url('https://cdn.shopify.com/s/files/1/0343/2824/8459/files/TP-BPRINC-RELOJES-DESK-1920x650_1.jpg?v=1630106580');
}
}
`
const ContainerText = styled.div`
position: absolute;
bottom: 10%;
left: 50%;
width: 100%;
transform: translateX(-50%);
& > h3,h4{
    text-align: center;
    margin: 0;
    font-weight: 800;
    line-height: 1.3;
}
& > h3{
    font-size: 3.8vh;
    margin-bottom: 1vh;
}
& > h4{
    font-size: 2.8vh;
}
@media(max-width:${mediaQuery.small}){
bottom: 5vh;
& > h3{
  font-size: 3vh;
  margin-bottom: 0.5vh;
}
& > h4{
    font-size: 2vh;
}
& > a {
  padding:0.5vh 0.5vh;
  font-size: 1.8vh;
}
}
@media(min-width:${mediaQuery.desktop}){
top: 50%;
left: 0;
bottom: auto;
transform: translateX(0);
transform: translateY(-50%);
width: 40%;
}
@media(min-width:${mediaQuery.laptop}) and (max-width:${mediaQuery.desktop}){
top: 50%;
position: absolute;
left: 0;
bottom: auto;
transform: translateX(0);
transform: translateY(-50%);
width: 40%;
& > h3{
font-size: 2.5em;
}
& > h4{
  font-size: 1.8em;
}
& > a {
padding:0.5vh 0.5vh;
font-size: 1.5em;
}
}
`
