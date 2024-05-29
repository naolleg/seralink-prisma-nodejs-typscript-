import { Request, Response } from "express";
import { prisma } from "../../config/prisma.js";
const jobController = {
  createPost: async (req:Request, res:Response) => {
   const newjob=await prisma.({

    
   })

  }
}
export default jobController;