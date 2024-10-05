//get user by id

import { Response } from "express";
//import userModel from "../models/user.model";
import { redis } from "../utils/redis";

export const getUserById = async (id: string, res: Response) => {
  //const user = await userModel.findById(id); //getting id from mongodb
  const userJson = await redis.get(id); //getting id from redis
  if(userJson) {
    const user = JSON.parse(userJson);
    res.status(201).json({
        success: true,
        user,
      });
  }
  
};
