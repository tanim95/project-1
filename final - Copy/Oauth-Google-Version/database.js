const mongoose =  require('mongoose');
const assert = require('assert');
//const uri =  process.env.URI;
const keys =  require('./config/key'); 
mongoose.connect(
    keys.mongoDB.dbURI,
    {
        useCreateIndex:true,
        useNewUrlParser:true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000
    },
    (error,link)=>{
        assert.equal(error,null,'DB connection failed....');
        console.log('DB connection done... :)');
        console.log(link);
    }
)   