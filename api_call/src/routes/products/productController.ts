import { Request,Response } from "express"
import {db} from "../../db/index"
import { productsTable } from "../../db/productSchema"
import { eq } from "drizzle-orm"
 
export async function listProducts(req:Request,res:Response){
   try{
      const products = await db.select().from(productsTable)
      res.json(products)
   }catch(e){
      res.status(500).send({message:e})
   }
   
}
export async function getProductById(req:Request,res:Response){
   try{
      const {id} = req.params
      const [product] = await db.select().from(productsTable).where(eq(productsTable.id,Number(id)))
      if(!product){
         res.status(404).send({message:"Product not found"})
      }else{
         res.json(product)
      }
   }catch(e){
      res.status(500).send({message:e})
   }
    
}

export async function createProduct(req:Request,res:Response){
   console.log(req.body)
   try{
      const [product] = await db.insert(productsTable).values(req.body).returning()
      res.status(201).json(product)
   
   }catch(e)
   {res.status(501).send(e)}}
 
 export async function updateproduct(req:Request,res:Response){
   try{ 
      const id = Number(req.params.id);
      const updatedfields = req.body;
      const [product] = await db.update(productsTable).set(updatedfields).where(eq(productsTable,Number(id))).returning()
      if(!product){
         res.status(404).send({message:"Product not found"})
      }else{
         res.json(product)
      }
      
      
   }catch(e){
      res.status(500).send({message:e})
   }

 }
 
 export async function deleteProduct(req:Request,res:Response){
   try{
    
    const id = Number(req.params)
    const [deletedItem] =await db.delete(productsTable).where(eq(productsTable.id, id)).returning();
    
    if(deletedItem){
      res.status(204).json({message:"Product deleted"})
    }
    else{
      res.status(404).send({message:"product not found"})}
      
   }catch(e){
      res.status(500).send({message:e})
   }
  
 }
