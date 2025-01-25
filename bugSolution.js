const http = require('http');

const server = http.createServer(async (req, res) => {
  try {
    //Simulate a long-running task
    await new Promise(resolve => setTimeout(resolve, 2000));
    for (let i = 0; i < 1000000000; i++) {
      //Do something
    }
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  } catch (err) {
    console.error(err);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Server Error');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});