import { createStyles, Burger, Menu } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { NextLink } from '@mantine/next'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { useState } from 'react'
import { Phone, PhoneCall, PhoneCalling } from 'tabler-icons-react'
import ChaveFenda from '../../../assets/icons/header/chave-de-boca-ajustavel (1).svg'
import PaginaInicial from '../../assets/icons/header/botao-home.svg'
import Produtos from '../../assets/icons/header/tractor (1).svg'
import Sobre from '../../assets/icons/header/about-us.svg'
import Consorcio from '../../assets/icons/header/hand-shake.svg'
import Location from '../../assets/icons/header/endereco.svg'
import Pecas from '../../assets/icons/header/chave-de-fenda.svg'
import Usado from '../../assets/svg/usado.svg'
import Contato from '../../assets/svg/contato.svg'

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 1
  },

  dropdown: {
    position: 'absolute',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
    overflow: 'hidden',
    [theme.fn.largerThan('sm')]: {
      display: 'none'
    }
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%'
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none'
    }
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none'
    }
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0]
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md
    }
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({
        variant: 'light',
        color: theme.primaryColor
      }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
        .color
    }
  }
}))

export function Hamburguer() {
  const [opened, setOpened] = useState(false)
  const title = opened ? 'Close navigation' : 'Open navigation'
  const { classes } = useStyles()
  const menuItemStyle = {
    margin: '0.818rem auto'
  }

  return (
    <>
      <Menu transition="scale" width={232} shadow="md">
        <Menu.Target>
          <Burger
            color="#ff7f00"
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            className={classes.burger}
            size={26}
            transitionDuration={300}
          />
        </Menu.Target>
        <Menu.Dropdown
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
            borderRadius: '0.618rem',
            padding: '0.818rem',
            left: '-180px !important'
          }}
        >
          <Menu.Item
            color={'#0d4b26'}
            component={NextLink}
            href="/"
            style={menuItemStyle}
            icon={<PaginaInicial fill="#ff7f00" width={16} />}
          >
            Início
          </Menu.Item>
          <Menu.Item
            color={'#0d4b26'}
            component={NextLink}
            style={menuItemStyle}
            href="/produtos"
            icon={<Produtos fill="#ff7f00" width={16} />}
          >
            Produtos
          </Menu.Item>
          <Menu.Item
            color={'#0d4b26'}
            component={NextLink}
            style={menuItemStyle}
            href="/produtos/categoria/pecas-e-acessorios"
            icon={<Pecas fill="#ff7f00" width={16} />}
          >
            Peças
          </Menu.Item>
          <Menu.Item
            color={'#0d4b26'}
            component={NextLink}
            style={menuItemStyle}
            href="/produtos/categoria/usados"
            icon={<Usado fill="#ff7f00" width={16} />}
          >
            Usados
          </Menu.Item>
          <Menu.Item
            color={'#0d4b26'}
            component={NextLink}
            style={menuItemStyle}
            href="/empresa"
            icon={<Sobre fill="#ff7f00" width={16} />}
          >
            Sobre
          </Menu.Item>
          <Menu.Item
            color={'#0d4b26'}
            component={NextLink}
            style={menuItemStyle}
            href="/consorcio"
            icon={<Consorcio fill="#ff7f00" width={16} />}
          >
            Consórcio
          </Menu.Item>
          <Menu.Item
            color={'#0d4b26'}
            component={NextLink}
            style={menuItemStyle}
            href="/contato"
            icon={<Contato fill="#ff7f00" width={16.5} />}
          >
            Contato
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item
            color={'#0d4b26'}
            component={NextLink}
            style={menuItemStyle}
            href="tel:+555137233292"
            icon={<Phone fill="#ffff" stroke="#ff7f00" size={16.5} />}
          >
            Telefone fixo
          </Menu.Item>
          <Menu.Item
            color={'#0d4b26'}
            component={NextLink}
            style={menuItemStyle}
            href="https://api.whatsapp.com/send?phone=5551999614425"
            target={'_blank'}
            rel={'noopener'}
            icon={<FaWhatsapp fill="#ff7f00" size={16} />}
          >
            Comercial
          </Menu.Item>
          <Menu.Item
            color={'#0d4b26'}
            component={NextLink}
            style={menuItemStyle}
            href="https://wa.link/nbfllj"
            target={'_blank'}
            rel={'noopener'}
            icon={<FaWhatsapp fill="#ff7f00" size={16} />}
          >
            Peças e Assist. Técnica
          </Menu.Item>
          <Menu.Item
            color={'#0d4b26'}
            component={NextLink}
            style={menuItemStyle}
            href="https://www.google.com.br/maps/place/Vasconcelos+Agr%C3%ADcola/@-30.0154253,-52.9202561,17z/data=!3m1!4b1!4m5!3m4!1s0x95035911e93e9b21:0x9f3499701545e96a!8m2!3d-30.0154749!4d-52.9181154?shorturl=1"
            target={'_blank'}
            rel={'noopener'}
            icon={<Location fill="#ff7f00" width={17} />}
          >
            Localização
          </Menu.Item>
          <Menu.Item
            color={'#0d4b26'}
            component={NextLink}
            style={menuItemStyle}
            href="https://www.instagram.com/vasconcelosagricola/?hl=pt-br"
            target={'_blank'}
            rel={'noopener noreferrer'}
            icon={<FaInstagram fill="#ff7f00" size={16} />}
          >
            Instagram
          </Menu.Item>
          <Menu.Item
            color={'#0d4b26'}
            component={NextLink}
            style={menuItemStyle}
            href="https://www.facebook.com/vasconcelosagricola/"
            target={'_blank'}
            rel={'noopener noreferrer'}
            icon={<FaFacebook fill="#ff7f00" size={16} />}
          >
            Facebook
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  )
}
