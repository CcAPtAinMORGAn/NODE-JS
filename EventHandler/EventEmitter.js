const events = require('events');
const eventEmitter = new events.EventEmitter();

//Event handler for user login
const loginHandler = (username)=>{
    console.log(`$(username) has logged in.`);
};


//Event handler for user logout
const logoutHandler = (username)=>{
    console.log(`$(username) has logged out.`);
};


//Event handler for errors
const errorHandler = (error)=>{
    console.log(`Error: $(error)`);
};

//Assign event handler to events
eventEmitter.on('login', loginHandler);
eventEmitter.on('logout', logoutHandler);
eventEmitter.on('error', errorHandler);

//simulate user actions
eventEmitter.emit('login', 'Alice');
eventEmitter.emit('logout', 'Alice');
eventEmitter.emit('error', 'Failed to connect to the database.');