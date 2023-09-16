import React, { useState } from 'react'

export const useAddCartLocal = () => {
    const addCart = (data) => {
        localStorage.setItem('cartList', JSON.stringify(data))
    };
    return {
        addCart,
    }
}
