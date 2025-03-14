import {Button, Card, CardBody, Col, Row} from "reactstrap";
import {useEffect, useState} from "react";
import ProjectStatus from "./projectstatus";

function Project(props) {
    let bgColor = 'rgba(136, 196, 236, 1)'
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)
    useEffect(() => {
        function handleResize() {
            const newwidth = window.innerWidth
            const newheight = window.innerHeight
            setWidth(newwidth)
            setHeight(newheight)
        }
        window.addEventListener('resize', handleResize)
    }, [])
    return (
        <div>
            {(width > 768) ? <Card className={'shadow-lg project'} outline color="light" style={{
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
                            <img src={props.imgsrc} alt="Project Thumbnail" width='75%' height='auto'/>
                        </CardBody>
                    </Col>
                    <Col>
                        <ProjectStatus width={width} height={height} publisher={props.status.publisher} isDone={props.status.isDone} role={props.status.role} tools={props.status.tools} dates={props.status.dates}/>
                        <br></br>

                        <p style={{textAlign: 'left', fontSize: '1.5rem'}}>{props.desc}</p>
                        <Button color="primary" onClick={() => {
                            window.location.href = '/' + props.project
                        }} style={{marginBottom: '1rem'}}>
                            Learn More
                        </Button>
                    </Col>
                </Row>
            </Card> : <>
                <Card className={'shadow-lg project'} outline color="light" style={{
                    width: '80vw',
                    textAlign: 'center',
                    alignItems: "center",
                    marginLeft: '10vw',
                    marginBottom: '5rem',
                    backgroundColor: bgColor,
                    border: 'none'
                }}>
                    <h2 style={{marginBottom: '1rem', marginTop: '1rem'}}>{props.title}</h2>
                    <img src={props.imgsrc} alt="Project Thumbnail" width='80%' height='auto'/>
                    <ProjectStatus width={width} height={height} publisher={props.status.publisher} isDone={props.status.isDone} role={props.status.role} tools={props.status.tools} dates={props.status.dates}/>
                    <br></br>
                    <br></br>
                    <p style={{textAlign: 'center', fontSize: '1.5rem', paddingLeft: '5%', paddingRight: '5%'}}>{props.desc}</p>
                    <Button color="primary" onClick={() => {
                        window.location.href = '/' + props.project
                    }} style={{marginBottom: '1rem'}}>
                        Learn More
                    </Button>
                </Card>
                </>}
        </div>
    )
}

export default Project