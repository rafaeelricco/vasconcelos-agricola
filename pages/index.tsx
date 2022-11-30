/* eslint-disable @next/next/no-img-element */
import { Container } from '@mantine/core'
import Script from 'next/script'
import Banner from '../components/Banners/banners'
import Benefits from '../components/Benefits/benefits'
import Company from '../components/Company/company'
import Featureds from '../components/Featureds/featureds'
import { Footer } from '../components/Footer/footer'
import Header from '../components/Header/header'
import AcceptCookies from '../utils/cookies'

export default function Home({ banners, featureds }) {
  return (
    <>
      <Header />
      <AcceptCookies />
      <Banner data={banners} />
      <Container size={'xl'}>
        <Featureds data={featureds} />
        <Company />
        <Benefits />
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
          fbq('trackCustom', 'Página inicial');
          `
        }}
      />
    </>
  )
}

export async function getServerSideProps() {
  const banners = await fetch(`${process.env.NEXT_PUBLIC_API_BANNERS}`)
  const bannersJson = await banners.json()

  const featureds = await fetch(`${process.env.NEXT_PUBLIC_API_FEATURES}`)
  const featuredsJson = await featureds.json()

  return {
    props: {
      banners: bannersJson,
      featureds: featuredsJson
    }
  }
}
