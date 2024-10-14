import { Router } from "express";

const router = Router();

router.get("/",(req,res)=>{
    res.send("Hello World1");
})

router.get("/",(req,res)=>{
    res.send("list of products");
})

router.post("/",(req,res)=>{
    res.send("create product");
})
router.get("/:id",(req,res)=>{
    console.log(req.params)
    res.send("product details");
})
export default  router;