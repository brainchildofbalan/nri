import React from 'react'
import useFetch from './useFetch';
import { useRouter } from 'next/navigation';
import { useApi } from './useApi';


export const useMakePayment = () => {
    const router = useRouter();
    const { api } = useApi()
    const makePayment = async ({ productId = null, invoice_id, clearCart }) => {
        // Make API call to the serverless API



        const data = await useFetch(`/pay-now`, {
            method: "POST",
            body: JSON.stringify({ productId: 123 }),
        })


        const options = {
            name: data.name,
            currency: data.currency,
            amount: data.amount,
            order_id: data.id,
            description: data.amountDesc,
            // image: logoBase64,
            handler: function (response) {
                // Validate payment at server - using webhooks is a better idea.
                // alert(response.razorpay_payment_id);
                // alert(response.razorpay_order_id);
                // alert(response.razorpay_signature);


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
            prefill: {
                name: "John Doe",
                email: "jdoe@example.com",
                contact: "9876543210",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();

        paymentObject.on("payment.failed", function (response) {
            alert("Payment failed. Please try again. Contact support for help");
        });

    };

    return {
        makePayment
    }
}
