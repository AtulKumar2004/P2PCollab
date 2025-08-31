import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
    maxlength: 2000
  },

  tags: {
    type: [String],
    default: []
  },

  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  teamMembers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],

  mentor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },

  status: {
    type: String,
    enum: ['open', 'in progress', 'completed'],
    default: 'open'
  },

  visibility: {
    type: String,
    enum: ['public', 'private'],
    default: 'public'
  },
},{timestamps: true});

const Project = mongoose.model("Project",projectSchema); 

export default Project;
