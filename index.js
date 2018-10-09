const app = require('express')();
const http = require('http').Server(app);

const PORT = 8080;

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/src/html/index.html');
});

http.listen(PORT, () => {
	console.log('listening on *:' + PORT);
});
