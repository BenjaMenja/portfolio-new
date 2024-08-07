import {Button, Dropdown} from "reactstrap";
import {useEffect, useState} from "react";

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
            console.log("Width: " + width)
            console.log("Height: " + height)
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
                </div>
            </div>
        </>

    )
}

function NavbarDropdownItem(props) {
    return (
        <div className={'navbar-dropdown-item'} onClick={() => window.location.href = props.page}>
            {props.children}
        </div>
    )
}

function NavbarItem(props) {
    return (
        <div className={'navbar-item'} onClick={() => window.location.href = props.page}>
            {props.children}
        </div>
    )
}

export default MyNavbar