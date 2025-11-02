import express from "express";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware (optional for parsing JSON)
app.use(express.json());

// Default route
app.get("/", (req, res) => {
  res.send("🚀 Backend is Working!");
});


//Other Routes : 

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
