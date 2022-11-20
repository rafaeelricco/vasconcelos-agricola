declare module 'react-inner-html' {
  import * as React from 'react'

  export interface InnerHTMLProps {
    html: string
  }

  export default class InnerHTML extends React.Component<InnerHTMLProps, any> {}
}
