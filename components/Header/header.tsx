/* eslint-disable react/no-children-prop */
import { Button, Container } from '@mantine/core'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import Atendimento from '../../assets/icons/header/atendimento.svg'
import Location from '../../assets/icons/header/endereco.svg'
import ActiveLink from '../Link/link'
import { Hamburguer } from './burger'
import {
  BackgroundContainer,
  ContactContainer,
  ContainerButtons,
  ContainerHamburguer,
  HeaderContainer,
  LayoutContainer,
  LocationContainer,
  Text
} from './style'
import Logo from '/assets/icons/logo/logo-vasconcelos.svg'

export default function Header() {
  return (
    <>
      <BackgroundContainer>
        <Container size={'xl'}>
          <LayoutContainer>
            <a
              href="https://www.google.com.br/maps/place/Vasconcelos+Agr%C3%ADcola/@-30.0154253,-52.9202561,17z/data=!3m1!4b1!4m5!3m4!1s0x95035911e93e9b21:0x9f3499701545e96a!8m2!3d-30.0154749!4d-52.9181154?shorturl=1"
              target={'_blank'}
              rel="noreferrer"
            >
              <LocationContainer>
                <Location fill="#ff7f00" width={20} />
                <Text>R. Marcelo Gama, 3280 - Cachoeira do Sul, RS</Text>
              </LocationContainer>
            </a>
            <a href="tel:+555137233292" target={'_blank'} rel="noreferrer">
              <ContactContainer>
                <Atendimento fill="#ff7f00" width={20} />
                <Text>(51)3723-3292</Text>
              </ContactContainer>
            </a>
          </LayoutContainer>
        </Container>
      </BackgroundContainer>
      <Container size={'xl'}>
        <HeaderContainer>
          <Link href={'/'}>
            <Logo
              style={{ cursor: 'pointer' }}
              width={164}
              alt="Vasconcelos Agrícola"
            />
          </Link>
          <ActiveLink
            classForComponent="inicio"
            children={'Início'}
            key={'inicio'}
            href={'/'}
          />

          <ActiveLink
            classForComponent="produtos"
            children={'Produtos'}
            key={'produtos'}
            href={'/produtos'}
          />

          <ActiveLink
            classForComponent="empresa"
            children={'Empresa'}
            key={'empresa'}
            href={'/empresa'}
          />

          <ActiveLink
            classForComponent="consorcio"
            children={'Consórcio'}
            key={'consorcio'}
            href={'/consorcio'}
          />

          <ActiveLink
            classForComponent="contato"
            children={'Contato'}
            key={'contato'}
            href={'/contato'}
          />
          <ContainerButtons>
            <a
              href="https://api.whatsapp.com/send?phone=5551999614425"
              target={'_blank'}
              rel="noreferrer"
            >
              <Button
                className={'comercial'}
                variant={'light'}
                color={'green'}
                radius={'md'}
                leftIcon={<FaWhatsapp size={'21'} />}
              >
                Comercial
              </Button>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5551996954636"
              target={'_blank'}
              rel="noreferrer"
            >
              <Button
                variant={'light'}
                color={'green'}
                radius={'md'}
                className={'pecas'}
                leftIcon={<FaWhatsapp size={'21'} />}
              >
                Peças e Assist. Técnica
              </Button>
            </a>
          </ContainerButtons>
          <ContainerHamburguer>
            <Hamburguer />
          </ContainerHamburguer>
        </HeaderContainer>
      </Container>
    </>
  )
}
