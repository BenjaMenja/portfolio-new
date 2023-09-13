import image from "../images/royal-siege-logo.png"
import {Card, CardText, List} from "reactstrap";
function RoyalSiege() {
    let bgColor = 'rgba(0,0,0,0)'
    return (
        <div>
            <h1 style={{color: '#FFFFFF', marginBottom: '3rem'}}>Royal Siege</h1>
            <img src={image} alt="Uh oh" width={visualViewport.width * 0.2} height={visualViewport.height * 0.4} style={{marginBottom: '10rem'}}/>
            <Card className={'border-0'} style={{
                background: bgColor,
                marginLeft: '15vw',
                width: '70vw'
            }}>
                <CardText tag="h4" style={{
                    color: '#FFFFFF',
                    textAlign: 'left'
                }}>
                    <i>Royal Siege </i>
                    is a team-based MOBA game built in <i>Minecraft</i> using the game's <a href="https://minecraft.fandom.com/wiki/Data_pack">data pack</a> and <a href="https://minecraft.fandom.com/wiki/Resource_pack">resource pack</a> system.
                    The goal of the game is to slay the opposing team's king using your character's unique set of weapons, abilities, and shops.
                    <br></br>
                    <br></br>
                    Royal Siege Includes:
                    <List style={{lineHeight: '35px'}}>
                        <li>
                            14 unique characters, each with their own set of weapons, abilities, and shops
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
                    </List>
                    <br></br>
                    <br></br>
                    As the lead developer and programmer for this project, my main goals are to lead the design and direction of new content as well as discovering and implement new programming techniques to include content while optimizing for performance.
                    I also host playtesting sessions to discover potential bugs in the game, receive suggestions from players, and to improve balancing within the characters and maps.
                    <br></br>
                    <br></br>
                    Note: As the game was built in Minecraft, a preexisting game, Royal Siege is subject to the limitations of Minecraft, but is also aided by the existing mechanics, objects, and engine that Minecraft runs on.
                    <br></br>
                    <br></br>
                    If you would like to see more of Royal Siege, please click <a href="/royal-siege-gallery">here</a> to view a photo gallery of Royal Siege screenshots.
                    <br></br>
                    <br></br>
                </CardText>
            </Card>
        </div>
    )
}

export default RoyalSiege