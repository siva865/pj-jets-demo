
import { ArrowUpRight } from 'lucide-react'

const aircraft = [
  {
    name: 'Light Jets',
    detail: 'Ideal for shorter regional journeys.',
    seats: '4–7 passengers',
    range: 'Approx. 1,500 mi',
    image:
      'https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'Midsize',
    detail: 'Extra room for longer trips.',
    seats: '6–8 passengers',
    range: 'Approx. 2,500 mi',
    image:
      'https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'Super Midsize',
    detail: 'Comfort across coast-to-coast routes.',
    seats: '7–9 passengers',
    range: 'Approx. 3,500 mi',
    image:
      'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'Heavy Jets',
    detail: 'Spacious cabins for longer journeys.',
    seats: '10–16 passengers',
    range: 'Approx. 5,000 mi',
    image:
      'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'Turboprop',
    detail: 'Practical access to smaller airports.',
    seats: '5–9 passengers',
    range: 'Varies by aircraft',
    image:
      'https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&w=900&q=85',
  },
]

export default function Fleet() {
  return (
    <section className="section" id="fleet">
      <div className="container">
        <div className="reveal">
          <div className="eyebrow">THE FLEET</div>
          <h2 className="section-title">
            The right aircraft.
            <br />
            <span className="lime">For your journey.</span>
          </h2>
          <p className="muted">
            Aircraft options tailored to your route, group and travel needs.
          </p>
        </div>

        <div className="fleet-grid" style={{ marginTop: 36 }}>
          {aircraft.map((jet) => (
            <article className="fleet-card" key={jet.name}>
              {/* Replace with verified photos of available aircraft. */}
              <img src={jet.image} alt={jet.name} loading="lazy" />
              <div className="fleet-info">
                <h3>{jet.name}</h3>
                <p>{jet.detail}</p>
                <p>{jet.seats}</p>
                <p>{jet.range}</p>
                <a
                  className="pill"
                  href="#contact"
                  style={{ marginTop: 12, padding: '12px 16px' }}
                >
                  Enquire <ArrowUpRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="muted" style={{ fontSize: 11, marginTop: 14 }}>
          Aircraft availability, seating and range vary by aircraft and
          configuration. Confirm specifications before publishing.
        </p>
      </div>
    </section>
  )
}
