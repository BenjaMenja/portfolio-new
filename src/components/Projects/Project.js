import {Button, Card, CardBody, Col, Row} from "reactstrap";
import { useIsMobile } from "../../hooks/useIsMobile";
import ProjectStatus from "./projectstatus";

const projectCardStyle = (bgColor) => ({
    width: '80vw',
    textAlign: 'center',
    backgroundColor: bgColor,
    marginLeft: '10vw',
    marginBottom: '5rem',
    border: 'none'
})

function Project(props) {
    const bgColor = 'rgba(136, 196, 236, 1)'

    const { title, imgsrc, imgwidth, desc, project, status } = props
    const { publisher, role, tools, dates } = status

    const projectStatus = (
        <ProjectStatus
            isMobile={useIsMobile()}
            publisher={publisher}
            role={role}
            tools={tools}
            dates={dates}
        />
    )

    return (
        <Card
            className="shadow-lg project"
            outline
            color="light"
            style={{
                ...projectCardStyle(bgColor),
                alignItems: useIsMobile() ? 'center' : undefined,
            }}
        >
            <h2 style={{ margin: '1rem 0' }}>{title}</h2>

            {useIsMobile() ? (
                <>
                    <img src={imgsrc} alt="Project Thumbnail" width="80%" height="auto" />
                    {projectStatus}
                    <p style={{ textAlign: 'center', fontSize: '1.5rem', padding: '0 5%' }}>{desc}</p>
                    <Button
                        color="primary"
                        href={`/${project}`}
                        style={{ marginBottom: '1rem', color: 'white' }}
                    >
                    Learn More
                    </Button>
                </>
            ) : (
                <Row xs="2">
                    <Col>
                        <CardBody>
                            <img src={imgsrc} alt="Project Thumbnail" width={imgwidth || '75%'} height="auto" />
                        </CardBody>
                    </Col>
                    <Col style={{paddingRight: '2rem'}}>
                        {projectStatus}
                        <p style={{ textAlign: 'left', fontSize: '1.5rem' }}>{desc}</p>
                        <Button
                            color="primary"
                            href={`/${project}`}
                            style={{ marginBottom: '1rem', color: 'white' }}
                        >
                        Learn More
                        </Button>
                    </Col>
                </Row>
            )}

        </Card>
    )
}

export default Project