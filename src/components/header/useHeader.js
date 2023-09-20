import React, { useEffect, useState } from 'react'

export const useHeader = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [sideMenuOpen, setSideMenuOpen] = useState(false);
    const [isHeaderHide, setIsHeaderHide] = useState(false);
    useEffect(() => {
        window?.addEventListener("scroll", (e) => {
            if (window.scrollY > 100) {
                !isHeaderHide && setIsHeaderHide(true)
            }
            else {
                isHeaderHide && setIsHeaderHide(false)
            }
        })
    }, [isHeaderHide]);

    return {
        menuOpen,
        setMenuOpen,
        sideMenuOpen,
        setSideMenuOpen,
        isHeaderHide
    }
}
