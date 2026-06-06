import {Button, Card} from "reactstrap";
import { useIsMobile } from "../../hooks/useIsMobile";

const miniCardStyle = {
    width: '80%',
    height: '100%',
    marginLeft: '10%',
    textAlign: 'center',
    backgroundColor: 'rgba(136, 196, 236, 1)',
    border: 'none'
}

function MiniProject(props) {

    const { title, imgsrc, desc, download, downloadtext } = props

    const downloadButton = download && (
        <Button color="primary" href={download} style={{ width: '33%', color: 'white' }}>
            {downloadtext ?? 'Download'}
        </Button>
    )

    return (
        <Card
            className="shadow-lg project"
            outline
            color="light"
            style={{ ...miniCardStyle, marginBottom: useIsMobile() ? '5rem' : undefined }}
        >
            <h2 style={{ margin: '1rem 0' }}>{title}</h2>

            <table style={{ width: '100%', tableLayout: 'fixed' }}>
                <tbody>
                    {useIsMobile() ? (
                        <>
                            <tr>
                                <td>
                                    <img src={imgsrc} width="60%" height="auto" alt="Missing" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p style={{ textAlign: 'left', padding: '0 1rem' }}>{desc}</p>
                                    {downloadButton}
                                </td>
                            </tr>
                        </>
                    ) : (
                        <tr>
                            <td>
                                <img src={imgsrc} width="75%" height="auto" alt="Missing" />
                            </td>
                            <td>
                                <p style={{ textAlign: 'left', padding: '0 1rem' }}>{desc}</p>
                                {downloadButton}
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </Card>
    )
}

export default MiniProject