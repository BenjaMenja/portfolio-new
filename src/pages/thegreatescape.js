import {Button, Card, Col, Row} from "reactstrap";
import image from '../images/living_room_kitchen2.png'
import {useEffect, useState} from "react";

function TheGreatEscape() {
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
    })
    return (
        <>
            <h1 style={{color: '#FFFFFF', marginBottom: '3rem',marginTop: "5rem"}}>The Great Escape</h1>
            {(width > 768 && height > 600) ? <img src={image} alt="A screenshot of the player character in the hallway leading to the living room, where her aunt awaits her." width={'50%'} height={'auto'} style={{marginBottom: '3rem'}}/> : <img src={image} alt="A screenshot of the player character in the hallway leading to the living room, where her aunt awaits her." width={'75%'} height={'auto'} style={{marginBottom: '3rem'}}/>}
            <br/>
            <Button color='primary' size={'lg'} style={{marginBottom: '2rem', color: 'white'}} href={'https://github.com/BenjaMenja/The-Great-Escape/releases/tag/v1.2.0-beta'}>Download</Button>
            <Card className={'border-0'} style={{
                background: bgColor,
                color: '#FFFFFF',
                marginLeft: '10vw',
                width: '80vw',
                textAlign: 'left'
            }}>
                <p><i>The Great Escape </i>is a third person stealth mission game where you play as a rebellious teenager who is determined to sneak out of the house to attend a party.
                Use your surroundings to your advantage, manipulate objects, and complete a variety of challenges to avoid detection from family members in your house.
                    Developed in Unreal Engine 5.1 using Unreal's Blueprint system, the game features a plethora of technical and artistic assets.</p>
                <Row xs={'2'} style={{marginTop: '4rem', marginBottom: '4rem'}}>
                    <Col>
                        <u>Technical Features</u>
                        <ul>
                            <li>Controllable player</li>
                            <li>3 AI controlled NPCs</li>
                            <li>Item pickup and drop system</li>
                            <li>Held item system</li>
                            <li>Interactions with placed objects</li>
                            <li>Dialogue and hint system</li>
                            <li>Menus for important game events</li>
                        </ul>
                    </Col>
                    <Col>
                        <u>Artistic Features</u>
                        <ul>
                            <li>4 fully modeled, rigged, and animated characters</li>
                            <li>Character animations for movement and events</li>
                            <li>Fully modeled and textured house environment</li>
                            <li>Procedurally generated environment assets</li>
                            <li>2 rigged and animated environment objects</li>
                            <li>Carefully placed lights with Lumen lighting</li>
                            <li>Modeled and textured objects for various game puzzles</li>
                        </ul>
                    </Col>
                </Row>

                <h2>Contributions:</h2>
                <ul>
                    <li>Object Interactions</li>
                    <li>Puzzle Design</li>
                    <li>Puzzle Progression</li>
                    <li>Hint and Dialogue System</li>
                    <li>Art integration into Blueprints</li>
                    <li>Website (Can be found <a href={'https://benjamenja.github.io/the-great-escape-website/'}>here</a>).</li>
                </ul>
            </Card>
        </>
    )
}

export default TheGreatEscape