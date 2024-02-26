import {Button, Card, CardText, Col, List, Row} from "reactstrap";
import image from '../images/living_room_kitchen2.png'

function TheGreatEscape() {
    let bgColor = 'rgba(0,0,0,0)'
    return (
        <>
            <h1 style={{color: '#FFFFFF', marginBottom: '3rem',marginTop: "5rem"}}>The Great Escape</h1>
            <img src={image} alt={'Uh oh'} width={visualViewport.width * 0.5} height={visualViewport.height * 0.6} style={{marginBottom: '8rem'}}/><br/>

            <Button color='primary' size={'lg'} style={{marginBottom: '2rem'}} onClick={() => window.location.href='https://github.com/BenjaMenja/The-Great-Escape/releases/tag/v1.1.0-alpha'}>Download</Button>

            <Card className={'border-0'} style={{
                background: bgColor,
                marginLeft: '15vw',
                width: '70vw',
                textAlign: 'left'
            }}>
                <CardText tag="h5" style={{
                    color: '#FFFFFF'
                }}>
                    <i>The Great Escape </i>
                    is a third person stealth mission game where you play as a rebellious teenager who is determined to sneak out of the house to attend a party.
                    Use your surroundings to your advantage, manipulate objects, and complete a variety of challenges to avoid detection from family members in your house.
                    Developed in Unreal Engine 5.1 using Unreal's Blueprint system, the game features a plethora of technical and artistic assets.
                    <Row xs={'2'} style={{marginTop: '4rem', marginBottom: '4rem'}}>
                        <Col>
                            <List style={{listStylePosition: 'inside'}}>
                                <u>Technical Features</u>
                                <li>Controllable player</li>
                                <li>3 AI controlled NPCs</li>
                                <li>Item pickup and drop system</li>
                                <li>Held item system</li>
                                <li>Interactions with placed objects</li>
                                <li>Dialogue and hint system</li>
                                <li>Menus for important game events</li>
                            </List>
                        </Col>
                        <Col>
                            <List style={{listStylePosition: 'inside'}}>
                                <u>Artistic Features</u>
                                <li>4 fully modeled, rigged, and animated characters</li>
                                <li>Character animations for movement and events</li>
                                <li>Fully modeled and textured house environment</li>
                                <li>Procedurally generated environment assets</li>
                                <li>2 rigged and animated environment objects</li>
                                <li>Carefully placed lights with Lumen lighting</li>
                                <li>Modeled and textured objects for various game puzzles</li>
                            </List>
                        </Col>
                    </Row>

                    <h2>Contributions:</h2>
                    <List>
                        <li>Object Interactions</li>
                        <li>Puzzle Design</li>
                        <li>Puzzle Progression</li>
                        <li>Hint and Dialogue System</li>
                        <li>Art integration into Blueprints</li>
                        <li>Website (Can be found <a style={{color: "#95C0FE"}} href={'https://benjamenja.github.io/the-great-escape-website/'}>here</a>).</li>
                    </List>
                </CardText>
            </Card>
        </>
    )
}

export default TheGreatEscape