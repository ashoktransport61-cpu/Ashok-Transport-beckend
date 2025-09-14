import mongoose from "mongoose";

const formSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    mobile: { type: String, required: true },
    serviceType: { type: String, required: true }
  },
  { timestamps: true }
);

const Form = mongoose.model("Form", formSchema);

export default Form;
