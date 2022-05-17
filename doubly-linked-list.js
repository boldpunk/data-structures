// Doubly linked list - JS
// #213AEB045

class DoublyLinked {
    constructor() {
        this.data = 0;
        this.next = null;
        this.prev = null;
    }

}


function forward(element) {
    while (element != null) {
        console.log(element.data + '');
        element = element.next;
    }
}

function backward(element) {
    while (element != null) {
        console.log(element.data + '');
        element = element.prev;
    }
}

let first = new DoublyLinked();
let second = new DoublyLinked();
let third = new DoublyLinked();


first.data = 'BMW';
first.next = second;
first.prev = null;

second.data = 'Maybach';
second.next = third;
second.prev = first;

third.data = 'Ferrari';
third.next = null;
third.prev = second;

console.log('Forward direction: ');
forward(first);
console.log('');
console.log('Backward direction: ');
backward(third);