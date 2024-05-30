import { Router } from "express";
import  errorHandler from "../../../middleware/error";
import providerController from "./provider.controller.js";
const providerRouter = Router();
providerRouter.post('/',errorHandler(providerController.register));
providerRouter.put('/:id',errorHandler(providerController.update));
providerRouter.delete('/:id',errorHandler(providerController.delete));
export default providerRouter;
