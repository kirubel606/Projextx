import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Button, Navbar, Nav } from 'react-bootstrap';
import { Link, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import RotatingTextList from './scrollfade';
import kena from './assets/kena.png';
import About from './components/about';
import Info from './components/info';
import Team from './components/team';
import Footer from './components/footer';
import Services from './components/services';
import Contact from './components/contact';


function App() {
  const texts = [
    'Branding',
    'Social Media Managment',
    'Web Development',
    'Web Design',
    'Digital Marketing',
    'SEO',
    'Graphics Design',
    'Email Marketing',
  ];

  useEffect(() => {
    scrollSpy.update();

    Events.scrollEvent.register('begin', function () {
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log('end', arguments);
    });

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ overflowX: "hidden" }}>
      <Navbar bg="white" variant="light" className="sticky-top">
        <Navbar.Brand onClick={scrollToTop} style={{ cursor: "pointer" }}>
          <img src={kena} style={{ marginLeft: '30px', marginRight: '30px', width: '70px' }} alt="Kena Logo" />
          Kena
        </Navbar.Brand>
        <Nav className="ms-auto" style={{ marginRight: '20px' }}>
          <Nav.Link>
            <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500}>Who we are</Link>
          </Nav.Link>
          <Nav.Link>
            <Link activeClass="active" to="info" spy={true} smooth={true} offset={-50} duration={500}>Info</Link>
          </Nav.Link>
          <Nav.Link>
            <Link activeClass="active" to="team" spy={true} smooth={true} offset={0} duration={500}>Team</Link>
          </Nav.Link>
          <Nav.Link>
            <Link activeClass="active" to="services" spy={true} smooth={true} offset={0} duration={500}>Works</Link>
          </Nav.Link>
          <Nav.Link>
            <Link activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={500}>Contact</Link>
          </Nav.Link>
        </Nav>
      </Navbar>
      <div className="row" style={{ height: "100vh" }}>
        <div className="col-md-6 textcarosel">
          <RotatingTextList texts={texts} />
        </div>
        <div className='col-md-5 text-center' >
          {/* Button for scrolling to the footer */}
          <Link activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={500}>
            <Button className="bg-black mx-auto" style={{ width: "200px", height: "50px", marginTop: "25%", borderColor: 'gray', borderRadius: "5px" }} >
              Contact
            </Button>
          </Link>
        </div>
      </div>

      <Element name="about" className="element">
        <About />
      </Element>
      <Element name="info" className="element">
        <Info />
      </Element>
      <Element name="team" className="element">
        <Team />
      </Element>
      <Element name="services" className="element">
        <Services />
      </Element>
      <Element name="contact" className="element">
        <Contact />
      </Element>
      <Element name="footer" className="element">
        <Footer />
      </Element>

      {/* Floating button to scroll to the top */}
      {showScrollToTop && (
        <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: '999' }}>
          <Button className="shadow border-0 bg-black" onClick={scrollToTop} style={{borderRadius:"50%"}}>
            <i className="bi bi-arrow-up-circle-fill" style={{ fontSize: '1.5rem'}}></i>
          </Button>
        </div>
      )}
    </div>
  );
}

export default App;
