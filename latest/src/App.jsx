
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import WhyUs from './Components/WhyUs'
import Fleet from './Components/Fleet'
import Services from './Components/Services'
import Stats from './Components/Stats'
import QuoteForm from './Components/QuoteForm'
import Footer from './Components/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    let lenis

    if (!reduceMotion) {
      lenis = new Lenis({ lerp: 0.08 })

      lenis.on('scroll', ScrollTrigger.update)

      const tick = (time) => lenis.raf(time * 1000)
      gsap.ticker.add(tick)
      gsap.ticker.lagSmoothing(0)

      // Keep Lenis animation in sync with GSAP.
      window.__lenisCleanup = () => {
        gsap.ticker.remove(tick)
        lenis.destroy()
      }
    }

    if (!reduceMotion) {
      gsap.from('.hero-content > *', {
        y: 35,
        opacity: 0,
        filter: 'blur(8px)',
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.2,
      })

      gsap.to('.hero-bg', {
        scale: 1,
        duration: 2.5,
        ease: 'power2.out',
      })

      gsap.utils.toArray('.reveal').forEach((element) => {
        gsap.fromTo(
          element,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 88%',
              once: true,
            },
          }
        )
      })

      gsap.utils.toArray('.why-card').forEach((card, index, cards) => {
        if (index === cards.length - 1) return

        gsap.to(card, {
          scale: 0.92,
          filter: 'brightness(0.6) blur(2px)',
          scrollTrigger: {
            trigger: card,
            start: 'top top+=100',
            end: 'bottom top+=150',
            scrub: true,
          },
        })
      })

      gsap.utils.toArray('.why-card img').forEach((img) => {
        gsap.fromTo(
          img,
          { yPercent: -5 },
          {
            yPercent: 5,
            ease: 'none',
            scrollTrigger: {
              trigger: img.closest('.why-card'),
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        )
      })
    }

    const onScroll = () => {
      document.querySelector('.site-nav')?.classList.toggle(
        'scrolled',
        window.scrollY > 40
      )
    }

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.__lenisCleanup?.()
      delete window.__lenisCleanup
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      gsap.killTweensOf('*')
    }
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyUs />
        <Fleet />
        <Services />
        <Stats />
        <QuoteForm />
      </main>
      <Footer />
    </>
  )
}
