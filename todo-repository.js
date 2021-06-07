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

module.exports = new TodoRepository();
