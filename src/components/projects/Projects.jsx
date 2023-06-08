import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../../assets/img/project-img1.png";
import projImg2 from "../../assets/img/project-img2.png";
import projImg3 from "../../assets/img/project-img3.png";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Comment demarrer son business",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Bien demarrer son Startup",
      description: "Web Development",
      imgUrl: projImg2,
    },
    {
      title: "Lancer son Startup",
      description: "Web Design",
      imgUrl: projImg3,
    },
    {
      title: "Bien demarrer son Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Lancer son Startup",
      description: "Web Design",
      imgUrl: projImg2,
    },
    {
      title: "Comment demarrer son business",
      description: "Web Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__slideInUp": ""}>
                <h2>Projects</h2>
                <p className="p">Grâce à mon expertise en développement web, j'ai réalisé avec succès une multitude de projets captivants. De la création de sites web dynamiques à la mise en place de boutiques en ligne performantes, mes réalisations témoignent de ma capacité à concrétiser des idées novatrices.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first" className="first">Images</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second" className="second">Description 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third" className="third">Description 2</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second" >
                      <p className="p2">En collaborant étroitement avec mes clients, j'ai su comprendre et répondre à leurs besoins spécifiques, en leur offrant des solutions sur mesure. Mon approche méthodique et ma gestion efficace des délais m'ont permis de livrer des projets de qualité, tout en respectant les exigences et les attentes de mes clients.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third" >
                      <p className="p2">En collaborant étroitement avec mes clients, j'ai su comprendre et répondre à leurs besoins spécifiques, en leur offrant des solutions sur mesure. Mon approche méthodique et ma gestion efficace des délais m'ont permis de livrer des projets de qualité, tout en respectant les exigences et les attentes de mes clients.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
