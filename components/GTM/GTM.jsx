import { useEffect } from 'react'
import { initializeGTM } from '../../utils/gtm'

export default function GTM() {
  useEffect(() => {
    initializeGTM()
  }, [])

  return null
}
