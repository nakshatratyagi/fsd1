const http=require("http");
const PORT=3005;
const server=http.createServer((req,res)=>{
    console.log(`request recieved:${req.method} ${req.url}`)
    res.statusCode=200;
    res.setHeader("content-Type","text/plain");
    res.setHeader("X-powered-By","Node.js");
    res.end("hello world");
});
server.listen(PORT,()=>{
    console.log(`server running at http://localhost:${PORT}`);
});