require('dotenv').config()
const { connect } = require('./src/broker/broker');
const app=require('./src/app');
const connectDB = require('./src/db/db');

connectDB()
connect()
app.listen(3003,()=>{
     
    console.log("server started on port 3003 ");
    
    
    
})