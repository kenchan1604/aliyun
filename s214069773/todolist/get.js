const data = require('./data')

exports.get = (route) => {
    console.log(route)
    console.log(data)
    switch(route){
        case "list":
            // get todo list data count
            return {
                'code': 200,
                'data': data.get(),
            };
            break
        case "count":
            // get todo list data count
            return {
                'code': 200,
                'data': data.count(),
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