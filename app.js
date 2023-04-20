const express = require("express");
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');


const app = express();

app.use(express.static('./public'));
app.use(express.json());

app.use('/api/v1/tasks', tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 3002;
const UserDB = process.env.DB_USERNAME || 'root';
const PasswordDB = process.env.DB_PASSWORD || 'qwerty12345';
const NameDB = process.env.DB_NAME || 'task_manager_db';
const HostDb = process.env.DB_HOST || 'mongodb://localhost:27017/';
console.log("QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ", HostDb)
const start = async () => {
  try {
    await connectDB(HostDb, UserDB, PasswordDB, NameDB);
    app.listen(PORT, console.log(`Server running on port: ${PORT}...`));
  } catch (e) {
    console.log(e)
  }
}

start();
