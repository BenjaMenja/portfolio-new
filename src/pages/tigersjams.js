import { Card } from "reactstrap";
import { useIsMobile } from "../hooks/useIsMobile";
import { defaultCardStyle, defaultProjectHeaderStyle } from "../components/shared/sharedStyles";
import image from "../images/tigers-jams-admin.png"

function TigersJams() {    
    return (
        <div>
            <h1 style={defaultProjectHeaderStyle()}>Tiger's Jams</h1>
            <img src={image} className='align-self-center' alt="A screenshot of the aqueducts and billboard of Colosseum, a Team Deathmatch map." width={useIsMobile() ? '75%' : '33%'} height={'auto'} style={{marginBottom: "3rem"}}/>
            <Card className={'border-0'} style={defaultCardStyle()}>
                <p><i>Tiger's Jams </i>
                    is a small dual Python project, consisting of a <a href="https://discord.com/">Discord</a> bot that plays music from a local music collection and a database app that provides additional data about songs via REST APIs. 
                    The two apps run locally and communicate with each other to provide a group listening experience for members in a discord voice call.<br/>
                    The bot can be found <a href="https://github.com/BenjaMenja/tigers-jams-bot">here</a> and the database app can be found <a href="https://github.com/BenjaMenja/song-library">here</a>.
                </p>
                <h3>
                    Introduction/Inspiration
                </h3>
                <p>
                    Discord bots are bot users that can be programmed to do a wide variety of tasks, from handling administrative tasks to simulating games via text channels. 
                    One important category of discord bots was the music bot, a bot that could load audio tracks and play them through a voice channel. 
                    The project began due to the crackdown of these bots, which often pulled the audio information from YouTube. 
                    As these bots slowly began to disappear over time, Discord rolled out the activity feature and featured a YouTube activity, where users could join the activity and play videos via a built-in YouTube player. 
                    However, this also became quite cumbersome to use over time, primarily due to constant poor UI changes, playback limits, and of course, relentless advertisements.
                    As a result of this, I had the inspiration to create a version of a music bot that runs purely locally and avoids many of the grievances with past and present group listening experiences.<br/>
                    (The nickname comes from a friend group's inside joke, the same friend group that brought up the idea for this in the first place!)
                </p>
                <h3>
                    Discord Bot
                </h3>
                <p>
                    The primarily bulk of this project comes from the discord bot. The bot's primary function is to play a shuffled playlist of songs from an .env specified directory. 
                    Users can interface with the bot via Discord slash commands to control playback and get information about current and upcoming songs. The bot supports the following commands, all of which must be used by a user in a voice channel:
                    <ul>
                        <li>/join - Joins the user's voice channel.</li>
                        <li>/leave - Leaves the user's voice channel.</li>
                        <li>/play - Queues all audio files in the specified directory into a playlist. By default, shuffle is enabled, but users can use a parameter to change this.</li>
                        <li>/skip - Skips the current song. The bot sends a message with the song that was skipped and the new song that will play.</li>
                        <li>/stop - Stops playback. Also fully empties the playlist.</li>
                        <li>/shuffle - Changes whether the playlist is shuffled or not.</li>
                        <li>/queue - Shows the next 10 songs that will play.</li>
                        <li>/np - Shows what the current active song is.</li>
                        <li>/search - Searches the database app for a song. If multiple options are returned, the user can click one from a menu. The song that ends up being added will be added to a special queue that plays before the rest of the playlist, or instantly if the playlist is not active.
                            Users can search by song title, artist, and source media.
                        </li>
                    </ul>
                    The bot also supports removing itself from inactive voice channels by listening for voice channel events, particularly when people leave the channel. If no non-bot users are in the channel, it will start a timer. 
                    When the timer finishes and there is still no one there, it will disconnect from the channel.
                </p>
                <h3>
                    Song Library Database
                </h3>
                <p>
                    As I began to use the discord bot, a friend approached me with the idea of being able to search for songs to play in the playlist. Since this is a pretty standard feature of past and current music bots, I figured this would be a fair enough feature to add.
                    However, since many of the audio files we personally used had names of varying formats and languages, searching by the file name would simply not be enough. Additional data attached to each file would be necessary to provide a better searching experience. 
                    As a result of this, I created the Song Library, a Django app that contains a database model for songs. A song object has the following schema:
                    <ul>
                        <li>File Path - The path to the file. This is the unique key, and is typically generated through a management command.</li>
                        <li>Title - The name of the file, without the directory it is in.</li>
                        <li>Search Title - A searchable name for the song.</li>
                        <li>Artist - The artst / composer of the song. Optional and can be left blank if unknown.</li>
                        <li>Source Media - The source of the song. Optional and can be left blank if unknown or doesn't really have a source (e.g. It is a single).</li>
                        <li>Aliases - Optional aliases that the song might be known by that are different from the title.</li>
                    </ul>
                </p>
                <h4>Views</h4>
                <p>
                    To support the search feature, the app makes use of the Django rest framework package to allow the bot to request the additional data for a particular song. Given a combination of a title, artist, and source request,
                    the view will respond with a list of all songs that contain the queries as substrings.
                </p>
                <h4>Collaboration</h4>
                <p>
                    At the time of creating the song library app, my version of the bot had amassed over one thousand songs. Manually adding the additional information myself would have taken quite a long time. As a result of this, the app makes use of the
                    Django import export package. This package allows all song objects to be exported as a single .csv file. This file can be then be uploaded to something such as Google Drive to allow the information to be filled out in a collaborative way.
                </p>
            </Card>
        </div>
    )
}

export default TigersJams