const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const cors = require("cors");
const productRoute = require("./routes/product.route");
const customerRoute = require("./routes/customer.route");
const categoriesRoute = require("./routes/categories.route");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Sawandee");
});

app.use("/products", productRoute);
app.use("/customers", customerRoute);
app.use("/categories", categoriesRoute);

app.listen(port, () => {
  console.log("App started at port: " + port);
});
