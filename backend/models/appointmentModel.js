
const { model, Schema } = require('../connection');


const mySchema = new Schema({
    fullname: String,
    contact: String,
    email: String,
    age: String,
    address: String,
    dob: Date,
    reason: String,
    services: String,
    testdate: Date,
    referredby: String,
    createdAt: { type: Date, default: Date.now }
});


module.exports = model('appointment', mySchema);
