import styled from 'styled-components'

/* Products Style */
export const ContainerProducts = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
`
export const Title = styled.h1`
  font-weight: 700;
  font-size: 32px;
  color: #0d4b26;
  margin: 0 0 0.618rem 0;
`
export const ButtonTitle = styled.button`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: center;
  width: auto;
  padding: 0rem 1.218rem;
  height: 2rem;
  border-radius: 0.618rem;
  background-color: #f58220;
  color: #fff;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.5px;
  cursor: pointer;
  @media (max-width: 600px) {
    margin: 4px 0 0 0;
  }
`
export const Subtitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #8e8e8e;
  margin: 0 0 2rem 0;
`
export const ContainerSlider = styled.div``

export const Slider = styled.div`
  display: grid;
  justify-content: center;
`
