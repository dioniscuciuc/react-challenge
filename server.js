const io = require('socket.io')();

io.on('connection', (client) => {
  client.on('subscribe', (interval) => {
    console.log('client is subscribing to timer with interval ', interval);
    setInterval(() => {
      client.emit('timer', new Date());
    }, interval);
  });

  client.on('join',(room) => {
        socket.join(room);
        client.emit('joined')
    });

  client.on('msg', (msg) => {
    client.emit('msg', msg);
  });
});

const port = 8008;
io.listen(port);
console.log('listening on port ', port);
var ip = require("ip");
console.dir ( ip.address() );
