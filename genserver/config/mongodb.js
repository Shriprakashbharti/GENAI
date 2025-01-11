import mongoose from 'mongoose';

// const connectDB = async ()=>{

//     mongoose.connection.on('connected',()=>{
//         console.log("Database Connected");
//     })

//     await mongoose.connect(`${process.env.MONGODB_URI}`)
// }

// export default connectDB;


 const dbConnection = () => {
    mongoose.connect(process.env.MONGODB_URI, {
        dbName: "IGENAI",
      })
      .then(() => {
        console.log("Connected to database!");
      })
      .catch((err) => {
        console.log("Some error occured while connecting to database:", err);
      });
  };
  
  export default dbConnection;