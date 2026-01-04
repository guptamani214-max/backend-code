const mongoose = require ('mongoose');
    const connectDB = async ()=> {
           try {
const conn = await mongoose.connect('mongodb+srv://guptamani214_db_user:manish123@cluster0.li5sixx.mongodb.net/myDatabase?retryWrites=true&w=majority');

            console.log("MongoDB Connected:" + conn.connection.host);
           }catch (error){
            console.log("error :",  error.message);
                process.exit(1);
           }
        };
        module.exports = connectDB;
