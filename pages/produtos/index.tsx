/* eslint-disable @next/next/no-img-element */
import { Container, Select } from "@mantine/core";
import { useRouter } from "next/router";
import styled from "styled-components";
import Card from "../../components/Card/card";
import { Footer } from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import { options } from "../../utils/options";
import { slugfy } from "../../utils/slugfy";

const Options = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1rem;
  margin: 1.818rem 0 1.818rem 0;
  @media (max-width: 680px) {
    grid-auto-flow: dense;
  }
`;
const List = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 1.618rem;
  margin: 1.618rem 0 2rem 0;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  @media (max-width: 680px) {
    flex-flow: column;
    align-items: center;
  }
`;

export default function Produtos() {
  const router = useRouter();
  return (
    <>
      <Header />
      <Container size={"xl"}>
        <Options>
          <Select
            label="Qual a linha de produtos?"
            placeholder="Selecione"
            radius={"md"}
            data={[...options]}
            onChange={(data) => {
              router.push(`/produtos/categoria/${slugfy(data)}`);
            }}
          />

          <Select label="Cultura" placeholder="Selecione" data={[]} disabled />
          <Select
            label="Tamanho da área"
            placeholder="Selecione"
            radius={"md"}
            data={[]}
            disabled
          />
        </Options>
        <List>
          <Card
            id={1}
            path={"/produtos/categoria/lancamentos"}
            title={"Lançamentos"}
            img={"category/lancamento.webp"}
          />
          <Card
            id={2}
            path={"/produtos/categoria/adubadoras"}
            title={"Adubadoras"}
            img={"category/adubadoras.webp"}
          />
          <Card
            id={3}
            path={"/produtos/categoria/plantadeiras"}
            title={"Plantadeiras"}
            img={"category/plantadeiras.webp"}
          />
          <Card
            id={4}
            path={"/produtos/categoria/pulverizadores-automotrizes"}
            title={"Pulverizadores Automotrizes"}
            img={"category/pulverizadores-automotrizes.webp"}
          />
          <Card
            id={5}
            path={"produtos/categoria/pulverizadores-de-barras"}
            title={"Pulverizadores de barra"}
            img={"category/pulverizadores-de-barra.webp"}
          />
          <Card
            id={6}
            path={"/produtos/categoria/pulverizadores-turbos"}
            title={"Pulverizadores turbos"}
            img={"category/pulverizadores-turbos.webp"}
          />
          <Card
            id={7}
            path={"produtos/categoria/pecas-e-acessorios"}
            title={"Peças e Acessórios"}
            img={"category/pecas-acessorios.webp"}
          />
          <Card
            id={8}
            path={"/produtos/categoria/usados"}
            title={"Usados"}
            img={"category/usados.webp"}
          />
        </List>
      </Container>
      <Footer />
      {/* <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', ${process.env.NEXT_PUBLIC_PIXEL_ID});
          fbq('track', 'PageView');
          fbq('trackCustom', 'Produtos');
          `
        }}
      /> */}
    </>
  );
}
