import { ACTIVITY_ROWS } from '../data.js'
import { whatsappLink } from '../config.js'

export default function Activities() {
  return (
    <section className="activities" id="activities">
      <div className="editorial-head reveal">
        <div>
          <span className="kicker dark">Things To Do</span>
          <h2>Curated<br /><em>experiences.</em></h2>
        </div>
        <div className="editorial-lede">
          <p>
            From sunset cruises to white-water thrills — pick your adventure and we'll
            handle the rest. Every experience is guided, safe and unforgettable.
          </p>
        </div>
      </div>

      <div className="activity-grid">
        {ACTIVITY_ROWS.map((activity, index) => (
          <article
            className="activity-card reveal"
            key={activity.title}
            style={{ transitionDelay: `${(index % 3) * 100}ms` }}
          >
            <div className="activity-img">
              <img src={activity.img} alt={activity.alt} loading="lazy" />
            </div>
            <span className="card-tag">{activity.tag}</span>
            <h3>{activity.title}</h3>
            <p>{activity.text}</p>
            <a
              href={whatsappLink(`Hello Africa Rising Safaris! I would like more details about "${activity.title}".`)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              Book Now <span>&rarr;</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
