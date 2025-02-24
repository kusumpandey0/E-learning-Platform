import dbConnect from "@/database/connection";
import User from "@/models/user.schema";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();
  await User.create({
    email: "kkuussuummss@gmail.com",
    username: "kusum",
    googleId: "123444444444444",
    profileImage: "img",
  });

  return NextResponse.json({ message: "User created successfully!" });
}
