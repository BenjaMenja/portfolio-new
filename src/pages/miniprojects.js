import MiniProject from "../components/Projects/MiniProject";
import StatsViewer from "../images/mc_stats_viewer.png"
import MarioAI from "../images/mario_ai.png"
import GreatEscapeWebsite from "../images/great_escape_website.png"

function MiniProjects() {
    return (
        <div style={{color: '#FFFFFF'}}>
            <h1 style={{marginBottom: '1rem'}}>Mini Projects</h1>
            <p>Here you'll find a collection of small projects I've either contributed to or developed myself.</p>
            <p>All of these projects took a short amount of time to complete and involved up to 2 other people, if any.</p>
            <p>They also may or may not be revisited, or in the case of unfinished ones, finished in the future. Enjoy!</p>
            <table className={"mini-projects"}>
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

                    </td>
                </tr>
            </table>
        </div>
    )
}

export default MiniProjects