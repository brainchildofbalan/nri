"use client"
import SuccessPage from "@components/components/pages/sucessPage/successPage";
import useFetch from "@components/hooks/useFetch";
import { useSearchParams } from "next/navigation";


const success = async () => {
    const searchParams = useSearchParams();
    const search = searchParams.get("order");
    const options = { cache: "no-store" };
    const data = await useFetch(`/order/${search}`, options);


    return (
        <>
            <SuccessPage data={data} />
        </>
    )
}

export default success