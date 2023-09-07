import React, { useState } from 'react'

export const useHeader = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return {
        menuOpen,
        setMenuOpen
    }
}
