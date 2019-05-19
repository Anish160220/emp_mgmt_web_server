const Express = require('express');
const express=Express();
function login(req, resp){
    resp.json({
        status: 'ok'
    })
}
//mount the handler to route 
express.get('/api/login', login)


express.listen(8000, 'localhost', ()=> {
    console.log("Server is running at", 8000)
})
