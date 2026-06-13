import image from '../images/saucer-shoot.png'
import {Card} from "reactstrap";
import { useIsMobile } from '../hooks/useIsMobile';
import { defaultCardStyle, defaultProjectHeaderStyle } from '../components/shared/sharedStyles';
function GameEngine() {

    return (
        <div>
            <h1 style={defaultProjectHeaderStyle()}>ASCII C++ Game Engine</h1>
            <img src={image} alt="A screenshot of an example game made with this game engine." width={useIsMobile() ? '75%' : '33%'} height={'auto'} style={{marginBottom: '3rem'}}/>
            <Card className={'border-0'} style={defaultCardStyle()}>
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