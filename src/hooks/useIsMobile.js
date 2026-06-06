import { useState, useEffect } from 'react'

export function useIsMobile(widthBreakpoint = 768, heightBreakpoint = 600) {
    const [isMobile, setIsMobile] = useState(
        window.innerWidth <= widthBreakpoint || window.innerHeight <= heightBreakpoint
    )

    useEffect(() => {
        const handleResize = () =>
            setIsMobile(window.innerWidth <= widthBreakpoint || window.innerHeight <= heightBreakpoint)

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [widthBreakpoint, heightBreakpoint])

    return isMobile
}