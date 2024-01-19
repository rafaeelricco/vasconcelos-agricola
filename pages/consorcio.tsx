import { Button, Container } from '@mantine/core'
import { useRouter } from 'next/router'
import Script from 'next/script'
import { useEffect } from 'react'
import Consortium from '../components/Consortium/consortium'
import { Footer } from '../components/Footer/footer'
import Header from '../components/Header/header'
import * as fbq from '../lib/fpixel'
import Checked from '/assets/icons/consortium/checked.svg'
import CreditCard from '/assets/icons/consortium/credit-card.svg'
import consortium from '/assets/scss/consortium.module.scss'

export default function Consorcio() {
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
        <h1 className={consortium.title}>Jacto Consórcio Nacional</h1>
        <Button
          disabled
          style={{
            fontSize: '1rem',
            color: '#FF7F00',
            backgroundColor: '#ffff',
            borderColor: '#FF7F00',
            borderStyle: 'solid',
            borderWidth: '1px',
            borderRadius: '0.618rem',
            height: '35px',
            marginBottom: '1rem',
            zIndex: '1'
          }}
        >
          Semeando histórias de sucesso
        </Button>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className={consortium.meridia}
          src={'/consortium/meridia.webp'}
          alt="Plantadeira Merídia 200"
        />
        <h2 className={consortium.subtitle}>
          Parcelas acessíveis e totalmente flexíveis no Consórcio Jacto.
        </h2>
        <div className={consortium.checkedLayout}>
          <div className={consortium.checked}>
            <CreditCard width={24} />
            <p className={consortium.details}>
              Pulverizadores em até 24x, sem juros e sem taxa de adesão.
            </p>
          </div>
          <div className={consortium.checked}>
            <Checked width={24} />
            <p className={consortium.details}>
              Grupos nacionais com poucos participantes
            </p>
          </div>
          <div className={consortium.checked}>
            <Checked width={24} />
            <p className={consortium.details}>
              Assembleias mensais, com contemplação por sorteio e lance
            </p>
          </div>
          <div className={consortium.checked}>
            <Checked width={24} />
            <p className={consortium.details}>
              Mais de 70 contemplações mensais
            </p>
          </div>
          <div className={consortium.checked}>
            <Checked width={24} />
            <p className={consortium.details}>Faturamento direto de fábrica</p>
          </div>
          <div className={consortium.checked}>
            <Checked width={24} />
            <p className={consortium.details}>
              Prioridade de entrega e garantia Jacto
            </p>
          </div>
        </div>
        <Consortium />
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
          fbq('trackCustom', 'Consorcio');
          `
        }}
      />
    </>
  )
}
