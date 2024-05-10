import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Music = () => 
{
const[music,setmusic]=useState([])
    useEffect(()=>{
        axios.get(" https://parallelum.com.br/fipe/api/v1/carros/marcas")
        .then((res)=>{  
            
            setmusic(res.data)
            console.log(res);
        
        
        })
        .catch((err)=>{
            console.log(err)
        })
     

        
        

    },[])

  return (
    <>
    
    <table border={1} cellPadding={2} cellSpacing={5}>
        <thead>
            <tr>
                <th>nome</th>
                <th>codigo</th>
            </tr>
        </thead>
        <tbody>

            {
                music.map((music,index)=>(
                  
                      
                        <tr key={index}>
                            <td>{music.nome}</td>
                            <td>{music.codigo}</td>
                        </tr>
                        
                        
                      
                   
                ))
            }
        </tbody>
    </table>
    
    </>
  )
}

export default Music
