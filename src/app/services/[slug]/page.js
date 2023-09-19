"use client"
import ServiceDetails from '@components/components/pages/serviceDetails';
import useFetch from '@components/hooks/useFetch';
import { useParams } from 'next/navigation'
import React from 'react'

const services = async ({ params }) => {
    // const params = useParams();
    // // console.log(params.slug);
    const options = { cache: "no-store" };
    const data = await useFetch(`/service/${params.slug}`, options);
    return (
        <>
            <ServiceDetails data={data} />
        </>
    )
}

export default services