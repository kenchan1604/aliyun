const data = require('./data')

exports.post = (route) => {
    console.log('post route',route)
    console.log(route[route.length-1])
    switch(route[route.length-2]){
        case "add":
            // /add
            // add todo list data
            /* 
            {
                "name" : "todo Item 1"
            }
            */
           const name = route[route.length-1]
            if(data.add(name) == true){
                return {
                    'code': 200,
                    'data': 'Success'
                }
            }else{
                return {
                    'code': 200,
                    'data': 'Error'
                }
            }
            break
        default:
            return {
                'code': 400,
                'data': 'Bad Request'
            };
            break
    }
}