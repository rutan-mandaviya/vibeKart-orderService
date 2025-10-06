require('dotenv').config()
const { connect } = require('./src/broker/broker');
const app=require('./src/app');
const connectDB = require('./src/db/db');
const listedner=require('./src/broker/listner')

connectDB()
connect().then(()=>{
    listedner();
}).catch((err)=>{
    console.log("Error connecting to RabbitMQ",err);
});
app.listen(3003,()=>{
     
    console.log("server started on port 3003 ");
    
    
    
})