const mongoose = require('mongoose')

function connectToDb() {
    console.log('connectToDb')
    mongoose.connect('mongodb://mongodb-service.local:27017/api',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    );
}

module.exports = {
    connectToDb
}