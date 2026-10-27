import { ArrowDown, ArrowUpRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="hero-fix">
      <div className="hero-fix-bg" />

      <div className="hero-fix-overlay" />

      <div className="hero-fix-content">
        <div className="hero-label">
          <span>PRIVATE AVIATION</span>
          <span>OKLAHOMA CITY · EST. 1987</span>
        </div>

        <h1>
          Your time.
          <br />
          <span>Your way.</span>
        </h1>

        <p>
          Experience private aviation designed entirely around you.
          Personalized charter journeys, exceptional comfort, and
          service built around your schedule.
        </p>

        <div className="hero-fix-actions">
          <a href="#contact" className="hero-fix-primary">
            Plan your flight <ArrowUpRight size={18} />
          </a>

          <a href="#fleet" className="hero-fix-secondary">
            Discover our fleet <ArrowDown size={16} />
          </a>
        </div>

        <div className="hero-fix-bottom">
          <span>YOUR TIME. YOUR JET. YOUR WAY.</span>
          <span>35+ YEARS OF AVIATION EXPERIENCE</span>
        </div>
      </div>
    </section>
  )
}
