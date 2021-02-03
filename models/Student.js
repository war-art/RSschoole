const {Schema, model} = require('mongoose')

const optionalWithLength = function(minLength, maxLength) {
  minLength = minLength || 0;
  maxLength = maxLength || Infinity;
  return {
    validator : function(value) {
      if (value === undefined) return true;
      return value.length >= minLength && value.length <= maxLength;
    },
    message : 'Optional field is shorter than the minimum allowed length (' + minLength + ') or larger than the maximum allowed length (' + maxLength + ')'
  }
}

const schema = new Schema({
    username: {type: String, lowercase: true, required: [true, "Can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true, unique: true },
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    location: {type: String, required: true},
    email: {type: String, lowercase: true, required: [true, "Can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true, unique: true },
    root: Boolean,
    password: {type: String, validate: optionalWithLength(6, 255)},
    bio: String,
    image: String, 
    score: Number, 
    status: String,
    role: String,
    englishLevel: String,
})

module.exports = model('User', schema)