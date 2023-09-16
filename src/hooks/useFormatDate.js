export const useFormatDate = () => {

    const formatDate = (date) => {
        const day = new Date(date).getMonth() + 1;
        const month = new Date(date).getDate();
        const year = new Date(date).getFullYear();
        return `${day}/${month}/${year}`
    }



    return {
        formatDate
    }
}
