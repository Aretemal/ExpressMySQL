import express from 'express'
import Post from "./Post.js";
import router from './router.js'

const app = express()
const PORT = 5000

app.use(express.json())
app.use('/api', router)

async function startApp(){
    try {
        await Post.sync();
        app.listen(PORT,()=> console.log(`Server created on port: ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}
startApp()






















