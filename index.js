const express = require('express');
const server = express();
server.use(express.json())
server.get('/test', function (req, res) {
  res.send('Hello World!');
});

server.post('/listen-schedules', (request, response) => {
    console.log(request.body);
    return response.send();
})

server.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});