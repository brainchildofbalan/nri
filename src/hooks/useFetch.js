
const useFetch = async (path, options) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL_PRO_OPEN}${path}`, { ...options });
    return res.json()
};

export default useFetch;