import express from "express"
import { authMiddleware } from "./auth/authentication";

const app = express()



app.get("/",authMiddleware,(_req,res)=>{
   res.send({
    "Status":"healthy"
   })
})


app.listen(3000,()=>{
    console.log("App is running on port 3000");
    
})
