import ImageFormat from "../components/gallery/ImageFormat";
import lobby from '../images/royal-siege-gallery/lobby.png'
import tdm from '../images/royal-siege-gallery/tdm.png'
import forestglen from '../images/royal-siege-gallery/forestglen.png'
import winterland from '../images/royal-siege-gallery/winterland.png'
import pirates from '../images/royal-siege-gallery/colliding_tides.png'
import ncs from '../images/royal-siege-gallery/new_chicago_skyline.png'
import {Button, Col, Row} from "reactstrap";
import { useIsMobile } from "../hooks/useIsMobile";
import { chunk } from "../components/shared/arrayChunk";

function Gallery() {

    const images = [
        { source: lobby, caption: 'The lounge area of the lobby' },
        { source: tdm, caption: 'The Colosseum map' },
        { source: forestglen, caption: 'The Forest Glen map' },
        { source: winterland, caption: 'The Winterland map' },
        { source: pirates, caption: 'The Colliding Tides map' },
        { source: ncs, caption: 'The New Chicago Skyline map' },
    ]

    return (
        <>
            <h1 style={{color: '#FFFFFF', marginBottom: '3rem',marginTop: "5rem"}}>Royal Siege Photo Gallery</h1>
            <Button color='primary' style={{marginBottom: '3rem', color: 'white'}} href={'/royal-siege'}>
                Back to Royal Siege Page
            </Button>
            {useIsMobile() ? (
                images.map(({ source, caption }) => (
                    <ImageFormat key={caption} source={source} caption={caption} smallwindow />
                ))
            ) : (
                chunk(images, 2).map((pair, i) => (
                    <Row key={i} style={{ marginBottom: '2rem' }}>
                        {pair.map(({ source, caption }) => (
                            <Col key={caption}>
                                <ImageFormat source={source} caption={caption} />
                            </Col>
                        ))}
                    </Row>
                ))
            )}
        </>
    )
}

export default Gallery