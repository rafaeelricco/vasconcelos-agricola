// cookies accept component
import CookieConsent from 'react-cookie-consent'
import styled from 'styled-components'

const TitleCookie = styled.h3`
  font-size: 21px;
  font-weight: 600;
  color: #0d4b26;
  margin: 0 0 0.418rem 0;
  @media (max-width: 600px) {
    margin: 1rem 0 0 0;
  }
`
const TextCookie = styled.p`
  font-size: 0.924rem;
  font-weight: 400;
  line-height: 24px;
  margin: 0 0 -0.618rem 0;
  color: #8e8e8e;
  letter-spacing: -0.5px;
  @media (max-width: 600px) {
    margin: 0.418rem 0 0.118rem 0;
  }
`

export default function AcceptCookies() {
  return (
    <>
      <CookieConsent
        buttonText="Aceitar e fechar"
        enableDeclineButton
        declineButtonText="Recusar"
        buttonWrapperClasses="button-wrapper"
        containerClasses="containerConsent"
        cookieName="vasconcelosCookie"
        contentClasses="contentConsent"
        style={{
          borderColor: '#f4f4f4',
          background: '#FFFFFF',
          boxShadow: '0 -1px 10px 0 #acabab4d'
        }}
        buttonClasses="button-accepet"
        declineButtonClasses="button-decline"
        flipButtons={true}
        expires={150}
        debug={false}>
        <TitleCookie>Valorizamos sua privacidade</TitleCookie>
        <TextCookie>
          Este site utiliza cookies para lhe proporcionar uma melhor experiência
          de utilização. Para mais informações, consulte nossa Política de
          Privacidade.
        </TextCookie>
      </CookieConsent>
    </>
  )
}
