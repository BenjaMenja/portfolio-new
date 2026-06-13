import MiniProject from "../components/Projects/MiniProject";
import { miniProjects } from "../data/miniprojects";
import { useIsMobile } from "../hooks/useIsMobile";
import { chunk } from "../components/shared/arrayChunk";

function MiniProjects() {

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