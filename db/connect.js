const mongoose = require('mongoose');


const connectDB = (url, user, pass, dbName) => {
  return mongoose.connect(url, {
    user,
    pass,
    dbName,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  });
}

module.exports = connectDB;

