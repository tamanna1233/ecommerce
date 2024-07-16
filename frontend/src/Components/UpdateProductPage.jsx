import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function UpdateProductPage() {
    const [productname, setproductname] = useState("");
    const [price, setprice] = useState();
    const [company, setcompany] = useState("");
    const [quantity, setquantity] = useState();

    const params = useParams();
    const navigate =useNavigate();

    useEffect(()=>{
        fetch(`http://localhost:1234/update/${params.id}`)
        .then(res => res.json())
        .then(json => previousData(json))
    },[])

    const previousData =(data)=>{
        setproductname(data.productname)
        setprice(data.price)
        setcompany(data.company)
        setquantity(data.quantity)
    }
//  console.log(params.id);

const updateHandle =async(e)=>{
e.preventDefault();

let result = await fetch(`https://ecommerce-4sj6.onrender.com/updateproduct/${params.id}`,
    {
    method: "PUT",
    body:JSON.stringify({productname,price,company,quantity}),
    headers:{
        "Content-Type":"application/json"
    }
})
let data = await result.json();
if(data){
    alert("product updated")
    navigate("/")
}else{
    alert("something went wrong")
}
}

  return (
    <>
                  <div className='box'>
                <h1>update product</h1>
                <form onSubmit={updateHandle}>
                    <label htmlFor="">Product Name:</label>
                    <input
                        type="text"
                        placeholder='Enter product name....'
                        name='productname'

                        value={productname}
                        required
                        onChange={(e) => setproductname(e.target.value)}

                    /> <br /><br />
                    <label htmlFor="">Price:</label>
                    <input
                        type="number"
                        placeholder='Enter price...'
                        name='price'
                        value={price}
                        required
                        onChange={(e) => setprice(e.target.value)}

                    /> <br /><br />
                    <label htmlFor="">company</label>
                    <input type="text"
                        placeholder='Enter Company name....'
                        name='company'
                        value={company}
                        required
                        onChange={(e) => setcompany(e.target.value)}
                    /> <br /> <br />
                    <label htmlFor="">Quantity</label>
                    <input 
                        type="number"
                        placeholder='Enter quantity'
                        name="quantity"
                        value={quantity}
                        required
                        onChange={(e) => setquantity(e.target.value)}
                    />
<br /><br />
                    <button>update</button>
                </form>
            </div>
    </>
  )
}

export default UpdateProductPage
