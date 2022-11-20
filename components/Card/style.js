import styled from 'styled-components'

export const ContainerCard = styled.div`
  display: grid;
  justify-content: center;
  width: 300px;
  height: 380px;
  border: 1px solid #f58220;
  padding: 0.518rem;
  border-radius: 24px;
`
export const InfoCard = styled.div`
  display: grid;
  justify-items: center;
`
export const ImageCard = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: -webkit-fill-available;
  height: 272px;
  object-fit: cover;
`
export const TitleCard = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: min-content;
  grid-gap: 0.518rem;
  margin: 0 0.618rem 0 0.618rem;

  h2 {
    font-weight: 700;
    font-size: 26px;
    margin: 0 0 0.618rem 0;
    text-align: center;
  }
`
