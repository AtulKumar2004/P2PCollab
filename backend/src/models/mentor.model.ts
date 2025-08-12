import mongoose from "mongoose";

const mentorshipSchema = new mongoose.Schema({
  mentor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  mentee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  topic: {
    type: String,
    enum: ['project', 'career', 'technical', 'hackathon', 'research', 'other'],
    default: 'other'
  },

  description: {
    type: String,
    maxlength: 1000
  },

  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project'
  },

  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  },

  startDate: {
    type: Date
  },

  endDate: {
    type: Date
  },
},{timestamps: true});


const Mentor = mongoose.model("Mentor",mentorshipSchema); 

export default Mentor;
