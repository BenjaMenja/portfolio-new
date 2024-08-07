import image from "../images/royal-siege-gallery/tdm.png"
import {Card} from "reactstrap";
import {useEffect, useState} from "react";
function RoyalSiege() {
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
            <h1 style={{color: '#FFFFFF', marginBottom: '3rem',marginTop: "5rem"}}>Royal Siege</h1>
            {(width > 768 && height > 600) ? <img src={image} alt="A screenshot of the aqueducts and billboard of Colosseum, a Team Deathmatch map." width={'50%'} height={'auto'} style={{marginBottom: '3rem'}}/> : <img src={image} alt="A screenshot of the aqueducts and billboard of Colosseum, a Team Deathmatch map." width={'75%'} height={'auto'} style={{marginBottom: '3rem'}}/>}
            <Card className={'border-0'} style={{
                background: bgColor,
                color: "#FFFFFF",
                marginLeft: '10vw',
                width: '80vw',
                textAlign: 'left'
            }}>
                <p><i>Royal Siege </i>
                is a team-based MOBA game built in <i>Minecraft</i> using the game's <a href="https://minecraft.wiki/w/Data_pack">data pack</a> and <a href="https://minecraft.wiki/w/Resource_pack">resource pack</a> system.
                    The goal of the game is to slay the opposing team's king using your character's unique set of weapons, abilities, and shops.</p>
                <h3>Royal Siege Includes:</h3>
                    <ul>
                        <li>
                            15 unique characters, each with their own set of weapons, abilities, and shops
                        </li>
                        <li>
                            2 gamemodes
                        </li>
                        <li>
                            4 maps, two for each gamemode
                        </li>
                        <li>
                            Money system for purchasing items unique to your character
                        </li>
                        <li>
                            Original artwork for character weapons and abilities
                        </li>
                        <li>
                            2 original pieces of music
                        </li>
                        <li>
                            A playtesting group to aid in balancing characters and map elements
                        </li>
                    </ul><br/>

                    Note: As the game was built in Minecraft, a preexisting game, Royal Siege is subject to the limitations of Minecraft, but is also aided by the existing mechanics, objects, and engine that Minecraft runs on.<br/><br/>

                <p>If you would like to see more of Royal Siege, please <a href="/royal-siege-gallery">click here</a> to view a photo gallery of Royal Siege screenshots.<br/><br/></p>
                <h3>Contributions:</h3>
                <ul>
                    <li>Character design for all 15 characters</li>
                    <li>Map design for 2 of the 4 maps</li>
                    <li>Art integration into the game</li>
                    <li>Programming for all gameplay features</li>
                    <li>Playtest session organization</li>
                    <li>Implementation of gameplay and balance suggestions as well as bug reports</li>
                </ul>
            </Card>
        </div>
    )
}

export default RoyalSiege