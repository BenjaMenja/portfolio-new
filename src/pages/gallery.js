import ImageFormat from "../components/gallery/ImageFormat";
import lobby from '../images/royal-siege-gallery/lobby.png'
import tdm from '../images/royal-siege-gallery/tdm.png'
import forestglen from '../images/royal-siege-gallery/forestglen.png'
import winterland from '../images/royal-siege-gallery/winterland.png'
import pirates from '../images/royal-siege-gallery/colliding_tides.png'
import ncs from '../images/royal-siege-gallery/new_chicago_skyline.png'
import {Button, Col, Row} from "reactstrap";
import {useEffect, useState} from "react";

function Gallery() {
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
        <>
            <h1 style={{color: '#FFFFFF', marginBottom: '3rem',marginTop: "5rem"}}>Royal Siege Photo Gallery</h1>
            <Button color='primary' style={{marginBottom: '3rem', color: 'white'}} href={'/royal-siege'}>
                Back to Royal Siege Page
            </Button>
            {(width > 768) ? <>
                <Row style={{marginBottom: '2rem'}}>
                    <Col>
                        <ImageFormat source={lobby} caption={'The lounge area of the lobby'}/>
                    </Col>
                    <Col>
                        <ImageFormat source={tdm} caption={'The Colosseum map'} />
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
                <Row>
                    <Col>
                        <ImageFormat source={pirates} caption={'The Colliding Tides map'}/>
                    </Col>
                    <Col>
                        <ImageFormat source={ncs} caption={'The New Chicago Skyline map'} />
                    </Col>
                </Row>
            </> :
            <>
                <ImageFormat source={lobby} caption={'The lounge area of the lobby'} smallwindow={true}/>
                <ImageFormat source={tdm} caption={'The Colosseum map'} smallwindow={true}/>
                <ImageFormat source={forestglen} caption={'The Forest Glen map'} smallwindow={true}/>
                <ImageFormat source={winterland} caption={'The Winterland map'} smallwindow={true}/>
                <ImageFormat source={pirates} caption={'The Colliding Tides map'} smallwindow={true}/>
                <ImageFormat source={ncs} caption={'The New Chicago Skyline map'} smallwindow={true}/>
            </>}

        </>
    )
}

export default Gallery