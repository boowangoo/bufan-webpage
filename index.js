const express = require('express');
const app = express();
const http = require('http').Server(app);

const PORT = 8080;

app.use(express.static(__dirname + '/public/'));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/html/index.html');
});

http.listen(PORT, () => {
	console.log('listening on *:' + PORT);
});
