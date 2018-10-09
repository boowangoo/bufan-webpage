const app = require('express')();
const http = require('http').Server(app);

const PORT = 3000;

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

http.listen(PORT, () => {
	console.log('listening on *:' + PORT);
});
