
const useFetch = async (path, options) => {
    const res = await fetch(`http://api.nrilife.com/v1${path}`, { ...options });
    return res.json()
};

export default useFetch;