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
          <h1 className={company.title}>História da empresa</h1>
          <p className={company.text}>
            A Vasconcelos Agrícola foi fundada em 1990 pelo diretor Jaine Rovani
            Nunes Vasconcelos, juntamente com quatro membros de uma tradicional
            família arrozeira de Cachoeira do Sul. A empresa iniciou suas
            atividades com a comercialização e representação de equipamentos e
            produtos agrícolas. Atualmente, a mesma é dirigida por Jaine e Tiago
            Vasconcelos. Desde o início, o estabelecimento trabalha com produtos
            Jacto, mas foi em 2015 que se tornou Concessionária Master Jacto
            para o município e região, onde além vender toda linha de maquinário
            e pulverizadores, trabalham com mecânicos treinados pela fábrica,
            peças originais e uma equipe especializada para dar suporte desde o
            momento da compra, até a entrega do equipamento e pós-venda. Como
            Concessionária Master Jacto, a Vasconcelos Agrícola possui uma ampla
            linha de produtos e serviços de alta tecnologia e eficiência,
            oferecendo soluções inovadoras para o produtor rural.
          </p>
          <div className={company.cards}>
            <Card
              title="Missão"
              description="Agregar valor ao produtor rural, através de soluções em agronegócios, com as melhores tecnologias de mecanização, informações e serviços, visando o aumento da sua produtividade."
              alt="Missão"
              src={missao}
            />
            <Card
              title="Visão"
              description="Levar aos nossos clientes soluções inteligentes para o setor agrícola, com produtos de alta tecnologia e resistência, além de serviços de qualidade, valorizando a cultura local e as necessidades do produtor rural. "
              alt="Visão"
              src={visao}
            />
            <Card
              title="Valores"
              description="Como uma empresa referência em Cachoeira do Sul e região, os seguintes valores fazem parte de todas as nossas decisões e ações: ética, comprometimento, transparência, serviços de qualidade, responsabilidade social e ambiental, valorização humana e satisfação dos clientes."
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
