import { NAV_LINKS } from '../data.js'
import { WHATSAPP_DISPLAY, EMAIL, LOCATION, whatsappLink } from '../config.js'

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-brand reveal">
          <h3>Africa Rising</h3>
          <p>
            Connecting you to the heart and soul of Africa, one unforgettable trip at a
            time.
          </p>
          <div className="footer-icons">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        <div className="footer-links reveal" style={{ transitionDelay: '100ms' }}>
          <h4>Explore</h4>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-links reveal" style={{ transitionDelay: '180ms' }}>
          <h4>Experiences</h4>
          <ul>
            <li><a href="#activities">Boma &amp; Drum Show</a></li>
            <li><a href="#activities">Dinner Cruise</a></li>
            <li><a href="#activities">Helicopter Flights</a></li>
            <li><a href="#activities">Chobe Day Trip</a></li>
          </ul>
        </div>

        <div className="footer-links reveal" style={{ transitionDelay: '260ms' }}>
          <h4>Contact</h4>
          <ul>
            <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="whatsapp-link">
                {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li><span className="footer-muted">{LOCATION}</span></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Africa Rising Safaris. All rights reserved.</p>
        <p>Designed by Click and Create (Pride Moyana)</p>
      </div>
    </footer>
  )
}
