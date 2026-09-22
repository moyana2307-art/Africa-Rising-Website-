import { useEffect, useState } from 'react'
import { GALLERY_ITEMS } from '../data.js'

export default function Gallery() {
  const [active, setActive] = useState(null)

  const close = () => setActive(null)
  const next = () => setActive((i) => (i + 1) % GALLERY_ITEMS.length)
  const prev = () => setActive((i) => (i - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length)

  useEffect(() => {
    if (active === null) return

    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active])

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-container">
        <div className="section-intro reveal">
          <span className="kicker dark">Moments</span>
          <h2>From our gallery</h2>
          <p>A collection of our favourite moments across Zimbabwe and beyond.</p>
        </div>

        <div className="gallery-grid">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              className="gallery-item reveal"
              key={item.img}
              style={{ transitionDelay: `${(index % 3) * 100}ms` }}
              onClick={() => setActive(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setActive(index)}
            >
              <img src={item.img} alt={item.alt} loading="lazy" />
              <div className="gallery-overlay">
                <span>{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {active !== null && (
        <div className="lightbox" onClick={close}>
          <button className="lightbox-btn lightbox-close" aria-label="Close" onClick={close}>
            <i className="fas fa-times"></i>
          </button>
          <button className="lightbox-btn lightbox-prev" aria-label="Previous" onClick={(e) => { e.stopPropagation(); prev() }}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
            <img src={GALLERY_ITEMS[active].img} alt={GALLERY_ITEMS[active].alt} />
            <figcaption className="lightbox-caption">
              {GALLERY_ITEMS[active].title}
              <span> {active + 1} / {GALLERY_ITEMS.length}</span>
            </figcaption>
          </figure>
          <button className="lightbox-btn lightbox-next" aria-label="Next" onClick={(e) => { e.stopPropagation(); next() }}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      )}
    </section>
  )
}
