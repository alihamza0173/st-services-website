import { useState, useEffect, useRef } from 'react'
import logo from './assets/images/logo.jpg'
import './App.css'

const services = [
  {
    icon: '⚡',
    title: 'Complete Electric Work',
    desc: 'WAPDA Meter single phase & 3 phase complete installation, cable fault locator, and professional electrical teams for all residential and commercial needs.',
  },
  {
    icon: '☀️',
    title: 'Solar Installation',
    desc: 'Complete solar panel installation with professional structure work, inverter setup, net metering assistance, and ongoing maintenance services.',
  },
  {
    icon: '🔥',
    title: 'Fire & Safety',
    desc: 'Fire alarm systems, safety equipment installation, CCTV security cameras, access control systems, and comprehensive security solutions.',
  },
  {
    icon: '🔧',
    title: 'Complete Plumbing',
    desc: 'Drain pipe installation & repair, seepage clearing, water supply systems, bathroom fitting, and all plumbing maintenance work.',
  },
  {
    icon: '🪟',
    title: 'Glass & Fabrication',
    desc: 'Tempered and non-tempered glass for house and commercial use, aluminum fabrication, glass railing, and professional glass cleaning teams available.',
  },
  {
    icon: '🪵',
    title: 'Complete Wooden Work',
    desc: 'Custom furniture, door and window frames, kitchen cabinets, wardrobes, wooden flooring, and all house & commercial woodwork.',
  },
  {
    icon: '🎨',
    title: 'Paint Work',
    desc: 'Interior and exterior painting, rock wall textures, wall design, weather-proof coating, and premium finish paint services.',
  },
  {
    icon: '🏗️',
    title: 'Civil & Construction',
    desc: 'Repair work, leakage & seepage treatment, dismantling, renovation, new construction, and complete building solutions.',
  },
]

const reviews = [
  { name: 'Ahmed Khan', text: 'Outstanding electrical work! The team was professional, punctual, and completed the 3-phase installation flawlessly. Highly recommended!' },
  { name: 'Sara Malik', text: 'ST Services installed our complete solar system. Excellent structure work and the panels are performing beyond expectations. 5 stars!' },
  { name: 'Usman Ali', text: 'Best plumbing service in the city. They fixed our drainage issues that others couldn\'t solve. Very reliable and honest team.' },
  { name: 'Fatima Noor', text: 'Got CCTV cameras and fire safety systems installed for our office. Professional work with clean cable management. Very satisfied!' },
  { name: 'Hassan Raza', text: 'Complete renovation of our house including paint, woodwork, and glass work. The result exceeded our expectations. Truly professional!' },
  { name: 'Ayesha Tariq', text: 'Their civil work team handled our leakage treatment perfectly. No more seepage issues after their treatment. Excellent service!' },
]

