const express = require("express");
const mongoose = require("mongoose");
const formRoutes = require("./routes/formRoutes");

const app = express();
const PORT = 5001;

// ---------- CORS MUST BE FIRST (before any other middleware) ----------
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  next();
});

// ---------- Body Parser ----------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ---------- Logging ----------
app.use((req, res, next) => {
  console.log(`📨 ${req.method} ${req.url}`);
  console.log('Body:', req.body);
  next();
});

// ---------- Routes ----------
app.use("/api/form", formRoutes);

// ---------- Test Root ----------
app.get("/", (req, res) => {
  res.send("Backend running ✅");
});

// ---------- Test Route ----------
app.post("/api/test", (req, res) => {
  console.log('🧪 Test route hit!');
  res.json({ success: true, message: "Backend is working!", received: req.body });
});

// ---------- MongoDB ----------
mongoose
  .connect("mongodb://127.0.0.1:27017/multistepform", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB error:", err.message);
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  });