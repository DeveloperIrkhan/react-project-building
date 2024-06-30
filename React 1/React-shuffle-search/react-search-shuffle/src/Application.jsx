import React, { useCallback, useState } from 'react'
import FilterElement from './FilterElement';
const Application = () => {
    const AllUser = [
        "Irfan",
        "Shandana",
        "Adhan",
        "Ali",
        "Ahmad",
        "Hamza",
        "Salman",
        "Inam",
        "Fahad",
        "Usama",
    ]
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredUsers, setFilteredUsers] = useState(AllUser);
    // const handleSearchChange = useCallback((event) => {
    //     console.log("handleSearchChange")
    //     const value = event.target.value;
    //     setSearchTerm(value);
    //     const filtered = AllUser.filter(user =>
    //         user.includes(value)
    //     );
    //     setFilteredUsers(filtered);
    // },[])
    const handleSearchChange = (event) => {
        console.log("handleSearchChange")
        const value = event.target.value;
        setSearchTerm(value);
        const filtered = AllUser.filter(user =>
            user.includes(value)
        );
        setFilteredUsers(filtered);
    }
    const handleShuffle = () => {
        console.log("handleShuffle")
        const shuffledUsers = [...filteredUsers].sort(() => Math.random() - 0.5);
        setFilteredUsers(shuffledUsers);
    };
    return (
        <div className='w-full h-screen bg-blue-600'>
            <div className='grid place-items-center min-h-screen'>
                <div className="flex flex-col justify-center m-auto rounded-md 
            p-3 shadow-lg bg-slate-200 py-4 window-style">
                    <div className="flex shadow rounded-lg overflow-hidden">
                        <input
                            type="text"
                            name="inputbox"
                            value={searchTerm}
                            placeholder='enter name to search'
                            id="inputbox"
                            onChange={handleSearchChange}
                            className="block border-0 py-1 px-3 text-gray-900 w-full" />
                        <button onClick={handleShuffle}
                            className='outline-none bg-blue-500 text-white px-3 py-1 shrink-0 
            hover:bg-blue-700
          active:bg-blue-900 
            focus:outline-none focus:ring'>Shuffle</button>
                    </div>
                    {/* <FilterElement filteredUsers={filteredUsers}/> */}
                    <FilterElement filteredUsers = {filteredUsers}/>                        
                    <hr />

                </div>
            </div>
        </div >
    )
}

export default Application
