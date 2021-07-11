const mongoose = require('mongoose')

const schema = mongoose.Schema({ email: 'string' });
const Account = mongoose.model('Account', schema);

module.exports = {
    Account
}