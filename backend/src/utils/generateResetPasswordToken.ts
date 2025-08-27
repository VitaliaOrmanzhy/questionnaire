import crypto from "crypto";

const generateResetPasswordToken = () => {
    return crypto.randomBytes(20).toString('hex');
}

export default generateResetPasswordToken;