const mongoose = require('mongoose');
const MONGO_URI = "mongodb+srv://dbUser:dbUser@cluster0.kqf4z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const Connect = async () => {
    try{
        // mongodb clund connection
        const con = await mongoose.connect(MONGO_URI , {
            useNewUrlParser : true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex : true
        })

        console.log(`MongoDB Connected : ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = Connect