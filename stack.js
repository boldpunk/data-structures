// Stack implementation in data structure JS
// #213AEB045
class Stack {
    constructor() {
        this.array = [];
    }

    // add element at rear
    add(element) {
        return this.array.push(element);
    }

    // remove element at rear
    remove() {
        if (this.array.length != 0) {
            return this.array.pop();
        }

        else {
            console.log("Array is empty");
        }
    }

    // view the last element
    peek() {
        return this.array[this.array.length - 1];
    }

    // check if the stack is empty
    isEmpty() {
        return this.array.length == 0;
    }

    // the size of the stack
    size() {
        return this.array.length;
    }

    // empty the stack
    clear() {
        this.array = [];
    }
}

let stack = new Stack();
stack.add("BMW");
stack.add("Maybach");
stack.add("Hyundai");
stack.add("Chevrolet");
console.log(stack.array);

stack.remove();
console.log(stack.array);

console.log(stack.peek());

console.log(stack.isEmpty());

console.log(stack.size());

stack.clear();
console.log(stack.array);