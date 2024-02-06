const mongoose = require('mongoose');
require('dotenv').config()
function connectDB (){
    try {

        // mongoose.connect('mongodb://localhost:27017/revision/mongoose-method',{dbName:'revisionMongooseDB'});
        mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.yfrjdbj.mongodb.net/?retryWrites=true&w=majority`,{dbName:'revisionMongooseDB'});
        console.log('mongoose server is connected with DB successfully')
    } catch (error) {
        console.log({error_message:'mongoose server is failed to connect with DB successfully'})
    }
};

module.exports = connectDB;