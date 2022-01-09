const express = require("express");
const pa11y = require("pa11y");
const PORT = process.env.PORT || 5000;

const app = express();

app.get("/api/test", (req, res) => {});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
