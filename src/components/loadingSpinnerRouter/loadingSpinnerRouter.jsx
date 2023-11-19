'use client'
import { useEffect, useState } from 'react';
import { } from 'next/navigation';


const LoadingSpinnerRouter = () => {

    const [loading, setLoading] = useState(false);
    const router = useRouter();


    useEffect(() => {
        const handleStart = () => setLoading(true);
        const handleComplete = () => setLoading(false);
        router.
            router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);

        // Remove event listeners on component unmount
        return () => {
            router.events.off('routeChangeStart', handleStart);
            router.events.off('routeChangeComplete', handleComplete);
            router.events.off('routeChangeError', handleComplete);
        };
    }, [router]);





    return (
        <div className='fixed left-0 top-0 w-[100vw] z-[9999]'>
            <div className={`loader`}></div>
        </div>
    )
}

export default LoadingSpinnerRouter