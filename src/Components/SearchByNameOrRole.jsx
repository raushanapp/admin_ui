import { Input } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import axios from "axios"
function SearchByNameOrRole() {
    const [search, setSearch] = useState('');
    const [user, setUser] = useState([]);
    const searchUser = () => {
        console.log("first enter",search)
        let newUser = user?.length>0 && user.filter((el) =>  el.name===search ||el.role===search || el.email===search);
        setUser(newUser);
        setSearch('')
        console.log(newUser, "newUser");
    };
    const handleFetch = (e) => {
        if (e.key === "Enter") {
            axios.get(`https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json`)
                .then((res) => setUser(res.data))
            .catch((error)=>setUser(error))
            // console.log(search);
            console.log("fetch data")
            searchUser()
        }
    }
console.log(user,"user")
    return (
      <>
          <Input
              placeholder='Search by name email or role'
              type="text"
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
              onKeyPress={handleFetch}
          />
      </>
  )
}

export default SearchByNameOrRole