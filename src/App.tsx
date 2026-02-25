import React, { useState, useEffect } from 'react';
import './App.css';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <div className="logo">
            <span className="logo-text">RED BULL</span>
          </div>
          
          <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <a href="#home" onClick={() => setIsMenuOpen(false)}>HOME</a>
            <a href="#products" onClick={() => setIsMenuOpen(false)}>PRODUCTS</a>
            <a href="#athletes" onClick={() => setIsMenuOpen(false)}>ATHLETES</a>
            <a href="#events" onClick={() => setIsMenuOpen(false)}>EVENTS</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>CONTACT</a>
          </nav>

          <button 
            className={`menu-btn ${isMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="hero-video">
          <div className="video-placeholder"></div>
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-line">GIVES YOU</span>
            <span className="title-line red">WINGS</span>
          </h1>
          <p className="hero-subtitle">Experience the energy that fuels champions</p>
          <div className="hero-buttons">
            <a href="#products" className="btn btn-primary">DISCOVER PRODUCTS</a>
            <a href="#events" className="btn btn-secondary">VIEW EVENTS</a>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>SCROLL</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </section>

      <section id="products" className="section products">
        <div className="container">
          <h2 className="section-title">OUR PRODUCTS</h2>
          <p className="section-subtitle">Choose your energy</p>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-image" style={{background: 'linear-gradient(45deg, #e31b23, #ff6b6b)'}}>
                <span className="product-badge">ORIGINAL</span>
              </div>
              <div className="product-info">
                <h3>RED BULL ENERGY DRINK</h3>
                <p>The original energy drink that gives you wings</p>
                <div className="product-footer">
                  <span className="price">$2.99</span>
                  <button className="product-btn">ADD TO CART</button>
                </div>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image" style={{background: 'linear-gradient(45deg, #001c3d, #2a4b7c)'}}>
                <span className="product-badge">SUGARFREE</span>
              </div>
              <div className="product-info">
                <h3>RED BULL SUGARFREE</h3>
                <p>Same great taste, zero sugar</p>
                <div className="product-footer">
                  <span className="price">$2.99</span>
                  <button className="product-btn">ADD TO CART</button>
                </div>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image" style={{background: 'linear-gradient(45deg, #ffc72c, #ffd966)'}}>
                <span className="product-badge">EDITIONS</span>
              </div>
              <div className="product-info">
                <h3>RED BULL EDITIONS</h3>
                <p>Exotic flavors for unique taste experiences</p>
                <div className="product-footer">
                  <span className="price">$3.29</span>
                  <button className="product-btn">ADD TO CART</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="athletes" className="section athletes">
        <div className="container">
          <h2 className="section-title">OUR ATHLETES</h2>
          <p className="section-subtitle">World-class athletes powered by Red Bull</p>
          <div className="athletes-grid">
            <div className="athlete-card">
              <div className="athlete-image" style={{background: 'url(https://via.placeholder.com/400x500) center/cover'}}></div>
              <div className="athlete-info">
                <h3>MAX VERSTAPPEN</h3>
                <p>Formula 1</p>
                <span className="country">Netherlands</span>
              </div>
            </div>

            <div className="athlete-card">
              <div className="athlete-image" style={{background: 'url(https://via.placeholder.com/400x500) center/cover'}}></div>
              <div className="athlete-info">
                <h3>TRAVIS PASTRANA</h3>
                <p>Motorsports</p>
                <span className="country">USA</span>
              </div>
            </div>

            <div className="athlete-card">
              <div className="athlete-image" style={{background: 'url(https://via.placeholder.com/400x500) center/cover'}}></div>
              <div className="athlete-info">
                <h3>FELIX BAUMGARTNER</h3>
                <p>Skydiving</p>
                <span className="country">Austria</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="events" className="section events">
        <div className="container">
          <h2 className="section-title">UPCOMING EVENTS</h2>
          <p className="section-subtitle">Join us at the world's most exciting events</p>
          <div className="events-grid">
            <div className="event-card">
              <div className="event-date">
                <span className="month">OCT</span>
                <span className="day">15</span>
              </div>
              <div className="event-details">
                <h3>RED BULL RAMPAGE</h3>
                <p className="location">Utah, USA</p>
                <span className="category">Mountain Bike</span>
                <button className="event-btn">LEARN MORE</button>
              </div>
            </div>

            <div className="event-card">
              <div className="event-date">
                <span className="month">AUG</span>
                <span className="day">20</span>
              </div>
              <div className="event-details">
                <h3>RED BULL AIR RACE</h3>
                <p className="location">Abu Dhabi</p>
                <span className="category">Aviation</span>
                <button className="event-btn">LEARN MORE</button>
              </div>
            </div>

            <div className="event-card">
              <div className="event-date">
                <span className="month">SEP</span>
                <span className="day">5</span>
              </div>
              <div className="event-details">
                <h3>RED BULL BC ONE</h3>
                <p className="location">Paris, France</p>
                <span className="category">Breaking</span>
                <button className="event-btn">LEARN MORE</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="container">
          <h2 className="section-title">STAY UPDATED</h2>
          <p className="section-subtitle">Subscribe to our newsletter</p>
          <form className="contact-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">SUBSCRIBE</button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">RED BULL</div>
            <div className="footer-links">
              <a href="#home">HOME</a>
              <a href="#products">PRODUCTS</a>
              <a href="#athletes">ATHLETES</a>
              <a href="#events">EVENTS</a>
              <a href="#contact">CONTACT</a>
            </div>
            <div className="footer-social">
              <a href="#" className="social-link">FB</a>
              <a href="#" className="social-link">IG</a>
              <a href="#" className="social-link">TW</a>
              <a href="#" className="social-link">YT</a>
            </div>
            <p className="copyright">© 2024 RED BULL. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
