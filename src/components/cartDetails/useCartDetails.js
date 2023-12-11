import { cartState } from "@components/hooks/state";
import { useApi } from "@components/hooks/useApi";
import { useFormatDate } from "@components/hooks/useFormatDate";
import { useMakePayment } from "@components/hooks/useMakePayment";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import * as Yup from 'yup';
// const TAX_PERCENTAGE = 6;
const TAX_PERCENTAGE = 18;
export const useCartDetails = () => {
    const [userData, setUserData] = useState([]);
    const [cartList, setCartList] = useState([]);
    const [postageList, setPostageList] = useState([]);
    const [hasPostage, setHasPostage] = useState(false);
    const [cartLogin, setCartLogin] = useState(false);
    const [totalAmountSub, setTotalAmountSub] = useState(0);
    const [postageAmount, setPostageAmount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const totalAmount = Number(totalAmountSub) + Number(calculateValue(TAX_PERCENTAGE, totalAmountSub) + postageAmount);
    const { api } = useApi()
    const { formatDate } = useFormatDate()
    const [cart, setCart] = useRecoilState(cartState);
    const { makePayment } = useMakePayment()

    console.log(cart);
    const validationSchema = Yup.object().shape({
        email_address: Yup.string().email('Invalid email address').required('Email is required'),
        user_name: Yup.string().required('User name is required'),
        date_of_birth: Yup.string().required('Date of birth is required'),
        number: Yup.string().required('Mobile number is required'),
        address: Yup.string().required('Address is required'),
        order_postage: hasPostage && Yup.string().required('Choose postage'),
    });


    console.log(userData);
    const initialValues = {
        email_address: userData?.email_address || '',
        user_name: userData?.user_name || '',
        date_of_birth: userData?.date_of_birth || '',
        number: userData?.number || '',
        address: userData?.address || '',
        order_postage: userData?.order_postage || '',
    };

    const handleSubmitFrom = (values, errors) => {
        // Handle form submission here
        const date_of_birth_formatted = values.dob && formatDate(values.date_of_birth)
        setIsLoading(true)
        console.log(values);
        api
            .post("/cart", {
                ...values,
                date_of_birth_formatted,
                order_amount_sub: totalAmountSub,
                cartList,
                userData
            })
            .then(function (response) {
                if (response?.data?.insertedId) {
                    //TODO payment functionality
                    // makePayment({ productId: "nri_cart", invoice_id: response?.data?.insertedId, clearCart: clearCartSuccess, total: totalAmount, setIsLoading })
                    clearCartSuccess();
                    router.push('/success');

                }
                else {
                    console.log(`error`);
                }
            })
            .catch(function (error) {
                console.log(error);
            });

    };







    function calculateValue(percentage, number) {
        return Math.round((Number(percentage) / 100) * Number(number));
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Perform localStorage action
            // const item = localStorage.getItem('cartList')

        }
        setCartList(cart);
    }, [cart]);


    const clearCart = () => {
        localStorage.removeItem('cartList')
        setCartList([]);
        setCart([])
        router.push('/services');
    }


    const clearCartSuccess = () => {
        localStorage.removeItem('cartList')
        setCartList([]);
        setCart([])
    }



    useEffect(() => {

        const getUserToken = localStorage.getItem("token");
        const getUserId = localStorage.getItem("user_identity");
        console.log(getUserId, getUserToken);
        if (getUserId) {
            api
                .get(`/current-user/${getUserId}`, {
                    headers: {
                        Authorization: getUserToken || ''
                    }
                })
                .then(function (response) {
                    setUserData(response.data);

                })
                .catch(function (error) {
                    console.log(error);
                });
        }


    }, [cartLogin]);

    useEffect(() => {
        console.log(cartList);
        const sum = cartList?.length !== 0 && cartList?.reduce((accumulator, currentValue) => {
            return Number(accumulator) + Number(currentValue.price);
        }, 0);
        // const sum = 10;
        setTotalAmountSub(sum)
    }, [cartList, totalAmountSub]);


    const handleDelete = (id) => {

        const newCart = cart.filter(item => item !== cart[id])
        setCart(newCart);
        localStorage.setItem('cartList', JSON.stringify(newCart))
        // setCart
    }

    useEffect(() => {
        api
            .get(`/postage`,)
            .then(function (response) {
                setPostageList(response.data);

            })
            .catch(function (error) {
                console.log(error);
            });



    }, []);


    useEffect(() => {

        const hasPostageLength = cart && cart.filter(item => item.title.category_postage === "true").length > 0
        setHasPostage(hasPostageLength)

    }, [cart]);


    const handlePostage = (e) => {
        setPostageAmount(Number(JSON.parse(e.target.value).price))
    }



    return {
        cartList,
        totalAmountSub,
        taxPercentage: calculateValue(TAX_PERCENTAGE, totalAmountSub),
        totalAmount,
        validationSchema,
        initialValues,
        handleSubmitFrom,
        handleDelete,
        cartLogin,
        setCartLogin,
        userData,
        setUserData,
        clearCart,
        makePayment,
        isLoading,
        hasPostage,
        postageList,
        handlePostage,
        postageAmount
    }
}
