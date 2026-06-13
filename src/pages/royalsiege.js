import image from "../images/royal-siege-gallery/tdm.png"
import {Card} from "reactstrap";
import { useIsMobile } from "../hooks/useIsMobile";
import { defaultCardStyle } from "../components/shared/cardStyle";

function RoyalSiege() {    
    return (
        <div>
            <h1 style={{color: '#FFFFFF', marginBottom: '3rem',marginTop: "5rem"}}>Royal Siege</h1>
            <img src={image} alt="A screenshot of the aqueducts and billboard of Colosseum, a Team Deathmatch map." width={useIsMobile() ? '75%' : '33%'} height={'auto'} style={{marginBottom: '3rem'}}/>
            <Card className={'border-0'} style={defaultCardStyle()}>
                <p><i>Royal Siege </i>
                    is a team-based MOBA game built in <i>Minecraft</i> using the game's <a href="https://minecraft.wiki/w/Data_pack">data pack</a> and <a href="https://minecraft.wiki/w/Resource_pack">resource pack</a> system.
                    The goal of the game is to slay the opposing team's king using your character's unique set of weapons, abilities, and shops.
                </p>
                <h3>
                    Introduction/Inspiration
                </h3>
                <p>
                    Royal Siege draws inspiration from popular competitive hero games such as <i>Overwatch</i> and <i>League of Legends</i>, where players compete against each other in teams to complete game objectives.
                    Its primary inspiration, however, was a short-lived minigame on the once popular <i>Minecraft</i> server <a href="https://mineplex.com/">Mineplex</a>, <i>Heroes of Gwen</i>. After its shutdown in 2018,
                    I began prototyping my take on the genre using the same medium as the minigame I once enjoyed. However, base Minecraft's tools for making a game of this nature are very limited. I knew I needed a way
                    to introduce additional features to the game to achieve the intended results. At the time, my nonexistent knowledge of programming steered me away from exploring Minecraft's advanced modding scene and
                    towards its limited but more approachable command system. After a long and rough prototyping process, I decided to put down the project until December 2020. At this point, the command system had greatly evolved into
                    a more structured tool to use. This paired with my college studies beginning allowed me to tackle the project once more and build it out into what it is today.
                </p>
                <h3>
                    Features
                </h3>
                <p>
                    To create an engaging, competitive team experience, many features are adapted from existing competitive team games. However, each one has its own flavor added to it from a combination of
                    my own ideas as well as to fit the game within the constraints of Minecraft.
                </p>
                <h4>
                    General Gameplay Loop
                </h4>
                <p>
                    Royal Siege follows a simple core gameplay loop: Defeat's the opposing team's King first. Players start a match by pressing a button that randomizes teams and allows them to choose their character.
                    All players choose their character at the same time, and players are free to swap teams with an opposing player if they so choose. Once all players have chosen, the match will start.
                    Players are transported to their respective bases on the battlefield, where they can begin to complete game objectives and engage in combat. If players are eliminated, they must wait to respawn back at their base.
                    Players can complete tasks outside of battling, such as strategize with their team, exchange money using the banking system, and position themselves accordingly to better prepare themselves for victory.
                </p>
                <h4>
                    Combat
                </h4>
                <p>
                    Since Royal Siege is developed within Minecraft, it naturally adapts the game's existing combat system. Additional combat elements are layered on top of the base game's combat to provide a fresh gameplay experience.
                    Every character follows a similar structure that players can utilize to gain an advantage in combat:
                </p>
                <ul>
                    <li>Base armor and weapon(s).</li>
                    <li>A set of base abilities.</li>
                    <li>A single passive ability that can be upgraded.</li>
                    <li>One of two selectable ultimate abilities.</li>
                    <li>A set of items available in the character's shop that can be purchased throughout a round.</li>
                </ul>
                <p>
                    Basic combat follows Minecraft's combat system, in which players swing at each other with primarily melee weapons that have quick cooldowns. Some characters also have ranged weapons and shields that can provide an advantage.<br /><br />

                    Damage is sorted into categories that align with Minecraft's existing damage types. Abilities can either deal melee, projectile, explosive, fire, or magic damage, and armor can protect against general damage at a lower potency,
                    or specific damage types at a higher potency. Players must use their knowledge of these damage types and work with their team to target the right opponents and gain the upper hand in a battle.<br /><br />
                    
                    Abilities encompass a wide variety of ways to supplement your basic attacks. Abilities can fire projectiles, heal teammates, inhibit enemies, create summons, and move you around the battlefield, just to name a few.
                    Each ability has a cooldown that is always displayed on screen. Some characters focus on pure Minecraft mechanics, while others rely on successful ability usage.<br /><br />

                    Ultimate abilities are powerful abilities that have a much longer cooldown that normal abilities, but can quickly turn the tide of battle. Each character has two potential ultimates, but must select one to use throughout a match.
                </p>
                <h4>
                    Currency
                </h4>
                <p>
                    Royal Siege features a currency system that players and teams can utilize to power up throughout a match. This currency, known in game as <i>Siege Bucks</i>, can be obtained passively over time or by depositing
                    drops from fallen players. This currency is stored in a player's account, and can be traded amongst their team through the game's bank GUI. Siege bucks are primarily used at the in-game shop.
                    Each character has their own special shop where players can purchase unique items to elevate their character's abilities and combat stats.<br/><br/>

                    The currency and shop system aim to give each match a more dynamic feel and to make characters have more expression. While custom weapons and abilities already achieve this, the shop allows for players
                    to play the same character in a multitude of ways, further expanding upon their existing tools. 
                </p>
                <h4>
                    Menus
                </h4>
                <p>
                    Throughout Royal Siege's development, the menus have undergone significant transformations. The menus serve as the player's primary way to interact with the game's non-combat systems. The in game settings, character
                    information pages, shops, and quick actions are all accessible with a simple hotkey press. Due to certain in-game limitations, many game features are available on the menu at once, and some buttons are simply not interactable
                    depending on the state of the game. For example, the shops are always visible, but players may not enter them unless they are actively in a match. However, the simplicity of a single button press allows players to 
                    quickly access important game elements in the blink of an eye.
                </p>
                <h4>
                    Gamemodes and Maps
                </h4>
                <p>
                    Royal Siege features 5 playable maps, spread across two gamemodes. Classic mode is the original intended gameplay experience, where teams fight together to take down the opposing team's king.
                    The maps for classic are designed to provide a very loose lane style avenue for combat. Team deathmatch serves as a way to quickly jump into battle, where the goal is to simply reach the required amount of kills
                    before the other team. The maps for team deathmatch are designed in a more arena-like fashion, with many scattered features to battle in.
                </p>
                <h4>
                    Lobby
                </h4>
                <p>
                    Before a match is initiated, players are placed in the lobby. The lobby features a handful of locations to familiarize players with the game, adjust game settings, and view overall match statistics.
                    Other activities are in place to allow players to pass the time if everyone hasn't arrived yet. Players can test their skills on an obstacle course, try out characters at the practice range,
                    or check out the character themed hotel rooms.
                </p>

                <h3>Contributions:</h3>
                <ul>
                    <li>Designed 17 unique characters and all major gameplay features</li>
                    <li>Designed 2 of the 5 playable maps</li>
                    <li>Integrated over 200 art assets for character abilities, map elements, and general decoration</li>
                    <li>Programmed all gameplay features. This includes, but is not limited to: Combat, Shops, Lobby Functionality, Menus, and Scoreboards</li>
                    <li>Organized playtest sessions to receive targeted feedback on all aspects of the game</li>
                    <li>Implemented suggestions and additions based on results from playtests</li>
                </ul>
            </Card>
        </div>
    )
}

export default RoyalSiege