function ProjectStatus(props) {

    const { role, tools, publisher, dates } = props

    return (
        <div style={{color: '#000000', textAlign: "left", fontSize: '1.5rem'}}>
            <p>
                {(publisher !== undefined) && <><b>Publisher:</b> {publisher}</>} <br></br>
                <b>Role:</b> {role} <br></br>
                <b>Languages/Tools Used:</b> {tools} <br></br>
                <b>Start/End:</b> {dates} <br></br>
            </p>
        </div>
    )
}

export default ProjectStatus