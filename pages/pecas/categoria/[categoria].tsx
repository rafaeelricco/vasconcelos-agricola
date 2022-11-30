/* eslint-disable @next/next/no-img-element */
import { Container, Select } from '@mantine/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import layout from '../../../assets/scss/products.module.scss'
import card from '../../../assets/scss/produtos/card-product.module.scss'
import { Footer } from '../../../components/Footer/footer'
import Header from '../../../components/Header/header'
import { Parts } from '../../../typings'

interface Path {
  string: string
  chartAt: any
}

export default function Category({ parts }: { parts: Parts[] }) {
  const router = useRouter()
  const path = router.query.categoria

  const init = []
  const intial = parts.filter((part) => {
    if (part.family.slug == path) {
      init.push(part)
    }
  })

  const [state, setState] = useState<Parts[]>(init)

  const filterFamily = () => {
    const families = parts.map((item) => item.family.name)
    const unique = [...new Set(families)]
    return unique
  }

  const f = []
  const filterByFamily = parts.filter((part) => {
    return f.push(part.family.name)
  })
  const u = [...new Set(f)]
  const family = u.flat().sort((a, b) => a.localeCompare(b))

  const s = []
  const optSubfamily = parts.filter((part) => {
    const subfamily = part.family.slug
    if (subfamily == path) {
      s.push(part.subfamily.name)
    }
  })
  const uSubfamily = [...new Set(s)]
  const subfamily = uSubfamily.flat().sort((a, b) => a.localeCompare(b))

  const m = []
  const filterByModels = init.filter((part) => part.model_version)
  const models = filterByModels.map((part) => {
    const filter1 = part.model_version.map((item) => {
      return item
    })
    const filter2 = filter1.map((item) => {
      return item.name
    })
    return m.push(filter2)
  })
  const unique = [...new Set(m.flat())]
  const model = unique.flat().sort((a, b) => a.localeCompare(b))

  const pushRoute = (value) => {
    const filter = parts.filter((part) => part.family.name == value)
    setState(filter)
  }

  const handleFamily = (value) => {
    const str = value
      .toLowerCase()
      .split(' ')
      .join('-')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
    router.push(`/pecas/categoria/${str}`)
    pushRoute(value)
  }

  const handleSubFamily = (value) => {
    const str = value
      .toLowerCase()
      .split(' ')
      .join('-')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')

    const subfamily = (value) =>
      parts.filter((part) => {
        if (part.subfamily.slug == str) {
          return part
        }
      })
    const subfamilyChange = subfamily(value)
    setState(subfamilyChange)
  }

  const handleModelAndVersion = (value) => {
    const str = value
      .toLowerCase()
      .split(' ')
      .join('-')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')

    const model = (value) => {
      const model = parts.filter((part) => {
        const m = part.model_version.map((item) => {
          if (item.slug == str) {
            return part
          }
        })
        if (m.includes(value)) {
          return part
        }
      })
      return model
    }
    const modelChange = model(value)
    setState(modelChange)
  }

  const label = init.map((item) => item.family.name)
  const uniqueLabel = [...new Set(label)].toString()

  return (
    <>
      <Header />
      <Container size={'xl'}>
        <div className={layout.selection}>
          <Select
            label="Qual a família do produto?"
            placeholder={uniqueLabel}
            data={[...family]}
            onChange={(data) => {
              handleFamily(data)
            }}
          />
          <Select
            label="Qual a subfamília?"
            placeholder="Selecione"
            data={[...subfamily]}
            onChange={(data) => {
              handleSubFamily(data)
            }}
          />
          <Select
            label="Qual o modelo ou versão?"
            placeholder="Selecione"
            data={[...model]}
            onChange={(data) => {
              handleModelAndVersion(data)
            }}
          />
        </div>
        <div className={layout.list}>
          {state?.map((item: Parts) => (
            <Link
              href={`/pecas/categoria/${item.family.slug}/${item.slug}`}
              key={item.id}>
              <div
                style={{
                  cursor: 'pointer'
                }}
                className={card.container}>
                <div className={card.infos}>
                  <img
                    style={{
                      objectFit: 'contain',
                      height: '100%',
                      width: '100%',
                      borderRadius: '16px'
                    }}
                    src={item.images.map((item) => item.image_url)}
                    alt={item.name}
                  />
                  <div className={card.layout}>
                    <h1
                      className={card.title}
                      style={{
                        fontSize: '1.2rem'
                      }}>
                      {item.name}
                    </h1>
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

export async function getServerSideProps() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_PARTS}`)
  const parts = await response.json()

  return {
    props: {
      parts
    }
  }
}
