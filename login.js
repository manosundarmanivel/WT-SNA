const express = require('express');
 
const app = express();
 
app.use(express.json());       
app.use(express.urlencoded({extended: true})); 
 
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/signin.html");
});
 
app.post("/", (req, res) => {
 
  const email = req.body.email;
  const pass = req.body.password;
  console.log("Email : " + email);
  console.log("Password :"+pass);
  
  res.send("You Have been Logged In Successfully With Password "+pass);
});
 
app.listen(3000);