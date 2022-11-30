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
  font-size: 32px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 0.218rem;
  text-align: center;
  transition: all 0.3s ease-in-out;
  @media (max-width: 680px) {
    font-size: 30px;
    line-height: 1.1;
    margin-bottom: 0.418rem;
  }
  @media (max-width: 480px) {
    font-size: 24px;
    line-height: 1.1;
    margin-bottom: 0.618rem;
  }
  @media (min-width: 1024px) {
    font-size: 42px;
    line-height: 1.1;
    margin-bottom: 0.618rem;
  }
`
export const SubtitleBanner = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: 0.618rem;
  margin-top: 0;
  text-align: center;
  transition: all 0.3s ease-in-out;
  @media (max-width: 680px) {
    font-size: 16px;
    line-height: 1.1;
    margin-bottom: 0.418rem;
  }
  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 1.3;
  }
  @media (min-width: 1024px) {
    font-size: 22px;
    line-height: 1.2;
    margin-bottom: 0.618rem;
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
  margin: 0.418rem;
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
  height: 6rem;
  align-content: center;
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
  font-size: 2.6418rem;
  font-weight: 700;
  color: #0d4b26;
  strong {
    color: #f58220;
  }
  @media (max-width: 680px) {
    font-size: 2rem;
  }
`

export const ImageBanner = styled.img`
  opacity: 0.3;
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 680px) {
    height: 40vh;
  }
  @media (min-width: 680px) {
    height: 45vh;
  }
  @media (min-width: 992px) {
    height: 100%;
  }
  @media (min-width: 1200px) {
    height: 100%;
  }
`
