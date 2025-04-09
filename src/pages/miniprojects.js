import MiniProject from "../components/Projects/MiniProject";
import StatsViewer from "../images/mc_stats_viewer.png"
import MarioAI from "../images/mario_ai.png"
import GreatEscapeWebsite from "../images/great_escape_website.png"
import OneHundredPercent from "../images/one_hundred_percent.png"
import PhantomScrap from "../images/phantom_scrap.png"
import EERDiagram from "../images/eer_diagram.png"
import {useEffect, useState} from "react";

function MiniProjects() {
    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
        function handleResize() {
            const newwidth = window.innerWidth
            setWidth(newwidth)
        }
        window.addEventListener('resize', handleResize)
    }, [])
    return (
        <div style={{color: '#FFFFFF'}}>
            <h1 style={{marginBottom: '1rem'}}>Mini Projects</h1>
            <div style={{marginLeft: '5vw', marginRight: '5vw'}}>
                <p>Here you'll find a collection of small projects I've either contributed to or developed myself.</p>
                <p>All of these projects took a short amount of time to complete and involved up to 2 other people, if any.</p>
                <p>They also may or may not be revisited, or in the case of unfinished ones, finished in the future. Enjoy!</p>
            </div>
            {width > 768 ? <table className={"mini-projects"}>
                <tr>
                    <td>
                        <MiniProject title={"Minecraft Stats Viewer"} imgsrc={StatsViewer}
                                    desc={<p>A small desktop application that allows you to view generated graphs of game statistics automatically recorded by <i>Minecraft</i>. Supports all vanilla statistics and features a search function to find any statistic you desire.</p>}
                                    download={"https://github.com/BenjaMenja/mc-stats-visualizer"}/>
                    </td>
                    <td>
                        <MiniProject title={"Mario AI Framework Agent"} imgsrc={MarioAI}
                                    desc={"A basic agent made to run in the Mario AI Framework. Supports basic navigation of Super Mario Bros. levels, being able to avoid obstacles and enemies to reach the end in lower complexity levels."}
                                    download={"https://github.com/MichaelGats/Mario-Turing-Test"}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <MiniProject title={"The Great Escape Website"} imgsrc={GreatEscapeWebsite}
                                    desc={<p>A small website created to host information about a game I worked on, <a href={"../the-great-escape"}>The Great Escape</a>. Contains a download page as well as information about the team.</p> }
                                    download={"https://benjamenja.github.io/the-great-escape-website/"} downloadtext={"View"}/>
                    </td>
                    <td>
                        <MiniProject title={"One Hundred Percent Datapack"} imgsrc={OneHundredPercent}
                                    desc={<p>A datapack for <i>Minecraft</i> version 1.21.4 that automatically tracks your progress towards obtaining every item available in survival mode. Built using the datapack system with script automation done with Java and the Fabric Modding API as well as Python.</p>}
                                    download={"https://github.com/BenjaMenja/one-hundred-percent-datapack/"}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <MiniProject title={"TFC: TI Addon"} imgsrc={PhantomScrap}
                                    desc={<p>An addon mod for <a href={"../tfc-ti"}>TerraFirmaCraft: The Twilight Invasion</a>. Developed with Java and built with Gradle, this addon introduces a handful items to enhance the player experience.</p> }
                                    download={"https://github.com/BenjaMenja/tfctiaddon"}/>
                    </td>
                    <td>
                        <MiniProject title={"Manage Data for an Online Grocer"} imgsrc={EERDiagram}
                                    desc={<p>A successful solution to Coursera's "Manage Data for an Online Grocer" project. With the goal of learning MySQL in mind, I used MySQL and MySQL Workbench to design and develop a database solution for an online grocer.</p>}
                                    download={"https://github.com/BenjaMenja/coursera-manage-data-for-an-online-grocer"} downloadtext="View"/>
                    </td>
                </tr>
            </table> :
                <div className="mini-projects">
                    <MiniProject title={"Minecraft Stats Viewer"} imgsrc={StatsViewer}
                                desc={<p>A small desktop application that allows you to view generated graphs of game statistics automatically recorded by <i>Minecraft</i>. Supports all vanilla statistics and features a search function to find any statistic you desire.</p>}
                                download={"https://github.com/BenjaMenja/mc-stats-visualizer"}/>
                    <MiniProject title={"Mario AI Framework Agent"} imgsrc={MarioAI}
                                desc={"A basic agent made to run in the Mario AI Framework. Supports basic navigation of Super Mario Bros. levels, being able to avoid obstacles and enemies to reach the end in lower complexity levels."}
                                download={"https://github.com/MichaelGats/Mario-Turing-Test"}/>
                    <MiniProject title={"The Great Escape Website"} imgsrc={GreatEscapeWebsite}
                                desc={<p>A small website created to host information about a game I worked on, <a href={"../the-great-escape"}>The Great Escape</a>. Contains a download page as well as information about the team.</p> }
                                download={"https://benjamenja.github.io/the-great-escape-website/"} downloadtext={"View"}/>
                    <MiniProject title={"One Hundred Percent Datapack"} imgsrc={OneHundredPercent}
                                desc={<p>A datapack for <i>Minecraft</i> version 1.21.4 that automatically tracks your progress towards obtaining every item available in survival mode. Built using the datapack system with script automation done with Java and the Fabric Modding API as well as Python.</p>}
                                download={"https://github.com/BenjaMenja/one-hundred-percent-datapack/"}/>
                    <MiniProject title={"TFC: TI Addon"} imgsrc={PhantomScrap}
                                desc={<p>An addon mod for <a href={"../tfc-ti"}>TerraFirmaCraft: The Twilight Invasion</a>. Developed with Java and built with Gradle, this addon introduces a handful items to enhance the player experience.</p> }
                                download={"https://github.com/BenjaMenja/tfctiaddon"}/>
                    <MiniProject title={"Manage Data for an Online Grocer"} imgsrc={EERDiagram}
                                desc={<p>A successful solution to Coursera's "Manage Data for an Online Grocer" project. With the goal of learning MySQL in mind, I used MySQL and MySQL Workbench to design and develop a database solution for an online grocer.</p>}
                                download={"https://github.com/BenjaMenja/coursera-manage-data-for-an-online-grocer"} downloadtext="View"/>
                </div>
            }
        </div>
    )
}

export default MiniProjects