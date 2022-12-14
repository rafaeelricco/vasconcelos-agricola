import { Carousel } from '@mantine/carousel'
import { Container } from '@mantine/core'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Script from 'next/script'
import { useEffect } from 'react'
import Card from '../components/Benefits/cardBenefits'
import { Footer } from '../components/Footer/footer'
import Header from '../components/Header/header'
import * as fbq from '../lib/fpixel'
import empresa1 from '../public/imagens/Artboard 1.webp'
import empresa2 from '../public/imagens/Artboard 2.webp'
import empresa3 from '../public/imagens/Artboard 3.webp'
import missao from '/assets/icons/company/missao.png'
import valores from '/assets/icons/company/valores.png'
import visao from '/assets/icons/company/visao.png'
import company from '/assets/scss/company.module.scss'

export default function Products() {
  const router = useRouter()

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
      <Container size={'xl'}>
        <div className={company.layout}>
          <Carousel
            slideSize="33.333333%"
            slideGap="md"
            withControls={false}
            breakpoints={[
              { maxWidth: 'md', slideSize: '50%' },
              { maxWidth: 'sm', slideSize: '100%', slideGap: 0 }
            ]}
            loop
            align="start">
            <Carousel.Slide>
              <Image
                style={{
                  borderRadius: '1rem'
                }}
                src={empresa1}
                alt="missao"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image
                style={{
                  borderRadius: '1rem'
                }}
                src={empresa2}
                alt="missao"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image
                style={{
                  borderRadius: '1rem'
                }}
                src={empresa3}
                alt="missao"
              />
            </Carousel.Slide>
          </Carousel>
          <h1 className={company.title}>Hist??ria da empresa</h1>
          <p className={company.text}>
            A Vasconcelos Agr??cola foi fundada em 1990 pelo diretor Jaine Rovani
            Nunes Vasconcelos, juntamente com quatro membros de uma tradicional
            fam??lia arrozeira de Cachoeira do Sul. A empresa iniciou suas
            atividades com a comercializa????o e representa????o de equipamentos e
            produtos agr??colas. Atualmente, a mesma ?? dirigida por Jaine e Tiago
            Vasconcelos. Desde o in??cio, o estabelecimento trabalha com produtos
            Jacto, mas foi em 2015 que se tornou Concession??ria Master Jacto
            para o munic??pio e regi??o, onde al??m vender toda linha de maquin??rio
            e pulverizadores, trabalham com mec??nicos treinados pela f??brica,
            pe??as originais e uma equipe especializada para dar suporte desde o
            momento da compra, at?? a entrega do equipamento e p??s-venda. Como
            Concession??ria Master Jacto, a Vasconcelos Agr??cola possui uma ampla
            linha de produtos e servi??os de alta tecnologia e efici??ncia,
            oferecendo solu????es inovadoras para o produtor rural.
          </p>
          <div className={company.cards}>
            <Card
              title="Miss??o"
              description="Agregar valor ao produtor rural, atrav??s de solu????es em agroneg??cios, com as melhores tecnologias de mecaniza????o, informa????es e servi??os, visando o aumento da sua produtividade."
              alt="Miss??o"
              src={missao}
            />
            <Card
              title="Vis??o"
              description="Levar aos nossos clientes solu????es inteligentes para o setor agr??cola, com produtos de alta tecnologia e resist??ncia, al??m de servi??os de qualidade, valorizando a cultura local e as necessidades do produtor rural. "
              alt="Vis??o"
              src={visao}
            />
            <Card
              title="Valores"
              description="Como uma empresa refer??ncia em Cachoeira do Sul e regi??o, os seguintes valores fazem parte de todas as nossas decis??es e a????es: ??tica, comprometimento, transpar??ncia, servi??os de qualidade, responsabilidade social e ambiental, valoriza????o humana e satisfa????o dos clientes."
              src={valores}
              alt="Valores"
            />
          </div>
        </div>
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
          fbq('trackCustom', 'Empresa');
          `
        }}
      />
    </>
  )
}
