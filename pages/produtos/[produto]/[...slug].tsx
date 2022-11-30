/* eslint-disable @next/next/no-img-element */
import { Carousel } from '@mantine/carousel'
import { Container, Modal } from '@mantine/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Script from 'next/script'
import { useEffect, useState } from 'react'
import { FaList } from 'react-icons/fa'
import styled from 'styled-components'
import banner from '../../../assets/scss/produtos/banner-produto.module.scss'
import styles from '../../../assets/scss/produtos/product-details.module.scss'
import consortium from '../../../components/Consortium/consortium.module.scss'
import { Footer } from '../../../components/Footer/footer'
import Form from '../../../components/Form/form'
import Header from '../../../components/Header/header'
import * as fbq from '../../../lib/fpixel'
import { Products } from '../../../typings'

interface Props {
  product: any
}

const Img = styled.img`
  width: 100%;
  height: 600px;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center;
  object-position: center;
  @media (max-width: 600px) {
    height: 100%;
  }
`

const Youtube = styled.div`
  iframe {
    width: 100%;
    height: 30rem;
    object-fit: cover;
    margin: 0 0 1.618rem 0;
    @media (max-width: 600px) {
      width: 100%;
      height: 300px;
    }
  }
`

const Title = styled.h1`
  font-size: 2.5rem;
  @media (max-width: 600px) {
    font-size: 2.4rem;
  }
`

const Promisse = styled.p`
  @media (max-width: 600px) {
    font-size: 1.118rem;
  }
`

export default function ProductPage({ product }: Props) {
  const router = useRouter()
  const { produto, slug } = router.query
  const productName =
    slug.toString().split('-').join(' ').charAt(0).toUpperCase() +
    slug.toString().split('-').join(' ').slice(1)

  const productDetails = []
  const p = product.filter((p) => {
    if (p.slug == slug) {
      return productDetails.push(p)
    }
  })

  const banners = []
  const b = productDetails.filter((b) => {
    return banners.push(b.images)
  })
  const bannersProduct = banners.flat()

  const youtube = []
  const filterYoutube = productDetails.filter((y) => {
    return youtube.push(y.youtube)
  })
  const string = youtube.toString()
  const slice = string.split('/')
  const video = slice[3]

  const flyer = []
  const filterFlyer = productDetails.filter((f) => {
    return flyer.push(f.flyer)
  })
  const flyerProduct = flyer.flat()

  const [opened, setOpened] = useState(false)

  const removeVideo = (video) => {
    if (video == undefined) {
      return 'none'
    } else {
      return 'block'
    }
  }

  const name = []
  const filterName = productDetails.filter((n) => {
    return name.push(n.name)
  })
  const nameProduct = name.toString()

  const productNames = []
  const filterProductNames = product.filter((n) => {
    return productNames.push(n.name)
  })
  const productsList = productNames

  useEffect(() => {
    fbq.pageview()

    const handleRouteChange = () => {
      fbq.pageview()
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Header />
      <Modal opened={opened} onClose={() => setOpened(false)} radius={16}>
        <h1 className={consortium.title}>Solicite seu orçamento</h1>
        <p className={consortium.subtitle}>
          Na Vasconcelos Agrícola você encontra os melhores produtos Jacto para
          o seu trabalho no campo.
        </p>
        <Form product_req={nameProduct} />
      </Modal>

      <Carousel withControls={false}>
        {productDetails.map((item: Products) => (
          <Carousel.Slide key={item.id}>
            <div className={banner.container}>
              <div className={banner.info}>
                <Title className={banner.title}>{item.name}</Title>
                <Promisse className={banner.subtitle}>{item.promise}</Promisse>
                <div className={banner.buttons}>
                  <button
                    className={banner.orcamento}
                    onClick={() => setOpened(true)}>
                    Solicitar orçamento
                  </button>
                  <button className={banner.consorcio}>
                    <Link href="/consorcio">
                      <a
                        style={{
                          color: '#fff',
                          fontSize: '14px'
                        }}>
                        Consórico Jacto
                      </a>
                    </Link>
                  </button>
                </div>
                <div className={banner.reading}>
                  <FaList
                    style={{
                      marginTop: '1px'
                    }}
                    color="#FF7F00"
                  />
                  <a
                    style={{
                      textDecoration: 'none',
                      color: '#FF7F00',
                      fontWeight: '600'
                    }}
                    href={`${flyerProduct}`}
                    target="_blank"
                    rel="noreferrer">
                    Especificações do produto
                  </a>
                </div>
              </div>
              <div className={banner.overlay}>
                <img
                  style={{
                    width: '100%',
                    height: '90vh',
                    opacity: '0.4',
                    objectFit: 'cover'
                  }}
                  src={item.images[0].image_file}
                  alt={item.name}
                />
              </div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
      <Container size={'xl'}>
        {productDetails.map((product) => (
          <div key={product.id}>
            <div
              className={styles.details}
              dangerouslySetInnerHTML={{
                __html: product.description
              }}
            />
          </div>
        ))}
        <Carousel
          style={{
            marginBottom: '50px'
          }}
          height="100%"
          withIndicators>
          {bannersProduct.map((b) => (
            <Carousel.Slide key={b.id}>
              <Img className={banner.images} src={b.image_file} alt={b.title} />
            </Carousel.Slide>
          ))}
        </Carousel>
        <Youtube className="iframe">
          <iframe
            id="video"
            className={banner.youtube}
            style={{
              width: '100%',
              marginBottom: '40px',
              display: `${removeVideo(video)}`
            }}
            src={`https://www.youtube.com/embed/${video}`}></iframe>
        </Youtube>
      </Container>
      <Footer />
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', ${process.env.NEXT_PUBLIC_PIXEL_ID});
          fbq('track', 'PageView');
          fbq('trackCustom', '${productName}');
          `
        }}
      />
    </>
  )
}

export async function getServerSideProps() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_PRODUCTS}`)
  const data = await response.json()

  return {
    props: {
      product: data
    }
  }
}
