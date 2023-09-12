import image from '../images/pokemon-blitz.png'
import {Card, CardText, List} from "reactstrap";
function PokemonBlitz() {
    let bgColor = 'rgba(0,0,0,0)'
    return (
        <div>
            <h1 style={{color: '#FFFFFF', marginBottom: '3rem'}}>Pokemon Blitz</h1>
            <img src={image} alt="Uh oh" width={visualViewport.width * 0.33} height={visualViewport.height * 0.4} style={{marginBottom: '10rem'}}/>
            <Card style={{
                background: bgColor,
                marginLeft: '15vw',
                width: '70vw',
                textAlign: 'left'
            }}>
                <CardText tag="h4" style={{
                    color: '#FFFFFF'
                }}>
                    <i>Pokemon Blitz </i>
                    is a 2D bullet hell game built using the <a href='/dragonfly'>Dragonfly</a> game engine.
                    The goal is to survive as long as possible against the endless wave of flying Pokeballs and Voltorbs traveling across the map.
                    You can choose between three playable Pokemon, each with their own unique set of moves to aid in survival.
                    You can gain points every second you're alive and by destroying enemies with your moves.
                    <br></br>
                    <br></br>
                    Contributions: <br/><br/>
                    <List>
                        <li>Created ASCII art assets</li>
                        <li>Chose accompanying audio</li>
                        <li>Programmed player movement, abilities, navigable menu, and HUD</li>
                    </List>
                    <br></br>
                    <br></br>
                </CardText>
            </Card>
        </div>
    )
}

export default PokemonBlitz