import mongoose, { Model, Document } from "mongoose";
import bcrypt from "bcrypt";

export interface IUser {
    username: string;
    email: string;
    password: string;
    resetPasswordToken?: string;
}

// document
interface IUserDocument extends IUser, Document {
    matchPassword(enteredPassword: string): Promise<boolean>;
    setResetToken(token: string): void;
}
// model
interface IUserModel extends Model<IUserDocument> {
    findByEmail(email: string): Promise<IUserDocument>;
    findByResetToken(token: string): Promise<IUserDocument>;
}

const userSchema = new mongoose.Schema<IUserDocument>({
    _id: Number,
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    resetPasswordToken: {
        type: String
    }
});

userSchema.pre('save', async function(next) {
     if (!this.isModified('password')) {
       return next();
     }
     const salt = await bcrypt.genSalt(10);
     this.password = await bcrypt.hash(this.password, salt);
     next();
});

// for document
userSchema.methods.matchPassword = async function(enteredPassword: string) {
    return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.changePassword = function (newPassword: string) {
    this.password = newPassword;
    return;
}

userSchema.methods.setResetToken = function (token: string) {
    this.resetPasswordToken = token;
}

// for model
userSchema.statics.findByEmail = async function(email: string) {
    return await this.findOne({ email });
}

userSchema.statics.findByResetToken = async function(token: string) {
    return await this.findOne({ resetPasswordToken: token });
}

export const User = mongoose.model<IUserDocument, IUserModel>('User', userSchema);