import { NextRequest,NextResponse } from "next/server";
import nodemailer from "nodemailer";

type Data = {
    success: boolean;
    message: string;
};

console.log('GMAIL_USER:', process.env.GMAIL_USER);
console.log('GMAIL_PASS:', process.env.GMAIL_APP_PASS);

const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASS,
        }
    })

async function send(email: string, firstName: string, lastName: string, message: string){
    
    
    await transporter.sendMail({
    from: email,
    to: process.env.GMAIL_USER,
    subject: `Contact form submission from ${firstName} ${lastName}`,
    text: message,
    html: `<p>You have a new contact form submission</p>
           <p><strong>Name: </strong> ${firstName} ${lastName}</p>
           <p><strong>Email: </strong> ${email}</p>
           <p><strong>Message: </strong> ${message}</p>`
    });
}

export async function POST(req: NextRequest){
    try {
        const { firstName, lastName, email, message } = await req.json();

        if ( !firstName || !lastName || !email || !message ){
            return NextResponse.json( {success: false, message: "All fields are required"}, { status: 400 });
        }

        await send(email, firstName, lastName, message);
        return NextResponse.json({ success: true, message: "Success"});

    } catch (err) {
        console.error(err);
        return NextResponse.json({success: false, message: "Failed"}, { status: 500 });
    }
}