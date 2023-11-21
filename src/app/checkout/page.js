import CheckOutPage from "@components/components/pages/checkOutPage/checkOutPage"
import useFetch from "@components/hooks/useFetch";


export async function generateMetadata({ params }) {

    const options = { cache: "no-store" };
    const data = await useFetch(`/meta-data/checkout`, options);
    return {
        title: data && data.length > 0 ? data[0].site_title : `Nri's Life`,
        description: data && data.length > 0 ? data[0].site_description : `Nri's Life`,
        keywords: data && data.length > 0 ? data[0].site_keyword.split(', ') : `Nri's Life`,
        authors: [{ name: data && data.length > 0 ? data[0].site_keyword.split(', ') : `Nri's Life` }, { name: `NRI's Life`, url: 'https://nrilife.com' }],
        metadataBase: new URL('https://nrilife.com'),
        alternates: {
            canonical: '/',
            languages: {
                'en-US': '/en-US',
                'de-DE': '/de-DE',
            },
        },
        openGraph: {
            title: data && data.length > 0 ? data[0].site_title : `Nri's Life`,
            description: data && data.length > 0 ? data[0].site_description : `Nri's Life`,
            url: 'https://nrilife.com',
            siteName: `NRI's Life`,
            images: data && data.length > 0 && data[0].images ? `${process.env.NEXT_PUBLIC_APP_URL}/uploads/${data[0].filename}` : '/apple-touch-icon.png',
            locale: 'en_IN',
            type: 'website',
        },

        robots: {
            index: true,
            follow: true,
            nocache: true,
            googleBot: {
                index: true,
                follow: true,
            },
        },
    }
}

const checkout = () => {
    return (
        <>
            <CheckOutPage />
        </>
    )
}

export default checkout