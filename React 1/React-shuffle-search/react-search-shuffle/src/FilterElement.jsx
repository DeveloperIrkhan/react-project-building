import React from 'react'

const FilterElement = ({filteredUsers}) => {
    return (
        <div>
            {filteredUsers.length > 0 ? (filteredUsers.map((uesr, index) => {
                return (<h2 key={index}>{uesr}</h2>)
            })) : (<h4>no result found</h4>)
            }
        </div>
    )
}

export default FilterElement
