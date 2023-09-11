import {Col, List, Row} from "reactstrap";
import Languages from "../components/About/langs";

function About() {
    return (
        <div style={{color: '#FFFFFF'}}>
            <Row xs={'2'}>
                <Col style={{paddingLeft: '10%', textAlign: 'left'}}>
                    <p>
                        Hello! I'm Ben Gelinas, and I am a Computer Science and Game Development student from Massachusetts. I like to work on team-based projects that include Web applications and games.<br></br><br></br>
                        I have experience with languages such as C/C++, C#, Java, JavaScript, and Blueprints. A full list of languages and development tools I use can be found below.<br></br><br></br>
                        Outside of project work, I also enjoy:
                        <List>
                            <li>Performing Music</li>
                            <li>Playing and analyzing games</li>
                            <li>Solving Puzzles</li>
                        </List>
                    </p>
                </Col>
                <Col>
                    <h3>Contact me</h3>
                    <p style={{marginBottom: '5rem'}}>benjamenjalinas@gmail.com</p>
                    <h3>Find me on:</h3>
                </Col>
            </Row>
            <Languages />
        </div>
    )
}

export default About