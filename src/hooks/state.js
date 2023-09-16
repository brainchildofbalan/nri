// state.js
import { atom } from 'recoil';

const initialValue = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('cartList')) || [];

export const cartState = atom({
    key: 'cartState',
    default: initialValue,
});