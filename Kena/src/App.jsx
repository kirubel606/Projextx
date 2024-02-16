import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav } from 'react-bootstrap';
import RotatingTextList from './scrollfade';
import kena from './assets/kena.png';
import About from './components/about';
import Info from './components/info';
import Team from './components/team';
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

  return (
    <div style={{overflowX:"hidden"}}>
      <Navbar bg="white" variant="light" className="sticky-top">
        <Navbar.Brand href="#home">
          <img src={kena} style={{ marginLeft: '30px', marginRight: '30px', width: '70px' }} alt="Kena Logo" />
          Kena
        </Navbar.Brand>
        <Nav className="ms-auto" style={{ marginRight: '20px' }}>
          <Nav.Link href="#home">Who we are</Nav.Link>
          <Nav.Link href="#features">Works</Nav.Link>
          <Nav.Link href="#pricing">Contact</Nav.Link>
        </Nav>
      </Navbar>

        <div className="row" style={{height:"100vh"}}>
          <div className="col-md-6 textcarosel">
          <RotatingTextList texts={texts} />
          </div>
          <div className='col-md-5 text-center' >
          <Button className="bg-black mx-auto" style={{width:"200px" , height:"50px",marginTop:"25%", borderColor: 'gray', borderRadius:"5px"}}>
            Contact Us
          </Button>
          </div>
         
        </div>
        <About/>
        <Info/>
        <Team/>
    </div>
  );
}

export default App;
