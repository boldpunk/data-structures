// Linked list single - JS
// #213AEB045

class SinglyLinked {
    constructor() {
        this.data = 0;
        this.next = null;
    }

}

function output(element) {
    while (element != null) {
        console.log(element.data + '');
        element = element.next;
    }
}

let root = new SinglyLinked();
let second = new SinglyLinked();
let third = new SinglyLinked();


root.data = 'BMW';
root.next = second;

second.data = 'Maybach';
second.next = third;

third.data = 'Mercedes';
third.next = null;


output(root);