const { mysqlConnection } = require('./constants');
const mysql  = require('mysql');
const connection = mysql.createPool(mysqlConnection);

class TodoRepositoryMysql {
    items = [];
    lastId = 1;

    addItem(item) {
       connection.query(`INSERT INTO todo 
       (description, completed)
       VALUES("${item.description}", ${!!item.completed})`, function (error, results, fields) {
        if (error) throw error;
        console.log(results)
      });
    }
    getItemsForResponse(res) {
        connection.query(` SELECT * FROM todo`,  function (error, results, fields) {
                res.json({
                    results, 
                    length: results.length
                  });
            })
    }

    getItem(id) {
        return this.items.find(item => item.id === id);
    }
    deleteItem(id) {
        connection.query(`DELETE FROM todo 
        WHERE todo.id = ${id}`, function (error, results, fields) {
         if (error) throw error;
         console.log(results)
       });
       return true;
    }
    search(searchString) {
        return this.items.filter(each => each.description.match('.*' + searchString + '.*'));
    }
}

module.exports = new TodoRepositoryMysql();
