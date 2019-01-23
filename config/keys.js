require("dotenv").config();
if (process.env.NODE_ENV === "production") {
  console.log("connecting to production database");
  module.exports = require("./keys_prod");
} else {
  console.log("connecting to dev database");
  module.exports = require("./keys_dev");
}
