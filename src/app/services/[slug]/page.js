"use client"
import ServiceDetails from '@components/components/pages/serviceDetails';
import useFetch from '@components/hooks/useFetch';
import { useParams } from 'next/navigation'
import React from 'react'

const services = async () => {
    const params = useParams();
    // console.log(params.slug);
    const data = await useFetch(`/service/${params.slug}`);
    return (
        <>
            <ServiceDetails data={data} />
        </>
    )
}

export default services