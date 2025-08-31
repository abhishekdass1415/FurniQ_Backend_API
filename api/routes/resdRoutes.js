import express from "express";

const router = express.Router();

// Basic resource routes
router.get("/", (req, res) => {
  res.json({ message: "Resources endpoint" });
});

export default router;
