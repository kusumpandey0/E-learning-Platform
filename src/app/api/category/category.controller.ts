import dbConnect from "@/database/connection";
import Category from "@/models/category.schema";
import { NextRequest, NextResponse } from "next/server";
import authMiddleware from "../../../../middleware/auth.middleware";

export async function createCategory(req:Request){
   try{
       const response=authMiddleware(req as NextRequest)
       
    await dbConnect();
    const {name,description}=await req.json();
    //already existing category or not
    const existingCategory=await Category.findOne({name:name})
    if(existingCategory)
    {
        return NextResponse.json({
            message:"Category already existing witn that name!!!"
        },
        {status:400})
    }
    await Category.create({
        name,
        description,
    })
    return NextResponse.json({message:"Category created Successfully"},
    {
        status:201
    })
   }
   catch(error){
       console.log(error);
       return NextResponse.json({message:"Something went wrong"},{status:500})
   }
}

export async function getCategories(){
    try
    {
        await dbConnect();
    const categories=await Category.find();
    if(categories.length===0)
    {
        return NextResponse.json({
            message:"No categories found"
        },
        {status:404})
    }
    return NextResponse.json({
        message:"Category fetched successfully",
        categories
    },
    {status:200})
    }
    catch(error){
        console.log(error);
        return NextResponse.json({message:"Something went wrong"},{status:500})
    }
}