const express = require("express");
const bodyParser = require("body-parser");
const hotelRouter = require("./routes/hotel");
const busRouter = require("./routes/bus");
const flightRouter = require("./routes/flight");
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// app.use(hotelRouter);
app.use(busRouter);
app.use(flightRouter);
app.listen(8000, () => {
  console.log("listening on port 8000");
});
