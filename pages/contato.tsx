/* eslint-disable jsx-a11y/alt-text */
import { Badge, Button, Container } from '@mantine/core'
import { useRouter } from 'next/router'
import Script from 'next/script'
import { FaWhatsapp } from 'react-icons/fa'
import styled from 'styled-components'
import { Footer } from '../components/Footer/footer'
import Form from '../components/Form/form'
import Header from '../components/Header/header'

const ContainerItem = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  align-content: center;
  position: relative;
  @media (max-width: 768px) {
    justify-items: center;
  }
`
const ContainerProduct = styled.div`
  display: grid;
  gap: 1.618rem;
`
const ContainerCard = styled.div`
  display: flex;
  border-radius: 24px;
  position: absolute;
  width: max-content;
  z-index: 1;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const InfoCard = styled.div`
  display: grid;
  justify-items: center;
  margin: 0 0 0 3rem;
  @media (max-width: 768px) {
    margin: 0;
  }
`
const ImageCard = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 272px;
  object-fit: cover;
  border-radius: 24px;
`
const TitleCard = styled.div`
  display: grid;
  justify-items: start;
  gap: 0.418rem;
  @media (max-width: 768px) {
    justify-items: center;
    justify-self: center;
    width: 72%;
    text-align: center;
  }

  h2 {
    font-weight: 700;
    font-size: 32px;
    text-align: center;
  }
  a {
    text-decoration: none;
    color: #ff7f00;
    font-weight: 700;
    transition: all 0.3s ease-out;
    &:hover {
      transform: scale(1.1);
    }
  }
`
const Title = styled.div`
  display: grid;
  justify-items: center;
  text-align: center;
  margin: 2.618rem 0 2.618rem 0;

  h1 {
    font-size: 2rem;
    letter-spacing: -1.5px;
    color: #0d4b26;
    margin: 0 0 1rem 0;
  }
  strong {
    color: #ff7f00;
  }
`
const ImageContainer = styled.div`
  display: grid;
  background-color: black;
  border-radius: 24px;
`
const Image = styled.img`
  opacity: 0.4;
  height: 400px;
  border-radius: 24px;
  width: 100%;
  transition: all 0.3s ease-out;
  @media (max-width: 768px) {
    height: 500px;
  }
`
const PromisseBar = styled.div`
  display: grid;
  width: 100%;
  gap: 0.118rem;
  position: absolute;
  z-index: 1;
  color: #ffff;
  margin: 0rem 0 0 23rem;
  border-radius: 24px 24px 0 0;
  align-items: center;
  justify-items: start;
  p {
    font-size: 1rem;
  }
  a {
    text-decoration: none;
  }
  @media (max-width: 768px) {
    position: initial;
    flex-direction: column;
    margin: 1.2rem 0 0 0;
  }
`
const ContainerForm = styled.div`
  display: grid;
`
const TitleForm = styled.div`
  display: grid;
  justify-items: center;
  color: #0d4b26;
  margin: 2rem 0 0 0;

  h1 {
    letter-spacing: -1.5px;
  }
`

export default function Contato({ products }: { products: any }) {
  const router = useRouter()

  const launch = products.filter((item) => item.launch === true).slice(0, 4)

  return (
    <>
      <Header />
      <Container size={'xl'}>
        <Title>
          <h1>
            Somos a força que vem do <strong>campo</strong>.
          </h1>
          <a
            href="https://api.whatsapp.com/send?phone=5551999614425"
            target={'_blank'}
            rel="noreferrer"
          >
            <Button
              radius={'md'}
              variant={'light'}
              color={'green'}
              leftIcon={<FaWhatsapp size={18} />}
            >
              Fale com um vendedor
            </Button>
          </a>
        </Title>
        <ContainerProduct>
          {launch.map((item: any) => (
            <ContainerItem key={item.id}>
              <ContainerCard>
                <InfoCard>
                  <ImageCard
                    style={{
                      objectFit: 'cover',
                      height: '264px',
                      width: '280px',
                      display: 'block',
                      maxHeight: '100%',
                      maxWidth: '100%',
                      borderRadius: '1rem'
                    }}
                    src={item.cover}
                    alt={item.name}
                  />
                </InfoCard>
                <PromisseBar>
                  <TitleCard>
                    <Badge
                      variant="gradient"
                      size={'sm'}
                      gradient={{ from: '#ff7700', to: '#f58220' }}
                    >
                      Lançamento
                    </Badge>
                    <h2>{item.name}</h2>
                    <p>{item.promise}</p>
                    <a href={`produtos/${item.category.slug}/${item.slug}`}>
                      Conheça mais
                    </a>
                  </TitleCard>
                </PromisseBar>
              </ContainerCard>
              <ImageContainer>
                <Image src={item.images[1].image_file} />
              </ImageContainer>
            </ContainerItem>
          ))}
        </ContainerProduct>
        <ContainerForm>
          <TitleForm>
            <h1>Entre em contato</h1>
          </TitleForm>
          <Form product_req={'Página de contato'} />
        </ContainerForm>
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
          fbq('trackCustom', 'Contato');
          `
        }}
      />
    </>
  )
}

export async function getServerSideProps() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_PRODUCTS}`)
  const products = await response.json()

  return {
    props: {
      products
    }
  }
}
