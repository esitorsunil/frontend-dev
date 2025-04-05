import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants';
import axios from 'axios';

const Connections = () => {

    const fetchConnections = async () => {
        try {
            const res = await axios.get(BASE_URL + "/user/connection", {
                withCredentials: true,
            });
            console.log(res);
        } catch (err) {
            
        }
    }

    useEffect(() => {
        fetchConnections();
    }, [])
  return (
    <div>Connections</div>
  )
}

export default Connections