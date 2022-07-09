var rand = require('csprng')
const data = require('./data')
const sample = [
    {
        'id':'xt7vodn88l5mbrn7aobmr2g0kz',
        'name':'test item',
        "modified": "2022-07-09T07:55:26.255Z"
    },
    {
        'id': 'sixlogmqy5cqwuh6ndhk7qx8cr',
        'name':'test item 2',
        "modified": "2022-07-09T08:55:26.255Z"
    }
]
exports.get = () => {
    return sample;
}

exports.count = () => {
    const data_length = sample.length
    return data_length;
}

exports.add = (name) => {
    const data =
    {
        'id': rand(130,36),
        'name':name,
        'modified':new Date(),
    }
    sample.push(data)

    return true;
}
exports.update = (listID) => {
    let matchingID = -1
    // Reformat the Json
    for (let i = 0; i < sample.length; i++) {
      if (sample[i].id === listID){
        matchingID = i
        //lists[i].name =  req.body.name
        sample[i].modified = new Date()
        sample[i].list = req.body.list
      }
    }
    return true;
}

exports.delete = (listID) => {
    try {
        let matchingID = -1
        for (let i = 0; i < sample.length; i++) {
          if (sample[i].id === listID){
            matchingID = i
            sample.splice(matchingID,1)
            return true;
          }
        }
        return false;
      } catch (err) {
        return false;
      }
}