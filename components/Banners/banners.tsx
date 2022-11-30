/* eslint-disable @next/next/no-img-element */
import { Carousel } from '@mantine/carousel'
import Autoplay from 'embla-carousel-autoplay'
import Link from 'next/link'
import { useRef } from 'react'
import { Banners } from '../../typings'
import {
  ButtonBanner,
  ContainerAnimated,
  ContainerBanner,
  ImageBanner,
  InfosBanner,
  OverlayBanner,
  SubtitleBanner,
  TitleAnimated,
  TitleBanner
} from './styles'
import LogoJacto from '/assets/icons/logo/jacto-deafult.svg'
import LogoVasconcelos from '/assets/icons/logo/logo-vasconcelos.svg'

export default function Banner({ data }) {
  const autoplay = useRef(Autoplay({ delay: 4000 }))
  const banners = [...data].reverse()

  return (
    <>
      <Carousel
        withIndicators
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}>
        {banners?.map((banner: Banners) => (
          <Carousel.Slide key={banner.id}>
            <ContainerBanner>
              <InfosBanner>
                <TitleBanner>{banner.title}</TitleBanner>
                <SubtitleBanner>{banner.description}</SubtitleBanner>
                <Link href={banner.link}>
                  <ButtonBanner>Saiba mais</ButtonBanner>
                </Link>
              </InfosBanner>
              <OverlayBanner>
                <ImageBanner src={banner.image} alt={banner.title} />
              </OverlayBanner>
            </ContainerBanner>
          </Carousel.Slide>
        ))}
      </Carousel>
      {/* Animated Banner */}
      <ContainerAnimated>
        <div>
          <LogoVasconcelos width={200} />
        </div>
        <div>
          <TitleAnimated
            style={{
              color: '#0d4b26'
            }}>
            Somos <strong>revenda master </strong>
          </TitleAnimated>
        </div>
        <div>
          <LogoJacto width={200} />
        </div>
      </ContainerAnimated>
    </>
  )
}
