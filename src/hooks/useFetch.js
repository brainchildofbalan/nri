
const useFetch = async (path, options) => {
    const res = await fetch(`http://localhost:5000/v1${path}`, { ...options });
    return res.json()
};

export default useFetch;