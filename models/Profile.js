const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  username: {
    type: String
  },
  socialhandles: [
    {
      facebook: {
        type: String
      },
      twitter: {
        type: String
      },
      linkedin: {
        type: String
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  },
  website: {
    type: String
  }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