function StarRating() {
  return (
    <div className="stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="star-icon">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, visible]
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [heroRef, heroVisible] = useInView(0.1)
  const [servRef, servVisible] = useInView(0.08)
  const [revRef, revVisible] = useInView(0.08)
  const [ctaRef, ctaVisible] = useInView(0.1)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="app">
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">
          <a href="#hero" className="nav-brand">
            <img src={logo} alt="ST Services Logo" className="nav-logo" />
            <span className="nav-title">ST SERVICES</span>
          </a>
          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
          <ul className={`nav-links${menuOpen ? ' show' : ''}`}>
            {['Home', 'Services', 'Reviews', 'Contact'].map(item => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
                  {item}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://wa.me/923248495926"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-cta"
              >
                Get Quote
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <section id="home" className="hero" ref={heroRef}>
        <div className="hero-bg-pattern" />
        <div className={`hero-content${heroVisible ? ' animate' : ''}`}>
          <div className="hero-logo-wrap">
            <img src={logo} alt="ST Services" className="hero-logo" />
          </div>
          <h1>ST SERVICES</h1>
          <p className="hero-tagline">Your Trusted Partner for Professional Home & Commercial Services</p>
          <div className="hero-rating">
            <StarRating />
            <span>5.0 Rated — Trusted by 500+ Clients</span>
          </div>
          <div className="hero-btns">
            <a href="#services" className="btn btn-primary">Our Services</a>
            <a
              href="https://wa.me/923248495926"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <svg viewBox="0 0 24 24" className="wa-icon">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
        <div className="hero-wave">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,64 C360,120 720,0 1080,64 C1260,96 1380,80 1440,64 L1440,120 L0,120 Z" />
          </svg>
        </div>
      </section>

      <section id="services" className="services" ref={servRef}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">What We Offer</span>
            <h2>Our Professional Services</h2>
            <p>Delivering excellence across all home and commercial service needs with certified professionals</p>
          </div>
          <div className={`services-grid${servVisible ? ' animate' : ''}`}>
            {services.map((s, i) => (
              <div className="service-card" key={i} style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <a
                  href="https://wa.me/923248495926"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="service-link"
                >
                  Get Quote →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="reviews" ref={revRef}>
        <div className="container">
          <div className="section-header light">
            <span className="section-tag">Testimonials</span>
            <h2>What Our Clients Say</h2>
            <div className="reviews-overall">
              <StarRating />
              <span>5.0 out of 5 — Based on 500+ Reviews</span>
            </div>
          </div>
          <div className={`reviews-grid${revVisible ? ' animate' : ''}`}>
            {reviews.map((r, i) => (
              <div className="review-card" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                <StarRating />
                <p>"{r.text}"</p>
                <div className="reviewer">
                  <div className="reviewer-avatar">{r.name.charAt(0)}</div>
                  <span>{r.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact" ref={ctaRef}>
        <div className={`container${ctaVisible ? ' animate' : ''}`}>
          <div className="section-header">
            <span className="section-tag">Get In Touch</span>
            <h2>Contact Us Today</h2>
            <p>Ready to start your project? Reach out through any channel below</p>
          </div>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <h4>Call Us</h4>
                  <a href="tel:+923248495926">+92 324 8495926</a>
                  <a href="tel:+923004534441">+92 300 4534441</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">💬</div>
                <div>
                  <h4>WhatsApp</h4>
                  <a href="https://wa.me/923248495926" target="_blank" rel="noopener noreferrer">+92 324 8495926</a>
                  <a href="https://wa.me/923004534441" target="_blank" rel="noopener noreferrer">+92 300 4534441</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:stservices65@gmail.com">stservices65@gmail.com</a>
                </div>
              </div>
              <div className="social-links">
                <a href="https://facebook.com/stservices65" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Facebook">
                  <svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://instagram.com/stservices65" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Instagram">
                  <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="https://twitter.com/stservices65" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="X / Twitter">
                  <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
              </div>
            </div>
            <form className="contact-form" onSubmit={e => e.preventDefault()}>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="tel" placeholder="Your Phone Number" />
              <select defaultValue="">
                <option value="" disabled>Select a Service</option>
                {services.map((s, i) => (
                  <option key={i} value={s.title}>{s.title}</option>
                ))}
              </select>
              <textarea rows="4" placeholder="Tell us about your project..." required />
              <button type="submit" className="btn btn-primary btn-full">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <img src={logo} alt="ST Services" className="footer-logo" />
              <span>ST SERVICES</span>
              <p>Professional home & commercial services you can trust. Quality work, honest pricing, and customer satisfaction guaranteed.</p>
            </div>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <a href="#home">Home</a>
              <a href="#services">Services</a>
              <a href="#reviews">Reviews</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="footer-links">
              <h4>Services</h4>
              <a href="#services">Electric Work</a>
              <a href="#services">Solar Installation</a>
              <a href="#services">Fire & Safety</a>
              <a href="#services">Plumbing</a>
            </div>
            <div className="footer-links">
              <h4>Contact Info</h4>
              <a href="tel:+923248495926">+92 324 8495926</a>
              <a href="tel:+923004534441">+92 300 4534441</a>
              <a href="mailto:stservices65@gmail.com">stservices65@gmail.com</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2024 ST Services. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
