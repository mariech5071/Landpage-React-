import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import DropdownIndexItem from './DropdownIndexItem';
import home from '../../Images/home.png'
import ourServices from '../../Images/ourServices.jpg';
import technology from '../../Images/technology.jpg';
import aboutUs from '../../Images/about-us.jpg';
import contactUs from '../../Images/contact-us.png';
import './DropdownIndex.css'

const DropdownIndex = () => {
    return (
<Navbar expand="lg" className="bg-body-tertiary">
  <Container id='dropdown-container'>
    <Navbar.Brand id='dropdown-title'href="#home">Novakyn</Navbar.Brand>
    <Navbar.Toggle id='navbar-style' aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <DropdownIndexItem itemImage={home} itemName='Home'></DropdownIndexItem>
          <DropdownIndexItem itemImage={ourServices} itemName='Our Services'></DropdownIndexItem>
          <DropdownIndexItem itemImage={technology} itemName='Technologies'></DropdownIndexItem>
          <DropdownIndexItem itemImage={aboutUs} itemName='About Us'></DropdownIndexItem>
          <DropdownIndexItem itemImage={contactUs} itemName='Contact Us'></DropdownIndexItem>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    )
}

export default DropdownIndex;