const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /^[a-zA-Z0-9 ]{3,30}$/.test(v);
        },
      },
    },
    email: {
      type: String,
      require: true,
      unique: true,
      index: true,
      validate: {
        validator: function (v) {
          return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
        },
      },
    },

    address: {
      type: String,
      require: false,
    },

    phone: {
      type: Number,
      require: false,
    },

    password: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
