/* eslint-disable jsx-a11y/alt-text */
import { Container, Table } from '@mantine/core'
import Image from 'next/image'
import Link from 'next/link'
import { FaRegFilePdf } from 'react-icons/fa'
import styled from 'styled-components'
import { Download } from 'tabler-icons-react'
import { Footer } from '../components/Footer/footer'
import Header from '../components/Header/header'

const Title = styled.h1`
  font-size: 1.818rem;
  text-align: center;
  margin: 2rem 0;
`

export default function Termo() {
  const elements = [
    {
      name: 'Colhedora',
      icon: <FaRegFilePdf color="#f58220" size={24} />,
      size: '246 Kb',
      download: <Download />,
      link: 'https://s3.amazonaws.com/1-jacto.com.br/files/files_warranty_pt_BR_1503427501_2171.pdf'
    },
    {
      name: 'Tratorizadas',
      icon: <FaRegFilePdf color="#f58220" size={24} />,
      size: '117 Kb',
      download: <Download />,
      link: 'https://s3.amazonaws.com/1-jacto.com.br/files/files_warranty_pt_BR_1503427477_2173.pdf'
    },
    {
      name: 'Uniport',
      icon: <FaRegFilePdf color="#f58220" size={24} />,
      size: '65 Kb',
      download: <Download />,
      link: 'https://s3.amazonaws.com/1-jacto.com.br/files/files_warranty_pt_BR_1503427423_3258.pdf'
    }
  ]

  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>{element.icon}</td>
      <td
        style={{
          fontSize: '1rem'
        }}
      >
        {element.name}
      </td>
      <td>{element.size}</td>
      <Link
        style={{
          cursor: 'pointer',
          color: '#f58220'
        }}
        href={element.link}
        target={'_blank'}
        rel="noreferrer"
      >
        <td
          style={{
            cursor: 'pointer'
          }}
        >
          {element.download}
        </td>
      </Link>
    </tr>
  ))
  return (
    <>
      <Header />
      <Image
        src="https://s3.amazonaws.com/1-jacto.com.br/files/cfg_media_header_image1504465276_CONDOR_800_AM18_8.jpg"
        width={1920}
        height={300}
        quality={50}
        alt="Termo de Garantia"
      />
      <Container size={'xl'}>
        <Title>Termos de Garantia</Title>
        <Table
          style={{
            margin: '0 0 2rem 0'
          }}
          horizontalSpacing="xl"
          verticalSpacing="lg"
        >
          <tbody>{rows}</tbody>
        </Table>
      </Container>
      <Footer />
    </>
  )
}
