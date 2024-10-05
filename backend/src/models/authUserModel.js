const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userModel = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
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
    role: {
      type: String,
      default: "user",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false }
);

// Middleware for hashing the password
userModel.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) return next();
  let hashedPass = await bcrypt.hash(user.password, 10);
  user.password = hashedPass;
  next();
});

// Compare password when login
userModel.methods.comparePass = function (givenPass) {
  return bcrypt.compare(givenPass, this.password);
};
const user = model("User", userModel);
module.exports = user;
