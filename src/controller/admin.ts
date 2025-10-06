import { Request,Response } from "express";

export const adminDashboard = (req:Request,res:Response)=>{
     return res.render('admin/base',{page:'index'});
}