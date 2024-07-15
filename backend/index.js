const express =require("express")
const app =express();

// ===>   password encrytion
const bcrypt = require('bcrypt');
const saltRounds = 10;

  const cors =require("cors");

//   Middleware
  app.use(cors());

  app.use(express.json())

  require("./DB/config")
  const user =require("./DB/UserSchema")
  const product=require("./DB/AddProductSchema")


//   server check

app.get("/",(req,res)=>{
    res.send("server is running")
})

// =========>  Signup api  <=========//

app.post("/signup",async(req,res)=>{

          const{email}=req.body;
          const{password}=req.body;

          const isUserExist =await user.findOne({"email":email});
          if (isUserExist){
            res.status(400).send({
                message:"user alredy exist with this email id"
            })
          }else{
            let result =await new user (req.body);
            let hashedPassword = bcrypt.hash(password,saltRounds);
            result.password= await hashedPassword;
            let data = await result.save();
            data=await data.toObject();
            delete data.password;

    res.send(data)
          }


    
})
// =======>     Signup API finish     <========//

// ========>   login api=============//

app.post("/login",async(req,res)=>{
   const {email ,password} =req.body;
  

   let isUserExist = await user.findOne({"email":email});
    if (isUserExist) {
      let result = await bcrypt.compare(password,isUserExist.password);

      if (result) {
        let user =await isUserExist.toObject();
        delete user.password;
        res.status(200).send(user);

      }else{
        res.status(400).send({
          message:"Wrong Password !"
        })
      }
      
    }else{
      res.status(400).send({
        message:"user not found with this email id "
      })
    }

})



// =============>  ADD PRODUCT API     <===========//

app.post("/addproduct",async(req,res)=>{
  let result =await new product(req.body);
  let data = await result.save();
  res.send(data)
})


//   get api

app.get("/all",async(req,res)=>{
  let result =await product.find({});
  res.json(result)
})


//  del product by id api
app.delete("/del/:id" ,async(req,res)=>{
  let productId =req.params.id;
  let result =await product.findByIdAndDelete(productId)
  res.send(result)
  // console.log(productId)
})

                  // Update api
// find product for updte pAGE

app.get("/update/:id",async (req,res)=>{
  let productId = req.params.id;
  let result =await product.findOne({_id : productId});
  res.status(200).send(result)
})


// fINDbyIdAndUpdate

app.put("/updateproduct/:id" ,async(req,res)=>{
        let productId = req.params.id;
        let result =await product.findByIdAndUpdate({_id :productId} , {$set:req.body})
        res.send(result).status(200)
})



// server listen

app.listen(1234,()=>{
    console.log("server is running on port 1234")
})