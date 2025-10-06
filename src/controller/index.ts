import { Request,Response } from "express";

export const home = (req:Request,res:Response)=>{
    return res.render('user/base',{page:'index'});
};

