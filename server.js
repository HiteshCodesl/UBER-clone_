const http = require("http")
const app = require("./app")
const port = process.env.PORT || 4000;
console.log("server starts")
const server = http.createServer(app);

server.on("error", (err) => {
    console.error(" Server error:", err);
    process.exit(1); 
});

server.listen(port, ()=>{
    console.log(`server is listining on port ${port}`)
})