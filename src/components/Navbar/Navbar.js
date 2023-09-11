import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";

function MyNavbar() {
    return (
        <>
            <Navbar style={{
                background: '#000000',
                display: 'flex',
                height: '8.5vh',
                marginBottom: '5rem',
                fontSize: '1rem',
                alignItems: "center",
            }}>
                <NavbarBrand href="/" style={{
                    color: "#FFFFFF",
                    marginLeft: '5%',
                    fontSize: '1.5rem'
                }}>
                    Benjamin Gelinas
                </NavbarBrand>
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
                    <NavItem>
                        <NavLink href="/resume" style={{color: '#FFFFFF', fontSize: '1.5rem'}}>
                            Resume
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </>
    )
}

export default MyNavbar