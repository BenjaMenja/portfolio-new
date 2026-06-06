function ProjectStatus(props) {

    const { role, tools, publisher, isDone, dates, isMobile } = props

    return (
        <div style={{color: '#000000', textAlign: (isMobile ? 'left' : 'center'), fontSize: '1.5rem'}}>
            <p style={{marginLeft: (isMobile ? '0' : '5vw'), marginRight: (isMobile ? '0' : '5vw')}}>
                {(publisher !== undefined) && <><b>Publisher:</b> {publisher}</>} <br></br>
                <b>Role:</b> {role} <br></br>
                <b>Languages/Tools Used:</b> {tools} <br></br>
                <b>Project Finished:</b> {isDone} <br></br>
                <b>Start/End:</b> {dates} <br></br>
            </p>
        </div>
    )
}

export default ProjectStatus