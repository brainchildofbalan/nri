import { cartState } from "@components/hooks/state";
import { useAddCartLocal } from "@components/hooks/useAddCartLocal";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { useCartDetails } from "../cartDetails/useCartDetails";
import { useRouter } from "next/navigation";


export const userServiceCard = () => {
    const [cart, setCart] = useRecoilState(cartState);
    const { cartList: localCart } = useCartDetails()
    const router = useRouter();

    const { addCart, cartList } = useAddCartLocal()
    const handleAddCart = (item) => {
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
    useEffect(() => {
        if (cart.length !== 0) {
            addCart(cart)
        }
    }, [cart]);





    return {
        handleAddCart
    }
}
