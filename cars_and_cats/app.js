var http = require('http');

var fs = require('fs');

var server = http.createServer(function (request, response){ 
	// console.log(request);
	console.log('client request URL: ', request.url);

	if(request.url === '/cars'){												
		fs.readFile('./views/cars.html', 'utf8', function (errors, contents){  
			response.writeHead(200, {'Content-Type': 'text/html'}); 
			response.write(contents); 
			response.end(); 
		});
	}

	else if(request.url === '/stylesheets/cars.css'){												
		fs.readFile('./stylesheets/cars.css', 'utf8', function (errors, contents){  
			response.writeHead(200, {'Content-Type': 'text/css'}); 
			response.write(contents); 
			response.end(); 
		});

	}
	else if(request.url === '/images/arizona-mercedes-21.jpg'){											
		fs.readFile('./images/arizona-mercedes-21.jpg', function (errors, contents){  
			response.writeHead(200, {'Content-Type': 'image/jpeg'}); 
			response.write(contents); 
			response.end();
		});
	}
	else if(request.url === '/images/classic.jpg'){											
		fs.readFile('./images/classic.jpg', function (errors, contents){  
			response.writeHead(200, {'Content-Type': 'image/jpeg'}); 
			response.write(contents); 
			response.end();
		});

	}
	else if(request.url === '/images/harrington.jpg'){											
		fs.readFile('./images/harrington.jpg', function (errors, contents){  
			response.writeHead(200, {'Content-Type': 'image/jpeg'}); 
			response.write(contents); 
			response.end();
		});
	
	}
	else if(request.url === '/cats'){												
		fs.readFile('./views/cats.html', 'utf8', function (errors, contents){  
			response.writeHead(200, {'Content-Type': 'text/html'}); 
			response.write(contents); 
			response.end(); 
		});
	}

	else if(request.url === '/stylesheets/cats.css'){												
		fs.readFile('./stylesheets/cats.css', 'utf8', function (errors, contents){  
			response.writeHead(200, {'Content-Type': 'text/css'}); 
			response.write(contents); 
			response.end(); 
		});
		
	}
	else if(request.url === '/images/cats_bros.jpg'){											
		fs.readFile('./images/cats_bros.jpg', function (errors, contents){  
			response.writeHead(200, {'Content-Type': 'image/jpeg'}); 
			response.write(contents); 
			response.end();
		});
	}
	else if(request.url === '/images/cool_cat.jpg'){											
		fs.readFile('./images/cool_cat.jpg', function (errors, contents){  
			response.writeHead(200, {'Content-Type': 'image/jpeg'}); 
			response.write(contents); 
			response.end();
		});

	}
	else if(request.url === '/images/tiger_cat.jpg'){											
		fs.readFile('./images/tiger_cat.jpg', function (errors, contents){  
			response.writeHead(200, {'Content-Type': 'image/jpeg'}); 
			response.write(contents); 
			response.end();
		});

	}
	else if(request.url === '/images/cat.jpg'){											
		fs.readFile('./images/cat.jpg', function (errors, contents){  
			response.writeHead(200, {'Content-Type': 'image/jpeg'}); 
			response.write(contents); 
			response.end();
		});

	}
	else if(request.url === '/cars/new'){												
		fs.readFile('./views/cars_new.html', 'utf8', function (errors, contents){  
			response.writeHead(200, {'Content-Type': 'text/html'}); 
			response.write(contents); 
			response.end(); 
		});
	}

	else if(request.url === '/stylesheets/cars_new.css'){												
		fs.readFile('./stylesheets/cars_new.css', 'utf8', function (errors, contents){  
			response.writeHead(200, {'Content-Type': 'text/css'}); 
			response.write(contents); 
			response.end(); 
		});
	
	}
	else {
		response.writeHead(404);
		response.end('File not found!!');
	}
});

server.listen(7077); 

console.log("Running in localhost at port 7077");






