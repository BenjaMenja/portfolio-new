import Project from "../components/Projects/Project";
import {Button, Card} from "reactstrap";
import { useIsMobile } from "../hooks/useIsMobile";
import { projectList } from "../data/projects";

const bgColor = 'rgba(136, 196, 236, 1)'

const mobileStyle = {
    marginLeft: '10vw',
    marginTop: '5rem',
    marginBottom: '5rem',
}

const baseCardStyle = {
    width: '80%',
    alignItems: 'center',
    backgroundColor: bgColor,
    border: 'none'
}

function Projects() {

    return (
        <div style={{color: '#FFFFFF',marginTop: "5rem"}}>
            {useIsMobile() ? <>
                    <h1>Projects</h1>
                    <MiniProjectDisplay />
                </> : <table style={{width: '100%', tableLayout: 'fixed', marginBottom: '5rem'}}>
                <tr>
                    <td></td>
                    <td>
                        <h1>Projects</h1>
                    </td>
                    <td>
                        <MiniProjectDisplay />
                    </td>
                </tr>
            </table>}

            {projectList.map(project => <Project key={project.project} {...project} />)}
        </div>
    )
}

function MiniProjectDisplay() {
    return (
        <Card
            className="shadow-lg"
            outline
            color="light"
            style={{ ...baseCardStyle, ...(useIsMobile() && mobileStyle) }}
        >
            <table style={{ width: '100%', tableLayout: 'fixed' }}>
                <tbody>
                    <tr>
                        <td style={{ textAlign: 'right' }}>
                            <i className="bi bi-gear-wide-connected" />
                        </td>
                        <td>
                            <h4 style={{ marginTop: '1rem' }}>Mini Projects</h4>
                        </td>
                        <td>
                            <Button color="primary" style={{ color: 'white' }} href="/mini-projects">
                                Learn More
                            </Button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p>A collection of mini projects I've contributed to or developed myself</p>
        </Card>
    )
}

export default Projects