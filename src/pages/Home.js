import Project from "../components/Projects/Project";
import greatescapeimg from "../images/living_room_kitchen2.png"
import {Button} from "reactstrap";
import mergemonasteryimg from "../images/merge-monastery-logo.png";
import {GithubButton, ItchButton, LinkedInButton} from "./about";
import colorclashimg from "../images/color-clash.png";

function Home() {
    return (
        <div style={{color: '#FFFFFF'}}>
            <p>Thank you for checking out my portfolio!</p>
            <p>Feel free to take a look at some of my featured projects below,</p>
            <p style={{marginBottom: '3rem'}}>or learn more about me by pressing the About button!</p>
            <Project title="Color Clash" imgsrc={colorclashimg}
                     desc="A first person shooter game that follows a 1v1 deathmatch format. Earn more eliminations than your opponent to win, and paint the floor to enhance your movement! Part of a larger research project titled &quot;Exploring Adaptive Time Delay in First Person Shooter Games&quot;."
                     project="color-clash"
                     status={{teamsize: '4', isDone: 'Yes', role: "Gameplay Programmer, Level Designer, Data Analyst", tools: "C#, Python / Unity, Pandas, Matplotlib", dates: "September 2023 - April 2024"}}/>
            <Project title="The Great Escape" imgsrc={greatescapeimg}
                     desc="A third person stealth mission game where you play as a rebellious teenager who is determined to sneak out of the house to attend a party."
                     project="the-great-escape"
                     status={{teamsize: 6, isDone: 'Yes', role: "Programmer, Website Designer, Puzzle Designer", tools: "Blueprints / Unreal Engine", dates: 'March 2023 - May 2023'}}/>
            <Project title="Merge Monastery" imgsrc={mergemonasteryimg}
                     desc="A merge game where you can merge seeds and plants to unlock garden structures to build your very own zen garden. Built in Unity and available in the Google Play and App store under the MassDiGi name."
                     project="merge-monastery"
                     status={{teamsize: '10', isDone: 'Yes', role: "Programmer, Buildmaster", tools: "C# / Unity, Miro, Fastlane", dates: "September 2023 - January 2024"}}/>
            <Button style={{marginBottom: '2rem'}} color={'primary'} onClick={() => {
                window.location.href = '/projects'
            }}>More Projects -></Button>
            <h3>Find me on:</h3>
            <div className={"about-links"}>
                <GithubButton />
                <LinkedInButton />
                <ItchButton />
            </div>
        </div>
    )
}

export default Home