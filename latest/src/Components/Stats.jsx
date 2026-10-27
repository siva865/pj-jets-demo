
const stats = [
  { number: '1987', label: 'Founded' },
  { number: '10+', label: 'Aircraft in fleet*' },
  { number: '24/7', label: 'Charter enquiries*' },
  { number: '135', label: 'FAA operating standard*' },
]

export default function Stats() {
  return (
    <section className="section" style={{ paddingTop: 20 }}>
      <div className="container">
        <div className="reveal" style={{ marginBottom: 32 }}>
          <div className="eyebrow">EXPERIENCE THAT MATTERS</div>
          <h2 className="section-title">
            Built on trust.
            <br />
            <span className="lime">Focused on you.</span>
          </h2>
        </div>

        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        <p className="muted" style={{ fontSize: 11, marginTop: 16 }}>
          *Confirm current fleet size, enquiry availability and operating
          certifications with the company before publishing.
        </p>
      </div>
    </section>
  )
}
