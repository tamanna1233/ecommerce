import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function ProductPage() {

  const navigate =useNavigate();

const [productData ,setProductData] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:1234/all')
    .then(res=> res.json())
    .then(json => setProductData(json))
  })

  
  

  // del hamdle

  const dltHandle=async(id)=>{
let wantToDel =confirm("Are you sure want to del");

      if(wantToDel)
        {
          let result = await fetch(`https://ecommerce-4sj6.onrender.com/del/${id}` ,{
            method :'delete'
          })
          let data = await result.json();
          if(data){
            alert("data deleted");
          }else{
            alert("try again");
          }
        }
      else{

        }
        
  }
  
  return (
    <>
      <h1>this is product page</h1>
      <table border={1}> 
       <tr>
        <th>Sr. No.</th>
        <th>Product Name</th>
        <th>Price</th>
        <th>Company</th>
        <th>Quantity</th>
        <th>Actions</th>
       </tr>
           {productData.map((value,index)=>
          (
            <tr >
        <td>{index+1}</td>
        <td>{value.productname}</td>
        <td>{value.price}</td>
        <td>{value.company}</td>
        <td>{value.quantity}</td>
        <td><button onClick={()=> navigate(`/update/${value._id}`)} >edit</button>
        <button onClick={()=>dltHandle(value._id)}>delete</button></td>
       </tr>
          ))}
       
      </table>
    </>
  )
}

export default ProductPage
