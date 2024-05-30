import { Request, Response } from "express";
import { prisma } from "../../config/prisma.js";
import { create } from "domain";
import { type } from "os";
const jobController = {
  createPost: async (req:Request, res:Response) => {
   const newjob=await prisma.job.create({
      data: {
       title:req.body.title,
       category:req.body.category,
       salary:req.body.salary,
       quantity :req.body. quantity,
       qualification:req.body.qualification,
       description :req.body.description,
       orgProfile:{
         
          type:req.body.type, 
          
          
          
        }

         }
      }
    
   })

  }
}
export default jobController;