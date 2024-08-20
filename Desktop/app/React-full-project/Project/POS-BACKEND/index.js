import express from 'express'
import mongoose from 'mongoose'
const app = express();
const PORT = 4000;

const url = 'mongodb://localhost:27017'
mongoose.connect(url)
.then(()=>{
    console.log('Connected to db')
})
.catch((err)=>{
 console.log('Fail to connect to db',err)
})
const currentTime = Math.floor(Date.now() / 1000);
console.log(currentTime)

app.use(express.json())
app.get('/', (req, res)=>{
    res.send('Hello world !')
})

app.listen(PORT, ()=>{
    console.log(`Server is ruuning on port ${PORT}`)
})