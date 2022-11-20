import { createStyles, Text, ActionIcon, Group, Container } from '@mantine/core'
import { IconBrandFacebook } from '@tabler/icons'
import Link from 'next/link'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import Logo from '/assets/icons/logo/logo-vasconcelos-branco.svg'

const useStyles = createStyles((theme) => ({
  footer: {
    background: '#0d4b26',
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl,
    width: '100%',
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`
  },

  logo: {
    maxWidth: 200,

    [theme.fn.smallerThan('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  },

  description: {
    marginTop: 5,

    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
      textAlign: 'center'
    }
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      alignItems: 'start'
    }
  },

  groups: {
    display: 'flex',
    flexWrap: 'wrap',

    [theme.fn.smallerThan('sm')]: {
      display: 'none'
    }
  },

  wrapper: {
    width: 160
  },

  link: {
    display: 'grid',
    color: '#c4c4c4',
    paddingTop: 4,
    width: '180px',
    height: '40px',
    alingContent: 'center',
    justifyContent: 'start',
    fontSize: theme.fontSizes.xl / 1.25,
    transition: 'font-size 0.2s ease-in-out',

    '&:hover': {
      textDecoration: 'underline',
      color: '#fff',
      fontSize: theme.fontSizes.xl / 1.18
    }
  },

  title: {
    fontSize: theme.fontSizes.xl,
    fontWeight: 700,
    color: '#fff',
    marginBottom: theme.spacing.xs / 2,
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.lg * 1.5
    }
  },

  afterFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      alignItems: 'start'
    }
  },

  social: {
    marginRight: theme.spacing.xl * 2,
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xl / 1.5
    },
    ':hover': {
      cursor: 'pointer'
    }
  }
}))

export function Footer() {
  const { classes } = useStyles()
  return (
    <footer className={classes.footer}>
      <Container size={'xl'}>
        <div className={classes.inner}>
          <div className={classes.logo}>
            <Logo
              style={{
                cursor: 'pointer'
              }}
              width={164}
            />
          </div>
          <div className={classes.wrapper}>
            <Text
              style={{
                fontFamily: 'Montserrat'
              }}
              className={classes.title}
            >
              Sobre
            </Text>
            <Link href="/consorcio">
              <Text
                style={{
                  fontFamily: 'Montserrat',
                  cursor: 'pointer'
                }}
                className={classes.link}
              >
                Consórcio
              </Text>
            </Link>
            <Link href="/empresa">
              <Text
                style={{
                  fontFamily: 'Montserrat',
                  cursor: 'pointer'
                }}
                className={classes.link}
              >
                Quem somos
              </Text>
            </Link>
          </div>
          <div className={classes.wrapper}>
            <Text
              style={{
                fontFamily: 'Montserrat'
              }}
              className={classes.title}
            >
              Contato
            </Text>
            <a href="tel:+555137233292" target={'_blank'} rel="noreferrer">
              <Text
                style={{
                  fontFamily: 'Montserrat'
                }}
                className={classes.link}
              >
                Atendimento
              </Text>
            </a>
            <a
              className={classes.link}
              href="https://api.whatsapp.com/send?phone=5551999614425"
              target={'_blank'}
              rel="noreferrer"
            >
              WhatsApp Comercial
            </a>
            <a
              className={classes.link}
              href="https://api.whatsapp.com/send?phone=5551996954636"
              target={'_blank'}
              rel="noreferrer"
            >
              WhatsApp Peças
            </a>
          </div>
          <div className={classes.wrapper}>
            <Text
              style={{
                fontFamily: 'Montserrat'
              }}
              className={classes.title}
            >
              Serviços
            </Text>
            <a
              className={classes.link}
              href="https://www.google.com.br/maps/place/Vasconcelos+Agr%C3%ADcola/@-30.0154253,-52.9202561,17z/data=!3m1!4b1!4m5!3m4!1s0x95035911e93e9b21:0x9f3499701545e96a!8m2!3d-30.0154749!4d-52.9181154?shorturl=1"
              target={'_blank'}
              rel="noreferrer"
            >
              Localização
            </a>
            <Link href="/termo-de-garantia">
              <Text
                style={{
                  fontFamily: 'Montserrat',
                  cursor: 'pointer'
                }}
                className={classes.link}
              >
                Termo de garantia
              </Text>
            </Link>
          </div>
        </div>
        <div className={classes.afterFooter}>
          <Text
            style={{
              fontFamily: 'Montserrat'
            }}
            color="#fff"
            size="sm"
          >
            © Todos os Direitos Reservados a Vasconcelos Agrícola.
          </Text>
          <Group
            spacing={16}
            className={classes.social}
            position="right"
            noWrap
          >
            <a
              href="https://www.facebook.com/vasconcelosagricola/"
              target={'_blank'}
              rel="noreferrer"
            >
              <IconBrandFacebook color="#fff" size={25} stroke={'1.5'} />
            </a>
            <a
              href="https://www.instagram.com/vasconcelosagricola/?hl=pt-br"
              target={'_blank'}
              rel="noreferrer"
            >
              <FaInstagram color="#fff" size={24} stroke={'1.5'} />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=5551999614425&text&type=phone_number&app_absent=0"
              target={'_blank'}
              rel="noreferrer"
            >
              <FaWhatsapp color="#fff" size={24} stroke={'1.5'} />
            </a>
          </Group>
        </div>
      </Container>
    </footer>
  )
}
