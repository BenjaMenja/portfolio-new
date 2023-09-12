import Project from "../components/Projects/Project";
import dragonflyimg from "../images/dragonfly.png";
import greatescapeimg from "../images/living_room_kitchen.png";
import royalsiegelogo from "../images/royal-siege-logo.png";
import pokemonblitzimg from "../images/pokemon-blitz.png"

function Projects() {
    return (
        <div style={{color: '#FFFFFF'}}>
            <h1 style={{marginBottom: '5rem'}}>Projects</h1>
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
            <Project title="Pokemon Blitz" imgsrc={pokemonblitzimg}
                     desc="A bullet hell game made in the Dragonfly game engine. Features 3 playable Pokemon that players can maneuver through a course while dodging an endless wave of Pokeballs trying to capture you."
                     project="pokemon-blitz"
                     status={{teamsize: '2', isDone: 'Yes', role: "Programmer, ASCII Artist", tools: "C++ / Visual Studio", dates: 'February 2023 - March 2023'}}/>
        </div>
    )
}
export default Projects