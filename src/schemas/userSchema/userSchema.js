const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },

},
    {
        versionKey: false
    });

// INSTANCE METHOD;
userSchema.methods.creatAuser =
    async function () {
        console.log("i am from the instance method")
        const savedDoc = await this.save();
        return savedDoc;
    };

userSchema.methods.searchAUser =
    function () {
        return mongoose.model('UserCollection').findOne({ email: this.email })
    };

// static method ;

userSchema.statics = {
    creatingUser(name) {
        return mongoose.model('UserCollection').find({name: new RegExp(name,'i')})
    }
}

//query helper ;
userSchema.query={
    findByQuery(name){
        return this.where({name: new RegExp(name,'i')})
    }
}

module.exports = userSchema;