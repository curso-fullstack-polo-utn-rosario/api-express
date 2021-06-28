const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://testuser:testuser123@cluster0.gqsqd.mongodb.net";
const client = new MongoClient(uri);
client.connect(err => {
    if (err) throw err;
  const collection = client.db("pruebas").collection("cars");
    const cursor = collection.find()
    let kms = 0;
    cursor.forEach(each => kms = kms + (each.kms || 0), () => console.log('kms', kms));
    //console.log('find', result);
    //client.close();
})