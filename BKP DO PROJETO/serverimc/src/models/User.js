import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
 {
     login: {
         type: String,
         required: true,
         index: {
             unique: true
         }
     },
     password: {
        type: String,
        required: true
     }
 },
 {
     timestamps: true
 }
)

export default mongoose.model("User", userSchema);