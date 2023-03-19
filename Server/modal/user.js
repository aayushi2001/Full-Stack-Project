import mongoose from "mongoose";

const User = mongoose.Schema({
  Status: { type: String },
  type: { type: String },
  repositoryName: { type: String },
  ruleID: { type: String },
  path: { type: String },
  line: { type: Number },
  description: { type: String },
  severity: { type: String },
  queuedAt: { type: Date },
  scanningAt: { type: Date },
  finishedAt: { type: Date },
});

const model = mongoose.model("Data", User);

export default model;
