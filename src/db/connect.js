const mongoose = require('mongoose')

function connectToDb() {
    console.log('connectToDb')
    mongoose.connect('mongodb://10.0.0.243:27017/api',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    );
}

module.exports = {
    connectToDb
}