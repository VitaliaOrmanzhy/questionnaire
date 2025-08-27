import nodemailer from "nodemailer";
import config from "../config/email";

interface IMailOptions {
    from: string;
    to: string;
    subject: string;
    text: string;
    html: string;
}

const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: {
        user: config.user,
        pass: config.pass
    }
}); 

transporter.verify()
    .then(() => console.log("Email service configured successfully"))
    .catch(err => console.log("Email service not configured:", err.message));

export const sendSimpleEmail = async (mailOptions: IMailOptions) => {
    const info = await transporter.sendMail(mailOptions);
    console.log(info);
    return info;
}


        