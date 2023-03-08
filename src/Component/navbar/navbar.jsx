import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
// import logo from '../src/Image/footerlogo.png';
function NavScrollExample() {
  var location = useLocation();
 
  async function chack() {
    var key = location.state
    let a = key.toString();
    console.log(a);
    if (a == null || a == undefined || a == '') {
  
      document.getElementById("login22").style.display = "block";
      document.getElementById("login12").style.display = "none";
    } else {
      document.getElementById("login22").style.display = "none";
      document.getElementById("login12").style.display = "block";
    }
  }
  async function logout() {
    location.state = 0;
  }

  useEffect(() => {
    chack();
  }, []);

  return (
    <Navbar bg="dark" expand="lg" className="navback">
      <Container fluid>
        <Navbar.Brand style={{ width: "7%" }} href="#">
          <img width="100%" src="/static/media/logo.d83c909b65dcdaa2c2a3.png" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1" style={{ color: "white" }}>
              Home
            </Nav.Link>
            <Nav.Link href="#action2" style={{ color: "white" }}>
              Task
            </Nav.Link>
            <Nav.Link href="#action2" style={{ color: "white" }}>
              WhitePaper
            </Nav.Link>
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href="" disabled style={{ color: "white" }}>
              RoadMap
            </Nav.Link>
          </Nav>
          <div className="d-flex">
            <table>
              <tr>
                <td>
                  <Link to={"/login"}>
                    <Button
                      id="login22"
                      style={{
                        marginRight: "16px",
                        TextDecoder: "none",
                      }}
                      variant="success"
                    >
                      Login
                    </Button>
                  </Link>
                  <Link to={"/login"}>
                    <Button
                      id="login12"
                      onClick={logout}
                      style={{
                        marginRight: "16px",
                        TextDecoder: "none",
                        display:'none',
                      }}
                      variant="danger"
                    >
                      Log Out
                    </Button>
                  </Link>
                </td>
                {/*                   
                    <td>
                    <Button id='wallets' variant="outline-success">Wallet</Button>
                    </td> */}
              </tr>
            </table>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
