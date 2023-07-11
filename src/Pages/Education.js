import Container from "react-bootstrap/Container";
import { motion } from "framer-motion";
import PageTransition from "../Components/PageTransition";
import { Image, Card, Row, Col } from "react-bootstrap";
import "./Education.css";
const Education = () => {
  return (
    <div
      id="education-section"
      className="d-flex flex-column min-vh-100 mb-0 bg-secondary"
    >
      <Container fluid className="p-0">
        <div className="mx-4 pt-4 mt-4">
          <Card className="bg-dark text-light card-bg">
            <Card.Body>
              <Row>
                <Col md={12}>
                  <div className="d-flex flex-column h-100 pt-4 pb-4 me-4 justify-content-center">
                    <h1 className="title text-center mb-5">Education</h1>

                    <Card.Text>
                      <ul className="education-list">
                        <li className="mb-5">
                          <strong>SSC:</strong>
                          <p>
                            St. Aloysius High School, Nallasopara (East) <br />
                            Percentage: 79.20%
                          </p>
                        </li>
                        <li className="mb-5">
                          <strong>HSC:</strong>
                          <p>
                            St. Stanislaus High School & Junior College,
                            Nallasopara (West) <br />
                            Percentage: 66.15%
                          </p>
                        </li>
                        <li>
                          <strong>BSc in Computer Science:</strong>
                          <p>
                            Bhavans College, Andheri (West) <br />
                            CGPA: 9.31
                          </p>
                        </li>
                      </ul>
                    </Card.Text>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default Education;
