import { useRouter } from 'next/router'

interface Props {
  href: string
  children: string
  key: string
  classForComponent: string
}

function ActiveLink({ href, children, classForComponent }: Props) {
  const router = useRouter()
  const style = {
    marginRight: 10,
    color: router.asPath === href ? '#ff7f00' : '#0d4b26',
    fontWeight: router.asPath === href ? 'bold' : 'normal',
    transition: 'all 0.3s ease-in-out'
  }

  return (
    <a className={classForComponent} href={href} style={style}>
      {children}
    </a>
  )
}

export default ActiveLink
