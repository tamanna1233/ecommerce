import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Addproductpage() {

    const [productname, setproductname] = useState("");
    const [price, setprice] = useState();
    const [company, setcompany] = useState("");
    const [quantity, setquantity] = useState();

const navigate =useNavigate();

    const Addproducthandle = async (e) => {
        e.preventDefault();
        let result = await fetch("http://localhost:1234/addproduct",
            {
                method: "POST",
                body: JSON.stringify({ productname, price, company, quantity }),
                headers: { "Content-Type": "application/json", }
            })
        let data = await result.json();
        if (data) {
            alert("Product Added")
            navigate("/")
        }else{
            console.log("error");
        }
    }

    return (
        <>
            <div className='box'>
                <h1>Add product</h1>
                <form onSubmit={Addproducthandle}>
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
                    <button>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Addproductpage
