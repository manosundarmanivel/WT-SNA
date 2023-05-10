const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const uri = "mongodb+srv://dbStudent:dbStudent@cluster0.30cqwmb.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/sample.html');
});
app.post('/', async (req, res) => {
  try {
    
    await client.connect();
    const database = client.db("myDatabase");
    const collection = database.collection("myCollection");

    const document = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      cpassword: req.body.cpassword
    };

    const result = await collection.insertOne(document);

    console.log(`Inserted document with _id: ${result.insertedId}`);

    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  } finally {
    await client.close();
  }
});

app.listen(5500, () => {
  console.log('Server started on port 5500');
});
