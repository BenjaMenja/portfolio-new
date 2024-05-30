import {Button, Card} from "reactstrap";
import {useEffect, useState} from "react";

function MiniProject(props) {
    let bgColor = 'rgba(136, 196, 236, 1)'
    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
        function handleResize() {
            const newwidth = window.innerWidth
            setWidth(newwidth)
            console.log(newwidth)
        }
        window.addEventListener('resize', handleResize)
    }, [])
    return (
        <>
            <Card className={'shadow-lg'} outline color="light" style={{
                width: '80%',
                height: '100%',
                marginLeft: '10%',
                textAlign: 'center',
                backgroundColor: bgColor,
                border: 'none'
            }}>
                <h2 style={{marginBottom: '1rem', marginTop: '1rem'}}>{props.title}</h2>
                <table style={{width: '100%', tableLayout: 'fixed'}}>
                    <tr>
                        <td>
                            <img src={props.imgsrc} width={'60%'} height={'auto'} alt={"Missing"}/>
                        </td>
                        <td>
                            <p style={{textAlign: 'left'}}>{props.desc}</p>
                            {(props.download) && <Button color={'primary'} onClick={() => {
                                window.location.href = props.download
                            }} style={{width: '33%'}}>
                                {props.downloadtext ? props.downloadtext : "Download"}
                            </Button>}
                        </td>
                    </tr>
                </table>
            </Card>
        </>
    )
}

export default MiniProject