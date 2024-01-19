/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { MantineProvider } from '@mantine/core'
import Head from 'next/head'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'
import React, { useEffect } from 'react'
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
  const { Component, pageProps } = props
  const router = useRouter()
  const path = router.pathname
  const slug = router.query

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
    </>
  )
}
