
import { useEffect, useState } from 'react'
import {
  ArrowDownRight,
  ArrowUpRight,
  Menu,
  X,
} from 'lucide-react'

const links = [
  { label: 'About', href: '#about', number: '01' },
  { label: 'Fleet & Safety', href: '#fleet', number: '02' },
  { label: 'Services', href: '#services', number: '03' },
  { label: 'Jet Card', href: '#jet-card', number: '04' },
  { label: 'Contact', href: '#contact', number: '05' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.classList.remove('menu-open')
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <>
      <header
        className={`nav-shell ${scrolled ? 'is-scrolled' : ''}`}
      >
        <nav
          className="premium-nav"
          aria-label="Main navigation"
        >
          {/* Minimal PJ logo */}
          <a
            href="#home"
            className="nav-brand"
            aria-label="PJ — Home"
            onClick={closeMenu}
          >
            <span className="brand-mark">PJ</span>
          </a>

          {/* Desktop Navigation */}
          <div className="desktop-links">
            {links.map((link) => (
              <a
                href={link.href}
                key={link.number}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Request Quote */}
          <a
            href="#contact"
            className="nav-quote"
            onClick={closeMenu}
          >
            <span>Request a Quote</span>
            <ArrowUpRight size={16} />
          </a>

          {/* Icon-only Menu Button */}
          <button
            type="button"
            className={`nav-menu-button ${open ? 'active' : ''}`}
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            <span className="menu-icon">
              <Menu
                className="menu-icon-open"
                size={22}
              />
              <X
                className="menu-icon-close"
                size={22}
              />
            </span>
          </button>
        </nav>
      </header>

      {/* Full-screen Animated Mobile Menu */}
      <div
        className={`mobile-overlay ${open ? 'is-open' : ''}`}
        id="mobile-navigation"
        aria-hidden={!open}
        inert={!open}
      >
        <div className="mobile-overlay-inner">
          <div className="mobile-overlay-top">
            <span className="eyebrow">
              EXPLORE PRIVATE AVIATION
            </span>

            <span className="mobile-counter">
              OKC · EST. 1987
            </span>
          </div>

          {/* Mobile Navigation Links */}
          <div className="mobile-nav-links">
            {links.map((link) => (
              <a
                href={link.href}
                key={link.number}
                className="mobile-nav-link"
                onClick={closeMenu}
                tabIndex={open ? 0 : -1}
              >
                <span className="mobile-link-number">
                  {link.number}
                </span>

                <span className="mobile-link-title">
                  {link.label}
                </span>

                <ArrowDownRight
                  className="mobile-link-arrow"
                  size={22}
                />
              </a>
            ))}
          </div>

          {/* Mobile Menu Footer */}
          <div className="mobile-overlay-bottom">
            <div>
              <span className="mobile-bottom-label">
                READY WHEN YOU ARE
              </span>

              <a
                href="tel:18882376059"
                onClick={closeMenu}
              >
                1-888-237-6059
              </a>
            </div>

            <a
              href="#contact"
              className="mobile-quote-button"
              onClick={closeMenu}
              tabIndex={open ? 0 : -1}
            >
              Request a Quote
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
