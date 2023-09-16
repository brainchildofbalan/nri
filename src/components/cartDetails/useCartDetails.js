import { cartState } from "@components/hooks/state";
import { useApi } from "@components/hooks/useApi";
import { useFormatDate } from "@components/hooks/useFormatDate";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
const TAX_PERCENTAGE = 6;
import * as Yup from 'yup';

export const useCartDetails = () => {
    const [userData, setUserData] = useState([]);
    const [cartList, setCartList] = useState([]);
    const [cartLogin, setCartLogin] = useState(false);
    const [totalAmountSub, setTotalAmountSub] = useState(0);
    const router = useRouter();
    const totalAmount = Number(totalAmountSub) + Number(calculateValue(TAX_PERCENTAGE, totalAmountSub));
    const { api } = useApi()
    const { formatDate } = useFormatDate()
    const [cart, setCart] = useRecoilState(cartState);
    console.log(cart);
    const validationSchema = Yup.object().shape({
        email_address: Yup.string().email('Invalid email address').required('Email is required'),
        user_name: Yup.string().required('User name is required'),
        date_of_birth: Yup.string().required('Date of birth is required'),
        number: Yup.string().required('Mobile number is required'),
    });


    console.log(userData);
    const initialValues = {
        email_address: userData.email_address || '',
        user_name: userData.user_name || '',
        date_of_birth: userData.date_of_birth || '',
        number: userData.number || '',
    };

    const handleSubmitFrom = (values, errors) => {
        // Handle form submission here
        const date_of_birth_formatted = values.dob && formatDate(values.date_of_birth)
        console.log(values);
        api
            .post("/cart", {
                ...values,
                date_of_birth_formatted,
                tax_amount: calculateValue(TAX_PERCENTAGE, totalAmountSub).toFixed(2),
                order_amount: totalAmount,
                order_amount_sub: totalAmountSub,
                cartList,
                userData
            })
            .then(function (response) {
                if (response?.data?.insertedId) {
                    router.push(`/checkout/${response?.data?.insertedId}`);
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
        return (Number(percentage) / 100) * Number(number);
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Perform localStorage action
            // const item = localStorage.getItem('cartList')

        }
        setCartList(cart);
    }, [cart]);



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


    return {
        cartList,
        totalAmountSub,
        taxPercentage: calculateValue(TAX_PERCENTAGE, totalAmountSub).toFixed(2),
        totalAmount,
        validationSchema,
        initialValues,
        handleSubmitFrom,
        handleDelete,
        cartLogin,
        setCartLogin,
        userData,
        setUserData
    }
}
