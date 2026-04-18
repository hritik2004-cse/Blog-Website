import { ConnectDB } from "@/lib/config/db";
import { EmailModel } from "@/lib/models/email.model";
import { NextResponse } from "next/server";

// adding API endpoint for sending subscription email
export async function POST(req) {
  try {
    await ConnectDB();
    const formData = await req.formData();
    const emailData = {
      email: `${formData.get("email")}`,
    };
    await EmailModel.create(emailData);
    return NextResponse.json({
      success: true,
      msg: "Email Subscribed!",
    });
  } catch (error) {
    console.error("POST /api/email failed:", error);
    return NextResponse.json(
      { success: false, msg: error?.message || "Internal Server Error" },
      { status: 500 },
    );
  }
}

// adding API endpoint for getting subscription email
export async function GET() {
  try {
    await ConnectDB();
    const emails = await EmailModel.find({});
    return NextResponse.json({
      emails,
    });
  } catch (error) {
    console.error("GET /api/email failed:", error);
    return NextResponse.json(
      { success: false, msg: error?.message || "Internal Server Error" },
      { status: 500 },
    );
  }
}

// adding API endpoint to delete the subscription email
export async function DELETE(req) {
  try {
    await ConnectDB();
    const id = req.nextUrl.searchParams.get("id");
    await EmailModel.findByIdAndDelete(id);
    return NextResponse.json({ success: true, msg: "Email Deleted!" });
  } catch (error) {
    console.error("DELETE /api/email failed:", error);
    return NextResponse.json(
      { success: false, msg: error?.message || "Internal Server Error" },
      { status: 500 },
    );
  }
}
