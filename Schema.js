const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  password: String
});

const User = mongoose.model('User', userSchema);

const newUser = new User({
    name: 'John Doe',
    email: 'johndoe@example.com',
    password: 'password123'
  });
  
  newUser.save(function(err) {
    if (err) throw err;
    console.log('User saved successfully!');
  });
  
