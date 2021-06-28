const { connectionString } = require('./constants');
const { MongoClient } = require('mongodb');

class TodoRepositoryMongo {
    items = [];
    lastId = 1;

    withCollectionDo(callback) {
        const client = new MongoClient(connectionString);
        client.connect(err => {
            if (err) throw err;
        const collection = client.db("pruebas").collection("todo-list");
        callback(client, collection);
        });
    }
    addItem(item) {
        this.withCollectionDo((client, collection) => {
            collection.insertOne(item, (error, result) => {
                if (error) throw error;
                console.log('inserted', result.insertedId);
                client.close();
            })
        })
    }
    getItemsForResponse(res) {
        this.withCollectionDo((client, collection) => {
            collection.find()
            .toArray( (error, result) => {
                if (error) throw error;
                console.log('result', result);
                res.json({
                    result, 
                    length: result.length
                  });
                client.close();
            })
        })
    }

    getItem(id) {
        return this.items.find(item => item.id === id);
    }
    deleteItem(id) {
        const index = this.items.findIndex(item => item.id === id);
        if (index !== -1) {
            const item = this.items[index];
            this.items.splice(index, 1);
            return item;
        } else {
            return undefined;
        }
    }
    search(searchString) {
        return this.items.filter(each => each.description.match('.*' + searchString + '.*'));
    }
}

module.exports = new TodoRepositoryMongo();
