import { Routes, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { motion } from "framer-motion";
import { Image } from "react-bootstrap";
import mainlogo from "../Images/finallogo.png";
import React, { useEffect, useState } from "react";
import "./NaviBar.css";

export function Navibar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      className={`bg-body-tertiary ${
        isScrolled || isHovered ? "navbar-fade-out" : "navbar-fade-in"
      }`}
      variant="dark"
      data-bs-theme="dark"
      sticky="top"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="mx-auto">
          <img
            src={mainlogo}
            className="mt-2 mb-2"
            width="130px"
            height="30px"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="mx-auto">
            <Nav.Link className="links" href="#about-section">
              About
            </Nav.Link>
            <Nav.Link className="links" href="#education-section">
              Education
            </Nav.Link>
            <Nav.Link className="links" href="#contact-section">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
