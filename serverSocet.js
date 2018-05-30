const io = require('socket.io')();


io.on('connection', (client) => {
    client.on('setData', (data) => {
        console.log('client send data ', data);
            io.emit('getData', data);

    });
});

const port = 3060;
io.listen(port);
console.log('listening on port ', port);