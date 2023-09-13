import {Card, CardText, Col, Row} from "reactstrap";

function Languages(props) {
    let bgColor = 'rgba(0,0,0,0)'
    return (
        <div style={{
            marginBottom: props.margin
        }}>
            <h2 style={{marginBottom: '3rem'}}>Languages and Frameworks</h2>
            <Row xs='7' style={{
                marginBottom: '3rem'
            }}>
                <Col/>
                <Col>
                    <Card outline color="light" style={{
                        textAlign: "center",
                        background: bgColor
                    }}>
                        <CardText style={{
                            color: '#FFFFFF'
                        }}>
                            <svg fill="#FFFFFF" width="12.5vw" height="8.5vw" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <title>java</title>
                                <path d="M13.168 30.901c5.401 0.346 13.695-0.191 13.891-2.747 0 0-0.377 0.968-4.464 1.738-2.257 0.407-4.855 0.639-7.508 0.639-2.173 0-4.309-0.156-6.398-0.457l0.239 0.028c0-0.001 0.691 0.571 4.24 0.799zM19 1.004s3.117 3.117-2.955 7.91c-4.869 3.845-1.11 6.038-0.001 8.543-2.842-2.566-4.927-4.821-3.529-6.922 2.054-3.085 7.744-4.58 6.486-9.531zM22.393 22.978c5.627-2.924 3.025-5.735 1.21-5.355-0.249 0.047-0.465 0.107-0.674 0.182l0.030-0.009c0.119-0.167 0.283-0.296 0.474-0.369l0.007-0.002c3.593-1.263 6.356 3.725-1.16 5.701 0.046-0.041 0.084-0.090 0.111-0.145l0.001-0.003zM12.616 17.512s-5.451 1.295-1.929 1.764c0.948 0.078 2.052 0.122 3.166 0.122 1.424 0 2.831-0.073 4.218-0.214l-0.174 0.014c2.257-0.19 4.521-0.596 4.521-0.596-0.531 0.232-0.982 0.477-1.409 0.756l0.037-0.022c-5.535 1.456-16.228 0.779-13.149-0.71 1.357-0.703 2.963-1.115 4.665-1.115 0.019 0 0.038 0 0.057 0h-0.003zM25.16 26.627s0.849 0.699-0.933 1.238c-3.389 1.027-14.106 1.336-17.081 0.041-1.070-0.466 0.937-1.112 1.567-1.247 0.291-0.074 0.626-0.117 0.97-0.117 0.023 0 0.045 0 0.068 0.001l-0.003-0c-1.191-0.839-7.693 1.646-3.303 2.358 11.972 1.941 21.821-0.875 18.716-2.274zM17.395 15.344c0.314 0.377 0.505 0.868 0.505 1.402 0 0.719-0.346 1.358-0.88 1.759l-0.006 0.004s3.673-1.897 1.986-4.271c-1.576-2.214-2.784-3.314 3.758-7.108 0-0.001-10.267 2.563-5.363 8.214zM11.346 20.915s-1.285 0.951 0.677 1.155c0.859 0.108 1.852 0.169 2.86 0.169 1.826 0 3.605-0.202 5.315-0.585l-0.162 0.030c0.344 0.322 0.755 0.578 1.209 0.744l0.025 0.008c-7.097 2.076-15.004 0.162-9.925-1.522zM12.065 24.198s-1.146 0.667 0.816 0.892c0.719 0.107 1.548 0.168 2.392 0.168 1.354 0 2.671-0.157 3.934-0.455l-0.116 0.023c0.467 0.285 1.010 0.557 1.577 0.782l0.074 0.026c-5.872 2.516-13.287-0.147-8.676-1.436z"></path>
                            </svg>
                            <br></br>
                            Java
                        </CardText>
                    </Card>
                </Col>
                <Col>
                    <Card outline color="light" style={{
                        textAlign: "center",
                        background: bgColor
                    }}>
                        <CardText style={{
                            color: '#FFFFFF'
                        }}>
                            <svg fill="#FFFFFF " width="12.5vw" height="8.5vw" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <title>javascript</title>
                                <path d="M17.313 14.789h-2.809c0 2.422-0.011 4.829-0.011 7.254 0.033 0.329 0.051 0.712 0.051 1.099 0 0.81-0.081 1.601-0.236 2.365l0.013-0.076c-0.412 0.861-1.475 0.751-1.957 0.6-0.451-0.242-0.808-0.609-1.031-1.055l-0.006-0.014c-0.044-0.094-0.097-0.174-0.16-0.246l0.001 0.001-2.281 1.406c0.367 0.79 0.934 1.434 1.637 1.885l0.018 0.011c0.763 0.427 1.675 0.678 2.645 0.678 0.484 0 0.954-0.063 1.401-0.18l-0.038 0.009c0.988-0.248 1.793-0.89 2.254-1.744l0.009-0.019c0.359-0.914 0.566-1.973 0.566-3.080 0-0.388-0.026-0.77-0.075-1.145l0.005 0.044c0.015-2.567 0-5.135 0-7.722zM28.539 23.843c-0.219-1.368-1.11-2.518-3.753-3.59-0.92-0.431-1.942-0.731-2.246-1.425-0.063-0.158-0.099-0.341-0.099-0.532 0-0.124 0.015-0.244 0.044-0.359l-0.002 0.010c0.208-0.55 0.731-0.935 1.343-0.935 0.199 0 0.388 0.040 0.559 0.113l-0.009-0.004c0.552 0.19 0.988 0.594 1.215 1.112l0.005 0.013c1.292-0.845 1.292-0.845 2.193-1.406-0.216-0.369-0.459-0.689-0.734-0.977l0.002 0.002c-0.767-0.814-1.852-1.32-3.056-1.32-0.171 0-0.34 0.010-0.505 0.030l0.020-0.002-0.881 0.111c-0.856 0.194-1.587 0.639-2.133 1.252l-0.003 0.004c-0.535 0.665-0.859 1.519-0.859 2.449 0 1.279 0.613 2.415 1.56 3.131l0.010 0.007c1.706 1.275 4.2 1.555 4.519 2.755 0.3 1.462-1.087 1.931-2.457 1.762-0.957-0.218-1.741-0.83-2.184-1.652l-0.009-0.017-2.287 1.313c0.269 0.536 0.607 0.994 1.011 1.385l0.001 0.001c2.174 2.194 7.61 2.082 8.586-1.255 0.113-0.364 0.178-0.782 0.178-1.215 0-0.3-0.031-0.593-0.091-0.875l0.005 0.028zM1.004 1.004h29.991v29.991h-29.991z"></path>
                            </svg>
                            <br></br>
                            JavaScript
                        </CardText>
                    </Card>
                </Col>
                <Col>
                    <Card outline color="light" style={{
                        textAlign: "center",
                        background: bgColor
                    }}>
                        <CardText style={{
                            color: '#FFFFFF'
                        }}>
                            <svg fill="#FFFFFF" width="12.5vw" height="8.5vw" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <title>react</title>
                                <rect width="24" height="24" fill="none"/>
                                <path d="M12,10.11A1.87,1.87,0,1,1,10.13,12,1.88,1.88,0,0,1,12,10.11M7.37,20c.63.38,2-.2,3.6-1.7a24.22,24.22,0,0,1-1.51-1.9A22.7,22.7,0,0,1,7.06,16c-.51,2.14-.32,3.61.31,4m.71-5.74-.29-.51a7.91,7.91,0,0,0-.29.86c.27.06.57.11.88.16l-.3-.51m6.54-.76.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17,9,12.6,9,12,9s-1.17,0-1.71,0c-.29.47-.61.94-.91,1.47L8.57,12l.81,1.5c.3.53.62,1,.91,1.47.54,0,1.11,0,1.71,0s1.17,0,1.71,0c.29-.47.61-.94.91-1.47M12,6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0,10.44c.19-.22.39-.45.59-.72H11.41c.2.27.4.5.59.72M16.62,4c-.62-.38-2,.2-3.59,1.7a24.22,24.22,0,0,1,1.51,1.9,22.7,22.7,0,0,1,2.4.36c.51-2.14.32-3.61-.32-4m-.7,5.74.29.51a7.91,7.91,0,0,0,.29-.86c-.27-.06-.57-.11-.88-.16l.3.51m1.45-7c1.47.84,1.63,3.05,1,5.63,2.54.75,4.37,2,4.37,3.68s-1.83,2.93-4.37,3.68c.62,2.58.46,4.79-1,5.63s-3.45-.12-5.37-1.95c-1.92,1.83-3.91,2.79-5.38,1.95s-1.62-3-1-5.63c-2.54-.75-4.37-2-4.37-3.68S3.08,9.07,5.62,8.32c-.62-2.58-.46-4.79,1-5.63s3.46.12,5.38,1.95c1.92-1.83,3.91-2.79,5.37-1.95M17.08,12A22.51,22.51,0,0,1,18,14.26c2.1-.63,3.28-1.53,3.28-2.26S20.07,10.37,18,9.74A22.51,22.51,0,0,1,17.08,12M6.92,12A22.51,22.51,0,0,1,6,9.74c-2.1.63-3.28,1.53-3.28,2.26S3.93,13.63,6,14.26A22.51,22.51,0,0,1,6.92,12m9,2.26-.3.51c.31,0,.61-.1.88-.16a7.91,7.91,0,0,0-.29-.86l-.29.51M13,18.3c1.59,1.5,3,2.08,3.59,1.7s.83-1.82.32-4a22.7,22.7,0,0,1-2.4.36A24.22,24.22,0,0,1,13,18.3M8.08,9.74l.3-.51c-.31,0-.61.1-.88.16a7.91,7.91,0,0,0,.29.86l.29-.51M11,5.7C9.38,4.2,8,3.62,7.37,4s-.82,1.82-.31,4a22.7,22.7,0,0,1,2.4-.36A24.22,24.22,0,0,1,11,5.7Z"/>
                            </svg>
                            <br></br>
                            React
                        </CardText>
                    </Card>
                </Col>
                <Col>
                    <Card outline color="light" style={{
                        textAlign: "center",
                        background: bgColor
                    }}>
                        <CardText style={{
                            color: '#FFFFFF'
                        }}>
                            <svg width="12.5vw" height="8.5vw" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.1" d="M3 8C3 6.11438 3 5.17157 3.58579 4.58579C4.17157 4 5.11438 4 7 4H12H17C18.8856 4 19.8284 4 20.4142 4.58579C21 5.17157 21 6.11438 21 8V12V16C21 17.8856 21 18.8284 20.4142 19.4142C19.8284 20 18.8856 20 17 20H12H7C5.11438 20 4.17157 20 3.58579 19.4142C3 18.8284 3 17.8856 3 16V12V8Z" fill="#323232"/>
                                <path d="M13 15H16" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
                                <path d="M8 15L10.5 12.5V12.5C10.7761 12.2239 10.7761 11.7761 10.5 11.5V11.5L8 9" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M3 8C3 6.11438 3 5.17157 3.58579 4.58579C4.17157 4 5.11438 4 7 4H12H17C18.8856 4 19.8284 4 20.4142 4.58579C21 5.17157 21 6.11438 21 8V12V16C21 17.8856 21 18.8284 20.4142 19.4142C19.8284 20 18.8856 20 17 20H12H7C5.11438 20 4.17157 20 3.58579 19.4142C3 18.8284 3 17.8856 3 16V12V8Z" stroke="#FFFFFF" stroke-width="2" stroke-linejoin="round"/>
                            </svg>
                            <br></br>
                            C/C++
                        </CardText>
                    </Card>
                </Col>
                <Col>
                    <Card outline color="light" style={{
                        textAlign: "center",
                        background: bgColor
                    }}>
                        <CardText style={{
                            color: '#FFFFFF'
                        }}>
                            <svg fill="#FFFFFF" width="12.5vw" height="8.5vw" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><title>WebGL icon</title><path d="M18.928 14.179c-.214.09-.427.135-.643.135-.342 0-.65-.059-.923-.178a1.963 1.963 0 0 1-.69-.491c-.187-.209-.332-.453-.432-.735s-.149-.586-.149-.911c0-.335.05-.643.149-.93.1-.287.242-.536.429-.747a1.96 1.96 0 0 1 .69-.501 2.25 2.25 0 0 1 .923-.183c.23 0 .451.036.664.104.214.069.408.171.581.304s.316.299.427.496a1.7 1.7 0 0 1 .206.676h-.935c-.059-.249-.171-.437-.337-.562a.973.973 0 0 0-.607-.187c-.221 0-.408.043-.562.128s-.28.199-.375.344c-.095.145-.166.308-.209.491s-.066.372-.066.569c0 .187.021.37.066.548.043.178.114.337.209.479.095.142.221.256.375.342s.342.128.562.128c.325 0 .577-.083.754-.247.178-.164.28-.401.311-.714h-.987V11.8h1.872v2.413h-.624l-.1-.505a1.444 1.444 0 0 1-.579.471zm2.896-4.429v3.632H24v.828h-3.155V9.75h.979zM2.785 11.999c0-.709.343-1.376.948-1.962l1.109 4.221h.764l1.075-3.815 1.06 3.815h.766l1.321-4.856h-.86l-.861 3.725-1.039-3.726H6.28l-1.039 3.725-.84-3.632c1.489-1.025 3.868-1.69 6.548-1.69 2.512 0 4.764.529 6.261 1.445-1.632-1.535-4.565-2.612-7.915-2.614C4.161 6.635 0 9.036 0 11.999s4.161 5.367 9.293 5.367c3.338 0 6.261-1.075 7.9-2.6-1.497.911-3.741 1.428-6.244 1.428-4.51-.001-8.164-1.877-8.164-4.195zm9.194-.553a1.184 1.184 0 0 0-.444-.384 1.378 1.378 0 0 0-.622-.135c-.261 0-.496.047-.7.14a1.313 1.313 0 0 0-.489.387c-.244.311-.372.75-.372 1.269 0 .23.033.448.097.643a1.5 1.5 0 0 0 .285.515c.261.304.633.465 1.077.465.233 0 .422-.024.581-.074.138-.043.23-.1.306-.149a1.357 1.357 0 0 0 .444-.489c.09-.166.135-.323.145-.403l.007-.055h-.633l-.002.045c-.017.206-.287.574-.769.574-.688 0-.852-.498-.864-.937h2.306v-.05a3.15 3.15 0 0 0-.085-.766 1.84 1.84 0 0 0-.268-.596zm-1.139.05c.51 0 .783.275.833.84h-1.651c.025-.458.388-.84.818-.84zm4.678.415a1.575 1.575 0 0 0-.268-.515 1.25 1.25 0 0 0-.437-.346 1.36 1.36 0 0 0-.586-.126 1.141 1.141 0 0 0-.531.128 1.1 1.1 0 0 0-.346.28v-1.49h-.631v4.413h.6v-.301a.964.964 0 0 0 .211.206c.171.123.382.185.626.185.263 0 .501-.059.7-.176.178-.104.33-.254.448-.444a1.93 1.93 0 0 0 .235-.584 2.66 2.66 0 0 0 .069-.603 1.986 1.986 0 0 0-.09-.627zm-.567.717c0 .346-.069.636-.202.84a.682.682 0 0 1-.605.325c-.377 0-.819-.263-.819-1.008 0-.356.045-.631.135-.84.13-.301.351-.446.671-.446.342 0 .572.133.7.41.106.227.12.505.12.719z"/></svg>
                            <br></br>
                            WebGL
                        </CardText>
                    </Card>
                </Col>
                <Col/>
            </Row>
            <Row xs={'7'}>
                <Col/>
                <Col>
                    <Card outline color="light" style={{
                        textAlign: "center",
                        background: bgColor
                    }}>
                        <CardText style={{
                            color: '#FFFFFF'
                        }}>
                            <svg fill="#FFFFFF" width="12.5vw" height="8.5vw" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <title>Python</title>
                                <path d="M19.212 26.447l-0.287 0.412-0.1 0.512 0.1 0.512 0.287 0.412 0.412 0.287 0.512 0.1 0.512-0.1 0.412-0.287 0.287-0.412 0.1-0.512-0.1-0.512-0.287-0.412-0.412-0.287-0.512-0.1-0.512 0.1zM27.297 8.64l0.35 0.075 0.4 0.15 0.437 0.225 0.45 0.337 0.45 0.437 0.437 0.587 0.4 0.737 0.35 0.912 0.262 1.1 0.175 1.3 0.062 1.537-0.075 1.537-0.2 1.3-0.3 1.075-0.4 0.887-0.45 0.712-0.5 0.562-0.525 0.412-0.525 0.3-0.5 0.2-0.45 0.112-0.4 0.062-0.3 0.025-0.2-0.012h-10.272v1.025h7.298l0.012 3.449 0.025 0.45-0.062 0.425-0.137 0.387-0.212 0.362-0.312 0.312-0.387 0.3-0.475 0.25-0.55 0.212-0.637 0.187-0.725 0.162-0.8 0.112-0.887 0.087-0.962 0.050-1.050 0.012-1.587-0.050-1.337-0.175-1.125-0.25-0.912-0.312-0.737-0.375-0.562-0.412-0.425-0.425-0.312-0.425-0.2-0.412-0.125-0.375-0.050-0.312-0.025-0.25 0.012-0.162v-6.673l0.063-0.8 0.162-0.675 0.262-0.575 0.325-0.475 0.375-0.4 0.412-0.3 0.437-0.25 0.437-0.175 0.412-0.125 0.375-0.075 0.325-0.050 0.262-0.025 0.162-0.012h7.298l0.862-0.062 0.737-0.175 0.625-0.262 0.512-0.35 0.412-0.4 0.337-0.437 0.25-0.45 0.187-0.45 0.125-0.437 0.087-0.4 0.050-0.35 0.025-0.262v-3.824h2.612l0.175 0.012zM10.939 3.704l-0.287 0.412-0.1 0.512 0.1 0.512 0.287 0.425 0.412 0.275 0.512 0.112 0.512-0.113 0.412-0.275 0.287-0.425 0.1-0.512-0.1-0.512-0.287-0.412-0.412-0.275-0.512-0.112-0.512 0.112zM18.812 1.229l1.125 0.25 0.912 0.325 0.737 0.375 0.562 0.4 0.425 0.425 0.312 0.425 0.2 0.412 0.125 0.375 0.050 0.325 0.025 0.25-0.012 0.162v6.673l-0.062 0.787-0.162 0.687-0.262 0.575-0.325 0.475-0.375 0.387-0.412 0.312-0.437 0.237-0.437 0.175-0.412 0.125-0.375 0.087-0.325 0.050-0.263 0.025h-7.46l-0.862 0.062-0.737 0.175-0.625 0.275-0.512 0.337-0.412 0.4-0.337 0.437-0.25 0.45-0.187 0.462-0.125 0.437-0.087 0.4-0.050 0.337-0.025 0.262v3.824h-2.787l-0.262-0.037-0.35-0.087-0.4-0.15-0.437-0.225-0.45-0.325-0.45-0.45-0.437-0.575-0.4-0.737-0.35-0.912-0.262-1.1-0.175-1.312-0.062-1.537 0.075-1.524 0.2-1.3 0.3-1.087 0.4-0.887 0.45-0.712 0.5-0.55 0.525-0.412 0.525-0.3 0.5-0.2 0.45-0.125 0.4-0.062 0.3-0.012h0.2l0.075 0.012h10.197v-1.037h-7.298l-0.012-3.436-0.025-0.462 0.062-0.425 0.137-0.387 0.212-0.35 0.312-0.325 0.387-0.287 0.475-0.25 0.55-0.225 0.637-0.187 0.725-0.15 0.8-0.125 0.887-0.075 0.962-0.050 1.050-0.025 1.587 0.063z"></path>
                            </svg>
                            <br></br>
                            Python
                        </CardText>
                    </Card>
                </Col>
                <Col>
                    <Card outline color="light" style={{
                        textAlign: "center",
                        background: bgColor
                    }}>
                        <CardText style={{
                            color: '#FFFFFF'
                        }}>
                            <svg fill="#FFFFFF" width="12.5vw" height="8.5vw" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
                                <title>Redux</title>
                                <path d="M 24 2 C 16.832 2 11 10.292328 11 20.486328 C 11 25.581015 12.484998 30.154506 14.841797 33.492188 C 14.278671 34.225786 14 35.114721 14 36 C 14 36.972222 14.318681 37.957881 15.001953 38.726562 C 15.685226 39.495244 16.75 40 18 40 C 19.25 40 20.314774 39.495244 20.998047 38.726562 C 21.681319 37.957881 22 36.972222 22 36 C 22 35.027778 21.681319 34.042119 20.998047 33.273438 C 20.314774 32.504756 19.25 32 18 32 C 17.417923 32 16.88232 32.117915 16.400391 32.3125 C 14.317709 29.317793 13 25.144037 13 20.486328 C 13 11.395328 17.935 4 24 4 C 29.419 4 33.923219 9.9093906 34.824219 17.650391 C 35.531219 17.919391 36.232734 18.222641 36.927734 18.556641 C 36.246734 9.2666406 30.71 2 24 2 z M 22 15 C 20.75 15 19.685226 15.504756 19.001953 16.273438 C 18.318681 17.042119 18 18.027778 18 19 C 18 19.972222 18.318681 20.957881 19.001953 21.726562 C 19.685226 22.495244 20.75 23 22 23 C 23.25 23 24.314774 22.495244 24.998047 21.726562 C 25.425092 21.246137 25.694239 20.67767 25.847656 20.083984 C 29.425245 19.930128 33.445887 20.987107 37.142578 23.203125 C 45.036578 27.935125 49.012859 36.186703 46.005859 41.595703 C 44.931859 43.526703 43.056938 44.897594 40.585938 45.558594 C 37.123937 46.486594 32.8715 45.916078 28.8125 44.080078 C 28.2265 44.551078 27.60675 44.996734 26.96875 45.427734 C 30.29375 47.106734 33.8125 47.996094 37.0625 47.996094 C 38.4735 47.996094 39.833516 47.830234 41.103516 47.490234 C 44.110516 46.685234 46.410906 44.982406 47.753906 42.566406 C 51.277906 36.224406 46.978922 26.769281 38.169922 21.488281 C 34.19387 19.103202 29.825568 17.936523 25.886719 18.064453 C 25.744166 17.416386 25.4608 16.794034 24.998047 16.273438 C 24.314774 15.504756 23.25 15 22 15 z M 22 17 C 22.749999 17 23.185226 17.245244 23.501953 17.601562 C 23.81868 17.957881 24 18.472222 24 19 C 24 19.527778 23.81868 20.042119 23.501953 20.398438 C 23.185226 20.754756 22.749999 21 22 21 C 21.250001 21 20.814774 20.754756 20.498047 20.398438 C 20.18132 20.042119 20 19.527778 20 19 C 20 18.472222 20.18132 17.957881 20.498047 17.601562 C 20.814774 17.245244 21.250001 17 22 17 z M 9.1621094 23.332031 C 2.1981094 28.772031 -0.89795313 36.906406 2.2480469 42.566406 C 3.5910469 44.982406 5.8914375 46.683281 8.8984375 47.488281 C 10.169438 47.828281 11.528453 47.996094 12.939453 47.996094 C 16.739453 47.996094 20.911031 46.787719 24.707031 44.511719 C 29.262758 41.780488 32.543671 37.933128 34.212891 33.978516 C 35.367764 33.923167 36.355158 33.449812 36.998047 32.726562 C 37.681319 31.957881 38 30.972222 38 30 C 38 29.027778 37.681319 28.042118 36.998047 27.273438 C 36.314774 26.504756 35.25 26 34 26 C 32.75 26 31.685226 26.504756 31.001953 27.273438 C 30.318681 28.042119 30 29.027778 30 30 C 30 30.972222 30.318681 31.957882 31.001953 32.726562 C 31.334027 33.100145 31.760237 33.407648 32.25 33.628906 C 30.681548 37.037695 27.715244 40.376565 23.677734 42.796875 C 18.927734 45.645875 13.596062 46.678594 9.4140625 45.558594 C 6.9420625 44.896594 5.0690938 43.526703 3.9960938 41.595703 C 1.4540938 37.022703 3.9149531 30.427766 9.5019531 25.634766 C 9.3569531 24.883766 9.2441094 24.114031 9.1621094 23.332031 z M 34 28 C 34.749999 28 35.185226 28.245244 35.501953 28.601562 C 35.81868 28.957881 36 29.472222 36 30 C 36 30.527778 35.81868 31.042118 35.501953 31.398438 C 35.185226 31.754756 34.749999 32 34 32 C 33.250001 32 32.814774 31.754756 32.498047 31.398438 C 32.18132 31.042119 32 30.527778 32 30 C 32 29.472222 32.18132 28.957882 32.498047 28.601562 C 32.814774 28.245244 33.250001 28 34 28 z M 18 34 C 18.749999 34 19.185226 34.245244 19.501953 34.601562 C 19.81868 34.957881 20 35.472222 20 36 C 20 36.527778 19.81868 37.042119 19.501953 37.398438 C 19.185226 37.754756 18.749999 38 18 38 C 17.250001 38 16.814774 37.754756 16.498047 37.398438 C 16.18132 37.042119 16 36.527778 16 36 C 16 35.472222 16.18132 34.957881 16.498047 34.601562 C 16.814774 34.245244 17.250001 34 18 34 z"></path>
                            </svg>
                            <br></br>
                            Redux
                        </CardText>
                    </Card>
                </Col>
                <Col/>
                <Col>
                    <Card outline color="light" style={{
                        textAlign: "center",
                        background: bgColor
                    }}>
                        <CardText style={{
                            color: '#FFFFFF'
                        }}>
                            <svg fill="#FFFFFF" width="12.5vw" height="8.5vw" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
                                <title>C#</title>
                                <path d="M 25 2 C 24.285156 2 23.574219 2.179688 22.933594 2.539063 L 6.089844 12.003906 C 4.808594 12.726563 4 14.074219 4 15.535156 L 4 34.464844 C 4 35.929688 4.808594 37.277344 6.089844 38 L 22.933594 47.460938 C 24.214844 48.183594 25.785156 48.183594 27.066406 47.460938 L 43.910156 38 C 45.195313 37.277344 46 35.925781 46 34.464844 L 46 15.535156 C 46 14.074219 45.191406 12.726563 43.910156 12.003906 L 27.066406 2.539063 C 26.425781 2.179688 25.714844 2 25 2 Z M 25 4 C 25.375 4 25.753906 4.09375 26.089844 4.28125 L 42.933594 13.746094 C 43.601563 14.125 44 14.804688 44 15.535156 L 44 34.464844 C 44 35.195313 43.601563 35.875 42.929688 36.253906 L 26.089844 45.71875 C 25.417969 46.09375 24.582031 46.09375 23.910156 45.71875 L 7.070313 36.253906 C 6.398438 35.875 6 35.199219 6 34.464844 L 6 15.535156 C 6 14.804688 6.398438 14.125 7.070313 13.746094 L 23.910156 4.28125 C 24.246094 4.09375 24.625 4 25 4 Z M 25 12 C 17.839844 12 12 17.839844 12 25 C 12 32.160156 17.839844 38 25 38 C 29.089844 38 32.886719 36.09375 35.339844 32.863281 L 36.023438 31.960938 L 29.96875 28.453125 L 29.421875 29.046875 C 28.292969 30.28125 26.691406 31 25 31 C 21.683594 31 19 28.316406 19 25 C 19 21.683594 21.683594 19 25 19 C 26.691406 19 28.292969 19.71875 29.421875 20.953125 L 29.96875 21.546875 L 36.023438 18.039063 L 35.339844 17.136719 C 32.886719 13.90625 29.089844 12 25 12 Z M 25 14 C 28.074219 14 30.886719 15.316406 32.945313 17.511719 L 30.203125 19.097656 C 28.757813 17.832031 26.960938 17 25 17 C 20.597656 17 17 20.597656 17 25 C 17 29.402344 20.597656 33 25 33 C 26.960938 33 28.757813 32.167969 30.203125 30.902344 L 32.945313 32.488281 C 30.886719 34.683594 28.074219 36 25 36 C 18.925781 36 14 31.074219 14 25 C 14 18.925781 18.925781 14 25 14 Z M 35 20 L 35 22 L 33 22 L 33 24 L 35 24 L 35 26 L 33 26 L 33 28 L 35 28 L 35 30 L 37 30 L 37 28 L 39 28 L 39 30 L 41 30 L 41 28 L 43 28 L 43 26 L 41 26 L 41 24 L 43 24 L 43 22 L 41 22 L 41 20 L 39 20 L 39 22 L 37 22 L 37 20 Z M 37 24 L 39 24 L 39 26 L 37 26 Z"></path>
                            </svg>
                            <br></br>
                            C#
                        </CardText>
                    </Card>
                </Col>
                <Col>
                    <Card outline color="light" style={{
                        textAlign: "center",
                        background: bgColor
                    }}>
                        <CardText style={{
                            color: '#FFFFFF'
                        }}>
                            <svg fill="#FFFFFF" width="12.5vw" height="8.5vw" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24">
                                <path d="M 2 14.769531 C 2 9.433594 6.980469 4.117188 11.65625 3 C 11.65625 3 9.585938 4.644531 9.585938 5.769531 C 9.585938 8.019531 10.964844 7.152344 10.964844 7.152344 C 10.964844 7.152344 10.964844 15.574219 10.964844 16.152344 C 10.964844 16.734375 11.585938 16.847656 12.34375 16.847656 C 13.101563 16.847656 14.414063 15.917969 14.414063 15.917969 C 14.414063 15.917969 14.414063 9.335938 14.414063 8.539063 C 14.414063 7.742188 13.472656 6.839844 13.035156 6.460938 C 14.203125 6.460938 15.101563 7.152344 15.101563 7.152344 C 15.101563 7.152344 15.992188 5.421875 19.929688 4.386719 C 19.332031 5.148438 17.882813 7.195313 17.882813 7.886719 C 17.882813 8.574219 17.863281 15.320313 17.863281 15.71875 C 17.863281 16.117188 18.332031 16.152344 18.621094 16.152344 C 18.910156 16.152344 20.503906 15.734375 22 14.078125 C 22 14.582031 19.507813 18.339844 16.484375 20.308594 L 14.414063 18.230469 L 12.34375 21 C 12.34375 21 8.109375 20.492188 6.136719 17.539063 C 6.671875 17.617188 7.515625 17.679688 7.515625 16.847656 C 7.515625 16.011719 7.515625 10.46875 7.515625 9.921875 C 7.515625 9.378906 7.265625 9.125 6.792969 9.125 C 6.324219 9.125 4.542969 10.265625 2 14.769531 Z"></path>
                            </svg>
                            <br></br>
                            Blueprints
                        </CardText>
                    </Card>
                </Col>
                <Col/>
            </Row>
        </div>
    )
}

export default Languages