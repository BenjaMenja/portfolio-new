import { Button, Dropdown } from "reactstrap";
import { useIsMobile } from "../../hooks/useIsMobile";
import { useState } from "react";
import PDF from "../../pdf/Ben-Gelinas-Resume.pdf";

const NAV_LINKS = [
    { label: 'Home', page: '/' },
    { label: 'About', page: '/about' },
    { label: 'Projects', page: '/projects' },
    {
        label: (
            <a style={{ color: 'white', textDecoration: 'none' }} href={PDF} target="_blank" rel="noreferrer noopener">
                Resume
            </a>
        )
    }
]

function NavbarBrand() {
    return (
        <div className="custom-navbar-name">
            <b>Ben Gelinas</b>
            <br />
            <div className="custom-navbar-subtitle">Software Developer & Game Programmer</div>
        </div>
    )
}

function NavbarLink({ page, className, children }) {
    return (
        <div className={className}>
            {page ? <a href={page}>{children}</a> : children}
        </div>
    )
}

function LargeNavbar() {
    return (
        <div className="custom-navbar">
            <NavbarBrand />
            <div className="custom-navbar-nav">
                {NAV_LINKS.map(({ label, page }) => (
                    <NavbarLink key={page ?? 'resume'} page={page} className="navbar-item">
                        {label}
                    </NavbarLink>
                ))}
            </div>
        </div>
    )
}

function SmallNavbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false)

    return (
        <div className="custom-navbar">
            <NavbarBrand />
            <Button
                style={{ background: '#000000', border: '0px' }}
                onClick={() => setDropdownOpen(prev => !prev)}
            >
                <i className="bi bi-list" />
            </Button>
            {dropdownOpen && (
                <Dropdown className="small-dropdown">
                    {NAV_LINKS.map(({ label, page }) => (
                        <NavbarLink key={page ?? 'resume'} page={page} className="navbar-dropdown-item">
                            {label}
                        </NavbarLink>
                    ))}
                </Dropdown>
            )}
        </div>
    )
}

function MyNavbar() {
    const isMobile = useIsMobile()

    return isMobile ? <SmallNavbar /> : <LargeNavbar />
}

export default MyNavbar;
