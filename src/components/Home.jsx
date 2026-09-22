export default function Home() {
  return (
    <section className="home" id="home">
      <div className="home-bg" style={{ backgroundImage: "url('/assets/bg2.jpg')" }} />
      <div className="home-overlay" />

      <div className="content">
        <span className="kicker reveal">Victoria Falls &middot; Zimbabwe</span>
        <h1 className="reveal" style={{ transitionDelay: '120ms' }}>
          Discover Africa.<br />
          <em>Feel Alive.</em>
        </h1>
        <p className="reveal" style={{ transitionDelay: '240ms' }}>
          Handpicked safaris, adventures and cultural escapes crafted for you, booked
          in minutes.
        </p>
        <div className="hero-actions reveal" style={{ transitionDelay: '360ms' }}>
          <a href="#contact" className="btn btn-solid">Plan My Journey</a>
          <a href="#activities" className="text-link light">Explore activities <span>&rarr;</span></a>
        </div>
      </div>

      <a href="#about" className="scroll-cue reveal" aria-label="Scroll down">
        <span className="scroll-cue-line"></span>
        Scroll
      </a>
    </section>
  )
}
