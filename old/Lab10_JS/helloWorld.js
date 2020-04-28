const http = require('http');
const fs = require('fs');
const joker = require('random-joke-getter')
let html;

fs.readFile('index.html', function(error, data){
	if (error) console.log('Error: index.html not readed');
	else {
		html = data;
	}
})

const server = http.createServer((req, res) => {
	switch(req.url) {
		case '/': 
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end(html);
		case '/hello.gif':
			let image = fs.readFileSync('hello.gif')
			res.writeHead(200, {'Content-Type': 'image/gif'});
  			res.end(image, 'binary');
		default:  
			res.writeHead(404, {'Content-Type': 'text/plain'});
			res.end('404 not found');
	}
}).listen(3000, () => console.log('Server is work'));