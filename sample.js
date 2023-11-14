const http=require('http')
const port=8000;

const server=http.createServer((req,res)=>{
    res.write("krishnaprasad")
}).listen(port,()=>{
    console.log(`http://localhost:${port}/`)
})