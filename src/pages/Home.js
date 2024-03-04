import Project from "../components/Projects/Project";
import greatescapeimg from "../images/living_room_kitchen2.png"
import {Button, Col, Row} from "reactstrap";
import mergemonasteryimg from "../images/merge-monastery-logo.png";
import {GithubButton, LinkedInButton} from "./about";
import saucerimg from "../images/saucer-shoot.png";

function Home() {
    return (
        <div style={{color: '#FFFFFF'}}>
            <p>Thank you for checking out my portfolio!</p>
            <p>Feel free to take a look at some of my featured projects below,</p>
            <p style={{marginBottom: '3rem'}}>or learn more about me by pressing the About button!</p>
            <Project title="The Great Escape" imgsrc={greatescapeimg}
                     desc="A third person stealth mission game where you play as a rebellious teenager who is determined to sneak out of the house to attend a party."
                     project="the-great-escape"
                     status={{teamsize: 6, isDone: 'Yes', role: "Programmer, Website Designer, Puzzle Designer", tools: "Blueprints / Unreal Engine", dates: 'March 2023 - May 2023'}}/>
            <Project title="Merge Monastery" imgsrc={mergemonasteryimg}
                     desc="A merge game where you can merge seeds and plants to unlock garden structures to build your very own zen garden. Built in Unity and available in the Google Play and App store under the MassDiGi name."
                     project="merge-monastery"
                     status={{teamsize: '10', isDone: 'Yes', role: "Programmer, Buildmaster", tools: "C# / Unity, Miro, Fastlane", dates: "September 2023 - January 2024"}}/>
            <Project title="2D C++ Game Engine" imgsrc={saucerimg}
                     desc="A 2D game engine capable of providing a code framework necessary to build ASCII text-based video games. Based off of Mark Claypool's game engine, Dragonfly."
                     project="game-engine"
                     status={{teamsize: 1, isDone: 'Yes', role: "Programmer", tools: "C++ / Visual Studio", dates: 'January 2023 - March 2023'}}/>
            <Button style={{marginBottom: '2rem'}} color={'primary'} onClick={() => {
                window.location.href = '/projects'
            }}>More Projects -></Button>
            <h3>Find me on:</h3>
            <Row xs={'4'}>
                <Col/>
                <Col>
                    <GithubButton />
                </Col>
                <Col>
                    <LinkedInButton />
                </Col>
                <Col/>
            </Row>
        </div>
    )
}

export default Home