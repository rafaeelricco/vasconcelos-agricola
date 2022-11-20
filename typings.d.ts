interface StaticImageData {
  src: string
  height: number
  width: number
  placeholder: string
}

declare module '*.svg' {
  import React from 'react'
  const Component: React.FunctionComponent<React.SVGProps<SVGSVGElement>>

  export default Component
}

interface Parts {
  id: number
  name: string
  code: string
  description: string
  slug: string
  branding: string
  images: {
    id: number
    image_url: string
    map: any
  }
  family: {
    id: number
    name: string
    slug: string
  }
  subfamily: {
    id: number
    name: string
    slug: string
  }
  model_version: {
    id: number
    name: string
    slug: string
    map: any
  }
}

interface Used {
  id: number
  name: string
  branding: string
  description: string
  cover: string
  images: {
    id: number
    image_url: string
  }
  model: string
  year: string
  price: string
  slug: string
}

interface Path {
  string: string
  chartAt: any
}

interface Banners {
  id: number
  title: string
  description: string
  link: string
  image: string
}

interface Featured {
  id: number
  name: string
  description: string
  link: string
  image: string
}

interface Products {
  id: number
  name: string
  slug: string
  promise: string
  youtube: string
  description: string
  disponibility: string
  cover: string
  launch: string
  images: {
    id: number
    image_file: string
  }
  category: {
    id: number
    name: string
    slug: string
  }
  area: {
    id: number
    name: string
    slug: string
  }
  cultures: {
    id: number
    name: string
    slug: string
  }
  toLowerCase: any
  localeCompare: any
}

interface string {
  toSlug(): string
  chartAt(index: number): string
}

interface Consortium {
  id: number
  fullname: string
  email: string
  phone: string
  occupation: string
  country: string
  state: string
  city: string
  accept: boolean
}

export type { Banners, Featured, Products, Consortium, Parts, Used, Path }
