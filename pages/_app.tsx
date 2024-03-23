/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { MantineProvider } from '@mantine/core'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Script from 'next/script'
import NProgress from 'nprogress'
import React, { useEffect } from 'react'
import TagManager from 'react-gtm-module'
import '../assets/css/nprogress.css'
import '../assets/scss/banners-home.scss'
import '/assets/scss/base-swiper.scss'
import '/assets/scss/base.scss'
import '/components/Products/card-product.scss'
import '/components/Products/slider.scss'
import '/node_modules/normalize.css/normalize.css'

interface Props {
  Component: React.ComponentType
  pageProps: any
}

export default function App(props: Props) {
  const router = useRouter()

  const { Component, pageProps } = props

  useEffect(() => {
    const handleStart = (url: string) => {
      NProgress.start()
    }

    const handleStop = () => {
      NProgress.done()
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-KBTCMFPM' })
  }, [])

  return (
    <>
      <Head>
        <title>Vasconcelos Agrícola | A força que vem do campo!</title>
        <meta
          name="description"
          content="Vasconcelos Agrícola Ltda. é uma empresa de agropecuária, com sede em Cachoeira do Sul."
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{
              display: 'none'
            }}
            src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <MantineProvider>
        <Component {...pageProps} />
      </MantineProvider>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-KBTCMFPM');`
        }}
      />
    </>
  )
}
