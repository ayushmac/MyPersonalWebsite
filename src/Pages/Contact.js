import { Container, Image, Card, Row, Col } from "react-bootstrap";
import "./About.css";
import "./Contact.css";
const Contact = () => {
  return (
    <div id="contact-section" className="pt-0">
      <Container fluid className="p-0">
        <Card className="bg-dark text-light rounded-0 card-bg">
          <Card.Body>
            <Card.Title className="title pt-3 pb-2 text-center">
              Contact Me
            </Card.Title>
            <Row className="pt-1 justify-content-center">
              <Col md={2} className="text-center my-2">
                <a
                  href="mailto:ayushmac2002@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <i className="bi bi-envelope-at contact-icon pe-2"></i>
                  <span className="contact-text">Gmail</span>
                </a>
              </Col>
              <Col md={2} className="text-center my-2">
                <a
                  href="https://www.instagram.com/ayushmac02/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <i className="bi bi-instagram contact-icon pe-2"></i>
                  <span className="contact-text">Instagram</span>
                </a>
              </Col>
              <Col md={2} className="text-center my-2">
                <a
                  href="https://www.linkedin.com/in/ayush-machha-8a3839208"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <i className="bi bi-linkedin contact-icon pe-2"></i>
                  <span className="contact-text">LinkedIn</span>
                </a>
              </Col>
              <Col md={2} className="text-center mt-2">
                <a
                  href="https://github.com/ayushmac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <i className="bi bi-github contact-icon pe-2"></i>
                  <span className="contact-text">GitHub</span>
                </a>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Contact;
