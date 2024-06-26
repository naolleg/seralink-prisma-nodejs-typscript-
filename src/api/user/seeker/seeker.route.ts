import { Router } from "express";
import  errorHandler from "../../../middleware/error";
import seekerController from "./seeker.controller.js";
const seekerRouter = Router();
seekerRouter.post('/',errorHandler(seekerController.register));
seekerRouter.put('/:id',errorHandler(seekerController.update));
seekerRouter.delete('/:id',errorHandler(seekerController.delete));
export default seekerRouter;
