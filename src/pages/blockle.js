import image from "../images/blockle-page.png";
import {useEffect, useState} from "react";
import {Card} from "reactstrap";
import playwright from "../images/playwright_script.gif";
import filters from "../images/blockle_filter_page.png";

function Blockle() {
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
        <>
            <h1 style={{color: '#FFFFFF', marginBottom: '3rem',marginTop: "5rem"}}>Blockle</h1>
            {(width > 768 && height > 600) ? <img src={image} alt="A screenshot of the aqueducts and billboard of Colosseum, a Team Deathmatch map." width={'33%'} height={'auto'} style={{marginBottom: '3rem'}}/> : <img src={image} alt="A screenshot of the aqueducts and billboard of Colosseum, a Team Deathmatch map." width={'75%'} height={'auto'} style={{marginBottom: '3rem'}}/>}
            <Card className={'border-0'} style={{
                background: bgColor,
                color: "#FFFFFF",
                marginLeft: '10vw',
                width: '80vw',
                textAlign: 'left'
            }}>
                <p>
                    Blockle is a guessing game inspired by the <a href={"https://www.nytimes.com/games/wordle/index.html"}>Wordle</a> and <a href={"https://squirdle.fireblend.com/"}>Squirdle</a> games where you have to guess the <i>Minecraft</i> block based on its attributes.
                    Using the block's hardness, blast resistance, preferred tool, introduced version, and color, you have only 6 guesses to guess the block! Supports all blocks from the pre-classic era to the current <i>Minecraft</i> version.
                </p>
                <h3>The Game</h3>
                The game starts with 6 guesses. Guessing a block will create a guess and show it to the screen. Each guess contains clues that aim to guide you towards guessing the correct block. In each category's column, you will find icons that tell you how
                your chosen block's attributes compare to the actual answer. Each block in the guess list as well as the full block list can be hovered over to show its attributes. Use these values with your block's clues to help you win the game!
                <br/>
                <br/>
                <h3>Filtering System</h3>
                Blockle contains an advanced filtering system to help players narrow down their search for the correct block. In the search bar, a basic search can be performed by typing in a block's name and the list will automatically update with blocks that contain that set of characters in its name.
                An advanced search can be used by filtering the list based on the block attributes. Players can search for blocks with specific attribute values by typing in the attribute name, a comparison symbol, and a value.<br/>
                Examples:
                <ul>
                    <li>
                        <b>hardness&gt;2</b> would only show blocks that have a hardness value strictly greater than 2.
                    </li>
                    <li>
                        <b>color=red</b> would only show blocks that have a primary color of red.
                    </li>
                </ul>
                Filters can further utilized by chaining them together with space characters.<br/>
                Examples:
                <ul>
                    <li>
                        <b>hardness&gt;2 color=red</b> would only show blocks that have a hardness value greater than 2 AND are the color red.
                    </li>
                    <li>
                        <b>blast_resistance=1 version!1.8 head</b> would only show blocks that have a blast resistance value of 1 AND were NOT introduced in version 1.8 AND have the substring "head" in their name.
                    </li>
                </ul>
                <p>More details on these filters can be found on the blockle page's dedicated <a href={"https://benjamenja.github.io/blockle/filters"}>filter guide</a>.</p><br/>
            </Card>
            {(width > 768 && height > 600) ? <img src={filters} alt="A section of Blockle's filter page." width={'33%'} height={'auto'}/> : <img src={filters} alt="A section of Blockle's filter page." width={'75%'} height={'auto'}/>}

            <Card className={'border-0'} style={{
                background: bgColor,
                color: "#FFFFFF",
                marginLeft: '10vw',
                width: '80vw',
                textAlign: 'left'
            }}>
                <h3>Playwright</h3>
                <p>
                    To create a way to display each block and its attributes, a Block interface was designed in Typescript to store the block's name, display image, and its attributes. However, <i>Minecraft</i> does not have a public API or other means of grabbing this information easily.
                    The task of manually filling out a Block interface for every single <i>Minecraft</i> block would be extremely tedious and time consuming, requiring hundreds if not thousands of visits to Wiki pages and in game data to obtain all of the information. To combat this, I wrote an external script
                    using <a href={"https://playwright.dev/"}>Playwright</a> to automate this process. Playwright was used to automatically retrieve every block's name, image, and attributes from their respective pages on a well maintained community <a href={"https://minecraft.wiki/w/Block"}>Minecraft Wiki</a>,
                    which contained all of the required information needed to represent each block in Blockle.
                </p>
            </Card>
            {(width > 768 && height > 600) ? <img src={playwright} alt="A snippet of the playwright script accessing each block's page on the wiki." width={'33%'} height={'auto'}/> : <img src={playwright} alt="A snippet of the playwright script accessing each block's page on the wiki." width={'75%'} height={'auto'}/>}
            <br/><br/>
        </>
    )
}

export default Blockle