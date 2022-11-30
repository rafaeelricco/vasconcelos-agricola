declare module 'react-inner-html' {
  import * as React from './components/Link/node_modules/@types/react'

  export interface InnerHTMLProps {
    html: string
  }

  export default class InnerHTML extends React.Component<InnerHTMLProps, any> {}
}
