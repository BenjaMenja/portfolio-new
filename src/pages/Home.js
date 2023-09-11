import Project from "../components/Projects/Project";
import dragonflyimg from "../images/dragonfly.png"

function Home() {
    return (
        <div style={{color: '#FFFFFF'}}>
            <h1 style={{marginBottom: '5rem'}}>Featured Projects</h1>
            <Project title="Dragonfly" imgsrc={dragonflyimg}
                     desc="An ASCII art game engine capable of providing a code framework necessary to build 2D text-based video games. Built by me with the guidance of Professor Mark Claypool at Worcester Polytechnic Institute."
                     project="dragonfly"
                     status={{teamsize: 1, isDone: 'Yes', role: "Programmer", tools: "C++ / Visual Studio", dates: 'January 2023 - March 2023'}}/>
        </div>
    )
}

export default Home