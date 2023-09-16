import { useApi } from '@components/hooks/useApi';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export const useCheckout = ({ amount }) => {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("idle");
    const [payerDetails, setPayerDetails] = useState([]);
    const [ErrorMessage, setErrorMessage] = useState("");
    const [orderID, setOrderID] = useState(false);
    const { api } = useApi()
    const params = useParams();
    const router = useRouter();




    // creates a paypal order
    const createOrder = (data, actions) => {
        return actions.order
            .create({
                purchase_units: [
                    {
                        description: "Sunflower",
                        amount: {
                            currency_code: "USD",
                            value: amount,
                        },
                    },
                ],
            })
            .then((orderID) => {
                setOrderID(orderID);
                return orderID;
            });
    };

    // check Approval
    const onApprove = (data, actions) => {
        return actions.order.capture().then(function (details) {
            const { payer: payer_details } = details;
            setPayerDetails(payer_details)
            setStatus('success');
        });
    };

    //capture likely error
    const onError = (data, actions) => {
        setStatus('error');

    };


    const onCancel = () => {
        setStatus('canceled');

    }

    useEffect(() => {
        if (status === 'success') {
            api
                .post(`/cart-action/${params.slug}`, { payer_details: payerDetails, order_id: orderID, payment_status: 'paid' })
                .then(function (response) {

                    router.push(`/success?order=${params.slug}`);
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else if (status === 'error') {
            api
                .post(`/cart-action/${params.slug}`, { order_id: orderID, payment_status: 'error-unpaid' })
                .then(function (response) {
                    router.push('/error');
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        else if (status === 'canceled') {
            api
                .post(`/cart-action/${params.slug}`, { order_id: orderID, payment_status: 'canceled' })
                .then(function (response) {
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }, [status]);
    return {
        createOrder,
        onApprove,
        onError,
        loading,
        setLoading,
        onCancel
    }
}
