import PrivacyPolicyPage from '@components/components/pages/PrivacyPolicyPage'
import useFetch from '@components/hooks/useFetch';
import React from 'react'

export async function generateMetadata({ params }) {

    const options = { cache: "no-store" };
    const data = await useFetch(`/meta-data/privacy-policy`, options);
    return {
        title: data && data.length > 0 ? data[0].site_title : `NRI Life`,
        description: data && data.length > 0 ? data[0].site_description : `NRI Life`,
        keywords: data && data.length > 0 ? data[0].site_keyword.split(', ') : `NRI Life`,
        authors: [{ name: data && data.length > 0 ? data[0].site_keyword.split(', ') : `NRI Life` }, { name: `NRI Life`, url: 'https://nrilife.com' }],
        metadataBase: new URL('https://nrilife.com'),
        alternates: {
            canonical: '/',
            languages: {
                'en-US': '/en-US',
                'de-DE': '/de-DE',
            },
        },
        openGraph: {
            title: data && data.length > 0 ? data[0].site_title : `NRI Life`,
            description: data && data.length > 0 ? data[0].site_description : `NRI Life`,
            url: 'https://nrilife.com',
            siteName: `NRI Life`,
            images: (data && data.length > 0 && data[0].image.length > 0) ? `${process.env.NEXT_PUBLIC_APP_URL}/uploads/${data[0].image[0].filename}` : '/apple-touch-icon.png',
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

const PrivacyPolicy = () => {
    return (
        <PrivacyPolicyPage />
    )
}

export default PrivacyPolicy