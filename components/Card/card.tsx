/* eslint-disable @next/next/no-img-element */
import { ContainerCard, ImageCard, InfoCard, TitleCard } from './style'

export default function Card({ path, img, title, id }) {
  return (
    <>
      <a
        href={`${path}`}
        key={id}
        style={{
          cursor: 'pointer',
          textDecoration: 'none',
          color: 'inherit'
        }}
      >
        <ContainerCard>
          <InfoCard>
            <ImageCard
              style={{
                objectFit: 'cover',
                height: '250px',
                width: '284px',
                display: 'block',
                maxHeight: '100%',
                maxWidth: '100%',
                borderRadius: '1.218rem'
              }}
              src={img}
              alt={title}
            />
            <TitleCard>
              <h2>{title}</h2>
            </TitleCard>
          </InfoCard>
        </ContainerCard>
      </a>
    </>
  )
}
