const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://testuser:testuser123@cluster0.gqsqd.mongodb.net";
const client = new MongoClient(uri);
client.connect(err => {
    if (err) throw err;
  const collection = client.db("pruebas").collection("people");
      collection.removeOne({_id: 1 }, (error, result) => {
        if (error) throw error;
        console.log('remove', result);
        client.close();
      })
})