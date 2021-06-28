const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://testuser:testuser123@cluster0.gqsqd.mongodb.net";
const client = new MongoClient(uri);
client.connect(err => {
    if (err) throw err;
  const collection = client.db("pruebas").collection("people");
      collection.insertOne({_id: 1, name: 'test2', lastName: 'test'}, (error, result) => {
        if (error) throw error;
        console.log('inserted', result.insertedId);
        client.close();
      })
})