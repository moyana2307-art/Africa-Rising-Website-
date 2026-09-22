import { useState } from 'react'
import { WHATSAPP_DISPLAY, EMAIL, LOCATION, openWhatsApp, whatsappLink } from '../config.js'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value })
  }

  // The "backend": the message is delivered straight to our WhatsApp
  // with all the form details pre-filled — no server needed.
  const handleSubmit = (e) => {
    e.preventDefault()

    const name = form.name.trim()
    const email = form.email.trim()
    const message = form.message.trim()

    if (!name || !email || !message) {
      setStatus('Please fill out all fields before submitting.')
      return
    }

    const whatsappMessage = `Hello Africa Rising Safaris!\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    openWhatsApp(whatsappMessage)
    setStatus(`Thank you, ${name}! WhatsApp is opening with your message ready to send.`)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="section-intro reveal">
          <span className="kicker dark">Reach Out</span>
          <h2>Start your journey</h2>
          <p>
            Every trip begins with a conversation. Tell us what's calling you the
            landscapes, the pace, the moments you want to savour. We'll handle the rest.
          </p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info reveal">
            <span className="kicker dark">Get In Touch</span>
            <h3>We reply fast.</h3>
            <p>
              The quickest way to reach us is WhatsApp usually within a few hours.
              Email works too, and we always reply within 24 hours.
            </p>

            <ul className="contact-list">
              <li>
                <i className="fas fa-envelope"></i>
                <span>
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </span>
              </li>
              <li>
                <i className="fab fa-whatsapp"></i>
                <span>
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-link"
                  >
                    {WHATSAPP_DISPLAY}
                  </a>
                </span>
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>{LOCATION}</span>
              </li>
            </ul>

            <a
              className="btn btn-solid wa-btn"
              href={whatsappLink('Hello Africa Rising Safaris! I would like to plan a trip.')}
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp
            </a>
          </div>

          <form className="contact-form reveal" style={{ transitionDelay: '150ms' }} onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="you@email.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                rows="4"
                placeholder="Where would you love to go?"
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-solid">
              Send Message <span>&rarr;</span>
            </button>
            {status && <p className="form-status">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
