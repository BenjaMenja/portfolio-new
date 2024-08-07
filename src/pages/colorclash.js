import image from '../images/color-clash.png'
import conditions from '../images/adaptive-time-delay-conditions.png'
import {Card} from "reactstrap";
import {useEffect, useState} from "react";
function ColorClash() {
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
        <div>
            <h1 style={{color: '#FFFFFF', marginBottom: '3rem',marginTop: "5rem"}}>Color Clash: Exploring Adaptive Time Delay in First Person Shooter Games</h1>
            {(width > 768 && height > 600) ? <img src={image} alt="A screenshot of the blue player aiming at the red player." width={'50%'} height={'auto'} style={{marginBottom: '3rem'}}/> : <img src={image} alt="A screenshot of the blue player aiming at the red player." width={'90%'} height={'auto'} style={{marginBottom: '3rem'}}/>}
            <Card className={'border-0'} style={{
                background: bgColor,
                color: "#FFFFFF",
                marginLeft: '10vw',
                width: '80vw',
                textAlign: 'left'
            }}>
                <h3>Publication</h3>
                <p>Publication is available <a href={'https://digital.wpi.edu/concern/student_works/4f16c723m'}>here</a> on the WPI library.</p><br/>
                <h3>What is it?</h3>
                Exploring Adaptive Time Delay in First Person Shooter Games is a research project conducted to fulfill the Major Qualifying Project degree requirement at Worcester Polytechnic Institute. We designed, implemented, and tested Adaptive Time Delay,
                a latency compensation technique that aims to maintain fairness and improve Quality of Experience for players experiencing different amounts of network latency.<br/><br/>
                <h3>Adaptive Time Delay</h3>
                <p>As players play FPS games online, latency affects their ability to perform at their best and imposes a variety of problems for affected players. Adaptive Time Delay is a modification to an existing latency compensation technique, <a href={"https://dl.acm.org/doi/10.1145/3519023"}>Time Delay</a>,
                    which aims to maintain the improved fairness introduced by regular time delay while also improving QoE for all players. It achieves this by only turning on time delay in situations where it is needed. In this research, two
                    conditions were identified that represent player interaction, being line of sight and proximity.</p>
            </Card>
            {(width > 768 && height > 600) ? <img src={conditions} alt="Graphic of the conditions required to activate adaptive time delay." width={'33%'} height={'auto'}/> : <img src={conditions} alt="Graphic of the conditions required to activate adaptive time delay." width={'75%'} height={'auto'}/>}
            <br/><br/>
            <Card className={'border-0'} style={{
                background: bgColor,
                color: "#FFFFFF",
                marginLeft: '10vw',
                width: '80vw',
                textAlign: 'left'
            }}>
                <h3>Color Clash</h3>
                <p>In order to test the efficacy of this modification, we designed <i>Color Clash</i>. Color Clash is a first person shooter game that follows a 1v1 deathmatch format, and was used as our platform to both
                    implement Adaptive Time Delay and test it. Using Unity with the Netcode for Game Objects library, we constructed an online multiplayer FPS game with essential game mechanics such as movement, jumping, shooting, and a scoring system.
                    To give players an objective that doesn't involve player interaction, players can paint tiles on the floor with a pre-assigned color that lets them modify their movement speed depending on the color tile they stand on.</p>
                <iframe src={"https://youtube.com/embed/3ZuBi2--otA"} allow={'autoplay; encrypted-media'} allowFullScreen title={'Color Clash'} style={{alignSelf: 'center', width: '75%', height: '50vh'}}/>
                <br/><br/>
                <h3>User Study & Data Collection</h3>
                <p>We conducted a user study to gather qualitative and quantitative data on the efficacy of Adaptive Time Delay on performance, fairness, and QoE. We modified Color Clash to have a round system, with each round lasting 50 seconds and applying
                different amounts of latency to one player and either no latency, time delay, or adaptive time delay to the other player. After each round, participants filled out an in-game questionnaire to gather qualitative information on their experience
                The game automatically logged player actions and associated information related to those actions. Questionnaire results in numerical form were also logged for each player. These logs were extracted by the team after each session and stored
                until all sessions had concluded. In total, we used information from 38 participants across 23 sessions to make our conclusion.<br/><br/></p>
                <h3>Data Analysis</h3>
                <p>We analyzed our data using Python with the Pandas and Matplotlib libraries. Pandas was used to structure the data and filter out sessions and data points that had potential issues. Matplotlib was used to visualize our data.
                Using these resources, we were able to conclude that in a 1v1 situation, adaptive time delay does improve upon regular time delay by improving QoE for both players while maintaining fairness across our sessions.<br/><br/></p>
                <h3>Contributions:</h3>
                <ul>
                    <li>
                        Research:
                        <ul>
                            <li>Researched latency and its negative effects on FPS games</li>
                            <li>Researched time delay and its benefits and drawbacks</li>
                        </ul>
                    </li>
                    <li>
                        Programming:
                        <ul>
                            <li>Ready Screen</li>
                            <li>Shooting Mechanic</li>
                            <li>Painting Mechanic</li>
                            <li>Scoring System</li>
                            <li>Round System</li>
                            <li>In-game Questionnaire</li>
                            <li>Data Logging System</li>
                        </ul>
                    </li>
                    <li>
                        Design:
                        <ul>
                            <li>Level Design</li>
                            <li>Tile & Target Design</li>
                        </ul>
                    </li>
                    <li>
                        Data Analysis:
                        <ul>
                            <li>Analyzed performance data, including shots taken, accuracy, and score under different latency conditions</li>
                            <li>Produced graphs to represent performance data</li>
                        </ul>
                    </li>
                </ul>
            </Card>
        </div>
    )
}

export default ColorClash