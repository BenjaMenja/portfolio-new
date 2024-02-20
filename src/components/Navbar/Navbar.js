import {Button, Dropdown, Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";
import {useEffect, useState} from "react";

function MyNavbar() {
    const [width, setWidth] = useState(window.innerWidth)
    const [dropdownOpen, setDropdownOpen] = useState(false)
    useEffect(() => {
        function handleResize() {
            const newwidth = window.innerWidth
            setWidth(newwidth)
        }
        window.addEventListener('resize', handleResize)
    }, [])
    return (
        <>
            {(width > 768) ? <Navbar className={'custom-navbar'}>
                <p className={'custom-navbar-name'}>
                    Benjamin Gelinas
                </p>
                <Nav className={"ms-auto"}>
                    <NavItem>
                        <NavLink href={"/"} style={{color: '#FFFFFF', fontSize: '1.5rem'}}>
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href={"/about"} style={{color: '#FFFFFF', fontSize: '1.5rem'}}>
                            About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/projects" style={{color: '#FFFFFF', fontSize: '1.5rem'}}>
                            Projects
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar> : <div className={'custom-navbar'}>
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

function NavbarDropdownItem(props) {
    return (
        <div className={'navbar-dropdown-item'} onClick={() => window.location.href = props.page}>
            {props.children}
        </div>
    )
}

export default MyNavbar