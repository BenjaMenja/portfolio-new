function ImageFormat(props) {
    return (
        <div>
            <img src={props.source} width={props.smallwindow !== undefined ? visualViewport.width * 0.8 : visualViewport.width * 0.45} height={props.smallwindow !== undefined ? visualViewport.height * 0.35 : visualViewport.height * 0.5} style={{marginBottom: '1rem'}} alt='oops'/>
            <h5 style={{color: '#FFFFFF', marginBottom: '2rem'}}>{props.caption}</h5>
        </div>
    )
}

export default ImageFormat