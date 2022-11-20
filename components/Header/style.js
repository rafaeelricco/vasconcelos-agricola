import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  padding: 0.218rem 0;
  margin: 1rem 0 1rem 0;
  background-color: #ffff;
  justify-content: space-between;

  .inicio {
    @media (max-width: 680px) {
      display: none;
    }
  }
  .produtos {
    @media (max-width: 680px) {
      display: none;
    }
  }
  .empresa {
    @media (max-width: 792px) {
      display: none;
    }
  }
  .consorcio {
    @media (max-width: 892px) {
      display: none;
    }
  }
  .contato {
    @media (max-width: 992px) {
      display: none;
    }
  }
`

export const LayoutContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-content: center;
  justify-content: space-between;
  padding: 1rem 0;
`
export const BackgroundContainer = styled.div`
  background-color: rgba(255, 127, 0, 0.04);
  position: relative;
`

export const LocationContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
`
export const ContactContainer = styled(LocationContainer)``

export const Text = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
  color: #0d4b26;
  margin: 2px 0.4rem 0 0.4rem;
  letter-spacing: -0.4px;
  transition: all 0.3s ease-out;
  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`

export const ContainerHamburguer = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
  @media (min-width: 681px) and (max-width: 1920px) {
    display: none;
  }
`

export const Anchor = styled.a`
  text-decoration: none;
  color: #0d4b26;
`

export const ContainerButtons = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  padding: 0.618rem 0;
  grid-gap: 1rem;
  @media (max-width: 600px) {
    display: none;
  }
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;

  .pecas {
    @media (max-width: 978px) {
      display: none;
    }
  }
  .comercial {
    @media (max-width: 680px) {
      display: none;
    }
  }
`
