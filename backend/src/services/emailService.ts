import nodemailer from "nodemailer";
import emailConfig from "../config/email";

interface IMailOptions {
    from: string;
    to: string;
    subject: string;
    text: string;
    html: string;
}

const transporter = nodemailer.createTransport({
    host: emailConfig.host,
    port: emailConfig.port,
    secure: emailConfig.secure,
    auth: {
        user: emailConfig.user,
        pass: emailConfig.pass
    }
}); 

transporter.verify()
    .then(() => console.log("Email service configured successfully"))
    .catch(err => console.log("Email service not configured:", err.message));

export const sendSimpleEmail = async (mailOptions: IMailOptions) => {
    const info = await transporter.sendMail(mailOptions);
    return info;
}


        