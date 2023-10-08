import AboutUsPage from "@components/components/pages/AboutUsPage"
import useFetch from "@components/hooks/useFetch";

const AboutUs = async () => {
    const options = { cache: "no-store" };
    const data = await useFetch(`/services-categories`, options);

    return (
        <AboutUsPage data={data} />
    )
}

export default AboutUs