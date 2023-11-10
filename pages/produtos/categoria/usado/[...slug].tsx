/* eslint-disable @next/next/no-img-element */
import { Carousel } from '@mantine/carousel'
import { Container, Modal, Tabs } from '@mantine/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { FaList, FaWhatsapp } from 'react-icons/fa'
import styled from 'styled-components'
import { Autoplay, Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import consortium from '../../../../components/Consortium/consortium.module.scss'
import { Footer } from '../../../../components/Footer/footer'
import Form from '../../../../components/Form/form'
import Header from '../../../../components/Header/header'
import slider from '../../../../components/Products/carousel.module.scss'
import { Used } from '../../../../typings'

const ContainerPart = styled.div``

const Img = styled.img`
  object-fit: contain;
  display: grid;
  margin: 0;
`
const ButtonWhatsApp = styled.button`
  display: flex;
  gap: 0.218rem;
  align-items: center;
  font-weight: 500;
  margin: 0;
  justify-content: center;
  height: 32px;
  width: 50%;
  background: #25d366;
  border-radius: 0.618rem;
  color: #ffff;
  cursor: pointer;

  a {
    font-size: 0.9rem;
  }
`
const ButtonConsortium = styled(ButtonWhatsApp)`
  background: #f58220;
  font-size: 0.9rem;
`
const Buttons = styled.div`
  display: flex;
  margin: 1rem 0;
  gap: 0.518rem;
  width: 40vw;
  flex-direction: row;
  @media (max-width: 680px) {
    width: 100%;
  }
`
const Help = styled.div`
  display: grid;
  grid-gap: 0.518rem;
  width: fit-content;
  text-decoration: none;
  background: #222222;
  border-radius: 16px;
  padding: 0.818rem 1.436rem;
  @media (max-width: 680px) {
    width: 100%;
    justify-items: center;
  }
`
const HelpTitle = styled.p`
  font-weight: bold;
  color: #f58220;
`
const HelpSubtitle = styled.p`
  color: #ffff;
`
const Description = styled.div`
  display: grid;
  grid-gap: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`
const TitleDesc = styled.h1`
  font-size: 1.618rem;
  margin: 4rem 0 0.818rem 0;
  @media (max-width: 600px) {
    margin: 3rem 0 0.618rem 0;
  }
`
const InfosPart = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 2.618rem;
  @media (max-width: 992px) {
    grid-auto-flow: row;
  }
  @media (max-width: 600px) {
    justify-items: start;
    grid-gap: 0.618rem;
  }
  @media (max-width: 400px) {
    justify-items: start;
    grid-gap: 0.618rem;
  }
`
const DetailsParts = styled.div`
  margin: 0;
`
const Details = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.618rem;
  @media (max-width: 600px) {
    grid-gap: 0.318rem;
  }

  p {
    font-size: 1rem;
    color: #686868;
    font-weight: normal;
  }
`
const Price = styled.div`
  h1 {
    @media (max-width: 600px) {
      margin: 0.418rem 0 0.418rem 0;
    }
  }
`
const TitleDetail = styled.div`
  h1 {
    @media (max-width: 600px) {
      margin: 0.518rem 0 0.518rem 0;
    }
  }
`
const CarouselContainer = styled.div`
  margin: 1.618rem 0 1.618rem 0;
`

export default function ProductPage({ useds }: { useds: Used[] }) {
  const router = useRouter()
  const [opened, setOpened] = useState(false)
  const { produto, slug } = router.query
  const family = slug.slice(0, -1)
  const path = slug.slice(1)

  const used = []

  const p = useds.filter((p) => {
    if (p.slug === slug[slug.length - 1]) {
      used.push(p)
    }
  })

  const name = []
  const filterName = used.filter((n) => {
    return name.push(n.name)
  })
  const nameProduct = name.toString()

  const productNames = []
  const filterProductNames = useds.filter((n) => {
    return productNames.push(n.name)
  })
  const productsList = productNames

  const random = useds.sort(() => Math.random() - 0.5).slice(0, 4)

  const description = used
    .map((d) => {
      return d.description.toString()
    })
    .flat()
    .toString()

  return (
    <>
      <Header />
      <Container size={'xl'}>
        <Modal opened={opened} onClose={() => setOpened(false)} radius={16}>
          <h1 className={consortium.title}>Solicite seu orçamento</h1>
          <p className={consortium.subtitle}>
            Na Vasconcelos Agrícola você encontra os melhores produtos Jacto
            para o seu trabalho no campo.
          </p>
          <Form product_req={nameProduct} />
        </Modal>

        <ContainerPart>
          {used.map((part: any) => (
            <InfosPart key={part.name}>
              <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                centeredSlides={true}
                grabCursor={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false
                }}
              >
                {part.images.map((image) => (
                  <SwiperSlide key={image}>
                    <Img src={image.image_url} alt={part.name} />
                  </SwiperSlide>
                ))}
              </Swiper>

              <DetailsParts>
                <TitleDetail>
                  <h1>{part.name}</h1>
                </TitleDetail>
                <Details>
                  <p>{part.branding}</p> - <p>{part.year}</p>
                </Details>
                <Price>
                  <h1>{part.price}</h1>
                </Price>
                <Buttons>
                  <ButtonConsortium onClick={() => setOpened(true)}>
                    Solicitar orçamento
                  </ButtonConsortium>

                  <ButtonWhatsApp>
                    <FaWhatsapp size={20} />
                    <a
                      href="https://api.whatsapp.com/send/?phone=5551999614425&text&type=phone_number&app_absent=0"
                      target={'_blank'}
                      rel="noreferrer"
                      style={{ color: '#fff' }}
                    >
                      Pedir agora
                    </a>
                  </ButtonWhatsApp>
                </Buttons>
                <Help>
                  <a
                    href="https://api.whatsapp.com/send/?phone=5551999614425&text&type=phone_number&app_absent=0"
                    target={'_blank'}
                    rel="noreferrer"
                    style={{ color: '#fff' }}
                  >
                    <HelpTitle>Ficou com dúvida sobre o produto?</HelpTitle>
                    <HelpSubtitle>A gente pode te ajudar :)</HelpSubtitle>
                  </a>
                </Help>
              </DetailsParts>
            </InfosPart>
          ))}

          <Description>
            <Tabs defaultValue="description" color="orange">
              <Tabs.List>
                <Tabs.Tab
                  style={{
                    fontSize: '1rem',
                    fontWeight: 'bold'
                  }}
                  value="description"
                  icon={
                    <FaList
                      style={{
                        marginTop: '1px'
                      }}
                      color="#FF7F00"
                    />
                  }
                >
                  Descrição
                </Tabs.Tab>
              </Tabs.List>
              <Tabs.Panel value="description" pt="lg">
                {used.map((part: any) => (
                  <div key={part.name}>{part.description}</div>
                ))}
              </Tabs.Panel>
            </Tabs>
          </Description>
        </ContainerPart>
      </Container>
      <Container size={'xl'}>
        <TitleDesc>Produtos relacionados</TitleDesc>
        <Details>
          <p>Confira alguns produtos que talvez você possa se interessar</p>
        </Details>
        <CarouselContainer>
          <Carousel
            slideSize="33.333333%"
            slideGap="md"
            breakpoints={[
              { maxWidth: 'md', slideSize: '50%' },
              { maxWidth: 'sm', slideSize: '100%', slideGap: 0 }
            ]}
            loop
            align="start"
          >
            {random?.map((r: any) => (
              <Carousel.Slide key={r.id}>
                <Link
                  href={`/produtos/categoria/usado/${r.slug}`}
                  key={r.id}
                  style={{
                    cursor: 'pointer',
                    textDecoration: 'none'
                  }}
                >
                  <div className={slider.container}>
                    <div
                      className="container-product"
                      style={{
                        cursor: 'pointer'
                      }}
                    >
                      <div className="product-infos">
                        <img
                          src={r.images.map((item) => item.image_url)}
                          alt={r.name}
                          style={{
                            borderRadius: '24px',
                            objectFit: 'cover',
                            width: '280px'
                          }}
                        />
                        <div className="layout-title-card">
                          <h2
                            style={{
                              fontSize: '1.118rem'
                            }}
                            className="title-card-product"
                          >
                            {r.name}
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </Carousel.Slide>
            ))}
          </Carousel>
        </CarouselContainer>
      </Container>
      <Footer />
    </>
  )
}

export async function getServerSideProps({ req, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_USEDS}`)
  const useds = await response.json()

  return {
    props: {
      useds
    }
  }
}
