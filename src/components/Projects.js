import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import '../App.css'; // Import your CSS file

export const Projects = () => {
  const projects = [
    {
      title: "Story 1",
      description: "Description for Project 1",
    },
    {
      title: "Story 2",
      description: "Description for Project 2",
    },
    {
      title: "Story 3",
      description: "Description for Project 3",
    },
    {
      title: "Story 4",
      description: "Description for Project 4",
    },
    {
      title: "Story 5",
      description: "Description for Project 5",
    },
    {
      title: "Story 6",
      description: "Description for Project 6",
    },
    // Add more projects here
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                  <h2>Projects</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 
                    1500s, when an unknown printer took a galley of type and scrambled it 
                    to make a type specimen book.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return (
                              <Col key={index} xs={12} sm={6} md={4} className="project-card">
                                <h2>{project.title}</h2>
                                <p className="hidden-text">{project.description}</p>
                              </Col>
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                          Cumque quam, quod neque provident velit, rem explicabo excepturi 
                          id illo molestiae blanditiis, eligendi dicta officiis asperiores 
                          delectus quasi inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                          Cumque quam, quod neque provident velit, rem explicabo excepturi 
                          id illo molestiae blanditiis, eligendi dicta officiis asperiores 
                          delectus quasi inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
