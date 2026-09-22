import { useEffect } from 'react'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Activities from './components/Activities.jsx'
import Gallery from './components/Gallery.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx'

export default function App() {
  // Scroll-reveal: adds .is-visible to any .reveal element when it enters the viewport.
  useEffect(() => {
    // Fallback path: reveal anything that has entered the viewport, driven by
    // scroll/load. Used when IntersectionObserver is unavailable so section
    // content can never be left stuck at opacity: 0.
    const revealInView = () => {
      document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.bottom > 0 && rect.top < window.innerHeight - 40) {
          el.classList.add('is-visible')
        }
      })
    }

    if (typeof IntersectionObserver === 'undefined') {
      revealInView()
      window.addEventListener('scroll', revealInView, { passive: true })
      window.addEventListener('load', revealInView)
      return () => {
        window.removeEventListener('scroll', revealInView)
        window.removeEventListener('load', revealInView)
      }
    }

    const els = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header />
      <Home />
      <About />
      <Activities />
      <Gallery />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
