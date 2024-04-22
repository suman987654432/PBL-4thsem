import mongoose from "mongoose";
import { randomUUID } from "crypto";
// const chatSchema = new mongoose.Schema({
//     id: {
//         type: String,
//         default: randomUUID(),
//     },
//     role: {
//         type: String,
//         required: true,
//     },
//     content: {
//         type: String,
//         required: true,
//     },
// });
const userSchema = new mongoose.Schema({
    name: {
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
        required: true,
    },
    bio: { type: String, default: '' },
    interests: [String],
    socialDetails: [
        {
            platform: String,
            href: String,
            userName: String
        }
    ],
    about: { type: String, default: '' }
});

const profileSchema = new mongoose.Schema({
    uname: { type: String },
    bio: { type: String },
    interests: [String],
    socialDetails: [
        {
            platform: String,
            href: String,
            userName: String
        }
    ],
    about: { type: String }
});

userSchema.index({ email: 1 }, { unique: true });

export const User = mongoose.model("User", userSchema);
export const Profile = mongoose.model("Profile", profileSchema);