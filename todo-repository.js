class TodoRepository {
    items = [];
    lastId = 1;

    addItem(item) {
        this.items.push(item);
        item.id = this.lastId++;
        return item;
    }
    getItems() {
        return this.items
    }
}

module.exports = new TodoRepository();
