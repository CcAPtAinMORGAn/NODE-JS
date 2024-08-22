const events = require('events');
const eventEmitter = new events.EventEmitter();

const orderPlacehHandlder=(order)=>{
    console.log(`order placed: ${order.id} by ${order.customerName}`);

    eventEmitter.emit('processOrder,order');
}

//Event handler for processing the order
const processOrderHandlder=(order)=>{
    console.log(`Processing order: ${order.id}`);

    setTimeout(()=>{

        eventEmitter.emit('completeOrder',order);
    },2000);
}


//Event handler for processing the order
const completeOrderHandler=(order)=>{
    console.log(`order completed: ${order.id} for ${order.customerName}`);
}

eventEmitter.on('placeOrder',orderPlacehHandlder);
eventEmitter.on('processOrder',processOrderHandlder);
eventEmitter.on('completeOrder',completeOrderHandler);

//simulate the order process
const order = {
    id: 3,
    customerName: 'John Doe',
    items: ['Laptop','Mouse','Keyboard'],
    total: 1200
}

//simulate placing an order
eventEmitter.emit('placeOrder',order);