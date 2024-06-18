import {Button, Col, List, Row} from "reactstrap";
import Languages from "../components/About/langs";
import {useEffect, useState} from "react";
import DevTools from "../components/About/devtools";
import Obfuscate from "react-obfuscate";

function About() {
    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
        function handleResize() {
            const newwidth = window.innerWidth
            setWidth(newwidth)
        }
        window.addEventListener('resize', handleResize)
    }, [])
    return (
        <div style={{color: '#FFFFFF',marginTop: "5rem"}}>
            {(width > 768) ? <AboutLargeScreen /> : <AboutSmallScreen />}

            <Languages margin={'7rem'} width={width}/>
            <DevTools width={width}/>
        </div>
    )
}

export function GithubButton() {
    return (
        <Button style={{backgroundColor: 'rgba(0,0,0,0)', borderColor: 'rgba(0,0,0,0)'}} onClick={() => {window.location.href="https://github.com/BenjaMenja"}}>
            <svg fill={"#FFFFFF"} className={"about-link-svg"} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64">
                <path d="M32,10c12.15,0,22,9.85,22,22c0,9.768-6.369,18.045-15.179,20.916c0.002-0.008,0.006-0.021,0.006-0.021	s-1.485-0.696-1.453-1.938c0.035-1.367,0-4.556,0-5.727c0-2.01-1.272-3.434-1.272-3.434s9.977,0.112,9.977-10.533	c0-4.107-2.147-6.245-2.147-6.245s1.128-4.385-0.39-6.245c-1.701-0.184-4.749,1.626-6.05,2.472c0,0-2.062-0.846-5.492-0.846	c-3.43,0-5.492,0.846-5.492,0.846c-1.301-0.846-4.348-2.656-6.05-2.472c-1.518,1.86-0.39,6.245-0.39,6.245s-2.147,2.137-2.147,6.245	c0,10.645,9.977,10.533,9.977,10.533s-1.005,1.136-1.225,2.806c-0.696,0.236-1.721,0.528-2.549,0.528	c-2.165,0-3.812-2.105-4.416-3.078c-0.595-0.96-1.815-1.766-2.953-1.766c-0.749,0-1.115,0.375-1.115,0.803s1.05,0.727,1.743,1.521	c1.461,1.674,1.435,5.438,6.641,5.438c0.565,0,1.719-0.139,2.588-0.256c-0.005,1.185-0.007,2.436,0.012,3.167	c0.031,1.242-1.453,1.938-1.453,1.938s0.004,0.012,0.006,0.021C16.369,50.045,10,41.768,10,32C10,19.85,19.85,10,32,10z"></path>
            </svg>
        </Button>
    )
}

export function LinkedInButton() {
    return (
        <Button style={{backgroundColor: 'rgba(0,0,0,0)', borderColor: 'rgba(0,0,0,0)'}} onClick={() => {window.location.href="https://www.linkedin.com/in/benjamin-gelinas-4679b723b"}}>
            <svg fill={"#FFFFFF"} className={"about-link-svg"} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64">
                <path d="M 23.773438 12 C 12.855437 12 12 12.854437 12 23.773438 L 12 40.226562 C 12 51.144563 12.855438 52 23.773438 52 L 40.226562 52 C 51.144563 52 52 51.145563 52 40.226562 L 52 23.773438 C 52 12.854437 51.145563 12 40.226562 12 L 23.773438 12 z M 21.167969 16 L 42.832031 16 C 47.625031 16 48 16.374969 48 21.167969 L 48 42.832031 C 48 47.625031 47.624031 48 42.832031 48 L 21.167969 48 C 16.374969 48 16 47.624031 16 42.832031 L 16 21.167969 C 16 16.374969 16.374969 16 21.167969 16 z M 22.501953 18.503906 C 20.872953 18.503906 19.552734 19.824172 19.552734 21.451172 C 19.552734 23.078172 20.871953 24.400391 22.501953 24.400391 C 24.126953 24.400391 25.447266 23.079172 25.447266 21.451172 C 25.447266 19.826172 24.126953 18.503906 22.501953 18.503906 z M 37.933594 26.322266 C 35.473594 26.322266 33.823437 27.672172 33.148438 28.951172 L 33.078125 28.951172 L 33.078125 26.728516 L 28.228516 26.728516 L 28.228516 43 L 33.28125 43 L 33.28125 34.949219 C 33.28125 32.826219 33.687359 30.771484 36.318359 30.771484 C 38.912359 30.771484 38.945312 33.200891 38.945312 35.087891 L 38.945312 43 L 44 43 L 44 34.074219 C 44 29.692219 43.054594 26.322266 37.933594 26.322266 z M 19.972656 26.728516 L 19.972656 43 L 25.029297 43 L 25.029297 26.728516 L 19.972656 26.728516 z"></path>
            </svg>
        </Button>
    )
}

