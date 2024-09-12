/* eslint-disable react/prop-types */
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import './Navbar.css'

const NavBar = ({logo, items , btn}) => {
  const firstFiveItems = items.slice(0, 5);
  const lastItem = items.slice(5, 6)[0];
  return (
    <Navbar expand="lg" className="">
    <Container fluid className='justify-content-evenly'>
      <Navbar.Brand href="#" className='logoNav'><img src={logo?.img} alt={logo?.text} /></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll" className='flex-grow-0'>
        <Nav
          className="me-auto my-2 my-lg-0 default-color"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          {firstFiveItems?.map((element, index) => {
            return (
              <Nav.Link className='default-color' key={index} href={`#${element.id}`}>{element.name}</Nav.Link>
            )
          })}
          <NavDropdown title="DROPDOWN" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
          {lastItem && (
              <Nav.Link className='default-color' href={`#${lastItem.id}`}>{lastItem.name}</Nav.Link>
            )}
        </Nav>  
      </Navbar.Collapse>
          <Button variant="primary" className='rounded main-bgcolor border-0'>{btn}</Button>
    </Container>
  </Navbar>
  )
}

export default NavBar