import image from '../images/pokemon-blitz.png'
import {Card} from "reactstrap";
import { useIsMobile } from '../hooks/useIsMobile';
import { defaultCardStyle } from "../components/shared/cardStyle";

function PokemonBlitz() {

    return (
        <div>
            <h1 style={{color: '#FFFFFF', marginBottom: '3rem',marginTop: "5rem"}}>Pokemon Blitz</h1>
            <img src={image} alt="An in-game screenshot showing a playable character dodging the endless waves of objects along with the HUD." width={useIsMobile() ? '75%' : '33%'} height={'auto'} style={{marginBottom: '3rem'}}/>
            <Card className={'border-0'} style={defaultCardStyle}>
                <p><i>Pokemon Blitz </i>
                is a 2D bullet hell game built using my <a href={'/game-engine'}>ASCII C++ game engine</a>.
                The goal is to survive as long as possible against the endless wave of flying Pokeballs and Voltorbs traveling across the map.
                You can choose between three playable Pokemon, each with their own unique set of moves to aid in survival.
                    You can gain points every second you're alive and by destroying enemies with your moves.<br/><br/></p>
                <h3>Contributions:</h3>
                <ul>
                    <li>Created ASCII art assets</li>
                    <li>Chose accompanying audio</li>
                    <li>Programmed player movement, abilities, navigable menu, and HUD</li>
                </ul>
            </Card>
        </div>
    )
}

export default PokemonBlitz