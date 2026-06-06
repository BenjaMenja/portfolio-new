import MiniProject from "../components/Projects/MiniProject";
import StatsViewer from "../images/mc_stats_viewer.png"
import MarioAI from "../images/mario_ai.png"
import GreatEscapeWebsite from "../images/great_escape_website.png"
import OneHundredPercent from "../images/one_hundred_percent.png"
import PhantomScrap from "../images/phantom_scrap.png"
import EERDiagram from "../images/eer_diagram.png"
import { useIsMobile } from "../hooks/useIsMobile";
import { chunk } from "../components/shared/arrayChunk";

function MiniProjects() {

    const miniProjects = [
    {
        title: 'Minecraft Stats Viewer',
        imgsrc: StatsViewer,
        desc: <p>A small desktop application that allows you to view generated graphs of game statistics automatically recorded by <i>Minecraft</i>. Supports all vanilla statistics and features a search function to find any statistic you desire.</p>,
        download: 'https://github.com/BenjaMenja/mc-stats-visualizer'
    },
    {
        title: 'Mario AI Framework Agent',
        imgsrc: MarioAI,
        desc: 'A basic agent made to run in the Mario AI Framework. Supports basic navigation of Super Mario Bros. levels, being able to avoid obstacles and enemies to reach the end in lower complexity levels.',
        download: 'https://github.com/MichaelGats/Mario-Turing-Test'
    },
    {
        title: 'The Great Escape Website',
        imgsrc: GreatEscapeWebsite,
        desc: <p>A small website created to host information about a game I worked on, <a href="../the-great-escape">The Great Escape</a>. Contains a download page as well as information about the team.</p>,
        download: 'https://benjamenja.github.io/the-great-escape-website/',
        downloadtext: 'View'
    },
    {
        title: 'One Hundred Percent Datapack',
        imgsrc: OneHundredPercent,
        desc: <p>A datapack for <i>Minecraft</i> version 1.21.4 that automatically tracks your progress towards obtaining every item available in survival mode. Built using the datapack system with script automation done with Java and the Fabric Modding API as well as Python.</p>,
        download: 'https://github.com/BenjaMenja/one-hundred-percent-datapack/'
    },
    {
        title: 'TFC: TI Addon',
        imgsrc: PhantomScrap,
        desc: <p>An addon mod for <a href="../tfc-ti">TerraFirmaCraft: The Twilight Invasion</a>. Developed with Java and built with Gradle, this addon introduces a handful items to enhance the player experience.</p>,
        download: 'https://github.com/BenjaMenja/tfctiaddon'
    },
    {
        title: 'Manage Data for an Online Grocer',
        imgsrc: EERDiagram,
        desc: <p>A successful solution to Coursera's "Manage Data for an Online Grocer" project. With the goal of learning MySQL in mind, I used MySQL and MySQL Workbench to design and develop a database solution for an online grocer.</p>,
        download: 'https://github.com/BenjaMenja/coursera-manage-data-for-an-online-grocer',
        downloadtext: 'View'
    }
]

    return (
        <div style={{color: '#FFFFFF'}}>
            <h1 style={{marginBottom: '1rem'}}>Mini Projects</h1>
            <div style={{marginLeft: '5vw', marginRight: '5vw'}}>
                <p>Here you'll find a collection of small projects I've either contributed to or developed myself.</p>
                <p>All of these projects took a short amount of time to complete and involved up to 2 other people, if any.</p>
                <p>They also may or may not be revisited, or in the case of unfinished ones, finished in the future. Enjoy!</p>
            </div>
            {useIsMobile() ? (
                <div className="mini-projects">
                    {miniProjects.map(({ title, imgsrc, desc, download, downloadtext }) => (
                        <MiniProject key={title} title={title} imgsrc={imgsrc} desc={desc} download={download} downloadtext={downloadtext} />
                    ))}
                </div>
            ) : (
                <table className="mini-projects">
                    <tbody>
                        {chunk(miniProjects, 2).map((pair, i) => (
                            <tr key={i}>
                                {pair.map(({ title, imgsrc, desc, download, downloadtext }) => (
                                    <td key={title}>
                                        <MiniProject title={title} imgsrc={imgsrc} desc={desc} download={download} downloadtext={downloadtext} />
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default MiniProjects