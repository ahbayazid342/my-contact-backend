const mongose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongose.connect(process.env.CONNECTION_STRING);
    console.log("Connect DB Successfully", connect.connection.name);
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

module.exports = connectDB;
