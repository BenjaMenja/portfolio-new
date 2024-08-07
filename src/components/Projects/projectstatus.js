

function ProjectStatus(props) {
    return (
        <div style={{color: '#000000', textAlign: ((props.width > 768 && props.height > 600) ? 'left' : 'center'), fontSize: '1.5rem'}}>
            <p style={{marginLeft: ((props.width > 768 && props.height > 600) ? '0' : '5vw'), marginRight: ((props.width > 768 && props.height > 600) ? '0' : '5vw')}}>
                {(props.publisher !== undefined) && <><b>Publisher:</b> {props.publisher}</>} <br></br>
                <b>Role:</b> {props.role} <br></br>
                <b>Languages/Tools Used:</b> {props.tools} <br></br>
                <b>Project Finished:</b> {props.isDone} <br></br>
                <b>Start/End:</b> {props.dates} <br></br>
            </p>
        </div>
    )
}

export default ProjectStatus