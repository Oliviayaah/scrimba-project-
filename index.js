const http = require('http')


const app = http.createServer((request,
    response) => {
        response.writeHead(200, { 'Content-Type':
            'text/plain'})
            response.end('Hello World')
        })


        const Port = 3000
        app.listen(Port)
        console.log('Server running on port ${Port)')
        
    
