var getRawBody = require('raw-body');
var getFormBody = require('body/form');
var body = require('body');
const get_page = require('./get')
const post_page = require('./post')
const put_page = require('./put')
const delete_page = require('./delete')
// cd .\s214069773\todolist
// npm i date-fns
const {format} = require('date-fns')
const date = new Date()
/*
if you open the initializer feature, please implement the initializer function, as below:
module.exports.initializer = function(context, callback) {
    console.log('initializing');
    callback(null, '');
};
*/

module.exports.handler = function(req, resp, context) {
    console.log('req.url = ',req.url)
    // console.log('hello world');
    resp.setHeader('content-type', 'application/json')
    resp.setHeader('Allow', 'GET, POST','PUT','DELETE')
    var uri = (req.url).split('/')
    if(uri.length == 0) {
        resp.send(JSON.stringify(
        {
            'code': 400,
            'body': 'Bad Request'
        },
        null,''))
    } else {
        var route = uri[uri.length-1]
        console.log(route)
        switch(req.method) {
            case 'GET':
                //./todolist/list
                resp.send(JSON.stringify(
                    {
                        'code': 200,
                        'body': get_page.get(route),
                        'timestamp' : `${format(date,'yyyy.MM.dd hh:mm:ss')}`
                    }
                ))
                break
            case 'POST':
                //./todolist/add/todoItem3
                resp.send(JSON.stringify(
                    {
                        'code': 200,
                        'body': post_page.post(uri),
                        'timestamp' : `${format(date,'yyyy.MM.dd hh:mm:ss')}`
                    }
                ))
                break
            case 'PUT':
                //PUT
                //./todolist/put/todoItem3
                resp.send(JSON.stringify(
                    {
                        'code': 200,
                        'body': put_page.put(uri),
                        'timestamp' : `${format(date,'yyyy.MM.dd hh:mm:ss')}`
                    }
                ))
                break
            case 'DELETE':
                // DELETE
                //./todolist/delete/xt7vodn88l5mbrn7aobmr2g0kz
                resp.send(JSON.stringify(
                    {   
                        'code': 200,
                        'body': delete_page.delete(uri),
                        'timestamp' : `${format(date,'yyyy.MM.dd:ss')}`
                    }
                ))
                break
        }
    }
    // var params = {
    //     path: req.path,
    //     queries: req.queries,
    //     headers: req.headers,
    //     method : req.method,
    //     requestURI : req.url,
    //     clientIP : req.clientIP,
    // }
        
    // getRawBody(req, function(err, body) {
    //     resp.setHeader('content-type', 'text/plain');
    //     for (var key in req.queries) {
    //       var value = req.queries[key];
    //       resp.setHeader(key, value);
    //     }
    //     params.body = body.toString();
    //     resp.send(JSON.stringify(params, null, '    '));
    //     switch(req.method) {
    //         case 'POST':
    //             //check
    //             /*
    //             {
    //                 "name" : "todo Item 1"
    //             }
    //             */
    //             if (req.body === undefined || typeof req.body.name !== 'string'){
    //                 console.log('req' , req)
    //                 console.log(req.body)
    //                 resp.send(JSON.stringify(
    //                     {
    //                         'code': 400,
    //                         'body': `Error invalid data ${req}`,
    //                         'timestamp' : `${format(date,'yyyy.MM.dd hh:mm:ss')}`
    //                     }
    //                 ))
    //             }else{
    //                 var name = req.body.name
    //                 resp.send(JSON.stringify(
    //                     {
    //                         'code': 200,
    //                         'body': post_page.post(route,name),
    //                         'timestamp' : `${format(date,'yyyy.MM.dd hh:mm:ss')}`
    //                     }
    //                 ))
    //             }
    //             break
    //     }
    // }); 
      
    /*
    getFormBody(req, function(err, formBody) {
        for (var key in req.queries) {
          var value = req.queries[key];
          resp.setHeader(key, value);
        }
        params.body = formBody;
        console.log(formBody);
        resp.send(JSON.stringify(params));
    }); 
    */
}
