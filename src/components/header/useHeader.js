import React, { useState } from 'react'

export const useHeader = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [sideMenuOpen, setSideMenuOpen] = useState(false);
    return {
        menuOpen,
        setMenuOpen,
        sideMenuOpen,
        setSideMenuOpen
    }
}
