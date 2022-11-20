/* eslint-disable @next/next/no-img-element */
import { Container, Select } from '@mantine/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import layout from '../../assets/scss/products.module.scss'
import { Footer } from '../../components/Footer/footer'
import Header from '../../components/Header/header'

const { options } = require('./categoria/[categoria]')

export default function Produtos({ parts }) {
  const router = useRouter()

  const family = [
    {
      name: 'Serviços',
      slug: 'servicos',
      img: 'https://ricco-storage.s3.sa-east-1.amazonaws.com/pulverizadores-automotrizes.png',
      link: '/categoria/servicos'
    },
    {
      name: 'Bicos e Otmis',
      slug: 'bicos-e-otmis',
      img: 'https://vasconcelos-storage.s3.sa-east-1.amazonaws.com/pecas/bicos.png',
      link: '/categoria/bicos-e-otmis'
    },
    {
      name: 'Adubadoras',
      slug: 'adubadoras',
      img: 'https://vasconcelos-storage.s3.sa-east-1.amazonaws.com/pecas/adubadoras.jpg',
      link: '/categoria/adubadoras'
    },
    {
      name: 'Atomizadores 3 Pontos',
      slug: 'atomizadores-3-pontos',
      img: 'https://vasconcelos-storage.s3.sa-east-1.amazonaws.com/pecas/atomizadores.gif',
      link: '/categoria/atomizadores-3-pontos'
    },
    {
      name: 'Atomizadores Carreta',
      slug: 'atomizadores-carreta',
      img: 'https://vasconcelos-storage.s3.sa-east-1.amazonaws.com/pecas/atomizadores-carreta.gif',
      link: '/categoria/atomizadores-carreta'
    },
    {
      name: 'Barras 3 Pontos',
      slug: 'barras-3-pontos',
      img: 'https://vasconcelos-storage.s3.sa-east-1.amazonaws.com/pecas/barras-3-pontos.gif',
      link: '/categoria/barras-3-pontos'
    },
    {
      name: 'Equipamentos Portáteis',
      slug: 'equipamentos-portateis',
      img: 'https://vasconcelos-storage.s3.sa-east-1.amazonaws.com/pecas/pulverizadores-costais.png',
      link: '/categoria/equipamentos-portateis'
    },
    {
      name: 'Pulverizadores Automotriz',
      slug: 'pulverizadores-automotriz',
      img: 'https://vasconcelos-storage.s3.sa-east-1.amazonaws.com/pecas/pulverizadores.png',
      link: '/categoria/pulverizadores-automotriz'
    },
    {
      name: 'Turboatomizadores 3 Pontos',
      slug: 'turboatomizadores-3-pontos',
      img: 'https://vasconcelos-storage.s3.sa-east-1.amazonaws.com/pecas/turboatomizadores.gif',
      link: '/categoria/turboatomizadores-3-pontos'
    },
    {
      name: 'Turboatomizadores Carreta',
      slug: 'turboatomizadores-carreta',
      img: 'https://vasconcelos-storage.s3.sa-east-1.amazonaws.com/pecas/turboatom-carreta.gif',
      link: '/categoria/turboatomizadores-carreta'
    }
  ]

  var handleClick = (value: any) => {
    router.push(`/pecas/categoria/${value}`)
  }

  const option = []

  const opt = family.filter((item) => {
    const name = item.name
    return option.push(name)
  })

  return (
    <>
      <Header />
      <Container size={'xl'}>
        <div className={layout.selection}>
          <Select
            label="Qual família do produto?"
            placeholder="Selecione"
            data={[...option]}
            onChange={(data) => {
              handleClick(
                router.push({
                  pathname: `/pecas/categoria/${data
                    .toLowerCase()
                    .split(' ')
                    .join('-')}`
                })
              )
            }}
          />
          <Select
            label="Qual a subfamília do produto?"
            placeholder="Selecione"
            data={[]}
            disabled
          />
          <Select
            label="Qual o modelo ou versão?"
            placeholder="Selecione"
            data={[]}
            disabled
          />
        </div>
        <div className={layout.list}>
          {family.map((item) => (
            <Link href={`/pecas/categoria/${item.slug}`} key={item.name}>
              <div
                style={{
                  cursor: 'pointer'
                }}
                className="container-product">
                <div className="product-infos">
                  <img
                    src={item.img}
                    alt={item.name}
                    width={300}
                    height={250}
                    style={{
                      borderRadius: '16px',
                      width: '100%'
                    }}
                  />
                  <div
                    style={{
                      justifyContent: 'center'
                    }}
                    className="layout-title-card">
                    <h2
                      style={{
                        textAlign: 'center',
                        fontSize: '1.5rem'
                      }}
                      className="title-card-product">
                      {item.name}
                    </h2>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
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
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_PARTS}`)
  const data = await response.json()

  return {
    props: {
      parts: data
    }
  }
}
