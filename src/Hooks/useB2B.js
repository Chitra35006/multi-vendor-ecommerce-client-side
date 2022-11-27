import { useEffect, useState } from 'react';

const useB2B = email => {
   const [isB2Buser, setisB2Buser] = useState(false);
   const [isB2BuserLoading, setisB2BuserLoading] = useState(true);
   useEffect(()=>{
    if(email){
        fetch(`http://localhost:5000/users/b2b/${email}`)
        .then(res => res.json())
        .then(data =>{
           console.log(data);
           setisB2Buser(data.isB2Buser); 
           setisB2BuserLoading(false);
        })
    }
   },[email])
   return [isB2Buser,isB2BuserLoading]
}
export default useB2B;