const express = require("express");
const app = express();

const PORT = 3001;

const mydata = require("./testData.json");

const cors = require("cors");
app.use(cors());

app.get("/getJobs", (request, response) => {
  console.log("Inside get method");
  //response.send(mydata);

  response.json(mydata);
});

app.post("/postJob", (request, response) => {
  //response.send("Done");
  console.log("Inside post");
  console.log(request.query);
});

app.listen(PORT, () => {
  console.log("Successfully started server at: " + PORT);
  console.log(mydata);
});
