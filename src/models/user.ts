import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: [true, "Correo obligatorio"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Correo invalido",
      ],
    },
    password: {
      type: String,
      required: false,
      select: false,
    },
    name: {
      type: String,
      required: [true, "Nombre obligatorio"],
      minLength: [3, "El nombre debe de contener minimo 3 caracteres"],
    },
    surname: String,
    avatar: {
      type: String,
      default: "default.png"
    },
    typeSign: {
      type: String,
      enum: ["credential", "google"],
      default: "credential"
    }
  },
  {
    timestamps: true,
  }
);

const User = models.User || model("User", UserSchema);
export default User;