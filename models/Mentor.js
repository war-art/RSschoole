const {Schema, model} = require('mongoose')

const schema = new Schema({
    username: {type: String, lowercase: true, required: [true, "Can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true, unique: true },
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    location: {type: String, required: true},
    email: {type: String, lowercase: true, required: [true, "Can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true, unique: true },
    root: Boolean,
    password: String,
    bio: String,
    image: String, 
    status: String,
    role: String,
    englishLevel: String,
})

module.exports = model('Mentor', schema) 