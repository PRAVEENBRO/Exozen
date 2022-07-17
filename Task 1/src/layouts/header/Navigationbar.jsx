import React from 'react'
import "./Navigationbar.css"
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { AiFillLike, AiFillHome } from 'react-icons/ai';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';
import { FiMenu } from 'react-icons/fi';
const Navigationbar = () => {
    return (
        <div>
            <Navbar expand="true" className="mb-3 navBG" >
                <Container fluid>

                    <div>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} style={{ border: "none" }} ><FiMenu /></Navbar.Toggle>
                        <Navbar.Brand className="px-3"><em>TQDigitic</em></Navbar.Brand>
                    </div>

                    <div className="mx-5">
                        <IoMdNotificationsOutline className="mx-3" />
                        <CgProfile className="mx-3" />
                    </div>

                    <Navbar.Offcanvas style={{ width: "300px" }} placement="start" >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>Menu</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-5">
                                <Nav.Link >Home<AiFillHome className="mx-3" /></Nav.Link>
                                <hr />
                                <Nav.Link >Likes<AiFillLike className="mx-3" /></Nav.Link>
                                <hr />
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>

                </Container>
            </Navbar>

        </div>
    )
}

export default Navigationbar