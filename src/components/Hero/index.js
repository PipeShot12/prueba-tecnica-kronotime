import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Lazy } from 'swiper'
import 'swiper/swiper.min.css'
import CustomHero1 from './CustomHero1'
import CustomHero2 from './CustomHero2'

SwiperCore.use([Autoplay, Lazy])

export default function Hero () {
  const heroImages = [CustomHero1, CustomHero2]
  return (
    <div>
      <Swiper
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop
        lazy
      >
        {heroImages.map((item, index) => (<SwiperSlide key={`hero-${index}`}>{item}</SwiperSlide>))}
      </Swiper>
    </div>
  )
}
