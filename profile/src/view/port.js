import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './port.css';
import { Container, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

 export function Port(){
    return(
        <>
        <div className="container-fluid">
            <div className="row">
                
            <div className="col-lg-12">
                <Navbar expand='md'>
                    <Container>
                        <Navbar.Brand className="text1"><FontAwesomeIcon icon={faUser}/>SHAHUL HAMEED B</Navbar.Brand>
                        <Navbar.Toggle aria-colspan='basic-navbar-nav'/>
                        <Navbar.Collapse id='basic-nav-bar'>
                            <Nav className='me-auto navbr'>
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/About">About</Nav.Link>
                                <Nav.Link href="/Education">Education</Nav.Link>
                                <Nav.Link href="/Skills">Skills</Nav.Link>
                                <Nav.Link href="/Certification">Certification</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar> 
            </div>

        </div>
        </div>
        </>
    );
}