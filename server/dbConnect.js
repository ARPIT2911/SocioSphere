const mongoose=require('mongoose');
module.exports= async()=>{
    const mongoUri ="mongodb+srv://time_limit_exceeded:Arpit2911%40mongodb@cluster0.0ickb4e.mongodb.net/?retryWrites=true&w=majority";

try{
    const connect=await mongoose.connect(
        mongoUri,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    );
    console.log(`MongoDB connected: ${connect.connection.host}`);
}
catch(e){
    console.log(e);
    process.exit(1);
}
}
