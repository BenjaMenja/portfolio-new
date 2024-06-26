import image from '../images/saucer-shoot.png'
import {Card} from "reactstrap";
function GameEngine() {
    let bgColor = 'rgba(0,0,0,0)'
    return (
        <div>
            <h1 style={{color: '#FFFFFF', marginBottom: '3rem',marginTop: "5rem"}}>ASCII C++ Game Engine</h1>
            <img src={image} alt="Uh oh" width={visualViewport.width * 0.45} height={'auto'} style={{marginBottom: '5rem'}}/>
            <Card className={'border-0'} style={{
                background: bgColor,
                color: '#FFFFFF',
                marginLeft: '15vw',
                width: '70vw',
                textAlign: 'left'
            }}>
                <p>I built an ASCII art game engine in C++ using Visual Studio under the guidance of Mark Claypool.
                This game engine provides the framework necessary to build 2D text-based games in C++.
                It includes essential game engine managers that manage the game loop, getting user input, processing graphics, handling built-in and custom events, camera control, animations, audio, and UI.
                Graphics and sound support are provided through <a href="https://www.sfml-dev.org/">SFML</a>.
                    The game <a href='/pokemon-blitz'>Pokemon Blitz</a> was built using this engine.<br/><br/></p>
            </Card>
        </div>
    )
}

export default GameEngine