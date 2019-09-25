import React from 'react';
import {Button, Container, Image, Row, Col, Table, Navbar, Nav} from 'react-bootstrap'
import logo from "../../Img/logo-ex-2.png";

class Booklist extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }
    componentDidMount() {
        fetch("http://localhost:8000/v1/book/")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.results
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <div>
                        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                            <Navbar.Brand href="/">Home</Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mr-auto">
                                    <Nav.Link href="/new/book">Novo</Nav.Link>
                                    <Nav.Link href="/Author">Author</Nav.Link>
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
                        <Container>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Summary</th>
                                        <th colSpan={3}>Opções</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items.map(item => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.summary}</td>
                                            <td><Button variant={"secondary"} size="lg" block>Alterar</Button></td>
                                            <td><Button variant={"secondary"} href={`/del/book/${item.id}`} size="lg" block>Excluir</Button></td>
                                            <td><Button variant={"secondary"} href={`/book/${item.id}`} size="lg" block>Detalhes</Button></td>

                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Container>
                    </div>
                </div>

            );
        }
    }

}
export default Booklist;
