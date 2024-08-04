import Project from "../components/Projects/Project";
import saucerimg from '../images/saucer-shoot.png'
import greatescapeimg from "../images/living_room_kitchen2.png";
import royalsiegelogo from "../images/royal-siege-logo.png";
import pokemonblitzimg from "../images/pokemon-blitz.png";
import mergemonasteryimg from "../images/merge-monastery-logo.png"
import colorclashimg from "../images/color-clash.png"
import {Button, Card} from "reactstrap";
import {useEffect, useState} from "react";

function Projects() {
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
            {(width > 768) ? <table style={{width: '100%', tableLayout: 'fixed', marginBottom: '5rem'}}>
                <tr>
                    <td></td>
                    <td>
                        <h1>Projects</h1>
                    </td>
                    <td>
                        <MiniProjectDisplay screenwidth={width}/>
                    </td>
                </tr>
            </table> :
                <>
                    <h1>Projects</h1>
                    <MiniProjectDisplay screenwidth={width}/>
                </>
            }
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
            <Project title="Royal Siege" imgsrc={royalsiegelogo}
                     desc="A team-based MOBA game built in Minecraft using its mcfunction scripting language. It is a work in progress game that features 15 unique characters, four maps, two gamemodes, and original artwork and music. The game's direction and programming are lead by me."
                     project="royal-siege"
                     status={{teamsize: '4-7', isDone: 'No', role: "Lead Developer, Lead Programmer, Lead Map Designer", tools: "mcfunction / Minecraft, Visual Studio Code, Blockbench", dates: 'December 2020 - Present'}}/>
            <Project title="2D C++ Game Engine" imgsrc={saucerimg}
                     desc="A 2D game engine capable of providing a code framework necessary to build ASCII text-based video games. Based off of Mark Claypool's game engine, Dragonfly."
                     project="game-engine"
                     status={{teamsize: 1, isDone: 'Yes', role: "Programmer", tools: "C++ / Visual Studio", dates: 'January 2023 - March 2023'}}/>
            <Project title="Pokemon Blitz" imgsrc={pokemonblitzimg}
                     desc="A bullet hell game made in the Dragonfly game engine. Features 3 playable Pokemon that players can maneuver through a course while dodging an endless wave of Pokeballs trying to capture you."
                     project="pokemon-blitz"
                     status={{teamsize: '2', isDone: 'Yes', role: "Programmer, ASCII Artist", tools: "C++ / Visual Studio", dates: 'February 2023 - March 2023'}}/>
        </div>
    )
}

function MiniProjectDisplay(props) {
    let bgColor = 'rgba(136, 196, 236, 1)'
    return (
        <>
        {props.screenwidth > 768 ? <Card className={'shadow-lg'} outline color={"light"} style={{
                width: '80%',
                alignItems: 'center',
                backgroundColor: bgColor,
                border: 'none'
            }}>
                <table style={{width: '100%', tableLayout: 'fixed'}}>
                    <tr>
                        <td style={{textAlign: 'right'}}>
                            <i className={"bi bi-gear-wide-connected"}></i>
                        </td>
                        <td>
                            <h4 style={{marginTop: '1rem'}}>Mini Projects</h4>
                        </td>
                        <td>
                            <Button color="primary" onClick={() => {
                                window.location.href = '/mini-projects'
                            }}>
                                Learn More
                            </Button>
                        </td>
                    </tr>
                </table>
                <p>A collection of mini projects I've contributed to or developed myself</p>
            </Card> : <Card className={'shadow-lg'} outline color={"light"} style={{
                width: '80%',
                alignItems: 'center',
                backgroundColor: bgColor,
                marginLeft: '10vw',
                marginTop: '5rem',
                marginBottom: '5rem',
                border: 'none'
            }}>
                <table style={{width: '100%', tableLayout: 'fixed'}}>
                    <tr>
                        <td style={{textAlign: 'right'}}>
                            <i className={"bi bi-gear-wide-connected"}></i>
                        </td>
                        <td>
                            <h4 style={{marginTop: '1rem'}}>Mini Projects</h4>
                        </td>
                        <td>
                            <Button color="primary" onClick={() => {
                                window.location.href = '/mini-projects'
                            }}>
                                Learn More
                            </Button>
                        </td>
                    </tr>
                </table>
                <p>A collection of mini projects I've contributed to or developed myself</p>
            </Card>
        }
        </>
    )
}

export default Projects