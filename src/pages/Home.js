import Project from "../components/Projects/Project";
import {Button} from "reactstrap";
import {GithubButton, ItchButton, LinkedInButton} from "./about";
import { projectList } from "../data/projects";

function Home() {
    const featuredProjects = [
        projectList.find(p => p.project === 'merge-monastery'),
        projectList.find(p => p.project === 'color-clash'),
        projectList.find(p => p.project === 'the-great-escape')
    ]

    return (
        <div style={{color: '#FFFFFF'}}>
            <div style={{marginLeft: '5vw', marginRight: '5vw'}}>
                <p>Thank you for checking out my portfolio!</p>
                <p>I'm Ben Gelinas, a software developer with experience in web and game development.</p>
                <p>Feel free to take a look at some of my featured projects below, or learn more about me by pressing the About button!</p>
            </div>
            <br/>

            {featuredProjects.map(project => <Project key={project.project} {...project} />)}
            
            <Button style={{marginBottom: '2rem', color: 'white'}} color={'primary'} href={'/projects'}>More Projects -&gt;</Button>
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