import { Carousel } from '@mantine/carousel'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'tabler-icons-react'
import empresa1 from '../../public/imagens/Artboard 1.webp'
import empresa2 from '../../public/imagens/Artboard 2.webp'
import empresa3 from '../../public/imagens/Artboard 3.webp'
import company from './company.module.scss'

export default function Company() {
  return (
    <>
      <div className={company.layout}>
        <Carousel
          withControls={false}
          slideSize="100%"
          align="start"
          slideGap={'sm'}
          loop
        >
          <Carousel.Slide
            style={{
              display: 'grid'
            }}
          >
            <Image
              style={{
                borderRadius: '1rem'
              }}
              src={empresa1}
              layout="intrinsic"
              alt="Foto da empresa"
            />
          </Carousel.Slide>
          <Carousel.Slide
            style={{
              display: 'grid'
            }}
          >
            <Image
              style={{
                borderRadius: '1rem'
              }}
              src={empresa2}
              alt="Foto da empresa"
            />
          </Carousel.Slide>
          <Carousel.Slide
            style={{
              display: 'grid'
            }}
          >
            <Image
              style={{
                borderRadius: '1rem'
              }}
              src={empresa3}
              alt="Foto da empresa"
            />
          </Carousel.Slide>
        </Carousel>
        <div>
          <h1 className={company.title}>História da empresa</h1>
          <p className={company.subtitle}>
            A Vasconcelos Agrícola foi fundada em 1990 pelo diretor Jaine Rovani
            Nunes Vasconcelos, juntamente com quatro membros de uma tradicional
            família arrozeira de Cachoeira do Sul. A empresa iniciou suas
            atividades com a comercialização e representação de equipamentos e
            produtos agrícolas. Atualmente, a mesma é dirigida por Jaine e Tiago
            Vasconcelos...
          </p>
          <div className={company.reading}>
            <Link href="/empresa">Continuar lendo</Link>
            <ChevronRight color="#FF7F00" />
          </div>
        </div>
      </div>
    </>
  )
}
