const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

console.log("This server will crash in 30 seconds");
console.log("Initiating countdown");
setTimeout(() => {
  console.log("System will crash now with a random error number");
  process.exit((Math.random() * 100) + 1);
}, 30 * 1000);

app.get("/hello", (req, res) => {
  res.send({data: "Hello", timestamp: (new Date()).getTime()}).status(200);
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
