const mongoose = require('mongoose');
const Schema = mongoose.schema;

const schema = new Schema({});

module.exports = mongoose.model('users', schema)