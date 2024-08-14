import {Button, Dropdown} from "reactstrap";
import {useEffect, useState} from "react";
import PDF from "../../pdf/Ben-Gelinas-Resume.pdf"

function MyNavbar() {
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)
    const [scroll, setScroll] = useState(window.scrollY)
    const [dropdownOpen, setDropdownOpen] = useState(false)
    useEffect(() => {
        function handleResize() {
            const newwidth = window.innerWidth
            const newheight = window.innerHeight
            setWidth(newwidth)
            setHeight(newheight)
        }

        function handleScroll() {
            const newScroll = window.scrollY
            setScroll(newScroll)
        }

        window.addEventListener('resize', handleResize)
        window.addEventListener('scroll', handleScroll)
    }, [])
    return (
        <>
            {(width > 768 && height > 600) ? <>
                    <LargeNavbar scroll={scroll}/>
                </>
                 : <div className={'custom-navbar'}>
                    <div className={'custom-navbar-name'}>
                        <b>Ben Gelinas</b><br/>
                        <div className={"custom-navbar-subtitle"}>Game Programmer & Computer Scientist</div>
                    </div>
                <Button style={{background: '#000000', border: '0px'}} onClick={() => setDropdownOpen(!dropdownOpen)}>
                    <i className={'bi bi-list'}></i>
                </Button>
                {dropdownOpen && <Dropdown className={"small-dropdown"}>
                    <NavbarDropdownItem page={'/'}>
                        Home
                    </NavbarDropdownItem>
                    <NavbarDropdownItem page={'/about'}>
                        About
                    </NavbarDropdownItem>
                    <NavbarDropdownItem page={'/projects'}>
                        Projects
                    </NavbarDropdownItem>
                    <NavbarDropdownItem>
                        <a style={{color: "white", textDecoration: "none"}} href={PDF} target={"_blank"} rel={"noreferrer noopener"}>Resume</a>
                    </NavbarDropdownItem>
                </Dropdown>}
            </div>}

        </>
    )
}

function LargeNavbar() {
    return (
        <>
            <div className={'custom-navbar'}>
                <div className={'custom-navbar-name'}>
                    <b>Ben Gelinas</b><br/>
                    <div className={"custom-navbar-subtitle"}>Game Programmer & Computer Scientist</div>
                </div>
                <div className={'custom-navbar-nav'}>
                    <NavbarItem page={'/'}>
                        Home
                    </NavbarItem>
                    <NavbarItem page={'/about'}>
                        About
                    </NavbarItem>
                    <NavbarItem page={'/projects'}>
                        Projects
                    </NavbarItem>
                    <NavbarItem>
                        <a style={{color: "white", textDecoration: "none"}} href={PDF} target={"_blank"} rel={"noreferrer noopener"}>Resume</a>
                    </NavbarItem>
                </div>
            </div>
        </>

    )
}

function NavbarDropdownItem(props) {
    return (
        <>
            {(props.page !== undefined) ? <div className={'navbar-dropdown-item'} onClick={() => window.location.href = props.page}>
                {props.children}
            </div> : <div className={'navbar-dropdown-item'}>
                {props.children}
            </div>}
        </>
    )
}

function NavbarItem(props) {
    return (
        <>
            {(props.page !== undefined) ? <div className={'navbar-item'} onClick={() => window.location.href = props.page}>
                {props.children}
            </div> : <div className={'navbar-item'}>
                {props.children}
            </div>}
        </>
    )
}

export default MyNavbar