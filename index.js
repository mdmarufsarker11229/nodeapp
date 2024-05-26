const http=require("http");
const fs=require("fs");
const port=process.env.port;
const hostname='127.0.0.1';


const pageshandle=(statuscode,filelocation,req,res)=>{
    fs.readFile(filelocation,(err,data)=>{
        if(err){
            console.log(err);
        }else {
        res.writeHead(statuscode,{'content-type':'text/html'});
            res.write(data);
            res.end();
        }
        
    })
}


const myserver =http.createServer((req,res)=>{
    
    
    if(req.url==='/'){

        pageshandle(200,'./pages/index.html',req,res);
    }else if(req.url==='/about'){
        pageshandle(200,'./pages/about.html',req,res)
    }else if(req.url==='/contact'){
        pageshandle(200,'./pages/contact.html',req,res)
    }else {
        pageshandle(200,'./pages/error.html',req,res);
    }
    
})


myserver.listen(port,hostname,()=>{

    
})
