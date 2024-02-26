const mongoose = require("mongoose")

const connectToDb = async () => {
    //TODO: alternate this
    mongoose.connect('mongodb+srv://raju:raju69@cluster0.fngobjw.mongodb.net/campus360')
        .then((conn) => {
            console.log(`Connected to DB: ${conn.connection.host}`);
        })
        .catch((err) => {
            console.log(err.message);
            process.exit(1)
        })
}


module.exports = connectToDb