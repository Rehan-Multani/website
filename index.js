let  http= require('http');
http.createServer((req,resp)=>
{
  resp.write("<h1>hello i am Create server esaily</h1>");
  resp.end();
}).listen(3000);