import "./About.css";
import { Image, Card, Row, Col } from "react-bootstrap";
import logo from "../Images/logo.png";
import Container from "react-bootstrap/Container";
import { motion } from "framer-motion";
const Aboutmain = () => {
  return (
    <div
      id="about-section"
      className="d-flex flex-column min-vh-100 bg-secondary"
    >
      <div className="align-self-center">
        <Container fluid className="p-0">
          <div className="mx-4 pt-4 mt-4 mb-5">
            <Card className="bg-dark text-light card-bg">
              <Card.Body>
                <Row>
                  <Col
                    md={4}
                    className="d-flex justify-content-center align-items-center"
                  >
                    <Image
                      src={logo}
                      className="mt-2 img-fluid rounded-circle"
                    />
                  </Col>
                  <Col md={8}>
                    <div className="d-flex flex-column h-100 pt-4 pb-4 me-4 justify-content-center">
                      <h1 className="text-center mb-4">Hi, I'm Ayush</h1>
                      <Card.Text
                        style={{ textAlign: "justify" }}
                        className="body ps-3"
                      >
                        "Passionate about Web development and App development, I
                        bring a dynamic and motivated approach to creating
                        impactful digital experiences. With a strong foundation
                        in HTML, CSS, JavaScript, and Java, I possess the
                        technical skills to craft visually appealing websites
                        and user-friendly mobile applications. I thrive in
                        collaborative environments, constantly seeking
                        opportunities to expand my knowledge and deliver
                        exceptional results. Let's connect and embark on
                        exciting web and mobile development journeys together."
                      </Card.Text>
                    </div>
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col>
                    <Card className="bg-dark text-light card-bg">
                      <Card.Body>
                        <Card.Title className="text-center card-title">
                          <h4>Technologies I am Currently Familiar With:</h4>
                        </Card.Title>
                        <Card.Text className="text-center card-text">
                          <i className="bi bi-filetype-html mx-2"></i>
                          <strong className="me-4">HTML</strong>
                          <i className="bi bi-filetype-css mx-2"></i>
                          <strong className="me-4">CSS</strong>
                          <i className="bi bi-filetype-js mx-2"></i>
                          <strong className="me-4">Javascript</strong>
                          <i className="bi bi-filetype-java mx-2"></i>
                          <strong className="me-4">Java</strong>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Aboutmain;
