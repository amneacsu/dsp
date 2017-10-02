const net = require('net');
const stream = require('stream');

function SdrSource() {
  const client = new net.Socket();

  client.connect(1234, '127.0.0.1', function() {
  	console.log('Connected');
  });

  this.stream = new stream.Readable({
    read() {

    },
  });

  client.on('data', (data) => {
    if (data.length === 12) {
      return;
    }

    this.stream.push(data);
  });

  client.on('close', (data) => {
    this.stream.push(null);
  });
}

module.exports = SdrSource;
