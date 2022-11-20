/* eslint-disable @next/next/no-img-element */
import { Carousel } from '@mantine/carousel'
import { Container, Modal, Tabs, TypographyStylesProvider } from '@mantine/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { FaList, FaWhatsapp } from 'react-icons/fa'
import styled from 'styled-components'
import consortium from '../../../components/Consortium/consortium.module.scss'
import { Footer } from '../../../components/Footer/footer'
import Form from '../../../components/Form/form'
import Header from '../../../components/Header/header'
import slider from '../../../components/Products/carousel.module.scss'
import { Parts } from '../../../typings'

const ContainerPart = styled.div``

const Img = styled.img`
  object-fit: scale-down;
  height: 350px;
  width: 300px;
  display: grid;
  justify-items: start;
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
  margin: 1rem 0 0.618rem 0;
`
const InfosPart = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  @media (max-width: 992px) {
    grid-auto-flow: row;
  }
  @media (max-width: 600px) {
    justify-items: center;
  }
`
const DetailsParts = styled.div`
  margin: 0;
`
const Details = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.618rem;

  p {
    font-size: 1rem;
    color: #686868;
    font-weight: normal;
  }
`

export default function ProductPage({ parts }: { parts: Parts[] }) {
  const router = useRouter() // next/router
  const [opened, setOpened] = useState(false) // Modal
  const { slug } = router.query // get slugs from url
  const intial = [] // initial state of part

  // get part if slug is equal to part slug
  const part = parts.reduce((acc, part) => {
    if (part.slug === slug[1]) {
      acc.push(part)
    }
    return acc
  }, intial)

  // send name of part to form
  const nameProduct = slug[1]

  // function to remove actual product from parts array
  const removeProduct = parts.filter((part) => part.slug !== slug[1])

  return (
    <>
      <Header />
      <Container size={'xl'}>
        <Modal opened={opened} onClose={() => setOpened(false)} radius={24}>
          <h1 className={consortium.title}>Solicite seu orçamento</h1>
          <p className={consortium.subtitle}>
            Na Vasconcelos Agrícola você encontra os melhores produtos Jacto
            para o seu trabalho no campo.
          </p>
          <Form product_req={nameProduct} />
        </Modal>

        {intial?.map((p: Parts) => (
          <ContainerPart key={p.name}>
            <InfosPart>
              <Img src={p.images[0].image_url} alt={p?.name} />
              <DetailsParts>
                <h1>{p.name}</h1>
                <Details>
                  <p>{p.code}</p>
                  <p>{p.branding}</p>
                </Details>
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
                      style={{ color: '#fff' }}>
                      Pedir agora
                    </a>
                  </ButtonWhatsApp>
                </Buttons>
                <Help>
                  <a
                    href="https://api.whatsapp.com/send/?phone=5551999614425&text&type=phone_number&app_absent=0"
                    target={'_blank'}
                    rel="noreferrer"
                    style={{ color: '#fff' }}>
                    <HelpTitle>Ficou com dúvida sobre o produto?</HelpTitle>
                    <HelpSubtitle>A gente pode te ajudar :)</HelpSubtitle>
                  </a>
                </Help>
              </DetailsParts>
            </InfosPart>
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
                    }>
                    Descrição
                  </Tabs.Tab>
                </Tabs.List>
                <Tabs.Panel value="description" pt="lg">
                  <TypographyStylesProvider
                    style={{
                      fontSize: '1.118rem'
                    }}>
                    <div dangerouslySetInnerHTML={{ __html: p.description }} />
                  </TypographyStylesProvider>
                </Tabs.Panel>
              </Tabs>
            </Description>
          </ContainerPart>
        ))}
      </Container>
      <Container size={'xl'}>
        <TitleDesc>Produtos relacionados</TitleDesc>
        <Details>
          <p>Confira alguns produtos que talvez você possa se interessar</p>
        </Details>
        <div className={slider.featured}>
          <Carousel
            slideSize="33.333333%"
            slideGap="md"
            breakpoints={[
              { maxWidth: 'md', slideSize: '50%' },
              { maxWidth: 'sm', slideSize: '100%', slideGap: 0 }
            ]}
            loop
            align="start">
            {removeProduct?.map((r: Parts) => (
              <Carousel.Slide key={r.id}>
                <Link
                  href={`/pecas/categoria/bicos-e-otmis/${r.slug}`}
                  key={r.name}
                  style={{
                    cursor: 'pointer',
                    textDecoration: 'none'
                  }}>
                  <div
                    className={slider.container}
                    style={{
                      margin: '1.618rem 0'
                    }}>
                    <div className="container-product">
                      <div
                        className="product-infos"
                        style={{
                          cursor: 'pointer'
                        }}>
                        <img
                          src={r.images[0].image_url}
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
                            className="title-card-product">
                            {r?.name}
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </Carousel.Slide>
            ))}
          </Carousel>
        </div>
      </Container>
      <Footer />
    </>
  )
}

export async function getServerSideProps() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_PARTS}`)
  const data = await response.json()

  return {
    props: {
      parts: data
    }
  }
}
