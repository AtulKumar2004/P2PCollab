import mongoose from "mongoose";

const opportunitySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
    maxlength: 2000
  },

  type: {
    type: String,
    enum: ['event', 'hackathon', 'freelance', 'research', 'collaboration', 'other'],
    default: 'other'
  },

  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  deadline: {
    type: Date
  },

  applicants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],

  status: {
    type: String,
    enum: ['open', 'closed'],
    default: 'open'
  },

},{timestamps: true});

const Opportunity = mongoose.model("Opportunity",opportunitySchema); 

export default Opportunity;
