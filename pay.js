const express = require('express');
 
const app = express();
 
app.use(express.json());       
app.use(express.urlencoded({extended: true})); 
 
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/pay.html");
});
 
app.post("/", (req, res) => {
  const course = req.body.course;
  const detail = req.body.know;
  const point = req.body.point;
  const email = req.body.email;
  const phone = req.body.phone;
  console.log("Course Name: " + course);
  console.log("Detail: " + detail);
  console.log("Referral Code:"+point);
  console.log("Email:" + email);
  console.log("Phone:" +phone);
  res.send("Payment Made Successfully");
});
 
app.listen(3000);