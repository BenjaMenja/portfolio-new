import image from '../images/saucer-shoot.png'
import {Card} from "reactstrap";
import {useEffect, useState} from "react";
function GameEngine() {
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
            <h1 style={{color: '#FFFFFF', marginBottom: '3rem',marginTop: "5rem"}}>ASCII C++ Game Engine</h1>
            {(width > 768 && height > 600) ? <img src={image} alt="A screenshot of an example game made with this game engine." width={'50%'} height={'auto'} style={{marginBottom: '3rem'}}/> : <img src={image} alt="A screenshot of an example game made with this game engine." width={'75%'} height={'auto'} style={{marginBottom: '3rem'}}/>}
            <Card className={'border-0'} style={{
                background: bgColor,
                color: '#FFFFFF',
                marginLeft: '10vw',
                width: '80vw',
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