import { ConnectDB } from "@/lib/config/db";
import { EmailModel } from "@/lib/models/email.model";
import { NextResponse } from "next/server";

// function to load database
const LoadDB = async () => {
    await ConnectDB();
}

LoadDB();

// adding API endpoint for sending email
export async function POST(req){
    const formData = await req.formData();
    const emailData = {
        email:`${formData.get('email')}`
    }
    await EmailModel.create(emailData);
    return NextResponse.json({
        success:true,
        msg:'Email Subscribed!'
    })
}