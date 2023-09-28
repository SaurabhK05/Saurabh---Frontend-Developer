const express = require("express");
const bodyParser = require("body-parser");
const userRoute = require("./routes/UserRoute.js");
const rocketRoute = require("./routes/RocketDataRoute.js");

const app = express();
const port = 5000;

app.use(bodyParser.json());

app.use("/user", userRoute);

app.use("/rocket", rocketRoute);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
