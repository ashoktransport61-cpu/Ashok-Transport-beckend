import express from "express";
import Form from "../models/formModel.js";

const router = express.Router();

// POST - Save form data
router.post("/", async (req, res) => {
  try {
    const { name, mobile, serviceType } = req.body;
    const newForm = new Form({ name, mobile, serviceType });
    await newForm.save();
    res.status(201).json({ success: true, data: newForm });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET - Retrieve form data
router.get("/", async (req, res) => {
  try {
    const forms = await Form.find().sort({ createdAt: -1 });
    res.json({ success: true, data: forms });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
