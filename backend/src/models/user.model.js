import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },

  password: {
    type: String,
    required: true,
    minlength: 6
  },

  role: {
    type: String,
    enum: ['admin', 'student', 'faculty', 'recruiter', 'society'],
    default: 'student'
  },

  year: {
    type: Number,
    enum: [1, 2, 3, 4],
    required: function() {
      return this.role === 'student';
    }
  },

  branch: {
    type: String,
    required: function() {
      return this.role === 'student' || this.role === 'faculty';
    }
  },

  skills: {
    type: [String],
    default: []
  },

  bio: {
    type: String,
    maxlength: 500
  },

  socialLinks: {
    github: { type: String },
    linkedin: { type: String }
  },

  resumeUrl: {
    type: String
  },
},{timestamps: true});

const User = mongoose.model("User",userSchema); 

export default User;