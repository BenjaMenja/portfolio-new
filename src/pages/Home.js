import Project from "../components/Projects/Project";
import dragonflyimg from "../images/dragonfly.png"
import greatescapeimg from "../images/living_room_kitchen.png"
import royalsiegelogo from "../images/royal-siege-logo.png"
import {Button, Col, Row} from "reactstrap";

function Home() {
    return (
        <div style={{color: '#FFFFFF'}}>
            <h1 style={{marginBottom: '5rem'}}>Featured Projects</h1>
            <Project title="Dragonfly" imgsrc={dragonflyimg}
                     desc="An ASCII art game engine capable of providing a code framework necessary to build 2D text-based video games. Built by me with the guidance of Professor Mark Claypool at Worcester Polytechnic Institute."
                     project="dragonfly"
                     status={{teamsize: 1, isDone: 'Yes', role: "Programmer", tools: "C++ / Visual Studio", dates: 'January 2023 - March 2023'}}/>
            <Project title="The Great Escape" imgsrc={greatescapeimg}
                     desc="A third person stealth mission game where you play as a rebellious teenager who is determined to sneak out of the house to attend a party."
                     project="the-great-escape"
                     status={{teamsize: 6, isDone: 'Yes', role: "Programmer, Website Designer, Puzzle Designer", tools: "Blueprints / Unreal Engine", dates: 'March 2023 - May 2023'}}/>
            <Project title="Royal Siege" imgsrc={royalsiegelogo}
                     desc="A team-based MOBA game built in Minecraft using its mcfunction scripting language. It is a work in progress game that features 14 unique characters, four maps, two gamemodes, and original artwork and music. The game's direction and programming are lead by me."
                     project="royal-siege"
                     status={{teamsize: '4-7', isDone: 'No', role: "Lead Developer, Lead Programmer, Lead Map Designer", tools: "mcfunction / Minecraft, Visual Studio Code, Blockbench", dates: 'December 2020 - Present'}}/>
            <Button style={{marginBottom: '2rem'}} color={'primary'} onClick={() => {
                window.location.href = '/projects'
            }}>More Projects -></Button>
            <h3>Find me on:</h3>
            <Row xs={'4'}>
                <Col/>
                <Col>
                    <svg fill={"#FFFFFF"} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64">
                        <path d="M32,10c12.15,0,22,9.85,22,22c0,9.768-6.369,18.045-15.179,20.916c0.002-0.008,0.006-0.021,0.006-0.021	s-1.485-0.696-1.453-1.938c0.035-1.367,0-4.556,0-5.727c0-2.01-1.272-3.434-1.272-3.434s9.977,0.112,9.977-10.533	c0-4.107-2.147-6.245-2.147-6.245s1.128-4.385-0.39-6.245c-1.701-0.184-4.749,1.626-6.05,2.472c0,0-2.062-0.846-5.492-0.846	c-3.43,0-5.492,0.846-5.492,0.846c-1.301-0.846-4.348-2.656-6.05-2.472c-1.518,1.86-0.39,6.245-0.39,6.245s-2.147,2.137-2.147,6.245	c0,10.645,9.977,10.533,9.977,10.533s-1.005,1.136-1.225,2.806c-0.696,0.236-1.721,0.528-2.549,0.528	c-2.165,0-3.812-2.105-4.416-3.078c-0.595-0.96-1.815-1.766-2.953-1.766c-0.749,0-1.115,0.375-1.115,0.803s1.05,0.727,1.743,1.521	c1.461,1.674,1.435,5.438,6.641,5.438c0.565,0,1.719-0.139,2.588-0.256c-0.005,1.185-0.007,2.436,0.012,3.167	c0.031,1.242-1.453,1.938-1.453,1.938s0.004,0.012,0.006,0.021C16.369,50.045,10,41.768,10,32C10,19.85,19.85,10,32,10z"></path>
                    </svg><br />
                    <a href="https://github.com/BenjaMenja">GitHub</a>
                </Col>
                <Col>
                    <svg fill={"#FFFFFF"} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64">
                        <path d="M 23.773438 12 C 12.855437 12 12 12.854437 12 23.773438 L 12 40.226562 C 12 51.144563 12.855438 52 23.773438 52 L 40.226562 52 C 51.144563 52 52 51.145563 52 40.226562 L 52 23.773438 C 52 12.854437 51.145563 12 40.226562 12 L 23.773438 12 z M 21.167969 16 L 42.832031 16 C 47.625031 16 48 16.374969 48 21.167969 L 48 42.832031 C 48 47.625031 47.624031 48 42.832031 48 L 21.167969 48 C 16.374969 48 16 47.624031 16 42.832031 L 16 21.167969 C 16 16.374969 16.374969 16 21.167969 16 z M 22.501953 18.503906 C 20.872953 18.503906 19.552734 19.824172 19.552734 21.451172 C 19.552734 23.078172 20.871953 24.400391 22.501953 24.400391 C 24.126953 24.400391 25.447266 23.079172 25.447266 21.451172 C 25.447266 19.826172 24.126953 18.503906 22.501953 18.503906 z M 37.933594 26.322266 C 35.473594 26.322266 33.823437 27.672172 33.148438 28.951172 L 33.078125 28.951172 L 33.078125 26.728516 L 28.228516 26.728516 L 28.228516 43 L 33.28125 43 L 33.28125 34.949219 C 33.28125 32.826219 33.687359 30.771484 36.318359 30.771484 C 38.912359 30.771484 38.945312 33.200891 38.945312 35.087891 L 38.945312 43 L 44 43 L 44 34.074219 C 44 29.692219 43.054594 26.322266 37.933594 26.322266 z M 19.972656 26.728516 L 19.972656 43 L 25.029297 43 L 25.029297 26.728516 L 19.972656 26.728516 z"></path>
                    </svg><br/>
                    <a href="https://www.linkedin.com/in/benjamin-gelinas-4679b723b/">LinkedIn</a>
                </Col>
                <Col/>
            </Row>
        </div>
    )
}

export default Home