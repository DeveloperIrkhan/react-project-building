import React, { useEffect, useState } from 'react'

const ListValues = ({ getElements }) => {
    const [item, setItems] = useState([])
    useEffect(() => {
        console.log("updating Items")
        setItems(getElements())
    }, [getElements])
    return (
        <div>
            <ul>
                {item.map((value, index) => {
                    return (<li key={index}>{value}</li>)
                })}
            </ul>
        </div>
    )
}

export default ListValues
