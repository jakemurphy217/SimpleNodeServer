const http = require('http')
//library for calling files
const fs = require('fs')
const port = 3000


const server = http.createServer(function(req,res){

    //basic return of 'hello node' to see if the server is working on port 3000 
    // res.write('Hello Node')
    // res.end()

    //notfying the broswer to pasre the document as a html file
    res.writeHead(200, {'Content-Type' : 'text/html'})


    fs.readFile('index.html', function(error, data){
        if(error){
            res.writeHead(404)
            res.write('Error: File Not Found :( ')
        } else{
            res.write(data)
        }
        res.end()
    })

})

server.listen(port, function(error) {

    if(error){
        console.log('something went wrong :( '+ error)
    }else{
        console.log('Server is listening to port :) = ' + port)
    }

})
