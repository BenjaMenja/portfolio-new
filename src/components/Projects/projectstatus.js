

function ProjectStatus(props) {
    return (
        <div style={{color: '#000000', textAlign: 'left', fontSize: '1.5rem'}}>
            <p>
                <b>Team Size:</b> {props.teamsize} <br></br>
                <b>Role:</b> {props.role} <br></br>
                <b>Project Finished:</b> {props.isDone} <br></br>
                <b>Start/End:</b> {props.dates} <br></br>
                <b>Languages/Tools Used:</b> {props.tools} <br></br>
            </p>
        </div>
    )
}

export default ProjectStatus