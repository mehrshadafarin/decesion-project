const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Function to get a random sentence from yes/no files
function getRandomSentenceData() {
  try {
    // Randomly decide between yes and no
    const type = Math.random() < 0.5 ? "yes" : "no";
    const fileName = type === "yes" ? "yes.json" : "no.json";

    const filePath = path.join(__dirname, fileName);

    if (!fs.existsSync(filePath)) {
      return { text: `Error: ${fileName} not found`, type: "error" };
    }

    const data = fs.readFileSync(filePath, "utf8");
    const sentences = JSON.parse(data);

    if (!sentences || !Array.isArray(sentences) || sentences.length === 0) {
      return { text: "No sentences available.", type: "error" };
    }

    const randomIndex = Math.floor(Math.random() * sentences.length);
    return { text: sentences[randomIndex], type };
  } catch (error) {
    console.error("Error reading sentences:", error);
    return { text: "Error loading sentence.", type: "error" };
  }
}

// Route to display a random sentence
app.get("/", (req, res) => {
  const { text, type } = getRandomSentenceData();
  res.render("index", { text, type });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
