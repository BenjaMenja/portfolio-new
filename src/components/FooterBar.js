import {Col, Row} from "reactstrap";

function FooterBar() {
    return (
        <div style={{marginTop: '3rem', color: '#FFFFFF', fontSize: '1.1rem'}}>
            <Row style={{
                background: '#000000',
                width: '100vw',
                height: '5vh',
                alignItems: 'center'
            }}>
                <Col>This website was built by Ben Gelinas</Col>
            </Row>
        </div>
    )
}
export default FooterBar