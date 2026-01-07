import express from 'express'
import dotenv from 'dotenv'
import connectDB from './models/db.js'
import urlRoute from './routes/url.js'
const app=express()
app.use(express.json())

dotenv.config()
const port=process.env.PORT || 5000

app.use("/url",urlRoute)

app.listen(port,()=>{
    connectDB()
    console.log(`server is listning at port ${port}`);
})