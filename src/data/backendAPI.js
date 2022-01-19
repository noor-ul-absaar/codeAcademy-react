const express = require("express");
const app = express();

const PORT = 3001;

const mydata = require("./right.json");
const mydata2 = require("./left.json");

const cors = require("cors");
app.use(cors());

app.get("/getJobs", (request, response) => {
  console.log("Inside get method");
  //response.send(mydata);

  response.json(mydata);
});
app.get("/getJobs2", (request, response) => {
  console.log("Inside get method");
  //response.send(mydata);

  response.json(mydata2);
});

app.post("/postJob", (request, response) => {
  //response.send("Done");
  console.log("Inside post");
  console.log(request.query);
  //response.send("done");
 

});

app.listen(PORT, () => {
  console.log("Successfully started server at: " + PORT);
  console.log(mydata);
});
