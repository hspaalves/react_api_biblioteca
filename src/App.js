import React from 'react';
import logo from './Img/logo-ex-2.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  Container,
  Image,
  Row,
  Col,
  Navbar,
  Nav,
  NavDropdown,
  InputGroup,
  FormControl,
  Dropdown,
  DropdownButton
} from 'react-bootstrap'


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {name: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit(event) {
    alert('Um nome foi enviado: ' + this.state.name);
    event.preventDefault();
  }
  render() {
    const { name } = this.state;

    const enabled = name.length > 0;
    return (
        <div>
          <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Navbar.Brand href="/">Home</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <NavDropdown title="Author" id="nav_author">
                    <NavDropdown.Item href="/new/author">New</NavDropdown.Item>
                    <NavDropdown.Item href="/author">List</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Book" id="nav_book">
                    <NavDropdown.Item href="/new/book">New</NavDropdown.Item>
                    <NavDropdown.Item href="/book">List</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
          <div>
            <Container>
              <Row className={"justify-content-center"}>
                <Col  xs={6} md={4}>
                  <Image src={logo} roundedCircle />
                </Col>
              </Row>
            </Container>
          </div>
          <div>
            <Container>
              <InputGroup>
                <FormControl
                    placeholder="Search"
                    aria-label="Search by name"
                    aria-describedby="basic-addon2"
                    size={"lg"}
                    value={this.state.name}
                    onChange={this.handleChange}
                    id = "name"
                    name = "name"
                />

                <DropdownButton
                    as={InputGroup.Append}
                    variant="outline-primary"
                    title="Search"
                    id="igd"
                >
                  <Dropdown.Item href={`/author/search/${this.state.name}`} disabled={!enabled}>Search Author</Dropdown.Item>
                  <Dropdown.Item href={`/book/?name=${this.state.name}`} disabled={!enabled}>Search Book</Dropdown.Item>
                </DropdownButton>
              </InputGroup>
            </Container>

          </div>
        </div>
    );
  }
}


export default App;
