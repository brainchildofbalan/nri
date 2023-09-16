import React, { useState } from 'react'

export const useServiceList = ({ categorized }) => {
    const [openServiceList, setOpenServiceList] = useState(false);
    const [activeList, setActiveList] = useState([]);
    const [activeId, setActiveId] = useState();

    const handleChangeList = (id) => {
        const listedData = categorized.filter(item => item.category_id === id)
        setActiveList(listedData[0].category_data);
        setOpenServiceList(true)
    }
    return {
        openServiceList,
        setOpenServiceList,
        handleChangeList,
        activeList
    }
}
