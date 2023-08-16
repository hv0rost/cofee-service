const data = require('./data.json')
const fs = require("fs");

class DataController {
    getData(request, response) {
        response.json(data);
    }
    addNewMachine(request, response) {
        try {
            const index = data.findIndex(item => item.size === request.body.size && item.drinksCount === request.body.drinksCount)
            if (index === -1) {
                data.push(request.body);
            }
            else {
                data[index].count += 1;
            }
            writeFile(data)
        }
        catch (err) {
            response.json({ msg: err})
        }
        response.json(data);
    }
    increaseCounter(request, response) {
        try {
            data[request.body.index].count += 1;
            writeFile(data)
        }
        catch (err) {
            response.json({ msg: 'Index not found'})
        }
        console.log(request.body)
        response.json(data[request.body.index]);
    }
    decreaseCounter(request, response) {
        try {
            data[request.body.index].count -= 1;
            if (data[request.body.index].count === 0) {
                data.splice(request.body.index, 1)
            }
            writeFile(data)
        }
        catch (err) {
            response.json({ msg: 'Index not found'})
        }
        response.json(data);
    }
}

function writeFile(data) {
    fs.writeFile('./data.json', JSON.stringify(data), err => {
        if (err) {
            console.error(err);
        }
    });
}

module.exports = new DataController();