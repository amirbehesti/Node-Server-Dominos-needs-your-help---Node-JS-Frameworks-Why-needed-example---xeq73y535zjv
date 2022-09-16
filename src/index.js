var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
    const responseData = {
        phone: '18602100000',
        email: 'guestcaredominos@jublfood.com'
      };
    switch (req.url) {
        case '/welcome':
          // welcome page route
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end('Welcome to Dominos!');
          break;
        case '/contact':
          // contact page route
          res.writeHead(200, { 'Content-Type': 'application/json' });
        //   const jsonContent = JSON.stringify(responseData);
          res.end(JSON.stringify(responseData));
          break;
    
        default:
          // no match found.
          res.writeHead(404, { "Content-Type": "text/plain" });
          res.end('404 error');
          break;
      }
}

httpServer.listen(8081,()=>{
    console.log("Listening to post 8081");
});
module.exports = httpServer;