export function ItchButton() {
    return (
        <Button style={{backgroundColor: 'rgba(0,0,0,0)', borderColor: 'rgba(0,0,0,0)'}} onClick={() => {window.location.href="https://benjamenja.itch.io/"}}>
            <svg className={"about-link-svg"} fill={"#FFFFFF"} x="0px" y="0px" xmlns="http://www.w3.org/2000/svg" aria-label="itch.io" role="img" viewBox="0 0 512 512" width="100" height="100">
                <path d="M118 95c-16 10-49 47-49 56v16c0 21 19 38 36 38 21 0 38-17 38-37 0 20 17 37 38 37 20 0 36-17 36-37 0 20 18 37 39 37s39-17 39-37c0 20 16 37 36 37 21 0 38-17 38-37 0 20 17 37 38 37 17 0 36-17 36-38v-16c0-9-33-46-49-56a3511 3511 0 00-276 0zm99 101l-7 9a43 43 0 01-68-9l-7 9c-8 8-19 13-31 13l-4-1-2 46v18c0 36-4 118 16 138 30 7 86 10 142 10s112-3 142-10c20-20 16-102 16-138v-18l-2-46-4 1c-12 0-23-5-31-13l-7-9-7 9a43 43 0 01-68-9 43 43 0 01-38 22h-1-1a43 43 0 01-38-22zm-31 40c12 0 23 0 37 15l33-2 33 2c14-15 25-15 37-15 6 0 29 0 45 46l18 63c13 46-4 47-26 47-31-1-49-24-49-47a371 371 0 01-117 0c1 23-17 46-48 47-22 0-39-1-26-47l18-63c16-46 39-46 45-46zm70 36s-33 31-39 42l22-1v19h34v-19l22 1c-6-11-39-42-39-42z"/>
            </svg>
        </Button>
    )
}

function AboutLargeScreen() {
    return (<Row xs={'2'} style={{marginBottom: '3rem'}}>
        <Col style={{paddingLeft: '10%', textAlign: 'left'}}>
            <p>
                Hello! I'm Ben Gelinas, and I am a Computer Science and Game Development student from Massachusetts. I like to work on team-based projects that include games, tools for games, and web applications.<br></br><br></br>
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
            <Obfuscate style={{marginBottom: '4rem', display: 'inline-block'}} email={"benjamenjalinas@gmail.com"} />
            <h3>Find me on:</h3>
            <div className={"about-links"}>
                <GithubButton />
                <LinkedInButton />
                <ItchButton />
            </div>
        </Col>
    </Row>)
}

function AboutSmallScreen() {
    return (
        <div className={"about-small-screen"}>
            <p>
                Hello! I'm Ben Gelinas, and I am a Computer Science and Game Development student from Massachusetts. I like to work on team-based projects that include games, tools for games, and web applications.<br></br><br></br>
                I have experience with languages such as C/C++, C#, Java, JavaScript, and Blueprints. A full list of languages and development tools I use can be found below.<br></br><br></br>
                Outside of project work, I also enjoy:
                <ul>
                    <li>Performing Music</li>
                    <li>Playing and analyzing games</li>
                    <li>Solving Puzzles</li>
                </ul>
            </p>
            <div className={"about-flex-horizontal contact-info"}>
                <div className={"about-flex-vertical"}>
                    <h3><b>Contact me</b></h3>
                    <Obfuscate style={{marginBottom: '4rem', display: 'inline-block'}} email={"benjamenjalinas@gmail.com"} />
                </div>
                <div className={"about-flex-vertical find-me-on"}>
                    <h3><b>Find me on:</b></h3>
                    <div className={"about-links about-flex-horizontal"}>
                        <GithubButton />
                        <LinkedInButton />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About