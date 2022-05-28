import mongoose from "mongoose";
const { Schema } = mongoose;

const UsersSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
});

const Users = mongoose.model("users", UsersSchema);
export default Users;
