import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Col, Container, Row } from "reactstrap";
import "./Header.scss";

Header.propTypes = {};

function Header(props) {
  return (
    <header className="header">
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            <a className="header__link header__title" href="/">
              PHOTO APP
            </a>
          </Col>

          <Col xs="auto">
            <NavLink
              exact="true"
              className={(navData) =>
                navData.isActive ? "header__link--active" : "header__link"
              }
              to="/photos"
            >
              Redux Project
            </NavLink>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
