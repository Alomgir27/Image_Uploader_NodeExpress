const mongoose = require('mongoose');
const MONGO_URI = "url";

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
