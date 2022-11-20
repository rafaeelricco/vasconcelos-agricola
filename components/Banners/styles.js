import styled from 'styled-components'

export const ContainerBanner = styled.div`
  display: grid;
  position: relative;
  justify-items: center;
  align-items: center;
`
export const InfosBanner = styled.div`
  display: grid;
  grid-template-columns: 64vw;
  position: absolute;
  color: white;
  justify-items: center;
  @media (max-width: 680px) {
    grid-template-columns: 80vw;
  }
`
export const TitleBanner = styled.h1`
  font-size: 40px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 0.218rem;
  text-align: center;
  @media (max-width: 680px) {
    font-size: 32px;
    line-height: 1.1;
    margin-bottom: 0.418rem;
  }
`
export const SubtitleBanner = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: 0.618rem;
  margin-top: 0;
  text-align: center;
  @media (max-width: 680px) {
    font-size: 16px;
    line-height: 1.2;
  }
`
export const ButtonBanner = styled.button`
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
`
export const OverlayBanner = styled.div`
  height: 100%;
  width: 100vw;
  background: black;
  z-index: -1;
  overflow: hidden;
`
export const ContainerAnimated = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: space-around;
  margin: 0rem 0 1.618rem 0;
  padding: 2rem 28rem 2rem 28rem;
  background-color: rgba(255, 127, 0, 0.04);
  overflow: hidden;
  @media (max-width: 680px) {
    grid-template-columns: 1fr 350px 1fr;
    justify-content: center;
    justify-items: center;
    gap: 2rem;
  }
  @media (max-width: 992px) {
    grid-template-columns: 1fr 400px 1fr;
    padding: 2rem 2rem 2rem 2rem;
    justify-content: space-evenly;
    justify-items: center;
    gap: 2rem;
  }
  @media (max-width: 1200px) {
    grid-template-columns: 1fr 400px 1fr;
    padding: 2rem 3rem 2rem 3rem;
    justify-content: space-evenly;
    justify-items: center;
  }
  @media (min-width: 1200px) {
    padding: 2rem 12rem 2rem 12rem;
  }

  div {
    @keyframes slide {
      0% {
        transform: translate3d(150vw, 0, 0);
      }
      100% {
        transform: translate3d(-150vw, 0, 0);
      }
    }

    animation: slide 10s linear infinite;
    @include screen(infinity) {
      animation: slide 20s linear infinite;
    }
  }
`
export const TitleAnimated = styled.h1`
  font-size: 2.618rem;
  font-weight: 700;
  color: #0d4b26;
  strong {
    color: #f58220;
  }
`
