"use client"
import { useCartDetails } from "@components/components/cartDetails/useCartDetails";
import { cartState } from "@components/hooks/state";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

export const useServiceDetails = () => {


    const [cart, setCart] = useRecoilState(cartState);
    const { cartList: localCart } = useCartDetails()
    const router = useRouter();
    const handleBuyNow = (item) => {
        const { category_id, price, category_name } = item;
        const title = {
            category_id,
            category_name
        }
        const isListExist = localCart || []
        // const isListExist = localCart ? localCart : cart
        setCart([...isListExist, { title, price }]);
        router.push('/cart');

    }







    return {
        handleBuyNow,
    }
}
