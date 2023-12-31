import Project from "../components/Projects/Project";
import saucerimg from '../images/saucer-shoot.png'
import greatescapeimg from "../images/living_room_kitchen2.png";
import royalsiegelogo from "../images/royal-siege-logo.png";
import pokemonblitzimg from "../images/pokemon-blitz.png";
import mergemonasteryimg from "../images/merge-monastery-logo.png"

function Projects() {
    return (
        <div style={{color: '#FFFFFF'}}>
            <h1 style={{marginBottom: '5rem'}}>Projects</h1>
            <Project title="The Great Escape" imgsrc={greatescapeimg}
                     desc="A third person stealth mission game where you play as a rebellious teenager who is determined to sneak out of the house to attend a party."
                     project="the-great-escape"
                     status={{teamsize: 6, isDone: 'Yes', role: "Programmer, Website Designer, Puzzle Designer", tools: "Blueprints / Unreal Engine", dates: 'March 2023 - May 2023'}}/>
            <Project title="Royal Siege" imgsrc={royalsiegelogo}
                     desc="A team-based MOBA game built in Minecraft using its mcfunction scripting language. It is a work in progress game that features 14 unique characters, four maps, two gamemodes, and original artwork and music. The game's direction and programming are lead by me."
                     project="royal-siege"
                     status={{teamsize: '4-7', isDone: 'No', role: "Lead Developer, Lead Programmer, Lead Map Designer", tools: "mcfunction / Minecraft, Visual Studio Code, Blockbench", dates: 'December 2020 - Present'}}/>
            <Project title="ASCII C++ Game Engine" imgsrc={saucerimg}
                     desc="An ASCII art game engine capable of providing a code framework necessary to build 2D text-based video games. Based off of Mark Claypool's game engine, Dragonfly."
                     project="game-engine"
                     status={{teamsize: 1, isDone: 'Yes', role: "Programmer", tools: "C++ / Visual Studio", dates: 'January 2023 - March 2023'}}/>
            <Project title="Pokemon Blitz" imgsrc={pokemonblitzimg}
                     desc="A bullet hell game made in the Dragonfly game engine. Features 3 playable Pokemon that players can maneuver through a course while dodging an endless wave of Pokeballs trying to capture you."
                     project="pokemon-blitz"
                     status={{teamsize: '2', isDone: 'Yes', role: "Programmer, ASCII Artist", tools: "C++ / Visual Studio", dates: 'February 2023 - March 2023'}}/>
            <Project title="Merge Monastery" imgsrc={mergemonasteryimg}
                     desc="A merge game where you can merge seeds and plants to unlock garden structures to build your very own zen garden. Built in Unity and available in the Google Play and App store under the MassDiGi name."
                     project="merge-monastery"
                     status={{teamsize: '10', isDone: 'Yes', role: "Programmer, Buildmaster", tools: "C# / Unity, Miro, Fastlane", dates: "September 2023 - January 2024"}}/>
        </div>
    )
}
export default Projects