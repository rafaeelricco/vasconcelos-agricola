import { useRouter } from 'next/router'
import Form from '../Form/form'
import consortium from './consortium.module.scss'

export default function Consortium() {
  const router = useRouter()
  const { slug } = router.query
  return (
    <>
      <h1 className={consortium.title}>Consórcio</h1>
      <p
        className={consortium.subtitle}
        style={{
          marginBottom: '2.618rem'
        }}>
        Converse com nossos especialistas e atinja suas conquistas! Preencha o
        formulário abaixo para receber um contato dos nossos especialistas do
        Consórcio.
      </p>
      <Form product_req={'Página de consórcio'} />
    </>
  )
}
