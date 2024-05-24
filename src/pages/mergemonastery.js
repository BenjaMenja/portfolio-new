import image from "../images/merge-monastery-logo.png"
import {Card} from "reactstrap";
import {useEffect, useState} from "react";

function MergeMonastery() {
    let bgColor = 'rgba(0,0,0,0)'
    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
    }, [])
    return (
        <>
            <h1 style={{color: '#FFFFFF', marginBottom: '3rem',marginTop: "5rem"}}>Merge Monastery</h1>
            {(width > 768) ? <img src={image} alt="Uh oh" width={visualViewport.width * 0.3} height={visualViewport.height * 0.3} style={{marginBottom: '5rem'}}/> :
                <img src={image} alt="Uh oh" width={visualViewport.width * 0.9} height={visualViewport.height * 0.4} style={{marginBottom: '5rem'}}/>}

            <Card className={'border-0'} style={{
                background: bgColor,
                color: '#FFFFFF',
                marginLeft: '15vw',
                width: '70vw',
                textAlign: 'left'
            }}>
                <p><i>Merge Monastery </i>
                is a merge game built in Unity and played on mobile devices through the Google Play Store and App Store. The goal is to merge various seeds, plants, and garden objects together to earn Qi
                and unlock new objects within each seed category's line of items. Unlocking objects allows you to purchase them with generated qi to be able to use in the construction of your
                very own zen garden. The garden can be arranged in any way you like using any of the unlocked items from merging as 3D objects. The aim is to create a relaxing game of simply merging items together
                and creating a zen garden to your heart's desire.<br/><br/></p>

                <p>As a member of the Fall 2023 iteration of MassDiGi's Digi Studio program, our team was tasked with expanding upon the existing Merge Monastery game that was initially developed at MassDiGi during Summer 2023.
                The team was required to analyze and improve existing systems, introduce additional features and content, and fix any outstanding issues the game may have had. The program was run in a studio-like
                    configuration during the fall semester and winter break.<br/><br/></p>
                <p>As the lead programmer for the team during the Digi Studio program, I contributed heavily to fixing outstanding bugs, implementing art assets from the art team, and improving upon areas of the project
                    that were not fully finalized by the end of the summer. I also took charge of creating builds of the game and making sure they successfully made it to the Google Play and App Stores.<br/><br/></p>

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