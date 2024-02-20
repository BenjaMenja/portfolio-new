import Project from "../components/Projects/Project";
import greatescapeimg from "../images/living_room_kitchen2.png"
import royalsiegelogo from "../images/royal-siege-logo.png"
import {Button, Col, Row} from "reactstrap";
import mergemonasteryimg from "../images/merge-monastery-logo.png";
import {GithubButton, LinkedInButton} from "./about";

function Home() {
    return (
        <div style={{color: '#FFFFFF'}}>
            <h1 style={{marginBottom: '5rem',marginTop: "7.5rem"}}>Featured Projects</h1>
            <Project title="The Great Escape" imgsrc={greatescapeimg}
                     desc="A third person stealth mission game where you play as a rebellious teenager who is determined to sneak out of the house to attend a party."
                     project="the-great-escape"
                     status={{teamsize: 6, isDone: 'Yes', role: "Programmer, Website Designer, Puzzle Designer", tools: "Blueprints / Unreal Engine", dates: 'March 2023 - May 2023'}}/>
            <Project title="Merge Monastery" imgsrc={mergemonasteryimg}
                     desc="A merge game where you can merge seeds and plants to unlock garden structures to build your very own zen garden. Built in Unity and available in the Google Play and App store under the MassDiGi name."
                     project="merge-monastery"
                     status={{teamsize: '10', isDone: 'Yes', role: "Programmer, Buildmaster", tools: "C# / Unity, Miro, Fastlane", dates: "September 2023 - January 2024"}}/>
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