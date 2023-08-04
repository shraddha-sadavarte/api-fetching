import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import GithubUsers from './GithubUsers';

const UseEffectApi = () => {

    const[users,setUsers] = useState([]);
    const[loading, setLoading] = useState(true);

    const getUsers = async () =>{
        try{
            const response = await fetch('https://api.github.com/users');
            setLoading(false);
            setUsers(await response.json());
        } catch(error) {
            setLoading(false);
            alert("Some internal error occurs");
        }
    }

    useEffect(() => {
        getUsers();
    }, []);

    if(loading){
        <Loading />
    }

  return (
    <>
      <GithubUsers users={users} />
    </>
  )
}

export default UseEffectApi
