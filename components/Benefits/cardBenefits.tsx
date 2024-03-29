import Image from 'next/image'
import card from './cardBenefits.module.scss'

interface Props {
  title: string
  description: string
  src: any
  alt: string
}

export default function Card({ title, description, alt, src }: Props) {
  return (
    <div className={card.layout}>
      <Image
        style={{ maxWidth: '54px', maxHeight: '54px' }}
        width={54}
        height={54}
        src={src}
        alt={alt}
      />
      <div className={card.aling}>
        <h1 className={card.title}>{title}</h1>
        <p className={card.subtitle}>{description}</p>
      </div>
    </div>
  )
}
