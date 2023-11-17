import React from 'react'
import useFetch from './useFetch';
import { useRouter } from 'next/navigation';
import { useApi } from './useApi';


export const useMakePayment = () => {
    const router = useRouter();
    const { api } = useApi()





    const makePayment = async ({ productId = null, invoice_id, clearCart, total, setIsLoading }) => {
        // Make API call to the serverless API
        const responseItem = await useFetch('/pay-now', {
            method: 'POST',
            body: JSON.stringify({ productId: 123, total: total }),
        });
        // const data = await responseItem.json();

        console.log(responseItem, ' data main');




        if (responseItem) {
            const options = {
                key: 'rzp_test_DDAJ0jv2qAS430',
                amount: (total * 100).toString(), // amount in paise (100 paise = 1 INR)
                currency: 'INR',
                name: 'Your Company',
                description: invoice_id,
                order_id: responseItem.id,
                handler: function (response) {
                    console.log(response);
                    // Handle the success response here
                    setIsLoading(false)
                    api
                        .post(`/cart-action/${invoice_id}`, { payer_details: response.razorpay_signature, order_id: response.razorpay_order_id, payment_status: 'paid' })
                        .then(function (response) {

                            router.push(`/success?order=${invoice_id}`);
                            if (clearCart) {
                                clearCart()

                            }
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                },
            };

            const rzp = new window.Razorpay(options);
            rzp.open();


            rzp.on("payment.failed", function (response) {
                setIsLoading(false)
                alert("Payment failed. Please try again. Contact support for help");
            });
        }




    };

    return {
        makePayment
    }
}
