import { Container } from '@mantine/core'
import benefits from './benefits.module.scss'
import Card from './cardBenefits'
import agilidadeAtendimento from '/assets/icons/benefits/agilidade-atendimento.png'
import assistenciaLojaCampo from '/assets/icons/benefits/assistencia.png'
import atendimentoEspecializado from '/assets/icons/benefits/atendimento-especializado.png'
import equipeTecnica from '/assets/icons/benefits/equipe-especializada.png'
import produtosOriginais from '/assets/icons/benefits/originais-jacto.png'

export default function Benefits() {
  return (
    <div className={benefits.layout}>
      <h1 className={benefits.title}>Conheça nossos serviços</h1>
      <p className={benefits.subtitle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <Container size={'lg'}>
        <div className={benefits.cards}>
          <Card
            title={'Equipe Técnica Especializada'}
            description={
              'São mais de 20 colaboradores treinados e qualificados para atender todas as suas necessidades no campo.'
            }
            src={equipeTecnica}
            alt={'Equipe Técnica Especializada'}
          />
          <Card
            title={'Produtos Originais Jacto'}
            description={
              'Trabalhamos com uma vasta variedade de produtos originais Jacto como pulverizadores costais, lavadoras, pulverizadores tratorizados, autopropelidos, peças, entre outros.'
            }
            src={produtosOriginais}
            alt={'Produtos Originais Jacto'}
          />

          <Card
            title={'Atendimento Especializado'}
            description={
              'Contamos com uma equipe de profissionais técnicos especializados para atender suas necessidades com conhecimento e qualidade.'
            }
            src={atendimentoEspecializado}
            alt={'Atendimento Especializado'}
          />
          <div className={benefits.center}>
            <Card
              title={'Assistência da Loja ao Campo'}
              description={
                'Nossa equipe está preparada e à disposição com produtos e assistência técnica para atender suas demandas, seja na loja ou no campo. '
              }
              src={assistenciaLojaCampo}
              alt={'Assistência da Loja ao Campo'}
            />
            <Card
              title={'Agilidade no Atendimento'}
              description={
                'Sempre com o objetivo de manter sua produtividade, trabalhamos com máxima agilidade no atendimento e conclusão do serviço para que você não fique parado no campo.'
              }
              src={agilidadeAtendimento}
              alt={'Agilidade no Atendimento'}
            />
          </div>
        </div>
      </Container>
    </div>
  )
}
