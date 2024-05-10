import axios from "axios"
import { useEffect, useState } from "react"

import 'bootstrap/dist/css/bootstrap.min.css';



export default function Card() {


    const [post, setpost] = useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res) =>
                // console.log(res)
                setpost(res.data)
            ).catch((err) => {
                console.log(err)
            })

    }, [])
    return (<>

        <h1>axios practices</h1>
        <div className="table-responsive">
            <table className="table table-bordered table-warning">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>phone</th>
                        <th>address</th>
                        <th>zipcode</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        post.map((user,index) => {

                            return (
                                <>
                                
                                <tr key={index}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                        <td>{user.address.city}</td>
                                        <td>{user.address.zipcode}</td>
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