const express = require("express");
const router = express.Router();
const authorizeUser = require("../middleware/authrization.js");

router.get("/get-one-rocket", authorizeUser, async (req, res) => {
  try {
    const url =
      "https://api.spacexdata.com/v4/rockets/5e9d0d95eda69955f709d1eb";
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        return res.status(200).json({
          data,
          message: "data fetch sucessfully",
        });
      });
  } catch (error) {
    return res.status(404).json({
      message: "got error while fetching data",
    });
  }
});

router.get("/get-all-rockets", authorizeUser, async (req, res) => {
  const url = "https://api.spacexdata.com/v4/rockets";

  try {
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        return res.status(200).json({
          data,
          message: "data fetch sucessfully",
        });
      });
  } catch (error) {
    return res.status(404).json({
      error: "getting error while fetching data",
    });
  }
});

module.exports = router;
