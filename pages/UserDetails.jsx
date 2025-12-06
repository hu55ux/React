import React from 'react';
import { useState } from 'react';
import { useTokens } from "../store/tokenStore"

const UserDetails = () => {
    const [user, setUser] = useState({});
    const { accesToken } = useTokens();

    const getUserInfo = async () => {
        try {
            const response = await fetch("https://ilkinibadov.com/api/v1/auth/me", {
                headers: {
                    Authorization: `Bearer ${accesToken}`
                }
            })
            if (response.ok) {
                const data = await response.json();
                setUser(data);
            }
        } catch (error) {
            console.error("Error fetching user info:", error);
        }
    }

    useEffect(() => {
        getUserInfo()
    }, [])

    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <h1 className='text-4xl font-bold'>User Details Page</h1>
            <p>This is where user details will be displayed.</p>
        </div>
    );
}
export default UserDetails;