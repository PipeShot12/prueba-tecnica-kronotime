import 'swiper/swiper.min.css'
import { objClocks } from '../../helper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useMediaQuery } from 'react-responsive'
import Buttom from '../CustomButton'
import ItemSlider from '../ItemSlider'
import mediaQuery from '../../mediaQuery'
import styled from 'styled-components'
import SwiperCore, { Autoplay, Navigation, Lazy } from 'swiper'

SwiperCore.use([Autoplay, Navigation, Lazy])

export default function SliderItems () {
  const isDesktop = useMediaQuery({ minWidth: mediaQuery.laptop })

  const buttonMobile = {
    width: '60%',
    textAlign: 'center',
    fontSize: '3.4vh',
    padding: '1vh 2vh',
    marginTop: '3em'
  }
  const buttonDesktop = {
    width: '25%',
    textAlign: 'center',
    fontSize: '2.5vh',
    padding: '1vh 2vh',
    marginTop: '3em'
  }
  const sizeButton = isDesktop ? buttonDesktop : buttonMobile
  return (
    <Container>
      <h2 style={{ textAlign: 'center' }}>COLECCIONES</h2>
      <hr />
      <Swiper
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        navigation
        lazy
        updateOnWindowResize
        breakpoints={
          {
            200: {
              slidesPerView: 2
            },
            760: {
              slidesPerView: 3
            },
            1024: {
              slidesPerView: 4
            }
          }
        }
      >
        {objClocks.map((item, index) => (
          <SwiperSlide
            key={`clock-${index}`}
          >
            <ItemSlider
              img={item.img}
              price={item.price}
              name={item.name}
            />
          </SwiperSlide>))}
      </Swiper>
      <Buttom style={sizeButton}>VER TODO
      </Buttom>
    </Container>
  )
}
const Container = styled.div`
background-color: var(--secondary);
padding-bottom: 7vh;
margin-top: 0.8vh;
height: 100%;
width: 100%;
& > h2{
  letter-spacing: 0.2em;
  padding-top: 1.5em;
  font-size: 3.7vh;
  margin: 0;
}
& > hr{
    border: 0.2vh solid var(--primary);
   background-color: var(--primary);
   width: 10%;
   margin-bottom: 7vh;
}
@media(min-width:${mediaQuery.desktop}){
.swiper-button-next { color: red;
position: absolute;
top: 35%;
right: 1.5vh;
transform: translateY(-50%);
z-index: 60;
}
.swiper-button-next:before {
  content: '\f054';
  font-family: 'Font Awesome\ 5 Free';
  color: rgba(255,255,255,0.5);
  font-weight: 900;
  font-size: 4vh;
  cursor: pointer;
}
.swiper-button-next:hover:before{
  color: rgba(255,255,255,1);
}
.swiper-button-prev { color: red;
position: absolute;
top: 35%;
left: 1.5vh;
transform: translateY(-50%);
z-index: 60;
}
.swiper-button-prev:before {
  content: '\f053';
  font-family: 'Font Awesome\ 5 Free';
  color: rgba(255,255,255,0.5);
  font-weight: 900;
  font-size: 4vh;
  cursor: pointer;
}
.swiper-button-prev:hover:before{
  color: rgba(255,255,255,1);
}
}
`
