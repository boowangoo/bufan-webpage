const express = require('express');
const app = express();
const http = require('http').Server(app);

const PORT = 8080;

app.use(express.static(__dirname + '/public/'));

app.use((req, res) => {
	res.sendFile(__dirname + '/public/html/index.html');
});

// routes.map(route => {
// 	app.get(route, (req, res) => {
// 		res.send(route);
// 	});
// });

http.listen(PORT, () => {
	console.log('listening on *:' + PORT);
});
