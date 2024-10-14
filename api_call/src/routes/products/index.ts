import { Router } from "express";
import { listProducts,getProductById,updateproduct,deleteProduct,createProduct } from "./productController";

const router = Router();

router.get("/",listProducts)
router.get("/:id",getProductById)
router.post("/",createProduct)
router.put("/:id",updateproduct)
router.delete("/:id",deleteProduct)
export default  router;