import { ArrowUpRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <a href="#home" className="brand">
              PRIVATE JETS<span>, INC.</span>
            </a>

            <h2
              className="display"
              style={{ fontSize: 'clamp(36px, 5vw, 60px)', marginTop: 24 }}
            >
              Your time.
              <br />
              <span className="lime">Your way.</span>
            </h2>

            <p>
              On-demand private aviation from Oklahoma City.
              Business and leisure travel, tailored around you.
            </p>

            <a href="#contact" className="pill" style={{ marginTop: 14 }}>
              Plan your flight <ArrowUpRight size={15} />
            </a>
          </div>

          <div>
            <h4>EXPLORE</h4>
            <div className="footer-links">
              <a href="#about">About us</a>
              <a href="#fleet">Fleet & safety</a>
              <a href="#services">Services</a>
              <a href="#jet-card">Jet card</a>
              <a href="#contact">Request a quote</a>
            </div>
          </div>

          <div>
            <h4>CONTACT</h4>
            <div className="footer-links">
              <a href="tel:18882376059">1-888-237-6059</a>
              <a href="mailto:privatejetsinc@privatejetsinc.com">
                privatejetsinc@privatejetsinc.com
              </a>
              <p>Oklahoma City, Oklahoma, USA</p>
              <p>Will Rogers World Airport / Wiley Post Airport area</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Private Jets, Inc.</span>
          <span style={{ float: 'right' }}>YOUR TIME. YOUR JET. YOUR WAY.</span>
        </div>
      </div>
    </footer>
  )
}
