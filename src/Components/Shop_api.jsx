import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Shop_api = () => {
    const[shop,setshop]=useState([])

    const Shopdata=async()=>{
        try{
            const res= await axios.get("https://fakestoreapi.com/products");
            setshop(res.data)
          
        }catch(error){
            console.log(error)
        }

     
         
    }
    useEffect(()=>{
        Shopdata();
       }, []);

       useEffect(() => {
        console.log(shop); // ✅ Logs updated state properly
      }, [shop]);
      
  return (
    <div>
        <h2>Shop Products</h2>

     {
        shop.map((item)=>
            <ul key={item.id}>
     <h1>{item.title} </h1>
     <img className=' w-[200px] ' src={item.image}  />
            </ul>
        )
     }
  
      
    </div>
  )
}

export default Shop_api
