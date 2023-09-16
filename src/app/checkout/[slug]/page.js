"use client"
import CheckOutPage from '@components/components/pages/checkOutPage/checkOutPage';
import useFetch from '@components/hooks/useFetch';
import { useParams } from 'next/navigation'


const checkout = async () => {
    const params = useParams();
    const data = await useFetch(`/order/${params.slug}`);
    console.log(data);

    return (
        <CheckOutPage data={data} />
    )
}

export default checkout