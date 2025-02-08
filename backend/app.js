//import json server
const jsonServer = require('json-server');

//create jsonserver
const server = jsonServer.create()

//routes 
const router = jsonServer.router('db.json');

//middleware 
const middleware = jsonServer.defaults();


//server uses UDM as middleware 
server.use(middleware);

//server uses router as middleware 
server.use(router);

//set port to server 
const port = process.env.PORT || 4000

//start the server 
server.listen(port,()=>{
    console.log(`server is running on port http://127.0.0.1:${port}`);
})