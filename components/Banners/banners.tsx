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
  const banners = data
  const bannersReverse = banners.reverse()

  return (
    <>
      <Carousel
        withIndicators
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}>
        {bannersReverse?.map((banner: Banners) => (
          <Carousel.Slide key={banner.id}>
            <ContainerBanner>
              <InfosBanner>
                <TitleBanner>{banner.title}</TitleBanner>
                <SubtitleBanner>{banner?.description}</SubtitleBanner>
                <Link href={banner?.link}>
                  <ButtonBanner>Saiba mais</ButtonBanner>
                </Link>
              </InfosBanner>
              <OverlayBanner>
                <img
                  style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '50vh',
                    display: 'block',
                    opacity: '0.4',
                    maxHeight: '100%',
                    maxWidth: '100%'
                  }}
                  src={banner.image}
                  alt={banner.title}
                />
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
