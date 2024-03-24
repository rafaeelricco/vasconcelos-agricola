/* eslint-disable @next/next/no-img-element */
import { Badge, Container, Select } from "@mantine/core";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import layout from "../../../assets/scss/products.module.scss";
import card from "../../../assets/scss/produtos/card-product.module.scss";
import { Footer } from "../../../components/Footer/footer";
import Header from "../../../components/Header/header";
import { Products } from "../../../typings";
import { options, parts } from "../../../utils/options";
import { slugfy } from "../../../utils/slugfy";

const BadgesContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 8px;
`;

export default function Category({
  products,
  useds,
}: {
  products: Products[];
  useds: any;
}) {
  const init = [];
  const router = useRouter();
  const path = router.query.categoria;
  const format =
    path.toString().split("-").join(" ").charAt(0).toUpperCase() +
    path.toString().split("-").join(" ").slice(1);

  const [state, setState] = useState<Products[]>(init);

  // intial functions render products based on intial entry
  const intialProducts = products.filter((product: any) => {
    if (product.category.slug == path) {
      init.push(product);
    } else if (path == "lancamentos") {
      if (product.launch == true) {
        init.push(product);
      }
    }
  });

  const intialUseds = useds.filter((used: any) => {
    if (path == "usados") {
      init.push(used);
    }
  });

  const intialParts = parts.filter((part: any) => {
    if (path == "pecas-e-acessorios") {
      init.push(part);
    }
  });

  // function to change products based on select
  function handleSelect(path: string) {
    const init = [];
    const intialProducts = products.filter((product: any) => {
      if (product.category.slug == path) {
        init.push(product);
      } else if (path == "lancamentos") {
        if (product.launch == true) {
          init.push(product);
        }
      }
    });
    const intialUseds = useds.filter((used: any) => {
      if (path == "usados") {
        init.push(used);
      }
    });
    const intialParts = parts.filter((part: any) => {
      if (path == "pecas-e-acessorios") {
        init.push(part);
      }
    });
    setState(init);
  }

  // function to return culture of selected products
  const cultures = (path) => {
    const product = products.filter((item) => item.category.slug == path);
    const cultures = product
      .map((item) => item.cultures)
      .flat()
      .map((item) => item.name)
      .filter((item, index, self) => self.indexOf(item) === index);
    return cultures;
  };

  // function to return area of selected products
  const areas = (path) => {
    const product = products.filter((item) => item.category.slug == path);
    const areas = product
      .map((item) => item.area)
      .map((item) => item)
      .flat()
      .map((item) => item.name)
      .filter((item, index, self) => self.indexOf(item) === index);
    return areas;
  };

  // function to return products based on culture
  const selectCulture = (value) => {
    const product = products.filter((item) => item.category.slug == path);
    const filter = product.filter((item: any) => {
      const culture = item.cultures.map((item: any) => item.name);
      return culture.includes(value);
    });
    if (value == "Todas") {
      setState(init);
    } else {
      setState(filter);
    }
  };

  // function to return products based on area
  const selectArea = (value) => {
    const product = products.filter((item) => item.category.slug == path);
    const filter = product.filter((item: any) => {
      const area = item.area.map((item: any) => item.name);
      return area.includes(value);
    });
    if (value == "Todas") {
      setState(init);
    } else {
      setState(filter);
    }
  };

  // function to render badge in launch products
  const launched = (launch) => {
    if (launch == true) {
      return "grid";
    } else {
      return "none";
    }
  };

  // function to render badge in prompt delivery products
  const disponibility = (disponibility) => {
    if (disponibility == 2) {
      return "grid";
    } else {
      return "none";
    }
  };

  // function condition to render launch or pre launch
  const preLaunch = (value) => {
    const preLaunch = [
      "lumina-400",
      "lumina-500",
      "uniport-500",
      "arbus-4000-jav",
    ];
    if (preLaunch.includes(value)) {
      return "Pré-Lançamento";
    } else {
      return "Lançamento";
    }
  };

  // funtion to define link
  const link = (value) => {
    if (path == "usados") {
      return `/produtos/categoria/usado/${value.slug}`;
    } else if (path == "pecas-e-acessorios") {
      if (value.cover == "/logo/jacto.webp") {
        return "/pecas/categoria/bicos-e-otmis";
      } else {
        return "https://api.whatsapp.com/send?phone=5551996954636";
      }
    } else {
      return `/produtos/${path}/${value.slug}`;
    }
  };

  return (
    <>
      <Header />
      <Container size={"xl"}>
        <div className={layout.selection}>
          <Select
            label="Qual a linha de produtos?"
            placeholder={
              path.toString().split("-").join(" ").charAt(0).toUpperCase() +
              path.toString().split("-").join(" ").slice(1)
            }
            radius={"md"}
            data={[...options]}
            onChange={(data) => {
              const str = slugfy(data);
              handleSelect(str);
              router.push(`/produtos/categoria/${str}`);
            }}
          />
          <Select
            label="Cultura"
            placeholder="Selecione"
            radius={"md"}
            data={[...cultures(path)]}
            onChange={(data) => {
              selectCulture(data);
            }}
          />

          <Select
            label="Tamanho da área"
            placeholder="Selecione"
            radius={"md"}
            data={[...areas(path)]}
            onChange={(data) => {
              selectArea(data);
            }}
          />
        </div>
        <div className={layout.list}>
          {state?.map((item: any) => (
            <a
              style={{
                textDecoration: "none",
                color: "black",
              }}
              href={link(item)}
              key={item.id}
            >
              <div
                style={{
                  cursor: "pointer",
                }}
                className={card.container}
              >
                <BadgesContainer>
                  <Badge
                    style={{
                      display: launched(item.launch),
                    }}
                    radius={"md"}
                    color={"orange"}
                    size={"md"}
                  >
                    {preLaunch(item.slug)}
                  </Badge>
                  <Badge
                    style={{
                      display: disponibility(item.disponibility),
                    }}
                    radius={"md"}
                    color={"green"}
                    size={"md"}
                  >
                    {item.disponibility == 2
                      ? "Pronta entrega"
                      : "Indisponível"}
                  </Badge>
                </BadgesContainer>

                <div className={card.infos}>
                  <img
                    style={{
                      objectFit: "cover",
                      height: "220px",
                      width: "100%",
                      display: "block",
                      borderRadius: "16px",
                    }}
                    src={item.cover}
                    alt={item.name}
                  />
                  <div className={card.layout}>
                    <h1 className={card.title}>{item.name}</h1>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
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
          fbq('trackCustom', '${format}');
          `
        }}
      /> */}
    </>
  );
}

export async function getServerSideProps() {
  const r = await fetch(`${process.env.NEXT_PUBLIC_API_USEDS}`);
  const useds = await r.json();
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_PRODUCTS}`);
  const products = await response.json();

  return {
    props: {
      products,
      useds,
    },
  };
}
