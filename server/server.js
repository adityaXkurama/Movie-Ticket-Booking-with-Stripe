import express from "express";
import cors from 'cors'
import 'dotenv/config'
import connectDB from "./config/db.js";
import { clerkMiddleware } from '@clerk/express'
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js"
import showRouter from "./routes/show.routes.js";


const app = express();
const PORT = 3000;

//middleware 
app.use(express.json())
app.use(cors())
app.use(clerkMiddleware())
app.use("/api/inngest", serve({ client: inngest, functions })) ; 


await connectDB().then(()=>app.listen(PORT,()=>{
console.log(`Server is listening on http://localhost:${PORT}`);

}))

app.use('/api/shows',showRouter)

app.get('/',(req,res)=>{
    res.send("Server is live!")
})


