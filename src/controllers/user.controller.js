const express = require("express");
const router = express.Router();

const User = require("../models/user.model");

router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ user, status: true });
  } catch (e) {
    return res.status(500).json({ error: e.message, status: false });
  }
});

router.delete("/delete", async (req, res) => {
  try {
    let arr = JSON.parse(req.query.array);
    arr.forEach(async (el) => {
      await User.findByIdAndDelete(el).lean().exec();
    });

    return res.status(201).json({ Status: "Done" });
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await User.find({}).lean().exec();
    return res.status(200).send(users);
  } catch (e) {
    return res.status(500).json({ error: e.message, status: "false" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const users = await User.findOne({ _id: req.params.id }).lean().exec();

    return res.status(200).json({ users, status: "true" });
  } catch (e) {
    return res.status(500).json({ error: e.message, status: "false" });
  }
});

module.exports = router;
