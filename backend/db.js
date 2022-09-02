const mongoose = require('mongoose');
const mongoDbURI ='mongodb://localhost:27017/inotebook';
const connectToMongo = () =>{
    mongoose.connect(mongoDbURI,()=>{
        console.log('connect to mongodb');
    })
}

module.exports =connectToMongo;