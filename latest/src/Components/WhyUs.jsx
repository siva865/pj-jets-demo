
const reasons = [
  {
    number: '01',
    title: '35+ years of experience',
    description: 'Serving travelers since 1987.',
    image:
      'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1800&q=85',
  },
  {
    number: '02',
    title: 'Safety comes first',
    description: 'A commitment to rigorous operational standards.',
    image:
      'https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=1800&q=85',
  },
  {
    number: '03',
    title: 'A fleet for every mission',
    description: 'From light jets to heavy jets and turboprops.',
    image:
      'https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&w=1800&q=85',
  },
  {
    number: '04',
    title: 'Service, without compromise',
    description: 'Personalized planning for business and leisure.',
    image:
      'https://images.unsplash.com/photo-1540339832862-474599807836?auto=format&fit=crop&w=1800&q=85',
  },
]

export default function WhyUs() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="reveal" style={{ marginBottom: 38 }}>
          <div className="eyebrow">WHY PRIVATE JETS, INC.</div>
          <h2 className="section-title">
            More than a flight.
            <br />
            <span className="lime">A better way to fly.</span>
          </h2>
          <p className="muted">
            Thoughtful service. Flexible travel. Decades of aviation experience.
          </p>
        </div>

        <div className="why-grid">
          {reasons.map((item) => (
            <article className="why-card" key={item.number}>
              {/* Replace these Unsplash URLs with approved company photos. */}
              <img src={item.image} alt="" loading="lazy" />

              <div className="why-copy">
                <span className="why-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
