import image from '../images/tfc_ti_menu2.png'
import monocleanvil from '../images/monocle_anvil.png'
import monoclecraft from '../images/monocle_crafting.png'
import naturalstructure from '../images/natural_structure.png'
import quest from '../images/tfctiquest.png'
import {Card} from "reactstrap";
import {useEffect, useState} from "react";
function TFC_TI() {
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
        <div className={".text-light"}>
            <h1 style={{color: '#FFFFFF', marginBottom: '3rem',marginTop: "5rem"}}>TerraFirmaCraft: The Twilight Invasion</h1>
            {(width > 768 && height > 600) ? <img src={image} alt="The TFC: TI Main Menu" width={'50%'} height={'auto'} style={{marginBottom: '3rem'}}/> : <img src={image} alt="The TFC: TI Main Menu" width={'90%'} height={'auto'} style={{marginBottom: '3rem'}}/>}
            <Card className={'border-0'} style={{
                background: bgColor,
                color: "#FFFFFF",
                marginLeft: '10vw',
                width: '80vw',
                textAlign: 'left'
            }}>
                <h3>Download</h3>
                <p>Download is available <a href={'https://www.curseforge.com/minecraft/modpacks/terrafirmacraft-the-twilight-invasion'}>here</a> on CurseForge.</p>
                <p>Additionally, the addon mod can be found <a href='https://github.com/BenjaMenja/tfctiaddon'>here</a>.</p>
                <h3>Introduction</h3>
                TerraFirmaCraft: The Twilight Invasion is a Minecraft modpack built for Minecraft Forge 1.7.10. It contains a combination of survival, technology, and combat and fuses them together to create a challenging but rewarding survival experience.
                Custom scripts, addons, and configurations are included to enhance the survival experience and integrate addons with the central focus mod of TerraFirmaCraft+. A quest-based progression system guides the player from surviving their first night
                to smithing metals and weapons to fighting off huge bosses that have invaded your home!<br/><br/>
                <h3>Design</h3>
                <h4>Overview</h4>
                <p>As a long time player of Minecraft, I often think about older versions and discovering new ways to play the game. With TFC, and subsequently <a href="https://www.curseforge.com/minecraft/modpacks/terrafirmapunk">TerraFirmaPunk</a>, one of the inspirations for this project being one of my first exposures to a complete overhaul of the base game,
                I wanted to create an experience that captured that feeling of exploring, learning new things, and engineering your way to success. This section covers some of my design thoughts in roughly timeline order.</p>
                <h4>TFC+</h4>
                <p> Since the central focus mod, TerraFirmaCraft+, completely overhauls the survival experience, a mountain of issues arise when implementing other mods. The majority of other mods utilize vanilla materials and methods of obtaining materials to create items and blocks.
                    TFC+, for the most part, ignores the vanilla experience and introduces its own methods of gathering materials. However, I wanted other mods to be able to interact with the TFC ways of obtaining and processing materials. As such, I utilized two key mods to
                    realize this: MineTweaker and TFC+ Tweaker.
                </p>
                <h4>Tweaker Mods</h4>
                <p>MineTweaker and TFC+ Tweaker are mods that provide an interface for changing, adding, and removing in game recipes. They utilize a custom scripting language, ZenScript, to achieve this. I utilized these mods extensively to integrate recipes from other mods into the TFC+ experience.
                    For example, instead of some mods introducing recipes that require metals through vanilla crafting, I removed them from the vanilla crafting register and added them to the TFC+ anvil register. This created a way to keep the player involved in the TFC+ ways of doing things and to further immerse them in the experience.
                </p>
                <div className={"row row-cols-2 g-4 w-75 mx-auto"}>
                    <img className={"img-fluid align-self-center"} src={monoclecraft} alt="Example recipe with vanilla methods" />
                    <img src={monocleanvil} alt="Example recipe with Tweaker methods" />
                </div>
                <i style={{textAlign: "center"}}>Left: Vanilla Recipe - Right: TFC+ Recipe</i>
                <h4>Structure Generation</h4>
                <p>In order to keep the world from feeling unpopulated, over 50 structures are included that naturally generate in specific areas of the world through the Ruins mod. I chose certain biomes for structures to generate in that I felt fit the surrounding area best.
                    Many of these structures are repurposed structures from other mods and the Ruins mod itself to fit the TFC+ theme. Carefully selected items are added to loot tables, and these loot tables can randomly generate in loot chests found amongst the structures.
                    This design idea stemmed from the desire for the player to explore their surroundings.
                </p>
                <img src={naturalstructure} className='w-50 align-self-center' alt="Naturally Spawning Structure" />
                <h4>The Addon Mod</h4>
                <p>To address some of the missing pieces present in the project, I developed an addon mod using Java 8 and built with Gradle. This mod adds a few items to make use of items from other mods that do not have uses as well as materials for endgame content.
                    The addon uses other mods as dependencies to integrate their features with my own ideas. Currently, this addon can be found <a href={"https://github.com/BenjaMenja/tfctiaddon"}>here</a>.
                </p>
                <h4>Endgame</h4>
                <p>After integrating mod content, generating structures, and developing an addon, the project needed a way to be completed. I decided to focus on a boss system, with the final boss being a modified version of the traditional final boss of Minecraft: The Ender Dragon.
                    However, just one boss was not going to be enough, especially considering the sheer amount of content before it. The Twilight Forest, a popular mod known for its magical forest dimension and iconic bosses, served as an excellent provider for endgame content.
                    Traditionally, these bosses spawn in special structures throughout the dimension. However, to prevent any breaks in immersion by leaving the TFC+ world, I took the boss structures, modified their block composition, and generated them in the overworld instead.
                    This allows players to discover the boss structures by traveling the overworld and taking them down when they feel prepared. This endgame content also served as the inspiration for the official title of the project.
                </p>
                <h4>Quest System</h4>
                <p>With the large amount of content available, I designed a rewards-based quest system to guide the player through the different stages and areas of the content. Each quest contains a task to complete, a description of the task, and a reward for completing the task.
                    The quests are carefully organized to help progress the player from surviving their first night to smithing tools and weapons to challenging the endgame bosses. A handful of miscellaneous and completionist quests exist for the ambitious player looking to explore
                    everything every mod has to offer.
                </p>
                <img src={quest} className='w-50 align-self-center' alt="The first quest in TFC: TI" />
                <h3>Contributions</h3>
                <ul>
                    <li>Combined mods together to create a content-packed survival experience</li>
                    <li>Integrated content from multiple sources together using a scripting interface</li>
                    <li>Designed a quest system with over 200 quests to guide the player through the game's content</li>
                    <li>Tweaked over 50 new and existing structures and implemented them into a custom structure spawning system</li>
                    <li>Modified existing attributes of entities and objects to match the desired difficulty of the pack</li>
                    <li>Used JSON and custom configuration files to enhance the survival experience</li>
                    <li>Developed a custom addon mod using Java and Gradle to introduce additonal content</li>
                </ul>
            </Card>

            
        </div>
    )
}

export default TFC_TI