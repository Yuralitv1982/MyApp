const mongoose = require('mongoose'); // Якщо ви використовуєте MongoDB

const userSchema = new mongoose.Schema({
   username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
   },
   password: {
      type: String,
      required: true,
      minlength: 6,
   },
   // Додайте інші поля за потреби (наприклад, email)
});

const User = mongoose.model('User', userSchema);

module.exports = User;
