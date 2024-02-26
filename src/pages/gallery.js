import ImageFormat from "../components/gallery/ImageFormat";
import lobby from '../images/royal-siege-gallery/lobby.png'
import tdm from '../images/royal-siege-gallery/tdm.png'
import forestglen from '../images/royal-siege-gallery/forestglen.png'
import winterland from '../images/royal-siege-gallery/winterland.png'
import {Button, Col, Row} from "reactstrap";
import {useEffect, useState} from "react";

function Gallery() {
    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
    }, [])
    return (
        <>
            <h1 style={{color: '#FFFFFF', marginBottom: '3rem',marginTop: "5rem"}}>Royal Siege Photo Gallery</h1>
            <Button color='primary' style={{marginBottom: '3rem'}} onClick={() => {
                window.location.href = '/royal-siege'
            }}>
                Back to Royal Siege Page
            </Button>
            {(width > 1024) ? <>
                <Row style={{marginBottom: '2rem'}}>
                    <Col>
                        <ImageFormat source={lobby} caption={'The lounge area of the lobby'}/>
                    </Col>
                    <Col>
                        <ImageFormat source={tdm} caption={'The Coliseum map'} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ImageFormat source={forestglen} caption={'The Forest Glen map'}/>
                    </Col>
                    <Col>
                        <ImageFormat source={winterland} caption={'The Winterland map'} />
                    </Col>
                </Row>
            </> :
            <>
                <ImageFormat source={lobby} caption={'The lounge area of the lobby'} smallwindow={true}/>
                <ImageFormat source={tdm} caption={'The Coliseum map'} smallwindow={true}/>
                <ImageFormat source={forestglen} caption={'The Forest Glen map'} smallwindow={true}/>
                <ImageFormat source={winterland} caption={'The Winterland map'} smallwindow={true}/>
            </>}

        </>
    )
}

export default Gallery