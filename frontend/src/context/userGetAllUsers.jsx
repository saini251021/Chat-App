import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import axios from 'axios'

function useGetAllUsers() {
    const [allUsers, setAllUsers] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        const getUsers = async () => {
            setLoading(true)
            try {
                const token = Cookies.get("jwt")
                const response = await axios.get("http://localhost:4002/user/allusers", { withCredentials: true, headers: { Authorization: `Bearer ${token}` } });

                // console.log("Response from server:", response.data);
                setAllUsers(response.data)
            }
            catch (error) {
                console.error("Error fetching users:", error);
            } finally {
                setLoading(false);
            }
        };
        getUsers();
    }, []);
return [allUsers, loading];
};

export default useGetAllUsers