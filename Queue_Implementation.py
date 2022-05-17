# Queue implementation (for e-commerce shop) in Python
#213AEB045

print("This is an example for Queue implementation - let us think that this is shopping cart:\n")
class Queue:
    
    # initializing array for storing the products
    def __init__(self):
        self.queue = []
    # Adding a product
    def enqueue(self, product):
        self.queue.append(product)
    # Removing a product
    def dequeue(self):
        if len(self.queue) < 1:
            return None
        return self.queue.pop(0)
    # Displaying list of products in Cart
    def display(self):
        print(self.queue)

    def size(self):
        return len(self.queue)
q = Queue()
print("Products in shopping cart")
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.enqueue(5)

q.display()

q.dequeue()

print("After removing a product from cart")
q.display()
