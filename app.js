var express = require('express'),
	app = express(),
	http = require('http'),
	server = http.createServer(app);

app.configure(function(){

	/*  Configuramos el server para el REST(Post , Get , etc)*/

	/*Permite que pueda parsear json */
	app.use(express.bodyParser());
		
	/*implementar y personalizar HTTP*/
	app.use(express.methodOverride());

	/*crear rutas personalizadas*/
	app.use(app.router);
});

app.get('/',function(req,res){
	res.send('Hello World');
});

server.listen(3000,function(){
	console.log('Node server running on http://localhots:3000');
});

