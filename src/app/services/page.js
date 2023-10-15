import ServicesAndPackagesPage from "@components/components/pages/servicesAndPackages/servicesAndPackagesPage"
import useFetch from "@components/hooks/useFetch";

const services = async () => {
    const options = { cache: "no-store" };
    const data = await useFetch(`/services`, options);
    return (

        <ServicesAndPackagesPage total={data} />

    )
}

export default services