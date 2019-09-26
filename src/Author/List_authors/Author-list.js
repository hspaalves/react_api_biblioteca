import React from 'react';
import {
    Button,
    Container,
    Image,
    Row,
    Col,
    Table,
    Navbar,
    Nav
} from 'react-bootstrap'
import logo from "../../Img/logo-ex-2.png";

class AuthorList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }
    componentDidMount() {
        fetch("http://localhost:8000/v1/author/")
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
                                    <Nav.Link href="/new/author">Novo</Nav.Link>
                                    <Nav.Link href="/Book">Book</Nav.Link>
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
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th colSpan={4}>Opções</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items.map(item => (
                                        <tr key={item.name}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td><Button variant={"secondary"} size="lg" block>Alterar</Button></td>
                                            <td><Button variant={"secondary"} href={`/del/author/${item.id}`} size="lg" block>Excluir</Button></td>
                                            <td><Button variant={"secondary"} href={`/author/${item.id}`} size="lg" block>Detalhes</Button></td>
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
export default AuthorList;
