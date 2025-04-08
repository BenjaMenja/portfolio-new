import pokequiz from "../images/pokequiz.png"
import quiz_example from "../images/pokequiz-example.png"
import settings from "../images/pokequiz-settings.png"
import stats from "../images/pokequiz-stats.png"
import {Card} from "reactstrap";
import {useEffect, useState} from "react";
function PokeQuiz() {
    let bgColor = 'rgba(0,0,0,0)'
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)
    useEffect(() => {
        function handleResize() {
            const newwidth = window.innerWidth
            const newheight = window.innerHeight
            setWidth(newwidth)
            setHeight(newheight)
        }
        window.addEventListener('resize', handleResize)
    }, [])
    return (
        <div className={".text-light"}>
            <h1 style={{color: '#FFFFFF', marginBottom: '3rem',marginTop: "5rem"}}>PokeQuiz</h1>
            {(width > 768 && height > 600) ? <img src={pokequiz} alt="The PokeQuiz home screen" width={'50%'} height={'auto'} style={{marginBottom: '3rem'}}/> : <img src={pokequiz} alt="The PokeQuiz home screen" width={'90%'} height={'auto'} style={{marginBottom: '3rem'}}/>}
            <Card className={'border-0'} style={{
                background: bgColor,
                color: "#FFFFFF",
                marginLeft: '10vw',
                width: '80vw',
                textAlign: 'left'
            }}>
                <h3>View</h3>
                <p>Check out the PokeQuiz website <a href={'https://benjamenja.github.io/pokequiz/'} target="_blank" rel="noreferrer">here</a>.</p>
                <h3>Introduction</h3>
                PokeQuiz aims to be the go to destination for Pokemon related quizzes. It features a handful of quizzes spanning the major corners of the Pokemon games, including Pokemon themselves, moves, and cries. The player will play a continuous set of rounds,
                filling in as much information as you can about the subject. The goal is to create an engaging quiz taking system focused on the popular Pokemon franchise.<br/><br/>
                <h3>Design</h3>
                <h4>Overview</h4>
                <p>The application design came from a handful of factors. As a long time fan of the Pokemon series of games, I have retained a significant amount of knowledge about many aspects of the games. However, in the quest to find ways to test my knowledge, I have felt
                    rather unsatisfied with existing quiz sites. For example, <a href="https://www.sporcle.com/">Sporcle</a> contains a large number of fan-made quizzes, but are limited by Sporcle's aim to be a general quiz taking platform. While this is by no means a problem with Sporcle, I wanted something
                    more specific to the Pokemon series.
                </p>
                <h4>Quizzes</h4>
                <p>The quiz content covers a large amount of content present in the Pokemon series of video games. Each quiz contains a set of values to answer, and the player will fill in as much as they can.
                </p>
                <img src={quiz_example} className='w-50 align-self-center' alt="Quiz Example" />
                <h4>Data Fetching</h4>
                <p>All data is obtained through <a href="https://pokeapi.co/">PokeAPI</a>, a free RESTful API that links to a database full of everything there is to know about the Pokemon series. I used <a href="https://github.com/PokeAPI/pokeapi-js-wrapper">pokeapi-js-wrapper</a>, a wrapper library that
                fetch the desired data and provide built-in caching. This data is used to supply the material found on the various quizzes.
                </p>
                <h4>Settings</h4>
                <p>PokeQuiz comes with an array of settings that let the user customize their quiz taking experience. The user can change global values such as the number of rounds as well as quiz specific values such as the amount of leeway given for answering certain questions.
                </p>
                <img src={settings} className='w-25 align-self-center' alt="PokeQuiz settings popup" />
                <h4>Stats Viewer</h4>
                <p>When testing my knowledge of a subject, I like to receive feedback based on how well I did and where I can improve. PokeQuiz features a stats viewer for quizzes that require a set of responses per round. This stats viewer shows a breakdown of how well you performed
                    in certain categories, allowing the user to see where their strengths and weaknesses are. The generated chart can be downloaded with the click of a button.
                </p>
                <img src={stats} className='w-50 align-self-center' alt="PokeQuiz Stats Example" />
                <h3>Contributions</h3>
                <ul>
                    <li>Built a quiz system to handle basic quiz functionalities</li>
                    <li>Extended the quiz system to make topic-specific quizzes</li>
                    <li>Utilized Angular and Tailwind to create styled components that encompass the page content</li>
                    <li>Used namespaced local storage to store persistent settings data in the browser</li>
                    <li>Generated charts using Chart.js that display the player's results in a visual format</li>
                    <li>Deployed application to GitHub Pages using the <a href="https://www.npmjs.com/package/angular-cli-ghpages">angular-cli-ghpages</a> package</li>
                </ul>
            </Card>

            
        </div>
    )
}

export default PokeQuiz