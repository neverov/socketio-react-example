var express = require('express')
   ,app = express()
   ,server = require('http').createServer(app)
   ,io = require('socket.io').listen(server);

var data = [
  {
    id: 1,
    title: 'Your package has been dispatched!',
    content: 'We have sent your order #4322345 to address 500 SW 39th Street, Suite 200, Renton, WA 98057. Feel free to contact us!',
    timestamp: new Date(),
    shop: 'Ebay',
    read: false
  },
  {
    id: 2,
    title: 'Your order is being delivered on Tuesday.',
    content: 'Your beautiful new table is ready to be delivered on Tuesday! Contact us if you will not be available at the time',
    timestamp: new Date(2014, 1, 1),
    shop: 'Get Arts shop',
    read: false
  },
  {
    id: 3,
    title: 'New sale for weekdays!',
    content: 'Only on weekdays: large pepperoni for $14, large margherita for $11.50',
    timestamp: new Date(2014, 1, 3),
    shop: 'OOPS Pizza',
    read: false
  }
];

var messages

server.listen(3000);

app.use(express.static(__dirname));

io.sockets.on('connection', function(socket) {
  data.forEach(function(note) {
      socket.emit('notes', note);
  });
  
  socket.on('note_read', function(note) {
    data.filter(function(n) {
      return n.id == note.id;
    }).forEach(function(n) {
      n.read = true;
      console.log('emitting changed note: %O', n);
      socket.broadcast.emit('notes', n);
    });
  });

  socket.on('log', function(log) {
    console.log('Writing log: %O', log);
  });
});