import { NextFunction, Request, Response } from "express";
import { CatchAsyncError } from "../middleware/catchAsyncErrors";
import ErrorHandler from "../utils/ErrorHandler";
import orderModel, {IOrder} from "../models/orderModel";
import userModel from "../models/user.model";
import CourseModel from "../models/course.model";
import path from "path";
import ejs from "ejs";
import sendMail from "../utils/sendMail";
import notificationModel from "../models/notificationModel";
import { getAllOrdersService, newOrder } from "../services/order.service";


//create order
export const createOrder = CatchAsyncError(async(req: Request, res: Response, next: NextFunction) => {
    try{
        const  {courseId, payment_info} = req.body as IOrder;

        const user= await userModel.findById(req.user?._id);

        const courseExistInUser =  user?.courses.some((course:any) => course._id.toString() === courseId);

        if(courseExistInUser) {
            return next(new ErrorHandler("You have already purchased this course", 400));
        }

        const course = await CourseModel.findById(courseId);

        if(!course) {
            return next(new ErrorHandler("Course not found.", 400));  
        }

        const data: any = {
            courseId: course._id,
            userId: user?._id,
            payment_info,
        };
        


        const mailData = {
            order: {
                _id: course._id?.toString().slice(0,6),
                name: course.name,
                price: course.price,
                date: new Date().toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'}),
            } //will display 8 October 2024 as an example
        }

        const html =  await ejs.renderFile(path.join(__dirname, '../mails/order-confirmation.ejs'), mailData); 
        
        try{
            if(user) {
               await sendMail({
                email: user.email,
                subject: `${user.name}, your order has been confirmed`,
                template: "order-confirmation.ejs",
                data: mailData,
               });
            }

        } catch(error: any) {
            return next(new ErrorHandler(error.message, 500));
        }
        
        //user?.courses.push(course._id.toString());

        if (course && course._id) {
            user?.courses.push({_id: course._id.toString()}); // Ensure the ID is added correctly as _id
            await user?.save();
        }
        

        //await user?.save();
        
        //to notify admin of an order
        await notificationModel.create({
            user: user?._id,
            title: "New Order",
            message: `You have a new order from ${course?.name}`,
        });


        if (course) {
              // Initialize purchased to 0 if it's undefined
            course.purchased = (course.purchased ?? 0) + 1;
            await course.save();    // Save the document
        }
        
        //create order
        newOrder(data, res, next);

    } catch(error: any) {
        return next(new ErrorHandler(error.message, 500));
    }
});


// get all orders -- only for admin
export const getAllOrders = CatchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        getAllOrdersService(res);
      } catch (error: any) {
        return next(new ErrorHandler(error.message, 400));
      }
    }
  );
  