import dbConnect from "@/database/connection";
import Category from "@/models/category.schema";
import { NextRequest, NextResponse } from "next/server";

export async function createCategory(req:Request){
   try{
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
    const category=await Category.create({
        name,
        description,
    })
    return NextResponse.json({message:"Category created Successfully",
    data:category},
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
    const data=await Category.find();
    if(data.length===0)
    {
        return NextResponse.json({
            message:"No categories found"
        },
        {status:404})
    }
    return NextResponse.json({
        message:"Category fetched successfully",
        data
    },
    {status:200})
    }
    catch(error){
        console.log(error);
        return NextResponse.json({message:"Something went wrong"},{status:500})
    }
}