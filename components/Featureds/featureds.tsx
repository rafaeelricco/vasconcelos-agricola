import { Carousel } from '@mantine/carousel'
import Link from 'next/link'
import { ArrowRight } from 'tabler-icons-react'
import { Featured } from '../../typings'
import Product from '../Products/product'
import {
  ButtonTitle,
  ContainerProducts,
  ContainerSlider,
  Slider,
  Subtitle,
  Title
} from './style'

export default function Featureds({ data }) {
  const f = data
  return (
    <>
      <ContainerProducts>
        <Title>Produtos</Title>
        <Link href={'/produtos'}>
          <ButtonTitle>
            Ver todos
            <ArrowRight
              style={{
                marginLeft: '8px'
              }}
            />
          </ButtonTitle>
        </Link>
      </ContainerProducts>
      <Subtitle>
        Na Vasconcelos Agrícola você encontra os melhores produtos Jacto para o
        seu trabalho no campo.
      </Subtitle>
      <ContainerSlider>
        <Carousel
          slideSize="33.333333%"
          slideGap="md"
          breakpoints={[
            { maxWidth: 'md', slideSize: '50%' },
            { maxWidth: 'sm', slideSize: '100%', slideGap: 0 }
          ]}
          loop
          align="start"
        >
          {f?.map((item: Featured) => (
            <Carousel.Slide key={item.id}>
              <Slider>
                <Product
                  title={item.name}
                  description={item.description}
                  image={item.image}
                  alt={item.name}
                  href={item.link}
                />
              </Slider>
            </Carousel.Slide>
          ))}
        </Carousel>
      </ContainerSlider>
    </>
  )
}
