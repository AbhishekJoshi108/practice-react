import axios from "axios"
import { useEffect, useState } from "react"

export default function Home()


{

    const[data,setdata]=useState([])
        useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>setdata(res.data))
        .catch(err=>console.log(err));
    
    },[])

    return(<>
    <div>
        <table border={5} align="center" cellPadding={10} cellSpacing={6}>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>email</th>
                    <th>phone</th>
                    <th>website</th>
                    <th>company</th>
                </tr>
            </thead>
            <tbody>
               {
                    data.map((user,index)=>{
                       return (
                        <>
                         <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                         <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.website}</td>
                        <td>{user.company.name}</td>
                    </tr>
                        </>
                       
                       )
                      
                    })

                }
            </tbody>
        </table>



    </div>
    
    
    
    
    </>)
}