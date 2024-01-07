import {Button, Card, CardBody, Col, Row} from "reactstrap";
import {useEffect, useState} from "react";
import ProjectStatus from "./projectstatus";

function Project(props) {
    let bgColor = 'rgba(136, 196, 236, 1)'
    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
    }, [])
    return (
        <div>
            {(width > 768) ? <Card className={'shadow-lg'} outline color="light" style={{
                width: '80vw',
                textAlign: 'center',
                backgroundColor: bgColor,
                marginLeft: '10vw',
                marginBottom: '5rem',
                border: 'none'
            }}>
                <h2 style={{marginBottom: '1rem', marginTop: '1rem'}}>{props.title}</h2>
                <Row xs={'2'}>
                    <Col>
                        <CardBody>
                            <img src={props.imgsrc} alt="Uh oh" width='80%' height='auto'/>
                        </CardBody>
                    </Col>
                    <Col>
                        <p style={{textAlign: 'left', fontSize: '1.5rem'}}>{props.desc}</p>
                        <br></br>
                        <br></br>
                        <ProjectStatus teamsize={props.status.teamsize} isDone={props.status.isDone} role={props.status.role} tools={props.status.tools} dates={props.status.dates}/>
                        <Button color="primary" onClick={() => {
                            window.location.href = '/' + props.project
                        }} style={{marginBottom: '1rem'}}>
                            Learn More
                        </Button>
                    </Col>
                </Row>
            </Card> : <>
                <Card className={'shadow-lg'} outline color="light" style={{
                    width: '80vw',
                    textAlign: 'center',
                    marginLeft: '10vw',
                    marginBottom: '5rem',
                    backgroundColor: bgColor,
                    border: 'none'
                }}>
                    <h2 style={{marginBottom: '1rem', marginTop: '1rem'}}>{props.title}</h2>
                    <Row xs={'2'}>
                        <Col>
                            <CardBody>
                                <img src={props.imgsrc} alt="Uh oh" width='50%' height='auto'/>
                            </CardBody>
                        </Col>
                        <Col>
                            <p style={{textAlign: 'left', fontSize: '1.5rem'}}>{props.desc}</p>
                            <br></br>
                            <br></br>
                            <ProjectStatus teamsize={props.status.teamsize} isDone={props.status.isDone} role={props.status.role} tools={props.status.tools} dates={props.status.dates}/>
                            <Button color="primary" onClick={() => {
                                window.location.href = '/' + props.project
                            }} style={{marginBottom: '1rem'}}>
                                Learn More
                            </Button>
                        </Col>
                    </Row>
                </Card>
                </>}
        </div>
    )
}

export default Project