import React, { useEffect } from 'react'
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom';
const GithubPage = () => {
    const followers = useLoaderData()
    // const [followers, setfollowers] = useState([]);
    const [loading, setLoading] = useState(true);
    // const url = "https://api.github.com/users/DeveloperIrkhan"
    // useEffect(() => {
    //     setLoading(true)
    //     fetch(url)
    //         .then(response => response.json())
    //         .then(data => {
    //             setfollowers(data)
    //             console.log(data)
    //             setLoading(false)
    //         })
    //         .catch((error) => {
    //             console.error('Error fetching data:', error)
    //             setLoading(true)
    //         });
    // }, [])
    console.log(followers)
    return (
        <div className='text-center p-3 my-5'>
            <div className='text-2xl'>
                <img className='m-auto' width={200} src={followers.avatar_url}
                    alt='profile image' />
                <a target='_blank' href={followers.html_url}>Click here goto Gitub profile Link</a>
            </div>
            <h3>Fullname: {followers.name}</h3>
            <h3>GitHub Username: {followers.login}</h3>
            <h3>User's company: {followers.company}</h3>
            <h3>My followers: {followers.followers}</h3>
        </div>
    )
}

export default GithubPage


export const GithubProfile = async () => {
    const response = await fetch("https://api.github.com/users/DeveloperIrkhan")
    return response
}