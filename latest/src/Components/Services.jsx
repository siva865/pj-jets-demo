
import {
  Plane,
  CreditCard,
  Settings,
  Coffee,
  ArrowUpRight,
} from 'lucide-react'

const services = [
  {
    icon: Plane,
    title: 'On-demand charter',
    description:
      'Personalized private air travel for business trips, getaways and special occasions.',
  },
  {
    icon: CreditCard,
    title: 'Jet card membership',
    description:
      'Explore membership options designed around frequent private travel.',
  },
  {
    icon: Settings,
    title: 'Aircraft management',
    description:
      'A tailored approach to aircraft ownership and operational management.',
  },
  {
    icon: Coffee,
    title: 'In-flight catering',
    description:
      'Thoughtful onboard arrangements to make your journey more comfortable.',
  },
]

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="reveal">
          <div className="eyebrow">OUR SERVICES</div>
          <h2 className="section-title">
            Your journey.
            <br />
            <span className="lime">Your way.</span>
          </h2>
        </div>

        <div className="services-grid" style={{ marginTop: 36 }}>
          {services.map(({ icon: Icon, title, description }) => (
            <article className="service-card reveal" key={title}>
              <Icon className="service-icon" size={28} strokeWidth={1.5} />
              <h3>{title}</h3>
              <p>{description}</p>
              <a
                href="#contact"
                aria-label={`Enquire about ${title}`}
                style={{ color: 'var(--lime)' }}
              >
                Explore service <ArrowUpRight size={15} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
