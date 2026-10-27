
import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const from = data.get('from')
    const to = data.get('to')
    const date = data.get('date')
    const passengers = data.get('passengers')
    const email = data.get('email')

    const subject = encodeURIComponent('Private Charter Quote Request')
    const body = encodeURIComponent(
      `New charter enquiry\n\nFrom: ${from}\nTo: ${to}\nDate: ${date}\nPassengers: ${passengers}\nEmail: ${email}`
    )

    setSubmitted(true)

    window.location.href =
      `mailto:privatejetsinc@privatejetsinc.com?subject=${subject}&body=${body}`
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="quote-wrap">
          <div>
            <div className="eyebrow">LET'S GET YOU THERE</div>
            <h2 className="section-title" style={{ marginTop: 18 }}>
              Your next
              <br />
              journey starts
              <br />
              <span className="lime">here.</span>
            </h2>

            <p className="muted" style={{ lineHeight: 1.9 }}>
              Tell us a little about your trip. Our team can help you
              explore the right charter option.
            </p>

            <a
              href="tel:18882376059"
              className="pill pill-outline"
              style={{ marginTop: 18 }}
            >
              Call 1-888-237-6059
            </a>
          </div>

          <form className="quote-form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="from">Departure city</label>
              <input
                id="from"
                name="from"
                placeholder="e.g. Oklahoma City"
                required
              />
            </div>

            <div className="field">
              <label htmlFor="to">Destination city</label>
              <input
                id="to"
                name="to"
                placeholder="e.g. New York"
                required
              />
            </div>

            <div className="field">
              <label htmlFor="date">Departure date</label>
              <input id="date" name="date" type="date" required />
            </div>

            <div className="field">
              <label htmlFor="passengers">Passengers</label>
              <select
                id="passengers"
                name="passengers"
                defaultValue="2"
                required
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
                  (count) => (
                    <option key={count} value={count}>
                      {count} {count === 1 ? 'passenger' : 'passengers'}
                    </option>
                  )
                )}
              </select>
            </div>

            <div className="field field-full">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@company.com"
                required
              />
            </div>

            <div className="field field-full">
              <button type="submit" className="pill">
                Request a quote <ArrowUpRight size={16} />
              </button>

              {submitted && (
                <p className="muted" role="status">
                  Your email app should open with the enquiry details.
                  This demo does not send or store the request itself.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
