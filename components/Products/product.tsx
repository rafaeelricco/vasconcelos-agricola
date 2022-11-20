/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import styled from 'styled-components'

interface Props {
  title: string
  description: string
  image: any
  alt: string
  href: string
}

const ContainerCard = styled.div`
  display: grid;
  justify-content: center;
  width: 300px;
  height: 390px;
  border: 1px solid #f58220;
  padding: 0.518rem;
  border-radius: 24px;
`
const InfoCard = styled.div`
  display: grid;
  justify-content: space-around;
`
const ImageCard = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: -webkit-fill-available;
  height: 272px;
  object-fit: cover;
`
const TitleCard = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: min-content;
  grid-gap: 0.518rem;
  align-items: center;
  justify-content: space-between;
  margin: 0 0.618rem 0 0.618rem;

  h2 {
    font-weight: 700;
    font-size: 1.218rem;
    margin: 0;
  }
`
const ButtonCard = styled.button`
  width: 7rem;
  height: 1.818rem;
  border-radius: 0.618rem;
  background-color: #f58220;
  color: #fff;
  font-size: 14px;
  letter-spacing: -0.5px;
  font-weight: 500;

  a {
    text-decoration: none;
    color: #fff;
  }
`
const DescriptionCard = styled.p`
  display: grid;
  font-size: 16px;
  color: #8e8e8e;
  text-align: left;
  line-height: 1.5;
  margin: 0 0.618rem 0 0.618rem;
`

export default function Product({
  title,
  description,
  image,
  alt,
  href
}: Props) {
  return (
    <ContainerCard>
      <InfoCard>
        <ImageCard
          src={image}
          alt={alt}
          style={{
            borderRadius: '24px',
            objectFit: 'cover',
            width: '280px'
          }}
        />
        <TitleCard>
          <h2>{title}</h2>
          <ButtonCard>
            <a href={href}>Ver produto</a>
          </ButtonCard>
        </TitleCard>
        <DescriptionCard> {description}</DescriptionCard>
      </InfoCard>
    </ContainerCard>
  )
}
