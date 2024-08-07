import image from '../images/pokemon-blitz.png'
import {Card} from "reactstrap";
import {useEffect, useState} from "react";
function PokemonBlitz() {
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
            <h1 style={{color: '#FFFFFF', marginBottom: '3rem',marginTop: "5rem"}}>Pokemon Blitz</h1>
            {(width > 768 && height > 600) ? <img src={image} alt="An in-game screenshot showing a playable character dodging the endless waves of objects along with the HUD." width={'33%'} height={'auto'} style={{marginBottom: '3rem'}}/> : <img src={image} alt="An in-game screenshot showing a playable character dodging the endless waves of objects along with the HUD." width={'75%'} height={'auto'} style={{marginBottom: '3rem'}}/>}
            <Card className={'border-0'} style={{
                background: bgColor,
                color: "#FFFFFF",
                marginLeft: '10vw',
                width: '80vw',
                textAlign: 'left'
            }}>
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