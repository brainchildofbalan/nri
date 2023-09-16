import ServicesAndPackagesPage from "@components/components/pages/servicesAndPackages/servicesAndPackagesPage"
import useFetch from "@components/hooks/useFetch";

const services = async () => {
    const data = await useFetch(`/services-categories`);
    return (

        <ServicesAndPackagesPage {...data} />

    )
}

export default services