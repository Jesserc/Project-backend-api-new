//importing express
const express =  require ('express');

//importing mongoose
const mongoose =  require ("mongoose");

//importing routes
const router =  require ("./routes/routes")

//importing cors
const cors =  require ("cors")


//initializations below...

//initializing express
const app = express()
app.use(express.json())

//using routes
app.use(/* "/api", */ router);

//using course
app.use(cors({
    origin: "*",

}));

//importing dotenv
 require('dotenv').config()

//setting up port
 const PORT = process.env.PORT || 4000

if (mongoose.connect(process.env.MONGODB_URL, ()=>{
    console.log('Database connected')
}) 
) {
    
} else {
    console.log(`Database not connected on  port ${PORT}`);
}



 app.listen(PORT, ()=>{
     console.log( `Server started on port ${PORT}`)
 })