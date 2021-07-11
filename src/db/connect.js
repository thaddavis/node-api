const mongoose = require('mongoose')

function connectToDb() {
    console.log('connectToDb')
    mongoose.connect('mongodb://db:27017/api',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    );
}

module.exports = {
    connectToDb
}