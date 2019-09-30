const Node = require('./node');

class LinkedList {
    constructor() {
        this._tail = new Node();
        this._head = this._tail;
        this.length = 0;
    }

    append(data) {
        if (!this.length) {
            const firstNode = new Node(data);
            this._tail = firstNode;
            this._head = this._tail;
        } else {
            const newNode = new Node(data, this._tail);
            if (this.length === 1) this._head.next = newNode;
            this._tail.next = newNode;
            this._tail = newNode;

        }
        this.length++;
        return this;

    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        let counter = 0;
        let current = this._head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current.data;
    }

    insertAt(index, data) {
        let counter = 0;
        let current = this._head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        if (!(this.length)) {
            this.append(new Node(data));
        } else {
            const nodeBefore = current.prev;
            const insertNode = new Node(data, nodeBefore, current);
            nodeBefore.next = insertNode;
            current.prev = insertNode;
        }

        this.length++;
        return this;
    }

    isEmpty() {
        return !this.length;
    }

    clear() {
        this._tail = new Node();
        this._head = this._tail;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        let counter = 0;
        let current = this._head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        const [nodeBefore, nodeAfter] = [current.prev, current.next];
        current.data = 0;
        if (index === 0) {
            if (nodeAfter) {
                nodeAfter.prev = null;
                this._head = nodeAfter;
            }
        } else if (index === this.length - 1) {
            if (nodeBefore) {
                nodeBefore.next = null;
                this._tail = nodeBefore;
            }

        } else {
            nodeBefore.next = nodeAfter;
            nodeAfter.prev = nodeBefore;
        }
        this.length--;
        return this;
    }

    reverse() {
        let counter = 0;
        let current = this._head;
        while (counter !== this.length) {

            [current.prev, current.next] = [current.next, current.prev];

            current = current.prev;

            counter++;
        }

        [this._head, this._tail] = [this._tail, this._head];
        return this;
    }

    indexOf(data) {
        let counter = 0;
        let current = this._head;
        while (counter !== this.length) {
            if (data === current.data) return counter;
            current = current.next;
            counter++;
        }

        return -1;
    }
}

module.exports = LinkedList;