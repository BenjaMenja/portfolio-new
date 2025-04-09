import image from "../images/merge-monastery-logo.png"
import oldUI from "../images/merge-monastery-old-ui.webp"
import newUI from "../images/merge-monastery-new-ui.png"
import {Card} from "reactstrap";
import {useEffect, useState} from "react";

function MergeMonastery() {
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
            <h1 style={{color: '#FFFFFF', marginBottom: '3rem',marginTop: "5rem"}}>Merge Monastery</h1>
            {(width > 768) ? <img src={image} alt="Merge Monastery's Logo" width={'25%'} height={'auto'} style={{marginBottom: '5rem'}}/> :
                <img src={image} alt="Merge Monastery's Logo" width={visualViewport.width * 0.75} height={'auto'} style={{marginBottom: '5rem'}}/>}

            <Card className={'border-0'} style={{
                background: bgColor,
                color: '#FFFFFF',
                margin: 'auto',
                width: '80vw',
                textAlign: 'left'
            }}>
                <h3>Introduction</h3>
                <p><i>Merge Monastery </i>
                is a merge game built in Unity and played on mobile devices through the Google Play Store and App Store. The goal is to merge various seeds, plants, and garden objects together to earn Qi
                and unlock new objects within each seed category's line of items. Unlocking objects allows you to purchase them with generated qi to be able to use in the construction of your
                very own zen garden. The garden can be arranged in any way you like using any of the unlocked items from merging as 3D objects. The aim is to create a relaxing game of simply merging items together
                and creating a zen garden to your heart's desire.</p>
                <h3>Development</h3>
                <p>As a member of the Fall 2023 iteration of MassDiGi's Digi Studio program, our team was tasked with expanding upon the existing Merge Monastery game that was initially developed at MassDiGi during Summer 2023.
                The team was required to analyze and improve existing systems, introduce additional features and content, and fix any outstanding issues the game may have had. The program was run in a studio-like
                    configuration during the fall semester and winter break.</p>
                <h4>Themed Updates</h4>
                <p>Our team met early on in the program to brainstorm ideas for how to continue development of the game. We settled on making each major update centered around a theme. Since the program started right around the beginning of the fall season, we decided to make the first theme Fall. From there, our next theme
                    became Winter due to the Fall update being pushed out right around Thanksgiving, meaning winter was just around the corner. Our third and final update was not related to a season, but rather a rework to the 2D portion of the game's UI.
                </p>
                <h4>The UI Rework</h4>
                <p>As more and more items were added to the available items on the merge board, we quickly discovered that it would become too difficult to manage them all on a 5x5 grid. Although there was a trash slot to delete items from
                    the grid, we felt as if that was not sufficient to mitigating this problem. We decided to increase the size of the grid to 5x7 to make it easier to manage the new content. However, this meant that the grid would take up more screen space, leaving less or not enough room for other UI elements.
                    As a result of this, our UI designer drafted three possibilities for changes to the UI. After a full team meeting, we decided to implement the one that exists today.
                </p>
                <div className={"row row-cols-2 g-4 w-50 mx-auto"}>            
                    <img src={oldUI} alt="Old UI for Merge Monastery" width={'20%'}/>
                    <img src={newUI} alt="New UI for Merge Monastery" width={'20%'}/>
                </div>
                <i style={{textAlign: "center"}}>Left: UI before the rework - Right: UI after the rework</i>
                <h4>Bug Fixing</h4>
                <p>The first iteration of Merge Monastery was built in Summer 2023 as part of MassDiGi's Summer Innovation Program. As a result of this, some features either had issues or were unfinished. The engineering team was tasked with discovering and fixing these issues, preventing them from affecting our
                    new additions. This was a lengthy process, with many issues being difficult to trace due to poor documentation on some of the existing systems. However, the vast majority of outstanding bugs were eventually fixed over the course of the program, including
                    issues with merging, credits, item purchases, and misaligned grid spaces.
                </p>
                <h4>Building</h4>
                <p>
                    This project was my first exposure to building and deploying an application outside of simple hosting services such as <a href="https://glitch.com/">Glitch</a> or GitHub Pages. Due to this as well as the build process not being explained to me, the fall themed update had a bumpy road
                    before making it to the Apple and Google Play Stores. We used Unity Cloud Build, a continuous integration service that automates the build process for Unity applications. Fastlane was used to assist in automating the deployment process for Apple. For Android, Unity Cloud Build produced a .aab file,
                    which was uploaded to the Google Play Console. The games can be found on these stores under the MassDiGi publisher.
                </p>
                <h3>Contributions:</h3>
                <ul>
                    <li>Implemented 14 new 2D and 3D art assets</li>
                    <li>Integrated new assets to work with the existing merge and garden systems</li>
                    <li>Improved upon and cleaned up settings, credits, and merge scene UIs</li>
                    <li>Improved responsiveness for merging and selling objects</li>
                    <li>Fixed major and minor issues with existing code</li>
                    <li>Rebalanced shop prices</li>
                    <li>Restructured folder and asset naming scheme within the Unity project</li>
                    <li>Created builds using Unity Cloud Build and Fastlane and deployed builds to Google Play and App Stores</li>
                </ul>
            </Card>
        </>
    )
}

export default MergeMonastery