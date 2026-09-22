import { useEffect, useState } from 'react'
import { whatsappLink } from '../config.js'

export default function FloatingWhatsApp() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      className={`floating-wa ${show ? 'show' : ''}`}
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <span className="floating-wa-label">Chat with us</span>
      <i className="fab fa-whatsapp"></i>
    </a>
  )
}
