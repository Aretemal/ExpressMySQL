import express from 'express';
import cors from 'cors';
import Post from './models/Post.js';
import User from './models/User.js';
import router from './router.js';

const app = express();
const PORT = 5000;

app.use(cors()); // Use this after the variable declaration
app.use(express.json());
app.use('/api', router);

async function startApp() {
  try {
    await User.sync();
    await Post.sync();
    // await User.sync({force:true});
    // await Post.sync({force:true});
    app.listen(PORT, () => console.log(`Server created on port: ${PORT}`));
  } catch (e) {
    console.log(e);
  }
}
startApp();
