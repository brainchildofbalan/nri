import { useApi } from '@components/hooks/useApi';
import React, { useEffect, useState } from 'react'
import * as Yup from 'yup';

export const useContactUsPage = () => {
    const { api } = useApi()
    const [success, setSuccess] = useState(false);


    useEffect(() => {
        if (success) {
            setTimeout(() => {
                setSuccess(false)
            }, 3000);
        }
    }, [success]);

    const validationSchema = Yup.object().shape({
        user_name: Yup.string().required('Email is required'),
        user_number: Yup.string().required('Email is required'),
        user_email: Yup.string().required('Email is required'),
        user_message: Yup.string(),

    });

    const initialValues = {
        user_name: '',
        user_number: '',
        user_email: '',
        user_message: '',
    };

    const handleSubmitFrom = (values, { resetForm }) => {
        const formData = new FormData();
        formData.append("user_name", values.user_name);
        formData.append("user_number", values.user_number);
        formData.append("user_email", values.user_email);
        formData.append("user_message", values.user_message);
        api
            .post("/enquiry", formData)
            .then(function (response) {
                resetForm()
                if (response.data.success) {
                    setSuccess(true);
                }
            })
            .catch(function (error) {
                console.log(error);

            });

    }
    return {
        initialValues,
        handleSubmitFrom,
        validationSchema,
        success
    }
}
