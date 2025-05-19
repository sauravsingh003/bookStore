import express from "express";
import Subscriber from "../model/subscriber.model.js";

const router = express.Router();

// POST /newsletter/subscribe
router.post("/subscribe", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    const existing = await Subscriber.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Email already subscribed" });
    }

    await Subscriber.create({ email });
    res.status(200).json({ success: true, message: "Subscribed successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
