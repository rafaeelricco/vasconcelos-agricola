import React, { useRef } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { Products } from '../../typings'
import { Send } from 'tabler-icons-react'
import { Checkbox, Input, LoadingOverlay } from '@mantine/core'
import { IconAt } from '@tabler/icons'
import emailjs from '@emailjs/browser'
import consortium from '../Consortium/consortium.module.scss'
import axios from 'axios'
import FormData from 'form-data'
import Link from 'next/link'

export default function Form({ product_req }) {
  const form = useRef()
  const product = product_req
  // const [loading, setLoading] = React.useState(false)
  const [formValue, setFormValue] = React.useState({
    accept_contact: '',
    full_name: '',
    email: '',
    phone: '',
    state: '',
    city: '',
    product_request: `${product}`
  })

  const formBodyValue = new FormData()

  formBodyValue.append('full_name', formValue.full_name)
  formBodyValue.append('email', formValue.email)
  formBodyValue.append('phone', formValue.phone)
  formBodyValue.append('state', formValue.state)
  formBodyValue.append('city', formValue.city)
  formBodyValue.append('product_request', formValue.product_request)
  formBodyValue.append('accept_contact', formValue.accept_contact)

  const sendEmail = () => {
    emailjs.sendForm(
      `${process.env.NEXT_PUBLIC_SERVICE_ID}`,
      `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`,
      form.current,
      `${process.env.NEXT_PUBLIC_USER_ID}`
    )
  }

  const h = {
    Authorization: `Token ${process.env.NEXT_PUBLIC_TOKEN}`
  }

  const handleSubmit = () => {
    axios({
      method: 'post',
      url: `${process.env.NEXT_PUBLIC_FORM_API}/consortium/`,
      data: formBodyValue,
      headers: h
    }).then((response) => {
      // console.log(response)
    })
  }

  const handleChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value
    })
  }

  const send = () => {
    sendEmail()
    handleSubmit()
  }

  return (
    <>
      {/* <LoadingOverlay overlayBlur={4} visible={loading} /> */}
      <form className={consortium.form} onSubmit={send}>
        <div className={consortium.layout}>
          <label className={consortium.label}>
            <input
              type="hidden"
              value={product_req}
              name={'product_request'}
              onChange={handleChange}
            />
            <Input
              variant="filled"
              placeholder="Nome Completo*"
              radius="md"
              type={'text'}
              required={true}
              name={'full_name'}
              value={formValue.full_name}
              onChange={handleChange}
            />
          </label>
          <label className={consortium.label}>
            <Input
              variant="filled"
              placeholder="E-mail*"
              type={'email'}
              required={true}
              name={'email'}
              value={formValue.email}
              onChange={handleChange}
            />
          </label>
          <label className={consortium.label}>
            <Input
              variant="filled"
              placeholder="Telefone (com DDD)*"
              type={'tel'}
              required={true}
              name={'phone'}
              value={formValue.phone}
              onChange={handleChange}
            />
          </label>
          <label className={consortium.label}>
            <Input
              variant="filled"
              placeholder="Estado*"
              type={'text'}
              required={true}
              name={'state'}
              value={formValue.state}
              onChange={handleChange}
            />
          </label>
          <label className={consortium.label}>
            <Input
              variant="filled"
              placeholder="Cidade*"
              type={'text'}
              required={true}
              name={'city'}
              value={formValue.city}
              onChange={handleChange}
            />
          </label>
          <div className={consortium.checkboxe}>
            <label
              className={consortium.label}
              style={{
                display: 'flex',
                gap: '0.5rem'
              }}
            >
              <input
                type="checkbox"
                name="accept_contact"
                onChange={handleChange}
                value={formValue.accept_contact}
              />{' '}
              Eu aceito receber contato por telefone.
            </label>
          </div>
          <div className={consortium.buttons}>
            <button
              style={{
                margin: '8px 0 8px 0'
              }}
              type="submit"
              className={consortium.send}
            >
              <Send size={22} />
              Enviar
            </button>
            ou
            <button
              style={{
                margin: '8px 0 8px 0'
              }}
              className={consortium.whatsApp}
            >
              <a
                href="https://api.whatsapp.com/send/?phone=5551999614425&text&type=phone_number&app_absent=0"
                target={'_blank'}
                rel="noreferrer"
                style={{
                  color: 'white',
                  display: 'grid',
                  gridAutoFlow: 'column',
                  gridGap: '8px',
                  alignItems: 'center'
                }}
              >
                <FaWhatsapp size={22} />
                Fale conosco
              </a>
            </button>
          </div>
        </div>
      </form>
    </>
  )
}
