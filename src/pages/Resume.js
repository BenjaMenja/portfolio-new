import resumeimg from '../images/resume.png'

function Resume() {
    return (
        <>
            <h1 style={{color: '#FFFFFF', paddingBottom: '4rem',marginTop: "5rem"}}>Resume</h1>
            <img src={resumeimg} alt={""} width={'40%'} height={'auto'}/>
        </>
    )
}

export default Resume