export default function About() {
  return (
    <section className="about" id="about">
      <div className="editorial-head reveal">
        <div>
          <span className="kicker dark">Who We Are</span>
          <h2> Africa Rising,<br /><em>told simply.</em></h2>
        </div>
        <div className="editorial-lede">
          <p>
            From the smoke of Victoria Falls to the wild open bushveld, Africa Rising
            crafts personal, handpicked journeys across the continent for adventurers,
            culture lovers and relaxed explorers alike.
          </p>
          <a href="#contact" className="text-link">Start a conversation <span>&rarr;</span></a>
        </div>
      </div>

      <figure className="about-figure reveal">
        <img src="/1.jpg" alt="An Africa Rising journey" loading="lazy" />
        <figcaption>On location Victoria Falls, Zimbabwe</figcaption>
      </figure>

      <div className="about-columns">
        <article className="reveal">
          <span className="col-index">01</span>
          <h3>Our Story</h3>
          <p>
            Africa Rising Safaris began with one simple goal: sharing the real Africa with
            the world. What started as small guided trips grew into a trusted tour company
            known for personal service, local relationships and a genuine love for what we
            do. Today we carry that same passion every trip promises an unforgettable
            connection to Africa's heart and soul.
          </p>
        </article>

        <article className="reveal" style={{ transitionDelay: '120ms' }}>
          <span className="col-index">02</span>
          <h3>Our Mission</h3>
          <p>
            Safe, affordable and unforgettable journeys thoughtfully planned, expertly
            guided, and always supporting the local communities and landscapes we visit.
          </p>
          <img src="/assets/car 2.jpeg" alt="Africa Rising fleet" className="col-figure" loading="lazy" />
        </article>

        <article className="reveal" style={{ transitionDelay: '240ms' }}>
          <span className="col-index">03</span>
          <h3>Our Vision</h3>
          <p>
            To be Africa's most trusted travel company known for excellence,
            sustainability and journeys that connect travellers deeply with Africa's
            heritage and natural beauty.
          </p>
        </article>
      </div>
    </section>
  )
}
