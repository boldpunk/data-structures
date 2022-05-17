// Queue implementation JS
// #213AEB045
class Queue {
    constructor() {
        this.array = [];
    }

    // add element at front
    add(element) {
        return this.array.unshift(element);
    }

    // remove element at front
    remove() {
        if (this.array.length != 0) {
            return this.array.shift();
        }

        else {
            console.log("Array is empty");
        }
    }

    // view the first element
    peek() {
        return this.array[this.array.length - this.array.length];
    }

    // check if the queue is empty
    isEmpty() {
        return this.array.length == 0;
    }

    // the size of the queue
    size() {
        return this.array.length;
    }

    // empty the queue
    clear() {
        this.array = [];
    }
}


let queue = new Queue();

queue.add("BMW");
queue.add("Maybach");
queue.add("Hyundai");
queue.add("Chevrolet");

console.log(queue.array);

queue.remove();

console.log(queue.peek());

console.log(queue.isEmpty());

queue.remove();

console.log(queue.size());

queue.clear();

console.log(queue.array);