import { useEffect, useState } from 'react'
import { NAV_LINKS } from '../data.js'
import { whatsappLink } from '../config.js'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 50)
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? (y / total) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="scroll-progress" aria-hidden="true">
        <span style={{ width: `${progress}%` }} />
      </div>

      <a href="#home" className="brand" onClick={() => setMenuOpen(false)}>
        <img src="/Africa Rising 1.png" alt="Africa Rising Logo" className="brand-img" />
      </a>

      <button
        className={`menu-toggle ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`navigation ${menuOpen ? 'open' : ''}`}>
        <div className="navigation-items">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            className="nav-cta"
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Inquire
          </a>
        </div>
      </nav>
    </header>
  )
}
