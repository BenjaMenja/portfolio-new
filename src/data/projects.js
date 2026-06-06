import saucerimg from '../images/saucer-shoot.png'
import greatescapeimg from "../images/living_room_kitchen2.png";
import royalsiegelogo from "../images/royal-siege-logo.png";
import pokemonblitzimg from "../images/pokemon-blitz.png";
import mergemonasteryimg from "../images/merge-monastery-logo.png"
import colorclashimg from "../images/color-clash.png"
import blockleimg from "../images/blockle.png"
import tfclogo from '../images/tfc_logo.png'
import pokequiztitle from '../images/pokequiz-title.png'

export const projectList = [
      {
        title: 'Merge Monastery',
        imgsrc: mergemonasteryimg,
        desc: 'A merge game where you can merge seeds and plants to unlock garden structures to build your very own zen garden. Built in Unity and available in the Google Play and App store under the MassDiGi name.',
        project: 'merge-monastery',
        status: { publisher: 'MassDiGi', isDone: 'Yes', role: 'Programmer, Build Engineer', tools: 'C# / Unity, Miro, Fastlane', dates: 'September 2023 - January 2024' }
    },
    {
        title: 'Color Clash',
        imgsrc: colorclashimg,
        desc: 'A first person shooter game that follows a 1v1 deathmatch format. Earn more eliminations than your opponent to win, and paint the floor to enhance your movement! Part of a larger research project titled "Exploring Adaptive Time Delay in First Person Shooter Games".',
        project: 'color-clash',
        status: { isDone: 'Yes', role: 'Gameplay Programmer, Level Designer, Data Analyst', tools: 'C#, Python / Unity, Pandas, Matplotlib', dates: 'September 2023 - April 2024' }
    },
    {
        title: 'The Great Escape',
        imgsrc: greatescapeimg,
        desc: 'A third person stealth mission game where you play as a rebellious teenager who is determined to sneak out of the house to attend a party.',
        project: 'the-great-escape',
        status: { isDone: 'Yes', role: 'Programmer, Website Designer, Puzzle Designer', tools: 'Blueprints / Unreal Engine', dates: 'March 2023 - May 2023' }
    },
    {
        title: '2D C++ Game Engine',
        imgsrc: saucerimg,
        desc: "A 2D game engine capable of providing a code framework necessary to build ASCII text-based video games. Based off of Mark Claypool's game engine, Dragonfly.",
        project: 'game-engine',
        status: { isDone: 'Yes', role: 'Programmer', tools: 'C++ / Visual Studio', dates: 'January 2023 - March 2023' }
    },
    {
        title: 'PokeQuiz',
        imgsrc: pokequiztitle,
        desc: 'A quiz application centered around the Pokemon video game series. Test your knowledge of all things Pokemon!',
        project: 'pokequiz',
        status: { isDone: 'Yes', role: 'Programmer, Designer', tools: 'HTML, CSS, TypeScript / Angular, Tailwind, Chart.js', dates: 'March 2025 - April 2025' }
    },
    {
        title: 'Royal Siege',
        imgsrc: royalsiegelogo,
        imgwidth: '50%',
        desc: "A team-based MOBA game built in Minecraft using its mcfunction scripting language. Features 17 unique characters, five maps, two gamemodes, and original artwork and music. The game's direction and programming are lead by me.",
        project: 'royal-siege',
        status: { isDone: 'Yes', role: 'Lead Developer, Lead Programmer, Lead Map Designer', tools: 'mcfunction / Minecraft, Visual Studio Code, Blockbench', dates: 'December 2020 - January 2025' }
    },
    {
        title: 'TerraFirmaCraft: The Twilight Invasion',
        imgsrc: tfclogo,
        desc: 'A survival, technology, and combat focused modpack for Minecraft Forge 1.7.10. Features a collection of mods wrapped together with custom scripts, configurations, and addons to create a challenging but rewarding survival experience.',
        project: 'tfc-ti',
        status: { isDone: 'Yes', role: 'Developer, Programmer', tools: 'Java, ZenScript, JSON / Minecraft, Gradle', dates: 'February 2025 - March 2025' }
    },
    {
        title: 'Blockle',
        imgsrc: blockleimg,
        imgwidth: '50%',
        desc: 'A Wordle inspired guessing game where you have to guess the Minecraft block based on its properties.',
        project: 'blockle',
        status: { isDone: 'Yes', role: 'Programmer', tools: 'Typescript, React / Playwright', dates: 'November 2024 - December 2024' }
    },
    {
        title: 'Pokemon Blitz',
        imgsrc: pokemonblitzimg,
        imgwidth: '60%',
        desc: 'A bullet hell game made in the Dragonfly game engine. Features 3 playable Pokemon that players can maneuver through a course while dodging an endless wave of Pokeballs trying to capture you.',
        project: 'pokemon-blitz',
        status: { isDone: 'Yes', role: 'Programmer, ASCII Artist', tools: 'C++ / Visual Studio', dates: 'February 2023 - March 2023' }
    }
]